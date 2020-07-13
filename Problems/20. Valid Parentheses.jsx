/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

// Method 1
var isValid = function(s) {
    if (s.length === 0) return true;
    if (s.length % 2 === 1) return false;
    var stack = "";
    for (var i=0; i<s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack.length === 0) return false;
            if (s[i] === ')' && stack[stack.length - 1] !== '(') {
                return false;
            } else if (s[i] === '}' && stack[stack.length - 1] !== '{') {
                return false;
            } else if (s[i] === ']' && stack[stack.length - 1] !== '[') {
                return false;
            } else {
                stack = stack.slice(0, stack.length - 1);
            }
        }
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack = stack.concat(s[i]);
        
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
};

// Method 2
var isValid = function(s) {
    if (s.length === 0) return true;
    var obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    var stack = [];
    for (var ele of s) {
        if (obj.hasOwnProperty(ele)) {
            stack.push(ele)
        } else {
            var prevEle = stack.pop();
            if (obj[prevEle] !== ele) {
                return false;
            }
        }
    }
    return stack.length === 0;
};