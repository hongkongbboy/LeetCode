/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
*/


// Method 1
var rotate = function(nums, k) {
    for (var i=0; i<k; i++) {
        var holder = nums[nums.length - 1];
        nums.pop();
        nums.unshift(holder);
    }
    return nums;
};

// Method 2
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length-1);
    return nums;
    
};

var reverse = function(nums, a, b) {
    while (a <= b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
        a++;
        b--;
    }
}