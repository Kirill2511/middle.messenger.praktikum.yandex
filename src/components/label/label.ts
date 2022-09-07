import Block from '../../utils/Block';
import * as template from './label.template.hbs';
import * as styles from './label.scss';

interface ILabel {
  name: string;
  text: string;
}

export class Label extends Block<ILabel> {
  constructor(props: ILabel) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
