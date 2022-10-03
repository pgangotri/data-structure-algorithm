// For finding min distance b/w two node
// We first find lowest-common-ancestor
// Add distance b/w lca and two nodes

const tree = require('../../../play-ground-main/DS/Tree/binary-search-tree');

// Considering both n1 and n2 is present in binary tree
function findLca(root, n1, n2) {
  if (!root) return root;
  if (root.value === n1 || root.value === n2) return root;
  let leftNode = findLca(root.left, n1, n2);
  let rightNode = findLca(root.right, n1, n2);
  if (leftNode && rightNode) {
    return root;
  }
  return leftNode !== null ? leftNode : rightNode;
}

function findLevel(node, d, level = 0) {
  if (!node) return -1;
  if (node.value === d) return level;
  let left = findLevel(node.left, d, level+1);
  if (left === -1) {
    return findLevel(node.right, d, level+1);
  }
  return left;
}

function minDistanceBetweenNodes(tree, d1, d2) {
  const lca = findLca(tree.root, d1, d2);
  const level1 = findLevel(lca, d1);
  const level2 = findLevel(lca, d2);
  return level1 + level2;
}

const minDistance = minDistanceBetweenNodes(tree, 2, 20);
console.log(minDistance);
