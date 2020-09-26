/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/


// Method 1
var findDisappearedNumbers = function(nums) {
    var check = new Set();
    var result = [];
    for (var i=1; i<=nums.length; i++) {
        check.add(i)
    }
    console.log(check)
    for (var i=0; i<nums.length; i++) {
        if (check.has(nums[i])) {
            check.delete(nums[i]);
        }
    }
    for (var ele of check) {
        result.push(ele);
    }
    return result;
};

// Method 2
var findDisappearedNumbers = function(nums) {
    var disappearedEle = [];
    for (var i=0; i<nums.length; i++) {
        var curr = Math.abs(nums[i]);
        nums[curr - 1] = - (Math.abs(nums[curr - 1]));
    }
    for (var j=0; j<nums.length; j++) {
        if (nums[j] > 0) {
            disappearedEle.push(j + 1);
        }
    }
    return disappearedEle;
};