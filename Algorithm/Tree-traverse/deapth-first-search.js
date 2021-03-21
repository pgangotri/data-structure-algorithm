const tree = require('../../DS/binary-search-tree');

//            10
//       6          15
//   3      8    14     20
// 2   4

/**
 * DFS pre order traversal
 * i.e. (first look for root then all left then all right node)
 * @param tree
 * @return {[]}
 */
function dfsPreOrder(tree) {
  let visited = [];
  let current = tree.root;
  const preOrder = (node) => {
    visited.push(node.value);
    if (node.left) {
      preOrder(node.left);
    }
    if (node.right) {
      preOrder(node.right);
    }
  };
  preOrder(current);
  return visited;
}

console.log('PreOrder::', dfsPreOrder(tree));


function dfsPostOrder(tree) {
  let visited = [];
  let current = tree.root;
  function postOrder(node) {
    if (node.left) {
      postOrder(node.left);
    }
    if (node.right) {
      postOrder(node.right);
    }
    visited.push(node.value);
  }
  postOrder(current);
  return visited;
}

console.log('PostOrder::',dfsPostOrder(tree));

function dfsInOrder(tree) {
  let visited = [];
  function inOrder(node) {
    if (node.left) {
      inOrder(node.left);
    }
    visited.push(node.value);
    if (node.right) {
      inOrder(node.right);
    }
  }
  inOrder(tree.root);
  return visited;
}

console.log('InOrder::',dfsInOrder(tree));
