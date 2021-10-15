// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**

 var swapPairs = function(head) {

  if (head===null) {
      return head;
  }

  let current = head;

  let newHead = head.next;

  if (head.next === null) {
      return head;
  }

  let next = head.next;

  let nextNext = next.next;

  let done = false;
  let formerCurrent = current;
  current = next;
  next = formerCurrent;
  let newNextforNext = current.next
  current.next = next;
  next.next = newNextforNext;


  let counter = 1;


  while (done===false) {
      if (counter%2===0) {
              let previousNode = next;
              let formerCurrent = next.next;
              let formerNext = next.next.next;
              current = formerNext;
              next = formerCurrent;
              let newNextforNext = current.next;
              current.next = next;
              next.next = newNextforNext;
              previousNode.next = current;
      }

      if (next.next === null || next.next.next === null) {
          done = true;
          return newHead;
      }

      counter++;
  }

};