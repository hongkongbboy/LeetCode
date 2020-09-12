/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
 

Note:

1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
*/

// Method 1:
var mostCommonWord = function(paragraph, banned) {
    var start = 0;
    var newParagraph = "";
    while (start <= paragraph.length - 1) {
        if (paragraph[start] === "!" || paragraph[start] === "?" || paragraph[start] === "'" || paragraph[start] === "," || paragraph[start] === ";" || paragraph[start] === ".") {
            newParagraph = newParagraph.concat(" ");
        } else {
            newParagraph = newParagraph.concat(paragraph[start].toLowerCase());
        }
        start++;
    }
    var wordCounts = {};
    var paragraphArr = newParagraph.split(" ");
    for (var i=0; i<paragraphArr.length; i++) {
        if (banned.includes(paragraphArr[i]) || paragraphArr[i] === '') {
            continue;
        }
        if (wordCounts[paragraphArr[i]] >= 1) {
            wordCounts[paragraphArr[i]]++;
        } else {
            wordCounts[paragraphArr[i]] = 1;
        }
    }
    var highestCount = 0;
    var highestCountWord = "";
    for (var ele in wordCounts) {
        if (wordCounts[ele] > highestCount) {
            highestCount = wordCounts[ele];
            highestCountWord = ele;
        }
    }
    return highestCountWord;
};

// Method 2
var mostCommonWord = function(paragraph, banned) {
    var wordCount = {};
    var bannedWords = new Set(banned);
    var mostCommonCount = 0;
    var mostCommonWord = "";
    var paragraphWords = paragraph.split(/\W+/);
    for (var word of banned) {
        bannedWords.add(word);
    }
    for (var i=0; i<paragraphWords.length; i++) {
        var word = paragraphWords[i].toLowerCase();
        if (bannedWords.has(word)) {
            continue;
        }
        if (wordCount[word] >= 1) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    for (var ele in wordCount) {
        if (wordCount[ele] > mostCommonCount) {
            mostCommonCount = wordCount[ele];
            mostCommonWord = ele;
        }
    }
    return mostCommonWord;
};