const { LinkedList } = require('../../DS/Linked-list/linkedList');

const list = new LinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(7);
list.push(7);

function findMiddleNode(list) {
  let slow = list.head, fast = list.head;
  while (true) {
    // In case of even no of node considering (length -1) / 2 node as middle node
    if (fast.next === null || fast.next.next === null) {
      break;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}


console.log(findMiddleNode(list));
