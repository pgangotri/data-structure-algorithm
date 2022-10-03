// Check if a tree is subtree of another binary tree
const isSubArray = require('../../../play-ground-main/isSubArray');

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function getInOrder(node, arr) {
  if (node === null) {
    arr.push('$');
    return arr;
  }
  getInOrder(node.left, arr);
  arr.push(node.value);
  getInOrder(node.right, arr);
  return arr;
}

function getPreOrder(node, arr) {
  if (!node) {
    arr.push('$');
    return arr;
  }
  arr.push(node.value);
  getInOrder(node.left, arr);
  getInOrder(node.right, arr);
}

function isSubTree(tree, subTree) {
  if (!subTree) return true;
  if (!tree) return false;
  const tInOrder = getInOrder(tree, []);
  const stInOrder = getInOrder(subTree, []);
  const tPreOrder = getInOrder(subTree, []);
  const stPreOrder = getInOrder(subTree, []);
  console.log('t::', tInOrder);
  console.log('st::', stInOrder);
  console.log('st::', tPreOrder);
  console.log('st::', stPreOrder);
  return isSubArray(tInOrder, stInOrder);
}

const T = new Node(1);
T.left = new Node(2);
T.left.left = new Node(4);
T.right = new Node(3);
T.right.right = new Node(7);

//         1
//     2       3
// 4              7

const S = new Node(1);
S.left = new Node(2);
S.right = new Node(3);
S.left.left = new Node(4);

//      1
//   2      3
// 4

console.log(isSubTree(T,S));
