/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/

// Method 1
var isIsomorphic = function(s, t) {
    var objS = {};
    var objT = {};
    for (var i = 0; i< s.length; i++) {
        if (objS[s[i]] !== undefined && objT[t[i]] !== undefined) {
            objS[s[i]].push(i);
            objT[t[i]].push(i);
            // console.log(objS);
            // console.log(objT);
            if (objS[s[i]] !== objT[t[i]]) {
                return false;
            }
        } else {
            var int = [i];
            objS[s[i]] = int;
            objT[t[i]] = int;
            // console.log(objS);
            // console.log(objT);
        }
    }
    if (Object.values(objS).length !== Object.values(objT).length) {
        return false;
    } else {
        return true;
    }
};