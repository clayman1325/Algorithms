var maxLevelSum = function(root) {
    const levels = [];
    let curSum = 0;
    let q = [root];
    let children = q.length;

    while(q.length > 0) {
        for(let i = 0; i < children; i++) {
            const cur = q.shift();
            if(cur && cur.left) q.push(cur.left);
            if(cur && cur.right) q.push(cur.right)

            curSum += cur.val;
        }
        curSum = 0;
        levels.push(curSum)
        children = q.length
    }

    let max = -10000;
    let winner = 0;
    for(let i = 0; i < levels.length; i++) {
        if(levels[i] > max) {
            max = levels[i];
            winner = i + 1;
        }
    }
    return winner
};