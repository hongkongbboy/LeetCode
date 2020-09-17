/*
You are given a string s, return the number of segments in the string. 

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
Example 3:

Input: s = "love live! mu'sic forever"
Output: 4
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 300
s consists of lower-case and upper-case English letters, digits or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/

// Method 1
var countSegments = function(s) {
    var newS = s.split(' ');
    var count = 0;
    for (var i=0; i<newS.length; i++) {
        if (newS[i].length === 0) {
            continue;
        } else {
            count+=1;
        }
    }
    return count;
};

// Method 2
var countSegments = function(s) {
    var count = 0;
    for (var i=0; i<s.length; i++) {
        if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') count++;
    }
    return count++;
};