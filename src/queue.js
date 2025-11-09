/**
 * Queue via singly linked list (plain objects, без классов узлов)
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head; // plain { value, next } или null
  }

  enqueue(value) {
    const node = { value, next: null }; // plain object!
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) return undefined;
    const v = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return v;
  }
}

module.exports = { Queue };



