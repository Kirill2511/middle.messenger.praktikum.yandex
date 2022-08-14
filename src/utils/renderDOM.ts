import Block from '../components/block/block';

const renderDOM = (selector: string, component: Block) => {
  const root = document.querySelector(selector);

  if (!root) {
    throw new Error('Селектор не найдет');
  }

  root.innerHTML = '';

  root.append(component.getContent());
};

export default renderDOM;
