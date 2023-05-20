var longestSubarray = function(nums) {
    if(nums.length < 2) return 0;
    if(!nums.includes(0)) return nums.length - 1;

    let count = 0;
    let max = 0;
    let zero = 0
    const j = nums[0] == 0 ? 1 : 0;
    for(let i = j; i < nums.length; i++) {
        if(nums[i] == 1) {
            count++;
        } else if(nums[i] == 0){
            if(zero < 1) {
                zero++
            } else {
                max = Math.max(max, count);
                zero = 0;
                count--;
            }
        }
    }
    return Math.max(max, count);
}