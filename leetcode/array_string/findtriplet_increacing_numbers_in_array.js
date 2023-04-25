var increasingTriplet = function(nums) {
    let a = 1000001;
    let b = 1000002;

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num < a)  a = num;
        if(num < b && num > a) b = num
        console.log(a, b, num)
        if(b != 1000002 && num > b) return true
    }
    return false
}


var increasingTriplet2 = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] < nums[j]) {
                for(let k = j + 1; k < nums.length; k++) {
                    if(nums[j] < nums[k]) return true;
                }
            }
        }
    }
    return false;
};
