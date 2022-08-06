import { compile } from 'pug';
import Block from '../../components/block/block';
import { IComponentProps } from '../../components/Types';
import chatTemplate from './chat.template';
import ChatMessage from '../../components/chat-message/chat-message';
import ChatContact from '../../components/chat-contact/chat-contact';
import './chat.scss';

export default class Chat extends Block {
  constructor(props: IComponentProps) {
    const message = new ChatMessage({
      time: '10:22',
      text: '🤣🤣🤣🤣',
    });
    const imageMessage = new ChatMessage({
      time: '10:22',
      text: '🤣🤣🤣🤣',
      img: 'chat-demo-image',
    });

    const contact = new ChatContact({
      name: 'Steve Rogers',
      messagePreview: '🤣🤣🤣🤣',
      img: 'deer',
    });

    super({
      ...props,
      children: {
        contact: contact.content,
        message: message.content,
        imageMessage: imageMessage.content,
      },
    });
  }

  render(): string {
    return compile(chatTemplate)();
  }
}
