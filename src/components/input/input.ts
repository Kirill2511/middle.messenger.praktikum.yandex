import template from './input.template.hbs';

import * as styles from './input.scss';
import Block from '../block/block';

interface IInput {
  name: string;
  type: 'text' | 'password' | 'email' | 'tel';
  text: string;
  events?: {
    blur?: (e: Event) => void;
    focus?: (e: Event) => void;
  };
}

export class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
