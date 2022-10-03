class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);

// first list
n1.next = n2;
n1.next.next = n3;
n1.next.next.next = n4;

const n5 = new Node(5);
const n6 = new Node(6);

// second list
n5.next = n6;
n5.next.next = n2;

function checkForLoop(l) {
  let slow = l;
  let fast = l;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return fast;
    }
  }
  return null;
}

function getIntersectingNode(l, fast) {
  let slow = l;
  while (true) {
    if (slow === fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }
}

function checkIntersection(l1, l2) {
  let prev;
  let current = l1;
  while (current) {
    prev = current;
    current = current.next;
  }
  if (prev) {
    prev.next = l1;
  }
  const fast = checkForLoop(l2);
  if (!fast) return null;
  const node = getIntersectingNode(l2, fast);
  console.log(node);
  prev.next = null;
  console.log(JSON.stringify(l2));
}

checkIntersection(n1, n5);
