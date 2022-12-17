function semordnilap(words) {
  const wordSet = new Set(words)
  const result = []

  for(const word of words) {
    const reverse = word.split("").reverse().join("");
    if(wordSet.has(reverse) && reverse !== word) {
      result.push([word, reverse]);
      wordSet.delete(word);
      wordSet.delete(reverse);
    }
  }
  return result;
}

exports.semordnilap = semordnilap;