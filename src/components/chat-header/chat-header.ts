import Block from '../block/block';
import template from './chat-header.template.hbs';

import * as styles from './chat-header.scss';

interface IChatHeader {
  name: string;
}

export class ChatHeader extends Block {
  constructor(props: IChatHeader) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
