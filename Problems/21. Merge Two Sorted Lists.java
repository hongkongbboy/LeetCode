/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

 

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

*/

class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode newNode = new ListNode(-1);
        ListNode head = newNode;
        while (l2 != null && l1 != null) {
            if (l2.val < l1.val) {
                newNode.next = l2;
                l2 = l2.next;
            } else {
                newNode.next = l1;
                l1 = l1.next;
            }
            newNode = newNode.next;
        }
        if (l1 != null) {
            newNode.next = l1;
        } else {
            newNode.next = l2;
        }
        return head.next;
    }
}