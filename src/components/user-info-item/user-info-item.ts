import Block from '../../utils/Block';
import template from './user-info-item.template.hbs';
import * as styles from './user-info-item.scss';

interface Props {
  value: string;
  title: string;
}

export class UserInfoItem extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
