import Block from '../../utils/Block';
import * as template from './error.template.hbs';
import * as styles from './error.scss';
import { Link } from '../../components/link';

export interface IError {
  number: number;
  text: string;
  link_text: string;
}

export class Error extends Block<IError> {
  constructor(props: IError) {
    super(props);
  }

  protected initChildren() {
    this.children.link = new Link({
      text: this.props.link_text,
      className: 'link-button',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
