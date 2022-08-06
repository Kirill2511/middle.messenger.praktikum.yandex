import { compile } from 'pug';
import Block from '../../components/block/block';
import { IErrorProps } from '../../components/Types';
import Button from '../../components/button/button';
import error404Template from './Error404.template';
import './Error404.scss';

export default class Error404 extends Block {
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
    return compile(error404Template)();
  }
}
