var longestOnes2 = function(nums, k) {
    let zeros = 0;
    let l = 0;
    let r = 0;
    let count = 0;
    let max = 0;

    while(l <= r && r < nums.length) {
        if(nums[r] == 1 || zeros < k) {
            if(nums[r] == 0) zeros++;
            count++;
            r++;
        } else {
            max = Math.max(max, count);
            l = l + 1;
            r = l;
            count = 0;
            zeros = 0;
        }
    }
    return Math.max(max, count);;
};