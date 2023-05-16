var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;

    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
} 