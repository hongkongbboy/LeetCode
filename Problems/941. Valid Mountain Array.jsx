/*
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]


 

Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
 

Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000 
*/

// Method 1
var validMountainArray = function(A) {
    if (A.length < 3) return false;
    var highestValue = A[0];
    var up = false;
    var down = false;
    for (var i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1] && down === true) {
            return false;
        } else if (A[i] === A[i-1]) {
            return false;
        } else if (A[i] < A[i-1]) {
            down = true;
        } else if (A[i] > A[i - 1]) {
            up = true;
        } else if (A[i] < A[0] || A[i] < A[A.length - 1]) {
            return false;
        }
        if (A[i] > highestValue) highestValue = A[i];
    }
    if (highestValue > A[0] && highestValue > A[A.length -1]) {
        return true;
    } else {
        return false;
    }
};