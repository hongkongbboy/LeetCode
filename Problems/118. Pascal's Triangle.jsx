/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

var generate = function(numRows) {
    var arr = [];
    var rowLimit = 1;
    while (rowLimit <= numRows) {
        var arrRow = [];
        for (var i=0; i<rowLimit; i++) {
            if (i === 0 || i === rowLimit - 1) {
                arrRow.push(1);
            } else if (i === 1 && rowLimit === 2) {
                arrRow.push(1);
            } else if (i === 1 && rowLimit >= 3) {
                arrRow.push(arr[rowLimit - 2][i - 1] + arr[rowLimit - 2][i]);
            } else {
                arrRow.push(arr[rowLimit - 2][i - 1] + arr[rowLimit - 2][i]);
            }
        }
        arr.push(arrRow);
        rowLimit++;
    }
    return arr;
};