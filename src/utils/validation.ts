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

export const checkLogin = (val: string, component: Block): boolean => {
  if (isLogin(val)) {
    component.setProps({ value: val, helper: '', error: false });
    return true;
  } else {
    component.setProps({
      value: val,
      helper: 'Минимум три символа, минимум одна буква.',
      error: true,
    });
    return false;
  }
};

export const checkFirstAndSecondName = (val: string, component: Block): boolean => {
  if (isFirstAndSecondName(val)) {
    component.setProps({ value: val, helper: '', error: false });
    return true;
  } else {
    component.setProps({
      value: val,
      helper: 'Должен начинаться с заглавной буквы, без цифр',
      error: true,
    });
    return false;
  }
};

export const checkPhone = (val: string, component: Block): boolean => {
  if (isPhone(val)) {
    component.setProps({ value: val, helper: '', error: false });
    return true;
  } else {
    component.setProps({
      value: val,
      helper: 'Минимум десять цифр',
      error: true,
    });
    return false;
  }
};

export const isLogin = (value: string) => {
  return /^(?=.*[a-zA-Z])[0-9a-zA-Z_-]+$/.test(value);
};
export const isPassword = (value: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/i.test(value);
};
export const isFirstAndSecondName = (value: string) => {
  return /^[A-ZА-Я][a-zа-я-]+$/.test(value);
};
export const isPhone = (value: string) => {
  return /(\+)?[\d]{10,15}$/.test(value);
};
export const isEmail = (value: string) => {
  return /^[A-Za-z-_.\d]+@[A-Za-z]+\.[A-Za-z]+$/.test(value);
};
