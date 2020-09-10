/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
Example :

Input: n = 10, pick = 6
Output: 6
*/

var guessNumber = function(n) {
    var start = 1;
    var mid = Math.floor((1+n)/2);
    var end = n;
    while (guess(mid) !== 0) {
        if (guess(mid) === 1) {
            start = mid;
            mid = Math.ceil((start + end)/2);
        } else if (guess(mid) === -1) {
            end = mid;
            mid = Math.floor((start + end)/2);
        }
    }
    return mid;
};