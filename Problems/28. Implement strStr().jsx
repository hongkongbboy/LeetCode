/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

// Method 1:
var strStr = function(haystack, needle) {
    // exception
    if (needle.length === 0) return 0;
    var start = 0;
    // loop through haystack
    for (var i=0; i<haystack.length; i++) {
        start = i;
        for (var k=0; k<needle.length; k++) {
            // if match, loop through needle array and see the rest of the characters match
            if (haystack[i + k] === needle[k] && k === needle.length - 1) {
                // if yes, return the first index of the match
                return i;
            } else if (haystack[i + k] !== needle[k]) {
                break;
            }
        }
    }
    // at the end of the loop, return false
    return -1;
};

// Method 2:
