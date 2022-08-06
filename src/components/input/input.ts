import clsx from 'clsx';
import { compile } from 'pug';
import Block from '../block/block';
import { IInputProps } from '../Types';
import './input.scss';

const template = `
div
    input
    div.form-input-line
    span.form-input-helper
`;

export default class Input extends Block implements IInputProps {
  protected props: IInputProps;

  get className(): string {
    return clsx('from-input', this.props.className, {
      error: this.props.error,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  protected get proplist() {
    return [
      { name: 'type', selector: 'input', attribute: 'type' },
      { name: 'placeholder', selector: 'input', attribute: 'placeholder' },
      { name: 'name', selector: 'input', attribute: 'name' },
      {
        name: 'helper',
        selector: '.form-input-helper',
        attribute: 'innerText',
        isValue: true,
      },
      { name: 'value', selector: 'input', attribute: 'value', isValue: true },
    ];
  }

  render() {
    return compile(template)({
      child: this.props.child,
    });
  }

  protected customiseComponent() {
    const input = this.node.querySelector('input');
    if (input) {
      this.eventDispatcher.node = input;
    }
  }
}
