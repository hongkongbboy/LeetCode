/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

// Method 1
var twoSum = function (numbers, target) {
    var sumIndexes = [];
    for (var i = 0; i < numbers.length - 1; i++) {
        var start = i + 1;
        var end = numbers.length - 1;
        var mid = Math.floor((start + end) / 2);
        while (start <= end) {
            // console.log(numbers[i], numbers[mid], start, end)
            if (numbers[i] + numbers[mid] === target) {
                sumIndexes.push(i + 1);
                sumIndexes.push(mid + 1);
                return sumIndexes;
            } else if (start === end && numbers[i] + numbers[mid] != target) {
                break;
            } else if (numbers[i] + numbers[mid] > target) {
                end = mid;
                mid = Math.floor((start + end) / 2);
            } else if (numbers[i] + numbers[mid] < target) {
                start = mid + 1;
                mid = Math.floor((start + end) / 2);
            }
        }
    }
};