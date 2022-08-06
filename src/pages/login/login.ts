import { compile } from 'pug';
import Block from '../../components/block/block';
import { IComponentProps } from '../../components/Types';
import Button from '../../components/button/button';
import loginTemplate from './login.template';
import Input from '../../components/input/input';
import { checkEmail } from '../../utils/validation';
import './login.scss';

export default class Login extends Block {
  private emailField: Input;

  constructor(props: IComponentProps) {
    const submitButton = new Button({
      child: 'Войти',
      primary: true,
    });

    const registrationButton = new Button({
      child: 'Зарегистрироваться',
      secondary: true,
      events: {
        click: () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.renderPage('registration');
        },
      },
    });

    const emailField = new Input({
      placeholder: 'Email',
      value: 'какой-то неправильный email',
      name: 'email',
      events: {
        blur: (e) => {
          checkEmail(e.currentTarget.value, emailField);
        },
        focus: () => {
          console.log('focus');
        },
      },
    });

    const passwordField = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
    });

    super({
      ...props,
      children: {
        submitButton: submitButton.content,
        registrationButton: registrationButton.content,
        emailField: emailField.content,
        passwordField: passwordField.content,
      },
    });
    this.emailField = emailField;
  }

  render(): string {
    return compile(loginTemplate)();
  }

  protected customiseComponent() {
    const form: HTMLFormElement = <HTMLFormElement>this.node.querySelector('form.login-form');

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
          window.renderPage('chat'); // временно вместо роутера
        }
      });
    }
  }
}
