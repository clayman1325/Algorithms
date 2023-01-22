// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(this.value <= value){
      if(this.right == null){
        this.right = new BST(value);
      } else {
        this.right.insert(value)
      }
    }
    if(this.value > value) {
      if (this.left == null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    }
  }

  contains(value) {
    if(this.value == value) {
      return true;
    }
    if(this.left == null && this.right == null) {
      return false
    }

    if(this.value <= value && this.right) {
      return this.right.contains(value);
    } else if(this.left) {
      return this.left.contains(value);
    }
  }

  remove(value) {
    const nodeFound = this.findNode([], value);
    let [targetNode, stack] = nodeFound || [this, []]
    const parent = stack.pop();
    
    if(!parent) {
      if (targetNode && targetNode.right) {
        let leftNode = targetNode.right.findDeepLeftNode();
        let [node, leftNodeAncestors] = this.findNode(stack, leftNode.value)
        const parent = leftNodeAncestors.pop();
        targetNode.value = leftNode.value
        if(parent != targetNode) {
          parent.left = null
        } else {
          parent.right = null
        }
      } else if(targetNode && targetNode.left) {
        let leftNode     = targetNode.left;
        targetNode.value = leftNode.value
        targetNode.left  = leftNode.left
        targetNode.right = leftNode.right
        leftNode = null
      }
    } else {
      if(targetNode.left == null && targetNode.rigth == null){
        if(parent.left){
          if(parent.left.value == value) { parent.left = null }
        } else if(parent.right) {
          if(parent.right.value == value) { parent.right = null } 
        }
      } else if(targetNode.left == null) {
        if(parent.left){
          if(parent.left.value == value) { parent.left = targetNode.right }
        } else if(parent.right) {
          if(parent.right.value == value) { parent.right = targetNode.right } 
        }
      } else if(targetNode.right == null) {
        if(parent.left){
          if(parent.left.value == value) { parent.left = targetNode.left }
        } else if(parent.right) {
          if(parent.right.value == value) { parent.right = targetNode.left } 
        }
      } else {
          if(parent.left){
            if(parent.left.value == value) { parent.left = targetNode.left }
          } else if(parent.right) {
            if(parent.right.value == value) { parent.right = targetNode.left } 
          }
      }
          
    }
    return [];
  }

  findNode(stack, value) {
    if(this.value == value) {
      return [this, stack];
    }
    if(this.left == null && this.right == null) {
      return [[], stack]
    }

    if(this.value <= value) {
      if(this.right) {
        stack.push(this)
        return this.right.findNode(stack, value);
      }
    } else {
      if(this.left) {
        stack.push(this)
        return this.left.findNode(stack, value);
      }
    }
  }

  findDeepLeftNode() {
    if(this.left == null) {
      return this;
    }

    return this.left.findDeepLeftNode()
  }
}

// Do not edit the line below.
exports.BST = BST;
