function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.hd = Number.POSITIVE_INFINITY
}


function printBottomView(root) {
  if (!root) return;
  let hd = 0;
  const queue = [];
  const bottoms = [];
  root.hd = hd;
  queue.push(root);
  while (queue.length) {
    let temp = queue.shift();
    hd = temp.hd;
    bottoms[hd] = temp.value;
    if (temp.left) {
      temp.left.hd = hd - 1;
      queue.push(temp.left);
    }
    if (temp.right) {
      temp.right.hd = hd + 1;
      queue.push(temp.right);
    }
  }
  console.log(bottoms);
}

const T2 = new Node(1);
T2.left = new Node(2);
T2.right = new Node(3);
T2.left.left = new Node(4);
T2.left.left.right = new Node(8);
T2.left.right = new Node(5);
T2.left.right.right = new Node(6);


//         1
//     2       3
//  4      5
//     8       6

printBottomView(T2);
