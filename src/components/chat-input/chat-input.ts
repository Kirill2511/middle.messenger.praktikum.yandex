import template from './chat-input.template.hbs';

import * as styles from './chat-input.scss';
import Block from '../block/block';

interface IChatInput {
  name: string;
  className?: string;
  autocomplete: 'on' | 'off';
  placeholder?: string;
}

export class ChatInput extends Block {
  constructor(props: IChatInput) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
