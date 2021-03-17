class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  /**
   * Push new node at end
   * @param val
   * @return {LinkedList}
   */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  /**
   * Remove last node
   * @return {Node|undefined}
   */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      return current;
    }
    while (current) {
      if (current.next.next === null) {
        break;
      }
      current = current.next;
    }
    const tailData = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return tailData;
  }
  
  /**
   * Traverse through the list
   */
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  /**
   * Remove head of list and return it
   * @return {Node|undefined}
   */
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  
  /**
   * Add new node at beginning as head to the list
   * @param val
   * @return {LinkedList}
   */
  unshift(val) {
    const newNode = new Node(val);;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  
  /**
   * Get data at provided index
   * @param index
   * @return {Node|null}
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
  
  /**
   * Set new value at provided index
   * @param index
   * @param val
   * @return {boolean}
   */
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.data = val;
    return true;
  }
  
  /**
   * Get size of list
   * @param list
   * @return {number}
   */
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    return this.head = null;
  }

  getLastNode() {
    let node = list.head;
    while(node) {
      node = node.next;
    }
    return node;
  }

  getFirst(list) {
    return list.head;
  }

  insertNodeAtNthPosition(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const prevNode = this.get(index - 1);
    if (!prevNode) return false;
    const newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  deleteNode(list, value) {
    let node = list.head;
    while (node) {
      if (node.next.data === value) {
        node.next = node.next.next;
        break;
      }
      node = node.next;
    }
  }
  
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let count = 0;
    let next;
    let prev = null;
    while (count < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      count++
    }
  }
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(JSON.stringify(list));
list.reverse();
console.log(JSON.stringify(list));

