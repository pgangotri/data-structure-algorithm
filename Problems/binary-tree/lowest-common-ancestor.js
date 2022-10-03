const tree = require('../../../play-ground-main/DS/Tree/binary-search-tree');

//            10
//       6          15
//   3      8    14     20
// 2   4
function lowestCommonAncestor(tree, num1, num2) {
  let v1 = false;
  let v2 = false;
  
  function findNode(node, val1, val2) {
    if (!node) return null;
    let temp = null;
    if (node.value === val1) {
      v1 = true;
      temp = node;
    }
    if (node.value === val2) {
      v2 = true;
      temp = node;
    }
    let leftNode = findNode(node.left, val1, val2);
    let rightNode = findNode(node.right, val1, val2);
    if (temp !== null) return temp;
    if (leftNode && rightNode) return node;
    return leftNode ? leftNode : rightNode;
  }
  const node = findNode(tree.root, num1, num2);
  if (v1 && v2) {
    return node;
  }
  return null;
}

const node = lowestCommonAncestor(tree, 6, 3);
console.log(node ? node.value : node);
