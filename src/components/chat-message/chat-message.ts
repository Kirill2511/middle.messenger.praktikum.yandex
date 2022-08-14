import Block from '../block/block';
import template from './chat-message.template.hbs';

import * as styles from './chat-message.scss';

interface IChatMessage {
  text: string;
  time: string;
}

export class ChatMessage extends Block {
  constructor(props: IChatMessage) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
