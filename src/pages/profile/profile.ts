import Block from '../../utils/Block';
import template from './profile.template.hbs';
import * as styles from './profile.scss';
import { Link } from '../../components/link';
import { UserInfoItem } from '../../components/user-info-item';
import AuthController from '../../utils/controllers/authController';
import { Avatar } from '../../components/avatar';
import { Router } from '../../utils/router/Router';

export interface IProfile {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar: string;
}

export class Profile extends Block<IProfile> {
  constructor(props: IProfile) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }

  protected initChildren() {
    this.children.avatar = new Avatar({
      link: `https://ya-praktikum.tech/api/v2/resources${this.props?.avatar}`,
      events: {
        click: (evt) => {
          evt.preventDefault();
          const router = new Router('#app');
          router.go('/settings/change-avatar');
        },
      },
    });

    this.children.userEmail = new UserInfoItem({
      title: 'Почта',
      value: this.props?.email,
    });

    this.children.userLogin = new UserInfoItem({
      title: 'Логин',
      value: this.props?.login,
    });

    this.children.userName = new UserInfoItem({
      title: 'Имя',
      value: this.props?.first_name,
    });

    this.children.userSurname = new UserInfoItem({
      title: 'Фамилия',
      value: this.props?.second_name,
    });

    this.children.userNickname = new UserInfoItem({
      title: 'Имя в чате',
      value: this.props?.display_name,
    });

    this.children.userPhone = new UserInfoItem({
      title: 'Телефон',
      value: this.props?.phone,
    });

    this.children.linkChangeData = new Link({
      text: 'Изменить данные',
      className: 'profile-actions_item',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router('#app');
          router.go('/settings/change-settings');
        },
      },
    });

    this.children.linkChangePassword = new Link({
      text: 'Изменить пароль',
      className: 'profile-actions_item',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router('#app');
          router.go('/settings/change-password');
        },
      },
    });

    this.children.linkBack = new Link({
      text: 'К чатам',
      className: 'profile-actions_item',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router('#app');
          router.go('/messenger');
        },
      },
    });

    this.children.linkExit = new Link({
      text: 'Выйти',
      className: 'profile-actions_item',
      events: {
        click: (e) => {
          e.preventDefault();
          AuthController.logout();
        },
      },
    });
  }
}
