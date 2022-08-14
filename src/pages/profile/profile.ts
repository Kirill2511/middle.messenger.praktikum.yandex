import renderDOM from '../../utils/renderDOM';
import { Login } from '../login';
import template from './profile.template.hbs';
import { UserInfoItem } from '../../components/user-info-item';
import { Link } from '../../components/link';

import * as styles from './profile.scss';
import Block from '../../components/block/block';

export interface IUser {
  email: string;
  login: string;
  name: string;
  second_name: string;
  display_name: string;
  phone: string;
}

interface IProfile {
  user: IUser;
}

export class Profile extends Block {
  constructor(props: IProfile) {
    super(props);
  }

  protected initChildren({ user }: IProfile) {
    this.children.emailField = new UserInfoItem({
      name: 'Почта',
      value: user.email,
    });

    this.children.loginField = new UserInfoItem({
      name: 'Логин',
      value: user.login,
    });

    this.children.firstNameField = new UserInfoItem({
      name: 'Имя',
      value: user.name,
    });

    this.children.secondNameField = new UserInfoItem({
      name: 'Фамилия',
      value: user.second_name,
    });

    this.children.nickNameField = new UserInfoItem({
      name: 'Имя в чате',
      value: user.display_name,
    });

    this.children.phoneField = new UserInfoItem({
      name: 'Телефон',
      value: user.phone,
    });

    this.children.changeDataButton = new Link({
      text: 'Изменить данные',
      className: 'profile-actions_item profile-actions_item_blue',
      events: {
        click: (e: { preventDefault: () => void }) => {
          e.preventDefault();
        },
      },
    });

    this.children.changePassButton = new Link({
      text: 'Изменить пароль',
      className: 'profile-actions_item profile-actions_item_blue',
      events: {
        click: (e: { preventDefault: () => void }) => {
          e.preventDefault();
        },
      },
    });

    this.children.exitButton = new Link({
      text: 'Выход',
      className: 'profile-actions_item',
      events: {
        click: (e: { preventDefault: () => void }) => {
          e.preventDefault();
          renderDOM('#root', new Login());
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
