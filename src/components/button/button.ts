import Block from '../../utils/Block';
import template from './button.template.hbs';
import * as styles from './button.scss';

interface IButton {
  text: string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Button extends Block<IButton> {
  constructor(props: IButton) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
