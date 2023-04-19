var canPartition2 = function(nums) {
    let result = false;
    nums = nums.sort((a,b) => a - b)
    for(let i = 0; i < (nums.length / 2); i++) {
        for (let j = 0; j < nums.length; j++) {
            const leftSubArray  = subArray(nums, 0, i);
            const rightSubArray = subArray(nums, i+1, nums.length -1);
            const leftSum  = sumArray(leftSubArray)
            const rightSum = sumArray(rightSubArray)
            nums = shiftArray(nums, 1)
            console.log(leftSubArray, nums)

            if(leftSum === rightSum) return true;
        }
    }

    return result;
};

const sumArray = function(array) {
    return array.reduce((accu, number) => accu + number, 0)
}

const subArray = function(array, start, finish) {
    let subArray = [];
    for(let i = 0; i < array.length; i++) {
        if(i >= start && i <= finish) {
            subArray.push(array[i])
        }
    }
    return subArray;
}
const shiftArray = function(array, index) {
    let newArray = [...array];
    let nextArray = newArray.splice(index)
    nextArray = nextArray.concat([...newArray])

    return nextArray;
}
