function ambiguousMeasurements(measuringCups, low, high) {
  const memoization = {}
  return measure(measuringCups, low, high, memoization);
}

function measure(measuringCups, low, high, memoization) {
  const memoizeKey = low.toString() + ':' + high.toString();
  if(memoizeKey in memoization) return memoization[memoizeKey];

  if (low <= 0 && high <= 0) return false;

  let canMeasure = false;
  for(const cup of measuringCups) {
    const [lowCup, highCup] = cup;
    if(low <= lowCup && highCup <= high) {
      canMeasure = true;
      break;
    }

    const newLow  = Math.max(0, low - lowCup);
    const newHigh = Math.max(0, high - highCup);
    canMeasure = measure(measuringCups, newLow, newHigh, memoization);
    if(canMeasure) break;
    // return canMeasure
  }
  memoization[memoizeKey] = canMeasure
  return canMeasure
}
// Do not edit the line below.
exports.ambiguousMeasurements = ambiguousMeasurements;
