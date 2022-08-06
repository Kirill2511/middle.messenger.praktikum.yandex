import { compile } from 'pug';
import Block from '../../components/block/block';
import { IErrorProps } from '../../components/Types';
import Button from '../../components/button/button';
import error500Template from './Error500.template';
import './Error500.scss';

export default class Error500 extends Block {
  protected props: IErrorProps;

  constructor(props: IErrorProps) {
    const toIndexButton = new Button({
      child: 'На главную страницу',
      link: true,
      secondary: true,
      href: '/',
    });

    super({
      ...props,
      children: {
        toIndexButton: toIndexButton.content,
      },
    });
  }

  render(): string {
    return compile(error500Template)();
  }
}
