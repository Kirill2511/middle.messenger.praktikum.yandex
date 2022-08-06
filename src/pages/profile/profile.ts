import { compile } from 'pug';
import Block from '../../components/block/block';
import Input from '../../components/input/input';
import { IComponentProps } from '../../components/Types';
import Button from '../../components/button/button';
import { checkEmail, checkFirstAndSecondName, checkLogin, checkPhone } from '../../utils/validation';
import profileTemplate from './profile.template';
import './profile.scss';

export default class Profile extends Block {
  private emailField: Input;

  constructor(props: IComponentProps) {
    const submitButton = new Button({
      child: 'Сохранить',
      secondary: true,
    });

    const submitPasswordButton = new Button({
      child: 'Изменить пароль',
      secondary: true,
    });

    const exitButton = new Button({
      child: 'Выход',
      red: true,
    });

    const firstNameField = new Input({
      placeholder: 'Имя',
      value: 'Иван',
      name: 'first_name',
      type: 'text',
      events: {
        blur: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, firstNameField);
        },
        focus: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, firstNameField);
        },
      },
    });

    const lastNameField = new Input({
      placeholder: 'Фамилия',
      value: 'Иванов',
      name: 'last_name',
      type: 'text',
      events: {
        blur: (e) => {
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
      type: 'text',
      value: '+7 (909) 967 30 30',
      events: {
        blur: (e) => {
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
      type: 'text',
      value: 'неправильный email',
      events: {
        blur: (e) => {
          checkEmail(e.currentTarget.value, emailField);
        },
        focus: (e) => {
          checkEmail(e.currentTarget.value, emailField);
        },
      },
    });

    const chatNameField = new Input({
      placeholder: 'Имя в чате',
      name: 'chat_name',
      type: 'text',
      value: 'Иван',
      events: {
        blur: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, chatNameField);
        },
        focus: (e) => {
          checkFirstAndSecondName(e.currentTarget.value, chatNameField);
        },
      },
    });

    const loginNameField = new Input({
      placeholder: 'Логин',
      name: 'login',
      type: 'text',
      value: 'ivanivanov',
      events: {
        blur: (e) => {
          checkLogin(e.currentTarget.value, loginNameField);
        },
        focus: (e) => {
          checkLogin(e.currentTarget.value, loginNameField);
        },
      },
    });

    // Не успеваю реализовать модальные окна, оставил на будущее.
    /* const passwordField = new Input({
      placeholder: 'Текущий пароль',
      type: 'password',
      name: 'password',
    });

    const newPasswordField = new Input({
      placeholder: 'Новый пароль',
      type: 'password',
      name: 'new_password',
    });

    const newPasswordRetypeField = new Input({
      placeholder: 'Повторите новый пароль',
      type: 'password',
      name: 'new_password_retype',
    }); */

    super({
      ...props,
      children: {
        firstNameField: firstNameField.content,
        lastNameField: lastNameField.content,
        emailField: emailField.content,
        phoneField: phoneField.content,
        chatNameField: chatNameField.content,
        loginNameField: loginNameField.content,
        // passwordField: passwordField.content,
        // newPasswordField: newPasswordField.content,
        // newPasswordRetypeField: newPasswordRetypeField.content,
        submitButton: submitButton.content,
        submitPasswordButton: submitPasswordButton.content,
        exitButton: exitButton.content,
      },
    });
    this.emailField = emailField;
  }

  render(): string {
    return compile(profileTemplate)();
  }

  protected customiseComponent() {
    const generalForm: HTMLFormElement = <HTMLFormElement>this.node.querySelector('.settings-general-form');
    // const securityForm: HTMLFormElement = <HTMLFormElement>this.node.querySelector('.settings-security-form');

    if (generalForm) {
      generalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(generalForm);
        console.log(Object.fromEntries(formData.entries()));
        const email = formData.get('email');
        if (email) {
          checkEmail(<string>email, this.emailField);
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.renderPage('chat');
      });
    }

    /* if (securityForm) {
      securityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(securityForm);
        console.log(Object.fromEntries(formData.entries()));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.renderPage('chat');
      });
    } */
  }
}
