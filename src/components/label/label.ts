import Block from '../../utils/Block';
import template from './label.template.hbs';
import * as styles from './label.scss';

interface Props {
  name: string;
  text: string;
}

export class Label extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
