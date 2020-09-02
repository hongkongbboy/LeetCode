/*
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
*/

// Method 1:
var isPowerOfTwo = function(n) {
    while (n > 1) {
        n = n / 2;
        if (n === 1) {
            return true;
        }
    }
    while (n > 0 && n <= 1) {
        n = n * 2;
        if (n === 2) {
            return true;
        }
    }
    return false;
};

// Method 2:
var isPowerOfTwo = function(n) {
    let i = 1;
    while (i < n) {
        i *= 2;
    }
    return i === n;
};