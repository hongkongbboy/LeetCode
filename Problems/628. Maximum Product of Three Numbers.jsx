/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24
 

Note:

The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
*/

// Method 1
var maximumProduct = function(nums) {
    var sortedNums = nums.sort(function(a, b) { return a - b });
    // console.log(sortedNums)
    return Math.max(sortedNums[nums.length - 1] * sortedNums[nums.length - 2] * sortedNums[nums.length - 3], sortedNums[0] * sortedNums[1] * sortedNums[nums.length - 1]);
};

// Method 2
var maximumProduct = function(nums) {
    var min1 = Infinity;
    var min2 = Infinity;
    var max1 = -Infinity;
    var max2 = -Infinity;
    var max3 = -Infinity;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3) {
            max3 = nums[i];
        }
        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }
    }
    return Math.max(max1 * min1 * min2, max1 * max2 * max3)
};