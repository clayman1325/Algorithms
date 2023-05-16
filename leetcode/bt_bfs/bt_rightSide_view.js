var rightSideView = function(root) {
    if (!root) return [];

    let result = [root.val];
    let queue = [];
    if(root.left)  queue.push(root.left)
    if(root.right) queue.push(root.right)
    if(queue.length > 0) result.push(queue[queue.length-1].val);

    while(queue.length > 0) {
        root = queue.shift();

        if(root) {
            if(root.left)  queue.push(root.left)
            if(root.right) queue.push(root.right)
            if(queue.length > 0 && root.val == result[result.length - 1]){
                result.push(queue[queue.length-1].val);
            }
        }
    }

    return result;
}