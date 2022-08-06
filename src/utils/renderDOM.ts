import Block from '../components/block/block';

function removeAllChildNodes(parent: Element) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    removeAllChildNodes(root);
    root.appendChild(block.content);
  }
  return root;
}
