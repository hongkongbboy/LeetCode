/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

var thirdMax = function(nums) {
    if (nums.length === 0) return null;
    var firstLargest = -Infinity;
    var secondLargest = -Infinity;
    var thirdLargest = -Infinity;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === firstLargest || nums[i] === secondLargest || nums[i] === thirdLargest) {
            continue;
            } else if (nums[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = nums[i];
        } else if (nums[i] > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = nums[i];
        } else if (nums[i] > thirdLargest) {
            thirdLargest = nums[i];
        }
    }
    if (firstLargest === -Infinity || secondLargest === -Infinity || thirdLargest === -Infinity) {
        return Math.max(firstLargest, Math.max(secondLargest, thirdLargest))
    } else {
        return thirdLargest;
    }
};