var productExceptSelf = function(nums) {
    let answer = [];
    let left   = new Array(nums.length).fill(1);
    let right  = [1];

    for(let i = 1, j = nums.length - 2; i < nums.length; j--, i++) {
        left[j]  = nums[j+1] * left[j+1];
        right[i] = right[i-1] * nums[i-1];
    }

    for(let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
};