// Definition for singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let dummy = new ListNode(0); // start node
  let current = dummy;         // pointer for building new list

  while (l1 || l2 || carry) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // return linked list (not array)
};
