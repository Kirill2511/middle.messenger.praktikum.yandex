import Block from '../../utils/Block';
import template from './avatar.template.hbs';

interface IAvatar {
  link: string;
  events: {
    click: (evt: Event) => void;
  };
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
