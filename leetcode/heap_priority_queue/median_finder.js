MedianFinder.prototype.addNum = function(num) {
    this.queue.push(num);
    this.total += num;

    let i = this.queue.length - 2;
    while(i >= 0 && num > this.queue[i]) {
        const aux = this.queue[i+1];
        this.queue[i+1] = this.queue[i];
        this.queue[i] = aux;
        i--
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.total == 0) return 0;

    const length = this.queue.length;
    const even = 1 + this.queue[(length) / 2 ] + this.queue[(length) / 2 ]

    return length % 2 == 0 ? even / 2 : this.queue[(length - 1) / 2 ]
};