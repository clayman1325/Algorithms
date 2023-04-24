var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxValue = 0;
    candies.forEach((candy) => maxValue = Math.max(maxValue, candy))

    for(const candy of candies) {
        result.push(candy + extraCandies >= maxValue)
    }
    return result;
};