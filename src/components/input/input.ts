import Block from '../../utils/Block';
import template from './input.template.hbs';
import * as styles from './input.scss';

interface IInput {
  name: string;
  type: 'text' | 'password' | 'email' | 'tel';
  text: string;
  value?: any;
  events?: {
    blur?: (e: Event) => void;
    focus?: (e?: Event) => void;
  };
}

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
