/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        s.push(s[i]);
    };
    
    for (let i = 0; i < s.length; i++) {
        s.shift();
    };
};