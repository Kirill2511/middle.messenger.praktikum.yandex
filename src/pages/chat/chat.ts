import { Link } from '../../components/link';
import renderDOM from '../../utils/renderDOM';
import Error, { IError } from '../error/error';
import { ChatInput } from '../../components/chat-input';
import { ChatPreview } from '../../components/chat-preview';
import { chatsMessage, chatsMock } from '../../mock/chats';
import template from './chat.template.hbs';
import * as styles from './chat.scss';
import Block from '../../components/block/block';
import { ChatHeader } from '../../components/chat-header';
import { ChatMessage } from '../../components/chat-message';
import { Profile } from '../profile';
import { mockUser } from '../../mock/user';

const error404: IError = {
  number: 404,
  text: 'Не туда попали',
  link_text: 'Назад к чатам',
};

const error500: IError = {
  number: 500,
  text: 'Мы уже фиксим',
  link_text: 'Назад к чатам',
};

export class Chat extends Block {
  protected initChildren() {
    this.children.chat1 = new ChatPreview(chatsMock[0]);
    this.children.chat2 = new ChatPreview(chatsMock[1]);
    this.children.chat3 = new ChatPreview(chatsMock[2]);
    this.children.chat4 = new ChatPreview(chatsMock[3]);

    this.children.chatMessage1 = new ChatMessage(chatsMessage[0]);
    this.children.chatMessage2 = new ChatMessage(chatsMessage[1]);
    this.children.chatMessage3 = new ChatMessage(chatsMessage[2]);

    this.children.link404 = new Link({
      text: 'Page 404',
      className: 'link-button',
      events: {
        click: (e) => {
          e.preventDefault();
          renderDOM('#root', new Error(error404));
        },
      },
    });

    this.children.link500 = new Link({
      text: 'Page 500',
      className: 'link-button',
      events: {
        click: (e) => {
          e.preventDefault();
          renderDOM('#root', new Error(error500));
        },
      },
    });

    this.children.profile = new Link({
      text: 'Профиль >',
      className: 'link-button_profile',
      events: {
        click: (e) => {
          e.preventDefault();
          renderDOM('#root', new Profile({ user: mockUser }));
        },
      },
    });

    this.children.chatHeader = new ChatHeader({
      name: 'Вадим',
    });

    this.children.inputSeach = new ChatInput({
      name: 'search',
      placeholder: 'Поиск',
      autocomplete: 'on',
      className: 'sidebar-search',
    });

    this.children.inputMessage = new ChatInput({
      name: 'message',
      placeholder: 'Сообщение',
      autocomplete: 'off',
      className: 'message-input-label',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
