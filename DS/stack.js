class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

/**
 * Implemented stack using linked list
 */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  push(data) {
    const node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }
  
  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.val;
  }
}

let a = new Stack();

a.push(5);
a.push(6);
a.push(7);
a.push(8);

console.log(JSON.stringify(a));

a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.push(1)
console.log(JSON.stringify(a));
