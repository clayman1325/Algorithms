function getPermutations(array, posibilities=[]) {
  const permutations = [];
  buildPermutations(array, [], permutations);
  return permutations;
}

function buildPermutations(array, currentPermutation, permutations){
  if(!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for(let i= 0; i< array.length; i++) {
      const newArray = array.slice(0,i).concat(array.slice(i + 1 ));
      const newPermutation = currentPermutation.concat([array[i]]);
      buildPermutations(newArray, newPermutation, permutations)
    }
  }
}
// Do not edit the line below.
exports.getPermutations = getPermutations;
