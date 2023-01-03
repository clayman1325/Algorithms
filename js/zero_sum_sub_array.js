function zeroSumSubarray(nums) {
  const partialSum = new Set([0]);
  let currentSum = 0;
  for(const num of nums) {
    currentSum += num;
    if(partialSum.has(currentSum)) return true;
    partialSum.add(currentSum);
  }
  return false;
}
