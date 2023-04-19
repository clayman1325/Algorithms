var canPartition = function(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) return false;
    sum /= 2;
    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;

    for(let num of nums) {
        for(let i = sum; i >= num; i--){
            console.log(num, i, dp)
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[sum];
}