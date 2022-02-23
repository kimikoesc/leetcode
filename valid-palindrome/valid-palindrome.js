/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sCopy = s.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s/g, "");
    const sCopyReverse = sCopy.split('').reverse().join('');
    
    console.log(sCopy, sCopyReverse)
    return sCopy === sCopyReverse;
};