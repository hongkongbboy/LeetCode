/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

// Method 1
var addDigits = function(num) {
    while (num.toString().length > 1) {
        var numString = num.toString();
        var sum = 0;
        for (var i=0; i<numString.length; i++) {
            sum += Number(numString[i]);
        }
        if (sum.toString().length === 1) {
            return sum;
        }
        num = sum;
    }
    return num;
};

// Method 2
var addDigits = function(num) {
    if (num % 9 === 0 && num !== 0) {
        return 9;
    } else {
        return num % 9;
    }
};