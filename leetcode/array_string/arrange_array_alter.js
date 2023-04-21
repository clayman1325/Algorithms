var mergeAlternately = function(word1, word2) {
    return mergeString(word1, word2, "", 0, 0);;
};

const mergeString = (word1, word2, str, i, j) => {
    if(word1.length <= i && word2.length <= j) {
        return str
    }
    if(word1.length <= i) {
        str += word2.slice(j);
        return str
    } else if(word2.length <= j) {
        str += word1.slice(i);
        return str
    }

    if(i === j) {
        str += word1[i]
        str = mergeString(word1, word2, str, i+1, j)
    } else {
        str += word2[j]
        str = mergeString(word1, word2, str, i, j+1)
    }

    return str;
}