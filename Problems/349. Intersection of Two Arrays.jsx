/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/

var intersection = function(nums1, nums2) {
    var obj1 = {};
    var match = [];
    for (var i=0; i<nums1.length; i++) {
        obj1[nums1[i]] = 1;
    }
    for (var i=0; i<nums2.length; i++) {
        if (obj1[nums2[i]] === 1) {
            match.push(nums2[i]);
            obj1[nums2[i]] = 0;
        }
    }
    return match;
};