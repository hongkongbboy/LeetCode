/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

// Method 1
var missingNumber = function(nums) {
    var obj = {};
    for (var i=0; i<nums.length; i++) {
        obj[i] = 1;
    }
    for (var i=0; i<nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] -= 1;
        }
    }
    for (var ele in obj) {
        if (obj[ele] === 1) {
            return ele;
        } 
    }
    return nums.length;
};

// Method 2
var missingNumber = function(nums) {
    var sum = 0;
    for (var i=0; i<nums.length; i++) {
        sum += nums[i];
    }
    return (nums.length * (nums.length + 1)) / 2 - sum;
};