/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {


    function buildTree(left, right) {
        if (left > right) return null; // Base case

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]); // Create root from middle element

        node.left = buildTree(left, mid - 1);  // Build left subtree
        node.right = buildTree(mid + 1, right); // Build right subtree

        return node;
    }

    return buildTree(0, nums.length - 1);
};

