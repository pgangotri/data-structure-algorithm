const { Node } = require('../../DS/Linked-list/linkedList');

const node = new Node(6);
const node2 = new Node(4);
const node3 = new Node(3);
const node4 = new Node(5);
node4.next = node2;

node.next = node2;
node.next.next = node3;
node.next.next.next = node4;

function detectLoop(list) {
  let fast = list.next, slow = list.next;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

console.log(detectLoop(node));
