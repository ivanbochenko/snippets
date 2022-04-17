const invertTree = (node) => {
  if (node.left && node.right) {
    const left = node.left;
    node.left = node.right;
    node.right = left;
    invertTree(node.left);
    invertTree(node.right);
  }
  return node
};

const tree = {
  value: 8,
  left: {
    value: 5,
    left: {value: 3},
    right: {value: 6}
  },
  right: {
    value: 10,
    left: {value: 7},
    right: {value: 12}
  }
}

console.log(invertTree(tree));