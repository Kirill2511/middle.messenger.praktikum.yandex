import template from './error.template.hbs';
import { Link } from '../../components/link';

import * as styles from './error.scss';
import Block from '../../components/block/block';

export interface IError {
  number: number;
  text: string;
  link_text: string;
}

class Error extends Block {
  constructor(props: IError) {
    super(props);
  }

  protected initChildren(props: IError) {
    this.children.link = new Link({
      text: props.link_text,
      className: 'link-button',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

export default Error;
