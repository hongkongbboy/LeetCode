/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/

// Method 1
var mySqrt = function(x) {
    n = 1;
    while (n * n <= x) {
        n++;
    }
    return n - 1;
};

// Method 2
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

// Method 3
var mySqrt = function(x) {
    if (x === 0) return 0;
    var start = 1;
    var end = x;
    var mid = Math.floor((start + end) / 2);
    var pow = Math.pow(mid, 2);
    while (start <= end) {
        if (pow === x) {
            return mid;
        } else if (pow < x && Math.pow(Math.floor(mid + 1),2) > x) {
            return mid;
        } else if (pow < x) {
            start = mid;
        } else {
            end = mid;
        }
        // console.log(mid)
        mid = Math.floor((start + end) / 2);
        pow = Math.pow(mid, 2);
    }
    return mid;
};
