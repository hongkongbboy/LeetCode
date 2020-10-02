/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2
 

Constraints:

1 <= s.length <= 2000
s consits of lower-case and/or upper-case English letters only.
*/

var longestPalindrome = function(s) {
    var palindromeLen = 0;
    var objS = {};
    for (var i=0; i<s.length; i++) {
        if (objS[s[i]] >= 1) {
            objS[s[i]]+=1;
        } else {
            objS[s[i]] = 1;
        }
    }
    // console.log(objS)
    for (var ele in objS) {
        palindromeLen += 2 * Math.floor(objS[ele] / 2);
    }
    if (palindromeLen < s.length) {
        palindromeLen++;
    }
    return palindromeLen;
};