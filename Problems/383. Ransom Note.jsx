/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

You may assume that both strings contain only lowercase letters.
*/

// Method 1
var canConstruct = function(ransomNote, magazine) {
    var magazineCount = {};
    for (var i=0; i<magazine.length; i++) {
        if (magazineCount[magazine[i]] >= 1) {
            magazineCount[magazine[i]]++;
        } else {
            magazineCount[magazine[i]] = 1;
        }
    }
    for (var j=0; j<ransomNote.length; j++) {
        if (magazineCount[ransomNote[j]] <= 0 || magazineCount[ransomNote[j]] === undefined) {
            return false;
        } else {
            magazineCount[ransomNote[j]]--;
        }
    }
    return true;
};
