var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);

    let total = 0;
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        if(nums[l] + nums[r] == k) {
            total++; l++; r--;
        } else {
            const moveL = nums[l] + nums[r] < k;
            (moveL) ? l++ : r--;
        }
    }

    return total;
};  