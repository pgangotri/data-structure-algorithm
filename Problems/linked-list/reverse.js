class Node {
  constructor(val) {
    this.val = val;
    this.next =null;
  }
}

const a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);
a.next.next.next = new Node(4);
a.next.next.next.next = new Node(5);

function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;
  while(curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  console.log(JSON.stringify(prev));
}

reverse(a);
