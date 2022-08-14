import registrationTemplate from './registration.template.hbs';
import './registration.scss';
import renderDOM from '../../utils/renderDOM';
import { Profile } from '../profile';
import { Label } from '../../components/label';
import { Login } from '../login';
import { Button } from '../../components/button';
import { mockUser } from '../../mock/user';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { logFormData } from '../../utils/logFormData';
import { hideError, isFormValid, showError, validate } from '../../utils/validator';
import Block from '../../components/block/block';

export class Registration extends Block {
  protected initChildren() {
    this.children.submitButton = new Button({
      text: 'Зарегистрироваться',
      events: {
        click: (e) => {
          const isError = (document.querySelector('.input-error') as HTMLElement).textContent;
          if (isFormValid('.registration__form-wrapper') && !isError) {
            logFormData('.registration__form-wrapper');
            renderDOM('#root', new Profile({ user: mockUser }));
          } else {
            e.preventDefault();
            showError('Все поля должны быть заполнены');
          }
        },
      },
    });

    this.children.loginButton = new Link({
      text: 'Войти',
      className: 'link-button',
      events: {
        click: (e) => {
          e.preventDefault();
          renderDOM('#root', new Login());
        },
      },
    });

    this.children.loginField = new Input({
      name: 'login',
      type: 'text',
      text: 'Логин',
      events: {
        blur: (evt) => {
          validate('login', evt.target as HTMLInputElement);
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

    this.children.firstNameField = new Input({
      name: 'first_name',
      type: 'text',
      text: 'Имя',
      events: {
        blur: (evt) => {
          validate('name', evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelFirstNameField = new Label({
      name: 'first_name',
      text: 'Имя',
    });

    this.children.secondNameField = new Input({
      name: 'second_name',
      type: 'text',
      text: 'Фамилия',
      events: {
        blur: (evt) => {
          validate('name', evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelSecondNameField = new Label({
      name: 'second_name',
      text: 'Фамилия',
    });

    this.children.phoneField = new Input({
      name: 'phone',
      type: 'tel',
      text: 'Телефон',
      events: {
        blur: (evt) => {
          validate('phone', evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelPhoneField = new Label({
      name: 'phone',
      text: 'Телефон',
    });

    this.children.emailField = new Input({
      name: 'email',
      type: 'email',
      text: 'Почта',
      events: {
        blur: (evt) => {
          validate('email', evt.target as HTMLInputElement);
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelEmailField = new Label({
      name: 'email',
      text: 'Почта',
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

    this.children.passwordTwoField = new Input({
      name: 'password2',
      type: 'password',
      text: 'Пароль еще раз',
      events: {
        blur: (evt) => {
          const passInput = document.querySelector('input[name=password]') as HTMLInputElement;

          if (passInput && passInput.value !== (evt.target as HTMLInputElement).value) {
            showError('Пароли должны совпадать');
          }
        },
        focus: () => {
          hideError();
        },
      },
    });

    this.children.labelPasswordTwoField = new Label({
      name: 'password2',
      text: 'Пароль (ещё раз)',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(registrationTemplate, {});
  }
}
