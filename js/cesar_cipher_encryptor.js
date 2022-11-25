function caesarCipherEncryptor(string, key) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let stringToIndex = [];
  let result = [];
  
  for (let i=0; i < string.length; i++ ){
    for (let j=0; j < letters.length; j++){
      if(string[i]== letters[j]) { 
        stringToIndex[i] = j + 1
      }
    }
  }
  
  let newValue;
  for (let i=0; i < string.length; i++ ){
    newValue = stringToIndex[i] + (key % 26)
    
    if(newValue > 26) { newValue = (newValue % 26) }
    
    result.push(letters[newValue - 1])
  }
  
  return result.join("");
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;