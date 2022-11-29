function generateDocument(characters, document) {
  const charsMapped = mapChars(characters);

  for (let i = 0; i < document.length; i++){
    const char = document[i];

    if(charsMapped[`${char}`]){
      charsMapped[`${char}`] -= 1
      if (charsMapped[`${char}`] < 0 ) { return false }
    } else {
      return false
    }
  }
  return true;
}

const mapChars = (characters) => {
  const charToObj = {};
  for(let i=0; i < characters.length; i++){
    const char = characters[i];
    if (charToObj[`${char}`]) {
      charToObj[`${char}`] += 1
    } else {
      charToObj[`${char}`] = 1;
    }
  }
  return charToObj
}

exports.generateDocument = generateDocument;