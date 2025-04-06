/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [2, 3, -2, 4, -1];
var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    console.log(`Initial: maxProduct=${maxProduct}, minProduct=${minProduct}, result=${result}`);

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        // Compute maxProduct and minProduct using the given logic
        let tempMax = Math.max(num, num * maxProduct, num * minProduct);
        minProduct = Math.min(num, num * maxProduct, num * minProduct);
        maxProduct = tempMax;
        result = Math.max(result, maxProduct);

        console.log(`Step ${i}: num=${num}, maxProduct=${maxProduct}, minProduct=${minProduct}, result=${result}`);
    }

    return result;
};

// Test case
let nums = [2, 3, -2, 4, -1];
console.log("Final Max Product:", maxProduct(nums));
