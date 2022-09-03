import Block from '../../utils/Block';
import template from './chat-input.template.hbs';
import * as styles from './chat-input.scss';

interface Props {
  name: string;
  className?: string;
  autocomplete: 'on' | 'off';
  placeholder?: string;
}

export class ChatInput extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
