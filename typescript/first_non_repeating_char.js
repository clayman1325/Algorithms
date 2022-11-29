function firstNonRepeatingCharacter(string) {
  if(string.length == 1) { return 0 }
  const setOfChar = new Set()
  const repeatChar = new Set()

  for (let i = 0; i < string.length; i++) {
    const char = setOfChar.has(string[i]);

    if(char) {
      repeatChar.add(string[i])
      setOfChar.delete(string[i])
    } else if(!repeatChar.has(string[i])) {
      setOfChar.add(string[i])     
    }
  }

  if (setOfChar.size == 0 ){ return -1 }
  const nonRepetiveChar = [...setOfChar][0]  

  const targetIndex = 0;
  for (let i = 0; i < string.length; i++) {
    if(string[i] == nonRepetiveChar){
      return i
    }
  }
}

exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;