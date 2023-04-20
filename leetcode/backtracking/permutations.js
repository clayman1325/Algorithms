/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var permute = function(nums) {
    let combinations = [];
    for(let i = 0; i < nums.length; i++){
        const combination = recCombinations(nums);
        console.log(nums)
        nums = reOrderArray(nums);
        console.log(nums)
        combinations = combinations.concat(combination)
    }

    return combinations
};

const recCombinations = function(nums) {
    if(nums.length == 1) {
        return [nums];
    }

    const first      = nums[0]
    let right        = nums.slice(1);
    let combinations = [];

    for(let i = 0; i < right.length; i++){
        const combination = recCombinations(right);
        right = reOrderArray(right);
        combinations = combinations.concat(combination);
    }
    for(let i = 0; i < combinations.length; i++) {
        combinations[i] = [first].concat(combinations[i])
    }

    return combinations
}

const reOrderArray = function(array) {
    let newArray = array.slice(1);
    newArray.push(array[0])
    return newArray;
}

// recCombinations(array)
//     if(array.length == 1) {
//         return array
//     }

//     first = array[0]
//     arrays = []
//     for(let i = 1; i < array.length -1; i++) {
//         const subArray = recCombinations(array[1,length])
//         array = reorderArray(array[1,length])
//         arrays = array.concat(first + subArray)
//     }

