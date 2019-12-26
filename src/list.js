const createNode = value => {
  return {
    data: value,
    next: null
  };
};
const createList = value => {
  return createNode(value);
};
const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while (x.next) {
    x = x.next;
  }
  x.next = node;
  return node;
};
const fn = node => {
  console.log(node.data);
};
const travelList = (list, fn) => {
  let x = list;
  while (x !== null) {
    fn(x);
    x = x.next;
  }
};
const removeFromList = (list, node) => {
  let x = list;
  let p = node;
  while (x !== node && x !== null) {
    p = x;
    x = x.next;
  }
  if (x === null) {
    return false;
  } else if (x === p) {
    p = x.next;
    return p;
  } else {
    p.next = x.next;
    return p;
  }
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
console.log(list);
console.log(`----`);
travelList(list, fn);
console.log(`----`);
removeFromList(list, node3);
console.log(list);
console.log(`----`);
travelList(list, fn);
