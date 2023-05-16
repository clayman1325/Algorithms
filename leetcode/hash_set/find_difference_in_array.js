var findDifference = function(nums1, nums2) {
    const result = [[], []]
    const set1 = buidlSet(nums1);
    const set2 = buidlSet(nums2);

    result[0] = findMissingElements(set2, nums1)
    result[1] = findMissingElements(set1, nums2)

    return result;
};

function buidlSet(array) {
    let set = new Set();
    for(const num of array) {
        if(!set.has(num)) set.add(num);
    }
    return set;
}
function findMissingElements(set, array) {
    result = new Set()
    for(const num of array) {
        if(!set.has(num)) result.add(num);
    }
    return Array.from(result);
}