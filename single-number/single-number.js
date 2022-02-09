/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1
        }
    }
    
    for (let j in obj) {
        if (obj[j] === 1) {
            return j
        }
    }
};
