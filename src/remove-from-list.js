const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 */
function removeKFromList(l, k) {
  // убираем головы, равные k
  while (l && l.value === k) l = l.next;

  let cur = l;
  while (cur && cur.next) {
    if (cur.next.value === k) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};

