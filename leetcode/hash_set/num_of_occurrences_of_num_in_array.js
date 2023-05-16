
var uniqueOccurrences = function(arr) {
    const hash = buildHash(arr);
    const set = new Set();
    for(const key in hash) {
        if(set.has(hash[key])) return false;
        set.add(hash[key])
    }
    return true;
};
var uniqueOccurrences2 = function(arr) {
    const hash = buildHash(arr);
    const ocurrences = new Set(Object.values(hash));

    return (Object.keys(hash).length == ocurrences.size)
};

function buildHash(array) {
    let hash = {};
    for(const num of array) {
        hash[num] = hash[num] + 1 || 1;
    }
    return hash;
}