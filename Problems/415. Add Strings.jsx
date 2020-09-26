/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var addStrings = function(num1, num2) {
    var num1Len = num1.length;
    var num2Len = num2.length;
    var sumStr = "";
    var addOne = 0;
    var lenDiff = Math.abs(num1Len - num2Len);
    if (num1Len >= num2Len) {
        for (var i=num2Len - 1; i>=0; i--) {
            var sum = addOne + Number(num1[i + lenDiff]) + Number(num2[i]);
            addOne = Math.floor(sum / 10);
            var remain = sum % 10;
            sumStr = remain.toString().concat(sumStr);
        }
        for (var j = lenDiff - 1; j>=0; j--) {
            if (addOne > 0) {
                var sum = addOne + Number(num1[j]);
                addOne = Math.floor(sum / 10);
                var remain = sum % 10;
                sumStr = remain.toString().concat(sumStr);
            } else {
                sumStr = num1[j].toString().concat(sumStr);
            }
        }
        if (addOne > 0) {
            sumStr = '1'.concat(sumStr);
        }
    } else {
        for (var i=num1Len - 1; i>=0; i--) {
            var sum = addOne + Number(num2[i + lenDiff]) + Number(num1[i]);
            addOne = Math.floor(sum / 10);
            var remain = sum % 10;
            sumStr = remain.toString().concat(sumStr);
        }
        for (var j = lenDiff - 1; j>=0; j--) {
            if (addOne > 0) {
                var sum = addOne + Number(num2[j]);
                addOne = Math.floor(sum / 10);
                var remain = sum % 10;
                sumStr = remain.toString().concat(sumStr);
            } else {
                sumStr = num2[j].toString().concat(sumStr);
            }
        }
        if (addOne > 0) {
            sumStr = '1'.concat(sumStr);
        }
    }
    return sumStr;
};