import Block from '../../utils/Block';
import template from './chat-preview.template.hbs';
import * as styles from './chat-preview.scss';

interface Props {
  name: string;
  text: string;
  time?: string;
  unreadNumber: number;
  events?: {
    click?: (evt: Event) => void;
  };
}

export class ChatPreview extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
