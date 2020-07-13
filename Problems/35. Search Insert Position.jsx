/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

// Method 1
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    var start = 0;
    var end = nums.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (start === end && target > nums[start]) {
            return start + 1;
        } else if (start === end && target < nums[start] && start !== 0) {
            return start;
        } else if (start === end && target < nums[start]) {
            return 0;
        }
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid;
            mid = Math.floor((start + end) / 2);
        } else if (target > nums[mid]) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
    }
};

// Method 2
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    var start = 0;
    var end = nums.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        } else if (target > nums[mid]) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    return start;
};

