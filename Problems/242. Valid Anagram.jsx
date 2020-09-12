/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function(s, t) {
    var obj = {};
    for (var i=0; i<s.length; i++) {
        if (obj[s[i]] >= 1) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    for (var j=0; j<t.length; j++) {
        if (obj[t[j]]) {
            obj[t[j]]--;
        } else {
            return false;
        }
    }
    for (var ele in obj) {
        if (obj[ele] > 0) {
            return false;
        }
    }
    return true;
};