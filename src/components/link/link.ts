import Block from '../../utils/Block';
import * as template from './link.template.hbs';
import * as styles from './link.scss';

interface ILink {
  url?: string;
  text: string;
  className: string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Link extends Block<ILink> {
  constructor(props: ILink) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
