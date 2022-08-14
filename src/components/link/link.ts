import template from './link.template.hbs';

import * as styles from './link.scss';
import Block from '../block/block';

interface ILink {
  url?: string;
  text: string;
  className: string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Link extends Block {
  constructor(props: ILink) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
