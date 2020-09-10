/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

// Method 1
var productExceptSelf = function(nums) {
    var newNums = [];
    for (var i=0; i<nums.length; i++) {
        var mult = 1;
        for (var j=0; j<nums.length; j++) {
            if (i !== j) {
                mult *= nums[j];
            }
        }
        newNums.push(mult);
    }
    return newNums;
};

// Method 2
var productExceptSelf = function(nums) {
    var leftArr = [];
    var rightArr =[];
    leftArr[0] = 1;
    rightArr[nums.length - 1] = 1;
    for (var i=1; i<nums.length; i++) {
        leftArr[i] = leftArr[i - 1] * nums[i - 1];
        rightArr[nums.length - i - 1] = rightArr[nums.length - i] * nums[nums.length - i];
    }
    for (var i=0; i<nums.length; i++) {
        nums[i] = leftArr[i] * rightArr[i];
    }
    return nums;
};

// Method 3
var productExceptSelf = function(nums) {
    var arr = [];
    arr[0] = 1;
    for (var i=1; i<nums.length; i++) {
        arr[i] = nums[i - 1] * arr[i - 1];
    }
    var temp = 1;
    for (var j=nums.length - 1; j>=0; j--) {
        arr[j] = arr[j] * temp;
        temp = temp * nums[j];
    }
    return arr;
};