import template from './user-info-item.template.hbs';
import * as styles from './user-info-item.scss';
import Block from '../block/block';

interface IUserInfoItem {
  name: string;
  value: string;
}

export class UserInfoItem extends Block {
  constructor(props: IUserInfoItem) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
