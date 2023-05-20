var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false;
    const map1 = buildMap(word1);
    const map2 = buildMap(word2);

    const keys1 =  new Set(Object.keys(map1));
    const keys2 =  new Set(Object.keys(map2));

    if(keys1.length != keys2.length) return false;

    for(const key of Object.keys(map1)) {
        if(!keys2.has(key)) return false;
    }

    const values1 =  Object.values(map1).sort((a,b) => a - b);
    const values2 =  Object.values(map2).sort((a,b) => a - b);

    for(let i = 0; i < values1.length; i++) {
        if(values1[i] != values2[i]) return false;
    }

    return true
};

function buildMap (word) {
    const hash = {}
    for(const char of word) {
        hash[char] = hash[char] + 1 || 1;
    }
    return hash;
}