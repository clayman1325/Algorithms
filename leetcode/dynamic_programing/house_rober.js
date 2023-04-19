var rob = function(nums) {
    if(nums.length <= 1 ) return nums[0]
    let cur = Math.max(nums[0], nums[1]);
    nums[1] = cur;
    for(let i = 2; i < nums.length; i++) {
        cur = Math.max(nums[i] + nums[i-2], cur)
        nums[i] = cur;
    }
    return cur;
};