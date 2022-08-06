import { v4 } from 'uuid';
import { IComponent, IComponentProps } from '../Types';
import EventBus from '../event-bus/event-bus';
import EventDispatcher from '../event-dispatcher/event-dispatcher';

type Proplist = {
  name: string;
  selector: string;
  attribute: string;
  isValue?: boolean;
}[];

export default abstract class Block implements IComponent {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected props: IComponentProps;

  protected eventBus: () => EventBus;

  protected eventDispatcher: EventDispatcher;

  protected node: HTMLElement;

  constructor(props: IComponentProps) {
    const eventBus = new EventBus();
    this.eventDispatcher = new EventDispatcher();

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  get content(): HTMLElement {
    return this.node;
  }

  protected _proplist: Proplist = [];

  protected get proplist(): Proplist {
    return this._proplist;
  }

  protected get className(): string {
    return this.props.className || '';
  }

  componentDidMount(): void {}

  abstract render(): string;

  setProps = (nextProps: IComponentProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  bindProps() {
    this.proplist.forEach(({ name, selector, attribute, isValue }) => {
      const prop = this.props[name];
      if (prop) {
        const element = this.node.querySelector(selector);
        if (element) {
          if (isValue) {
            // @ts-ignore
            element[attribute] = prop;
          } else {
            element.setAttribute(attribute, prop);
          }
        }
      }
    });
  }

  protected init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  protected customiseComponent() {}

  protected componentDidUpdate() {
    // console.log(oldProps, newProps);
    return true;
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _render(): void {
    let renderedNode = null;
    if (this.node) {
      const nodeId = this.node.getAttribute('id');

      if (nodeId) {
        renderedNode = document.getElementById(nodeId);
      }
    }

    const html = this.render();
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    div.querySelectorAll('[data-child]').forEach((el) => {
      const name = el.getAttribute('data-child');
      if (this.props.children && name) {
        // @ts-ignore
        el.replaceWith(this.props.children[name]);
      }
    });
    this.node = <HTMLElement>div.firstChild;
    const id = v4();
    this.node.setAttribute('id', id);

    this.eventDispatcher.clear();
    this.eventDispatcher.node = this.node;
    this.bindProps();
    this.customiseComponent();

    if (this.className) {
      this.node.setAttribute('class', this.className);
    }

    if (renderedNode) {
      renderedNode.replaceWith(this.node);
    }

    if (this.props?.events) {
      // this.eventDispatcher.node = this.node;
      Object.entries(this.props.events).forEach(([eventName, callback]: [string, () => void]) => {
        this.eventDispatcher.add(eventName, callback);
      });
    }
  }

  private _makePropsProxy(props: IComponentProps) {
    const self = this;
    return new Proxy(props, {
      set(target, prop, value) {
        // @ts-ignore
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      },
    });
  }
}