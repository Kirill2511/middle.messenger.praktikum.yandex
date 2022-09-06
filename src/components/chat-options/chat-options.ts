import Block from '../../utils/Block';
import * as template from './chat-options.template.hbs';
import { Button } from '../button';
import ChatsController from '../../utils/controllers/chatsController';
import { ChatInput } from '../chat-input';
import { logFormData } from '../../utils/logFormData';

interface IChatOptions {
  chatId: number;
}

export class ChatOptions extends Block<IChatOptions> {
  constructor(props: IChatOptions) {
    super(props);
  }

  protected initChildren() {
    this.children.buttonRemoveChat = new Button({
      text: 'Удалить чат',
      events: {
        click: () => {
          ChatsController.deleteChat(this.props.chatId);
        },
      },
    });

    this.children.inputUserId = new ChatInput({
      name: 'userId',
      autocomplete: 'off',
      className: 'user-id',
      placeholder: 'Пользователь',
    });

    this.children.buttonAddUser = new Button({
      text: 'Добавить пользователя',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const data = logFormData('.add-remove-user');
          if (data?.userId) {
            ChatsController.addUser({
              chatId: this.props.chatId,
              users: [parseInt(data.userId, 10)],
            });
          }
          (document.querySelector('.add-remove-user') as HTMLFormElement).reset();
        },
      },
    });

    this.children.buttonRemoveUser = new Button({
      text: 'Удалить пользователя',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const data = logFormData('.add-remove-user');
          if (data?.userId) {
            ChatsController.deleteUser({
              chatId: this.props.chatId,
              users: [parseInt(data.userId, 10)],
            });
            data.userId = '';
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
