/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
*/

// Method 1
var reverseVowels = function(s) {
    var reverseArr = [];
    var vows = new Set(['a', 'e', 'i', 'o', 'u']);
    var newS = "";
    for (var i=0; i<s.length; i++) {
        if (vows.has(s[i].toLowerCase())) {
            reverseArr.push(s[i]);
        }
    }
    var len = reverseArr.length - 1;
    for (var j=0; j<s.length; j++) {
        if (vows.has(s[j].toLowerCase())) {
            newS = newS.concat(reverseArr[len]);
            len--;
        } else {
            newS = newS.concat(s[j])
        }
    }
    return newS;
};

// Method 2
var reverseVowels = function(s) {
    var vows = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var start = 0;
    var sArr = s.split('');
    var end = sArr.length - 1;
    while (start < end) {
        while (start < end && !vows.has(sArr[start])) {
            start++;
        }
        while (start < end && !vows.has(sArr[end])) {
            end--;
        }
        var temp = sArr[end];
        sArr[end] = sArr[start];
        sArr[start] = temp;
        start++;
        end--;
    }
    return sArr.join('');
};