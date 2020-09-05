/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?

 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 40
*/

var getRow = function(rowIndex) {
    var arr = [];
    var index = 0;
    while (index <= rowIndex) {
        for (var i=0; i<index + 1; i++) {
            if (i === 0 || i === index) {
                arr.push(1);
            } else {
                arr.push(arr[i - 1] + arr[i]);
            }
        }
        
        arr = arr.slice(index);
        index++;
    }
    return arr;
};