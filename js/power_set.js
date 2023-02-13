function powerset(array) {
  let powerSet = [[]];

  for(let i=0; i < array.length; i++) {
    const element = array[i];
    let newArray = [];

    for(let j=0; j < powerSet.length; j++) {
      const powerSetCopy = [...powerSet]
      powerSetElement = powerSetCopy[j]
      powerSetElement.push(element)
      newArray = newArray.concat(powerSetElement)
    }
  }

  return powerSet;
}
exports.powerset = powerset;
