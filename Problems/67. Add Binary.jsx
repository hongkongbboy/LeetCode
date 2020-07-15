/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

// Method 1
var addBinary = function(a, b) {
    // Create indexes for both input
    var i = a.length - 1;
    var j = b.length - 1;
    var temp = 0;
    var newSum = "";
    // From the end, loop through each character
    while (i>=0 && j>=0) {
        console.log(Number(a[i]) + Number(b[j]) + Number(temp));
        if (Number(a[i]) + Number(b[j]) + temp === 3) {
            temp = 1;
            newSum = '1'.concat(newSum);
        } else if (Number(a[i]) + Number(b[j]) + temp === 2) {
            temp = 1;
            newSum = '0'.concat(newSum);
        } else {
            newSum = (Number(a[i]) + Number(b[j]) + temp).toString().concat(newSum);
            temp = 0;
        }
        console.log(newSum, 'newSum')
        i--;
        j--;
    }
    while (i>=0) {
        if (Number(a[i]) + temp === 2) {
            newSum = '0'.concat(newSum);
            temp = 1;
        } else {
            newSum = (Number(a[i]) + temp).toString().concat(newSum);
            temp = 0;
        }
        i--;
        console.log('i hit');
    }
    while (j>=0) {
        if (Number(b[j]) + temp === 2) {
            newSum = '0'.concat(newSum);
            temp = 1;
        } else {
            newSum = (Number(b[j]) + temp).toString().concat(newSum);
            temp = 0;
        }
        j--;
        console.log('j hit');
    }
    while (temp === 1) {
        newSum = '1'.concat(newSum);
        temp = 0;
    }
    return newSum;
};