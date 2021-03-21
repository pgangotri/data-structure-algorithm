const tree = require('../../DS/binary-search-tree');

/**
 * List all node of tree by traversing breadth first
 * @param tree
 * @return {[]}
 */
function breadthFirstSearch(tree) {
  const queue = [];
  const visited = [];
  let node = tree.root;
  queue.push(node);
  while (queue.length) {
    node = queue.shift();
    visited.push(node.value);   // if nor bst, loop through all the child of node
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  console.log(visited);
}

breadthFirstSearch(tree);
