import { compile } from 'pug';
import Block from '../../components/block/block';
import Input from '../../components/input/input';
import { IComponentProps } from '../../components/Types';
import Button from '../../components/button/button';
import { checkEmail, checkFirstAndSecondName, checkPassword, checkPhone } from '../../utils/validation';
import registrationTemplate from './registration.template';
import './registration.scss';

export default class Registration extends Block {
  private emailField: Input;

  constructor(props: IComponentProps) {
    const submitButton = new Button({
      child: 'Зарегистрироваться',
    });

    const loginButton = new Button({
      child: 'Войти',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('login');
        },
      },
    });

    const firstNameField = new Input({
      placeholder: 'Имя',
      name: 'first_name',
      events: {
        blur: (e: { currentTarget: { value: string } }) => {
          checkFirstAndSecondName(e.currentTarget.value, firstNameField);
        },
        focus: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, firstNameField);
        },
      },
    });

    const lastNameField = new Input({
      placeholder: 'Фамилия',
      name: 'last_name',
      events: {
        blur: (e: { currentTarget: { value: string } }) => {
          checkFirstAndSecondName(e.currentTarget.value, lastNameField);
        },
        focus: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, lastNameField);
        },
      },
    });

    const phoneField = new Input({
      placeholder: 'Телефон',
      name: 'phone',
      events: {
        blur: (e: { currentTarget: { value: string } }) => {
          checkPhone(e.currentTarget.value, phoneField);
        },
        focus: (e) => {
          checkPhone(e.currentTarget.value, phoneField);
        },
      },
    });

    const emailField = new Input({
      placeholder: 'Email',
      name: 'email',
      value: '',
      events: {
        blur: (e: { currentTarget: { value: string } }) => {
          checkEmail(e.currentTarget.value, emailField);
        },
        focus: (e) => {
          checkEmail(e.currentTarget.value, emailField);
        },
      },
    });

    const passwordField = new Input({
      placeholder: 'Пароль',
      name: 'password',
      value: '',
      events: {
        blur: (e) => {
          checkPassword(e.currentTarget.value, passwordField);
        },
        focus: (e) => {
          checkPassword(e.currentTarget.value, passwordField);
        },
      },
    });

    const chatNameField = new Input({
      placeholder: 'Имя в чате',
      name: 'chat_name',
      events: {
        blur: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, chatNameField);
        },
        focus: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, chatNameField);
        },
      },
    });

    super({
      ...props,
      children: {
        submitButton: submitButton.content,
        loginButton: loginButton.content,
        firstNameField: firstNameField.content,
        lastNameField: lastNameField.content,
        emailField: emailField.content,
        phoneField: phoneField.content,
        chatNameField: chatNameField.content,
        passwordField: passwordField.content,
      },
    });
    this.emailField = emailField;
  }

  render(): string {
    return compile(registrationTemplate)();
  }

  protected customiseComponent() {
    const form: HTMLFormElement = <HTMLFormElement>this.node.querySelector('form');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log(Object.fromEntries(formData.entries()));
        const email = formData.get('email');
        let isValid = true;
        if (email) {
          isValid = checkEmail(<string>email, this.emailField);
        }

        if (isValid) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('chat');
        }
      });
    }
  }
}
