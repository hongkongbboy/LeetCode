/*
Given a non - empty array of integers, every element appears twice except for one.Find that single one.

Note:

Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?
*/

var singleNumber = function (nums) {
    return nums.reduce((a,b) => a^b);
}

// var singleNumber = function (nums) {
//     while (nums.length > 1) {
//         for (var i=nums.length - 1; i> 1; i--) {
//             if (nums[nums.length - 1] === nums[i]) {
//                 nums.pop();
//                 nums.splice(i, 1);
//             }
//         }
//     }
//     return nums[0];
// }

// singleNumber([2, 2, 1]) // 1
// singleNumber([4, 1, 2, 1, 2]) // 4