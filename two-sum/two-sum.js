/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        let missingNum = target - nums[i];
        let indexOfMN = nums.indexOf(missingNum);
        if (nums.includes(missingNum) && indexOfMN !== i) {
            return [i, indexOfMN]
        }
    }
};