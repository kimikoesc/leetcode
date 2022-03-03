/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== strs[0][i]) return prefix;
        }
        prefix = prefix + strs[0][i];
    }
    return prefix;  
};