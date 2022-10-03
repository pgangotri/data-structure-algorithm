function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function leftViewUsingQueue(root) {
  // Base case if tree is empty
  if (!root) return;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    for (let i = 1; i <= length; i++) {
      // Dequeue first node from queue
      const current = queue.shift();
  
      // Print first node at each level
      if (i === 1) {    // check for i === length will give right view of tree
        console.log(current.value);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

function leftViewUsingRecursion(node) {
  let maxLevel = 0;
  
  // recursive function to print left view
  function leftViewUtil(node, level) {
    // Base Case
    if (!node) {
      return;
    }
    
    // If this is the first node of its level
    if (maxLevel < level) {
      maxLevel = level;
      console.log(node.value);
    }
    
    // Recur for left and right subtrees
    leftViewUtil(node.left, level + 1);
    leftViewUtil(node.right, level + 1);
  }
  
  // A wrapper over leftViewUtil()
  leftViewUtil(node, 1)
}

const T2 = new Node(1);
T2.left = new Node(2);
T2.right = new Node(3);
T2.left.left = new Node(4);
T2.left.right = new Node(5);
T2.left.right.left = new Node(6);

// leftViewUsingQueue(T2);  // 1 2 4 6
leftViewUsingRecursion(T2);  // 1 2 4 6

      //         1
      //     2        3
      // 4      5
      //           6


