/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/


// Method 1
// var reverse = function(x) {
//     var intString = x.toString();
//     var reverseInt = "";
//     if (x<0) {
//         reverseInt = reverseInt.concat(intString[0]);
//         for (var i=intString.length - 1; i>0; i--) {
//             reverseInt = reverseInt.concat(intString[i]);
//         }
//     } else {
//         for (var i=intString.length - 1; i>=0; i--) {
//             reverseInt = reverseInt.concat(intString[i]);
//         }
//     }
//     if (Math.abs(Number(reverseInt)) > Math.pow(2, 31) - 1) {
//         return 0;
//     } else {
//         return Number(reverseInt);
//     }
// };


// Method 2
var reverse = function(x) {
    var reverseVal = 0;
    var temp = Math.abs(x);
    while (temp > 0) {
        reverseVal = reverseVal * 10;
        var remainer = temp % 10;
        reverseVal = reverseVal + remainer;
        temp = Math.floor(temp / 10);
    }
    if (Math.pow(2, 31) -1 < reverseVal) {
        return 0;
    } else if (x < 0) {
        return -reverseVal;
    } else {
        return reverseVal;
    }
};