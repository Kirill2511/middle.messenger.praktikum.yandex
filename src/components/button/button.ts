import clsx from 'clsx';
import { compile } from 'pug';
import Block from '../block/block';
import { IButtonProps } from '../Types';
import './button.scss';

let template = 'button #{child}';

export default class Button extends Block implements IButtonProps {
  protected props: IButtonProps;

  constructor(props: IButtonProps) {
    if (props.link) {
      template = `a(href="${props.href}") #{child}`;
    }

    super(props);
  }

  get className(): string {
    return clsx('button', this.props.className, {
      'button-secondary': this.props.secondary,
      'button-primary': this.props.primary,
      'button-link': this.props.link,
      'button-red': this.props.red,
    });
  }

  render() {
    return compile(template)({
      child: this.props.child,
    });
  }
}
