class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(3);
const a4 = new Node(4);
const a5 = new Node(5);
const a6 = new Node(6);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;

const removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  console.log(fast);
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

console.log(JSON.stringify(removeNthFromEnd(a1, 2)));

// n = 2;

// 1-2-3-4-5-6
