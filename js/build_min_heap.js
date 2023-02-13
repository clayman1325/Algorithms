// Do not edit the class below except for the buildHeap,

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor(array.length - 2) / 2;
    for(let idx = firstParentIdx; idx >= 0; idx--) {
      this.siftDown(idx, array.length - 1, array);
    }
    return array
  }

  siftDown(idx, endIdx, heap) {
    let childOneIdx = idx * 2 + 1;
    while(childOneIdx <= endIdx){
      const childTwoIdx = idx * 2 + 2 <= endIdx ? idx * 2 + 1: -1;
      let idxToSwap;
      if(childOneIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if(heap[idxToSwap] < heap[idx]) {
        this.swap(idx, idxToSwap, heap);
        idx = idxToSwap;
        childOneIdx = idx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(idx, heap) {
    let parentIdx = Math.floor((idx - 1) / 2);
    while(idx > 0 && heap[idx] < heap[parentIdx]) {
      this.swap(idx, parentIdx, heap);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
