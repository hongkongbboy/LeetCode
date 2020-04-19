// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

var minPathSum = function (grid) {
    if (grid.length === 0 || grid === null) {
        return 0;
    }
    // Replace the elemenet in array using dynamic programming.
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            // If in position of top left corner, stay the same
            if (i === 0 && j === 0) {
                continue;
            // If in the position of the first row, we will add the value on that position with the number from the left
            } else if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            // If in the position of the first column for each row, we will add the value on that position with the number of the same column from the last row
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            // For any other position, add the value of the position with the smaller value of the element in the top or the left side
            } else {
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
            }
        }
    }
    // console.log(grid);
    return grid[grid.length - 1][grid[0].length - 1];
};

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
])