function bs(array) {
    let   left   = 0;
    let   right  = array.length - 1;
    const target = 5;
    let   result = -1;

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(array[mid] == target) {
            result = mid;
            left = right + 1;
        } else if(array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
const array = [1,2,3,4,5]
console.log(bs(array))