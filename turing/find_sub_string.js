const input1 = "bbbbaaaerrrccclkkkgiiii";
console.log(input2, findSubString(input2));

var findSubString = (input) => {
    result    = [];
    let queue = [];
    for(let i = 0; i < input.length; i++) {
        if(queue.length == 3) queue.shift();

        queue.push(input[i]);

        let test = true;
        for(let j = 1; j < 3; j++) {
            if(queue[j-1] != queue[j]) test = false
        }
        if(test) result.push([i-2, i])
    }
    return result;
}