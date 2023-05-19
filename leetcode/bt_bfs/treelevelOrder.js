var levelOrder = function(root) {
    if(!root) return []

    let result = [];
    let curResult = [];
    let q = [];
    q.push(root);
    let prevLevel = root.val;

    while(q.length > 0) {
      console.log(prevLevel)
      const cur = q.shift();

      if(cur && cur.left) {
        q.push(cur.left)
      }
      if(cur && cur.right) {
        q.push(cur.right)
      }

      curResult.push([cur && cur.val]);

      if(cur && cur.val == prevLevel){
        if(cur.left)  prevLevel = cur.left.val
        if(cur.right) prevLevel = cur.right.val
        if(cur && !cur.left && !cur.right) {
          prev =  q[q.length - 1];
          prevLevel = prev && prev.val;
        }
        result.push(curResult)
        curResult = []
      }
    }
    return result;
};