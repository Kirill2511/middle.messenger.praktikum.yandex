import { Label } from '../../components/label';
import renderDOM from '../../utils/renderDOM';
import { Chat } from '../chat';
import { Registration } from '../registration';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { logFormData } from '../../utils/logFormData';

import template from './login.template.hbs';

import * as styles from './login.scss';
import { hideError, isFormValid, showError, validate } from '../../utils/validator';
import Block from '../../components/block/block';

export class Login extends Block {
  render(): DocumentFragment {
    return this.compile(template, { styles });
  }

  protected initChildren(): void {
    this.children.loginField = new Input({
      name: 'login',
      type: 'text',
      text: 'Логин',
      events: {
        blur: (e) => {
          validate('login', e.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelLoginField = new Label({
      name: 'login',
      text: 'Логин',
    });

    this.children.passwordField = new Input({
      name: 'password',
      type: 'password',
      text: 'Пароль',
      events: {
        blur: (evt) => {
          validate('password', evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelPasswordField = new Label({
      name: 'password',
      text: 'Пароль',
    });

    this.children.buttonLogin = new Button({
      text: 'Авторизоваться',
      events: {
        click: (e) => {
          const isError = (document.querySelector('.input-error') as HTMLElement).textContent;
          if (isFormValid('.login__form-wrapper') && !isError) {
            logFormData('.login__form-wrapper');
            renderDOM('#root', new Chat());
          } else {
            e.preventDefault();
            showError('Все поля должны быть заполнены');
          }
        },
      },
    });

    this.children.buttonReg = new Button({
      text: 'Нет аккаунта?',
      className: 'button_no-background',
      events: {
        click: (e) => {
          e.preventDefault();
          renderDOM('#root', new Registration());
        },
      },
    });
  }
}
