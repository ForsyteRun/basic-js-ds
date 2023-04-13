const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(arr, k) {
  let node = arr;
  let prev = arr;
 
  for (let i = 0; i < k; i++) {

    if (i === 0 && k === 1) {
      arr = arr.next;
      node = null;
    } else {
      if (i === k - 1 && node) {
        prev.next = node.next;
        node = null;
      } else {
        prev = node;
 
        if (prev === null) break;
 
        node = node.next;
      }
    }

  }
  return arr;
}

module.exports = {
  removeKFromList
};
