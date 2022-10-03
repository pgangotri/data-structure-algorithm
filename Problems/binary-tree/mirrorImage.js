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

const T2 = new Node(1);
T2.left = new Node(2);
T2.right = new Node(3);
T2.left.left = new Node(4);
T2.left.right = new Node(5);


function checkForMirrorImage(t1, t2) {
  function isMirror(t1, t2) {
    if (!t1 && !t2) {
      return true;
    }
    if (!t1 || !t2) {
      return false;
    }
    return (t1.value === t2.value) && isMirror(t1.left, t2.right) && isMirror(t1.right,t2.left);
  }
  return isMirror(t1, t2)
}

console.log(checkForMirrorImage(T1, T2));



