export interface IEventDispatcher {
  add(eventName: string, callback: (e: Event) => void): void;

  remove(eventName: string, callback: (e: Event) => void): void;

  clear(): void;
}

interface IChild {
  name: string;
  node: HTMLElement;
}

export interface IComponentProps {
  className?: string;
  children?: {};
  child?: IChild | HTMLElement | string;
  events?: Record<string, (...args: any) => void>;

  [key: string]: any;
}

export interface IButtonProps extends IComponentProps {
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  href?: string;
  red?: boolean;
}

export interface IInputProps extends IComponentProps {
  value?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

export interface IChatContactProps extends IComponentProps {
  img?: string;
  name?: string;
  messagePreview?: string;
  time?: string;
  count?: number;
}

export interface IErrorProps extends IComponentProps {
  code?: string | number;
}

export interface IComponent {}
