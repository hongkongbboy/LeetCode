/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

// Method 1
var repeatedSubstringPattern = function(s) {
    if (s.length === 1) return false;
    var repeatObj = {};
    var str = "";
    for (var i=0; i<Math.ceil(s.length / 2); i++) {
        str = str.concat(s[i]);
        repeatObj[str] = 1;
    }
    for (var ele in repeatObj) {
        var newS = s;
        while(newS.length > 0) {
            if (newS.slice(0, ele.length) === ele) {
                newS = newS.slice(ele.length, newS.length);
            } else {
                break;
            }
            if (newS.length === 0) {
                return true;
            }
        }
    } 
    return false;
};

// Method 2
var repeatedSubstringPattern = function(s) {
    if (s.length === 1) return false;
    for (var i=0; i<s.length / 2; i++) {
        var subString = s.substring(0, i+1);
        var times = s.length / subString.length;
        if (Number.isInteger(times)) {
            if (subString.repeat(times) === s) {
                return true;
            }
        }
    }
    return false;
};