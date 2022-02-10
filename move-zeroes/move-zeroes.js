/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    const orgLength = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let index = nums.indexOf(nums[i])
            nums.splice(index, 1);
            nums.push(0)
        }
    }
    
    return nums
};