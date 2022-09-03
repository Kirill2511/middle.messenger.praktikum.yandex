import Block from '../../utils/Block';
import template from './avatar.template.hbs';

interface Props {
  link: string;
  events: {
    click: (evt: Event) => void;
  };
}

export class Avatar extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
