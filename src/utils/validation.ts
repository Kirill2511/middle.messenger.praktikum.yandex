import Block from '../components/block/block';

export const checkEmail = (val: string, component: Block): boolean => {
  if (isEmail(val)) {
    component.setProps({ value: val, helper: '', error: false });
    return true;
  } else {
    component.setProps({
      value: val,
      helper: 'Проверьте правильность почты',
      error: true,
    });
    return false;
  }
};

export const checkPassword = (val: string, component: Block): boolean => {
  if (isPassword(val)) {
    component.setProps({ value: val, helper: '', error: false });
    return true;
  } else {
    component.setProps({
      value: val,
      helper: 'Минимум восемь символов, минимум одна буква и одна цифра',
      error: true,
    });
    return false;
  }
};

export const isPassword = (value: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
};

export const isEmail = (value: string) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
};
