import template from './chat-preview.template.hbs';

import * as styles from './chat-preview.scss';
import Block from '../block/block';

interface IChatPreview {
  name: string;
  text: string;
  time: string;
  number: string;
}

export class ChatPreview extends Block {
  constructor(props: IChatPreview) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
