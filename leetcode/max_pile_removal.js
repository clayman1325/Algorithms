const arr = [7,4,5,2,6,5]
const arr1 = [6,2,9,4,7,5,2]

function test(arr) {
    let result = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        console.log(Math.min(arr[i], arr[i+1] - 1))
        result += Math.min(arr[i], arr[i+1] - 1);
        arr[i] -= Math.min(arr[i], arr[i+1] - 1)
    }
    console.log(arr)
    return result;
}

console.log(test(arr))
console.log(test(arr1))