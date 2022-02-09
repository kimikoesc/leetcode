/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (check[nums[i]]) {
            return true
        } else {
            check[nums[i]] = 1
        }
    }
    
   return false
};