/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?
*/

// Method 1
var isPowerOfFour = function(num) {
    return Math.log10(num) / Math.log10(4) % 1 === 0;
};

// Method 2
var isPowerOfFour = function(num) {
    var power = 0;
    while (Math.pow(4, power) <= num) {
        if (Math.pow(4, power) === num) return true;
        power++;
    }
    return false;
};