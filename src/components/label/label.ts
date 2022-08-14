import template from './label.template.hbs';

import * as styles from './label.scss';
import Block from '../block/block';

interface ILabel {
  name: string;
  text: string;
}

export class Label extends Block {
  constructor(props: ILabel) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
