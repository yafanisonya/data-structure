const createTree = value => {
  return {
    data: value,
    children: null,
    parent: null
  };
};
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node
  };
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
};
const fn = node => {
  console.log(node.data);
};
const travel = (tree, fn) => {
  fn(tree);
  if (!tree.children) {
    return;
  }
  for (let i = 0; i < tree.children.length; i++) {
    travel(tree.children[i], fn);
  }
};
const removeNode = (tree, node) => {
  const siblings = node.parent.children;
  let index = 0;
  for (let i = 1; i < siblings.length; i++) {
    if (siblings[i] === node) {
      index = i;
    }
  }
  siblings.splice(index, 1);
};

const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
const node4 = addChild(tree, 40);
const node5 = addChild(tree, 50);
const node21 = addChild(node2, 210);
addChild(node2, 220);
addChild(node3, 310);
addChild(node3, 320);
addChild(node3, 330);
console.log(tree);
console.log("-----");
travel(tree, fn);
console.log("-----");
//console.log(node21.parent.children);
removeNode(tree, node21);
console.log(tree);
