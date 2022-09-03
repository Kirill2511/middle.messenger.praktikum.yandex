import Block from '../../utils/Block';
import template from './chat-preview.template.hbs';
import * as styles from './chat-preview.scss';

interface IChatPreview {
  name: string;
  text: string;
  time?: string;
  unreadNumber: number;
  events?: {
    click?: (evt: Event) => void;
  };
}

export class ChatPreview extends Block<IChatPreview> {
  constructor(props: IChatPreview) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
