import template from './button.template.hbs';
import * as styles from './button.scss';
import Block from '../block/block';

interface IButton {
  text: string;
  className?: string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Button extends Block {
  constructor(props: IButton) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
