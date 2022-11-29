function runLengthEncoding(string) {
  const numLimit       = 8;
  let runLength        = "";
  let currentNum       = 1
  let currentNumLength = 1
  
  for (let i = 0; i < string.length; i++){
    const isDifferentChar = (string[i] != string[i+1])
    const reachNumLimit   = (currentNumLength > numLimit)
    
    if (isDifferentChar || reachNumLimit){
      runLength += currentNum + string[i];
      currentNum       = 1;
      currentNumLength = 1;
    } else{
      currentNum += 1;
      currentNumLength += 1;
    }
  }

  return runLength
}