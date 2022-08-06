import { compile } from 'pug';
import Block from '../../components/block/block';
import { IComponentProps } from '../../components/Types';
import chatTemplate from './chat.template';
import ChatMessage from '../../components/chat-message/chat-message';
import ChatContact from '../../components/chat-contact/chat-contact';
import './chat.scss';
import Input from '../../components/input/input';

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
      name: 'Вадим',
      messagePreview: '🤣🤣🤣🤣',
      img: 'deer',
    });

    const textMessage = new Input({
      placeholder: 'Сообщение',
      name: 'message',
    });

    super({
      ...props,
      children: {
        contact: contact.content,
        message: message.content,
        imageMessage: imageMessage.content,
        textMessage: textMessage.content,
      },
    });
  }

  render(): string {
    return compile(chatTemplate)();
  }
}
