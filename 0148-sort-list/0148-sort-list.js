/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

    // Step 1: Convert linked list to array
    let values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    // Step 2: Sort the array
    values.sort((a, b) => a - b);

    // Step 3: Convert sorted array back to linked list
    let dummy = new ListNode(0);
    current = dummy;
    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};
