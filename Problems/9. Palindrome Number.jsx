/*
Determine whether an integer is a palindrome.An integer is a palindrome when it reads the same backward as forward.

    Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
    Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left.Therefore it is not a palindrome.
*/

// Method 1
// var isPalindrome = function (x) {
//     if (x < 0 || x === undefined) return false;
//     var y = x.toString();
//     var start = 0;
//     var end = y.length - 1;
//     while (end > start) {
//         if (y[start] !== y[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// };

// Method 2
var isPalindrome = function (x) {
    if (x < 0 || x === undefined) return false;
    var reverseX = 0;
    var tempx = x;
    while (tempx > 0) {
        reverseX = reverseX * 10 + tempx % 10; // reversed = 1, 12, 1
        tempx = Math.floor(tempx / 10);  //tempx = 12, 1, 0
    }
    if (x - reverseX === 0) {
        return true;
    } else {
        return false;
    }
};