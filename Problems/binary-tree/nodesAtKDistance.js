class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const T1 = new Node(1);
T1.left = new Node(3);
T1.right = new Node(2);
T1.right.left = new Node(5);
T1.right.right = new Node(4);
T1.left.left = new Node(7);
T1.left.right = new Node(8);

//       1
//   3       2
// 7   8   5    4

function printDownNodes(node, k) {
  if (!node || k < 0) return;
  if (k === 0) {
    console.log(node.value);
    return;
  }
  printDownNodes(node.left, k - 1);
  printDownNodes(node.right, k - 1);
}

function printNodesAtKDistance(node, target, k) {
  if (!node) return -1;
  if (node.value === target) {
    printDownNodes(node, k);
    return 0;
  }
  let dl = printNodesAtKDistance(node.left, target, k);
  if (dl != -1) {
    if (dl + 1 === k) {
      console.log(node.value);
    } else {
      printDownNodes(node.right, k - dl - 2);
    }
    return dl + 1;
  }
  let dr = printNodesAtKDistance(node.right, target, k);
  if (dr != -1) {
    if (dr + 1 === k) {
      console.log(node.value);
    } else {
      printDownNodes(node.right, k - dr - 2);
    }
    return dr + 1;
  }
  return -1;
}

printNodesAtKDistance(T1, 3, 2);
