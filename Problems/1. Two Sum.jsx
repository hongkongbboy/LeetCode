/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Method 1
// var twoSum = function(nums, target) {
//     for (var i=0; i<nums.length - 1; i++) {
//         for (var j=i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
// };


// Method 2
var twoSum = function(nums, target) {
    // Create an empty object to hold value
    var numObj = {};
    // loop through the array
    for (var i=0; i<nums.length; i++) {
        var targetVal = target - nums[i];
        // Check if numObj has the targetVal
        if (targetVal in numObj) {
            return [numObj[targetVal],i];
        }
        numObj[nums[i]] = i;
    }
    console.log(numObj)
};