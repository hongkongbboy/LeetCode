/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/


// Method 1:
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    // Create a variable to holds output value
    var longestPrefix = "";
    var charCount = 0;
    // Check each letter in the first string of the array and see if other strings in the array
    // match with the same character. If not, return the output value
    while (charCount < strs[0].length) {
        for (var i=1; i<strs.length; i++) {
            if (strs[0].charAt(charCount) !== strs[i].charAt(charCount)) {
                return longestPrefix;
            }
        }
        longestPrefix = longestPrefix.concat(strs[0][charCount]);
        charCount++;
    }
    return longestPrefix;
};

// Method 2:
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    var prefix = strs[0];
    for (var i=1; i<strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);         
        }
    }
    return prefix;
};