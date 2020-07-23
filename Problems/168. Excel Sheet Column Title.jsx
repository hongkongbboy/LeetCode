/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
*/

var convertToTitle = function (n) {
    var characters = "";
    while (n > 0) {
        n--;
        // console.log(n)
        characters = String.fromCharCode(65 + (n % 26)).concat(characters);
        n = (n - (n % 26)) / 26;
    }
    return characters;
};