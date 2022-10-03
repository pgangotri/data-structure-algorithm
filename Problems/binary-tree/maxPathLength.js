// Find length of longest monotonically increasing path
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const T = new Node(1);
T.left = new Node(2);
T.left.left = new Node(1);
T.right = new Node(3);
T.left.left.right = new Node(7);
T.left.left.right.left = new Node(8);

//         1
//     2       3
// 1
//    7
// 8

function findPathLength(root, prevVal, prevLength) {
  if (root === null) {
    return prevLength;
  }
  const currVal = root.value;
  if (currVal >= prevVal+1) {
    return Math.max(
      findPathLength(root.left, currVal, prevLength+1),
      findPathLength(root.right, currVal, prevLength+1)
    )
  }
  const newPathLen = Math.max(
    findPathLength(root.left, currVal, 1),
    findPathLength(root.right, currVal, 1)
  );
  return Math.max(newPathLen, prevLength);
}

function maxPathLength(root) {
  if (root === null) {
    return 0;
  }
  return findPathLength(root, root.value - 1, 0);
}

console.log(maxPathLength(T));
