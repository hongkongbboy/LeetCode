/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

// Method 1
var isPowerOfThree = function(n) {
    var testNum = 1;
    while (testNum < n) {
        testNum *= 3;
    }
    return testNum === n;
};

// Method 2
var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3) % 1 === 0)
};