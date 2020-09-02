/*

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/

// Method 1:
var replaceElements = function(arr) {
    for (var i=0; i< arr.length - 1; i++) {
        var highestEle = arr[i+1];
        for (var j=i + 2; j< arr.length; j++) {
            if (arr[j] > highestEle) {
                highestEle = arr[j];
            }
        }
        arr[i] = highestEle;
    }
    arr[arr.length - 1] = -1;
    return arr;
};

// Method 2:
var replaceElements = function(arr) {
    var highestEle = arr[arr.length - 1];
    for (var i=arr.length - 2; i>=0; i--) {
        var previousHighestEle = highestEle;
        if (arr[i] > highestEle) {
            highestEle = arr[i];
        }
        arr[i] = previousHighestEle;
    }
    arr[arr.length - 1] = -1;
    return arr;
};