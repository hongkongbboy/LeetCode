// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function (grid) {
    // Set a variable to hold the number of island
    var numIsland = 0;
    // loop through each element of array of array and if it's '1', then add to the number of island
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                numIsland += 1;
                transformSurround(i, j, grid)
            }
        }
    }
    // After add the number of island, we use a helper function to transform the surrounding '1' to 0 until we hit anything non-'1'

    // end with returning the number of island

    return numIsland;
};

var transformSurround = function (i, j, grid) {
    if (i < 0 || i > grid.length - 1) {
        return;
    }
    if (j < 0 || j > grid[0].length - 1) {
        return;
    }
    if (grid[i][j] !== '1') {
        return;
    }
    if (grid[i][j] === '1') {
        grid[i][j] = '0';
    }
    // console.log('grid', grid)
    transformSurround(i, j - 1, grid);
    transformSurround(i, j + 1, grid);
    transformSurround(i - 1, j, grid);
    transformSurround(i + 1, j, grid);
}

// numIslands([['1','1','1','1','0'], ['1','1','0','1','0'], ['1','1','0','0','0'], ['0','0','0','0','0']]) // Expected Output: 1