import Block from '../../utils/Block';
import template from './link.template.hbs';
import * as styles from './link.scss';

interface Props {
  url?: string;
  text: string;
  className: string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Link extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
