import template from './auth.template.hbs';
import { Button } from '../../components/button';
import Block from '../../utils/Block';

import * as styles from './auth.scss';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { logFormData } from '../../utils/logFormData';
import { Label } from '../../components/label';
import { hideError, isFormValid, Rule, showError, validate } from '../../utils/validator';
import { Router } from '../../utils/router/Router';
import AuthController from '../../utils/controllers/authController';
import { ILoginData } from '../../types/auth';

export class Auth extends Block<any> {
  render() {
    return this.compile(template, { styles });
  }

  protected initChildren(): void {
    this.children.inputLogin = new Input({
      name: 'login',
      type: 'text',
      text: 'Логин',
      events: {
        blur: (evt) => {
          validate(Rule.LOGIN, evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelLogin = new Label({
      name: 'login',
      text: 'Логин',
    });

    this.children.inputPassword = new Input({
      name: 'password',
      type: 'password',
      text: 'Пароль',
      events: {
        blur: (evt) => {
          validate(Rule.PASSWORD, evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelPassword = new Label({
      name: 'password',
      text: 'Пароль',
    });

    this.children.buttonEnter = new Button({
      text: 'Авторизоваться',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const isError = (document.querySelector('.input-error') as HTMLElement)?.textContent;
          if (isFormValid('.form-wrapper') && !isError) {
            const data = logFormData('.form-wrapper') as unknown as ILoginData;
            AuthController.login(data);
          } else {
            showError('Все поля должны быть заполнены');
          }
        },
      },
    });

    this.children.linkSingup = new Link({
      text: 'Нет аккаунта?',
      className: 'link-button',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router('#app');
          router.go('/sign-up');
        },
      },
    });
  }
}
