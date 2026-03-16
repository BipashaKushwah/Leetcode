/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find length
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Make circular
    tail.next = head;

    // Step 3: Adjust k
    k = k % length;
    let stepsToNewHead = length - k;

    // Step 4: Find new tail
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    // Step 5: Break circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
    
