import clsx from 'clsx';
import { compile } from 'pug';
import Block from '../block/block';
import { IChatContactProps } from '../Types';

const template = `
li
    div.message-text
    div.message-time
    div.message-image
`;

export default class ChatMessage extends Block {
  props: IChatContactProps;

  get className(): string {
    return clsx('chat__messages', this.props.className, {
      'me-message': this.props.me,
      'image-message': this.props.img,
    });
  }

  protected get proplist() {
    return [
      {
        name: 'text',
        selector: '.message-text',
        attribute: 'innerText',
        isValue: true,
      },
      {
        name: 'time',
        selector: '.message-time',
        attribute: 'innerText',
        isValue: true,
      },
    ];
  }

  render(): string {
    return compile(template)({
      child: this.props.child,
    });
  }

  protected customiseComponent() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.node.querySelector('.message-image').classList.add(this.props.img);
  }
}
