class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Using linked list to implement queue
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  queue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  
  dequeue() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

const a = new Queue();

a.queue(2);
a.queue(3);
a.queue(4);
a.queue(5);

console.log(a.dequeue());
a.queue(6);
console.log(a.dequeue());
console.log(a.dequeue());
console.log(a);
