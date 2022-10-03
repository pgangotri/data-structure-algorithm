class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(3);
const a4 = new Node(5);
const a5 = new Node(6);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a1;

function getLoopCount(slow, fast) {
  let count = 1;
  slow = slow.next;
  while (slow !== fast) {
    count++;
    slow = slow.next;
  }
  return count;
}

function getFirstNodeInLoop(head, fast) {
  let slow = head;
  while(true) {
    if (slow === fast){
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }
}

/**
 * Using Floyd's circle detection algo
 * @param a1
 * @return {boolean|{firstNode: undefined, loopLength: number}}
 */
function detectLoop(a1) {
  if (!a1) return false;
  let fast = a1;
  let slow = a1;
  while (fast && slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      const firstNode = getFirstNodeInLoop(a1, fast);
      const loopLength = getLoopCount(slow, fast);
      return { firstNode, loopLength };
    }
  }
  return false;
}

console.log(detectLoop(a1));
