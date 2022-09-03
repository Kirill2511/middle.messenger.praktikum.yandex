import Block from '../../utils/Block';
import template from './chat.template.hbs';
import * as styles from './chat.scss';
import { Link } from '../../components/link';
import { ChatPreview } from '../../components/chat-preview';
import { ChatInput } from '../../components/chat-input';
import { Router } from '../../utils/router/Router';
import { Button } from '../../components/button';
import { logFormData } from '../../utils/logFormData';
import ChatsController from '../../utils/controllers/chatsController';
import { ChatOptions } from '../../components/chat-options';
import { Message } from '../../components/message';
import { IChatInfo, IMessageData } from '../../types/chats';

interface IChat {
  chatsStore: any;
  currentUser: Record<string, any>;
  currentChat: any;
  token: string;
  chatId: number;
}

export class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super(props);
  }

  protected initChildren() {
    this.children.chatList = [];

    if (this.props?.chatsStore) {
      Object.values(this.props.chatsStore).map((value: IChatInfo) => {
        const text =
          value.last_message?.content.length > 30
            ? `${value.last_message?.content.slice(0, 30)}...`
            : value.last_message?.content;
        this.children.chatList.push(
          new ChatPreview({
            name: value.title,
            text,
            unreadNumber: value.unread_count,
            events: {
              click: () => {
                ChatsController.getChat(value.id, this.props.currentUser.id);
              },
            },
          }),
        );
      });
    }

    if (this.props?.token) {
      this.children.header = new ChatOptions({
        chatId: this.props.chatId,
      });
    }

    this.children.messages = [];

    if (this.props?.currentChat) {
      this.props.currentChat.forEach((message: IMessageData) => {
        const date = new Date(message.time);
        const isMyMessage = message.user_id === this.props.currentUser.id;
        this.children.messages.push(
          new Message({
            content: message.content,
            time: `${date.getHours()}:${date.getMinutes()}`,
            className: isMyMessage ? 'message-outgoing' : 'message-incoming',
          }),
        );
      });
    }

    this.children.inputMessage = new ChatInput({
      name: 'message',
      placeholder: 'Введите текст',
      autocomplete: 'off',
      className: 'message-input-label',
    });

    this.children.buttonMessage = new Button({
      text: 'Отправить',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const data = logFormData('.message-form');
          if (data?.message) {
            ChatsController.sendMessage(data as { message: string });
          }
        },
      },
    });

    this.children.linkProfile = new Link({
      text: 'Профиль >',
      className: 'sidebar-profile_link',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router('#app');
          router.go('/settings');
        },
      },
    });

    this.children.buttonAddChat = new Button({
      text: 'Добавить чат',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const data = logFormData('.add-chat');
          if (data?.title) {
            ChatsController.createChat(data);
          }
        },
      },
    });

    this.children.inputChatName = new ChatInput({
      name: 'title',
      placeholder: '',
      autocomplete: 'off',
      className: 'sidebar-search',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}
