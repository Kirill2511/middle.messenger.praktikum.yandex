import { compile } from 'pug';
import Block from '../../components/block/block';
import { IComponentProps } from '../../components/Types';
import template from './index.template';
import Button from '../../components/button/button';

export default class Index extends Block {
  constructor(props: IComponentProps) {
    const loginButton = new Button({
      child: 'Login',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('login');
        },
      },
    });

    const registrationButton = new Button({
      child: 'Registration',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('registration'); // временно вместо роутера
        },
      },
    });

    const err404 = new Button({
      child: '404',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('404'); // временно вместо роутера
        },
      },
    });

    const err500 = new Button({
      child: '500',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('500'); // временно вместо роутера
        },
      },
    });

    const chatButton = new Button({
      child: 'Chat',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('chat'); // временно вместо роутера
        },
      },
    });

    const profileButton = new Button({
      child: 'Profile',
      secondary: true,
      events: {
        click: () => {
          window.history.pushState({}, 'Profile', '/profile');
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('profile'); // временно вместо роутера
        },
      },
    });

    super({
      ...props,
      children: {
        login: loginButton.content,
        registration: registrationButton.content,
        profile: profileButton.content,
        chat: chatButton.content,
        404: err404.content,
        500: err500.content,
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return compile(template)();
  }
}
