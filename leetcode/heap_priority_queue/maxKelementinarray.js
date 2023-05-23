
var findKthLargest2 = function(nums, k) {
    let heap = new Array(k).fill(-10000);

    for(let i = 0; i < nums.length; i++) {
        heap = insertElement(heap, nums[i]);
    }

    return heap[heap.length - k];
};

function insertElement(heap, num) {
    for(let i =  heap.length - 1; i >= 0; i--){
        if(heap[i] < num) {
            const aux = heap[i];
            heap[i]   = num;
            num       = aux;
        }
    }

    return heap;
}