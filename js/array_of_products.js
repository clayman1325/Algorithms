function arrayOfProducts(array) {
  const result       = []
  const arrayLength  = array.length
  const rightSection = [1];
  const leftSection  = new Array(arrayLength);
  leftSection[arrayLength - 1] = 1;

  for(let i = 1; i < arrayLength; i++) {
    rightSection[i] = array[i-1] * rightSection[i-1];
  }
  for(let i = arrayLength - 2; i >= 0; i--) {
    leftSection[i] = leftSection[i+1] * array[i+1];
  }
  console.log(rightSection, leftSection)
  for(let i = 0; i< arrayLength; i++){
    result[i] = leftSection[i] * rightSection[i];
  }
  return result;
}

exports.arrayOfProducts = arrayOfProducts;
