var findPeakElement = function(nums) {
    if(nums.length == 1) return 0;
    if(nums.length == 2) return (nums[0]> nums[1]) ? 0 : 1;

    let l = 0;
    let r = nums.length - 1;

    if(nums[l] > nums[l+1]) return l;
    if(nums[r] > nums[r-1]) return r;

    const result = bSearch(nums, l, r)

    return result;


};

function bSearch(nums, l, r) {
    const m = l + Math.floor((r - l) / 2);

    if(nums[m] > nums[m+1] && nums[m] > nums[m-1]) return m;

    let result = false;

    if(m + 1 <= r) result = bSearch(nums, m + 1, r) || result;
    if(l <= m - 1) result = bSearch(nums, l, m - 1) || result;

    return result;
}