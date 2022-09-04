import Block from '../../utils/Block';
import template from './message.template.hbs';
import * as styles from './message.scss';

interface IMessage {
  content: string;
  time: string;
  className: string;
}

export class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
