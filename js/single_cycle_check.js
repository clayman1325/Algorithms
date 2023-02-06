// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    array = this.recursiveBFS(array, []);
    return array
  }

  recursiveBFS(array, queue) {
    array.push(this.name);

    for (const node of this.children) {
      queue.push(node);
    }

    const nextElement = queue.splice(0,1);
    
    if(nextElement[0]) {
      nextElement[0].recursiveBFS(array, queue)
    }

    if (queue.length == 0) {
      return array
    }
  }
}

// Do not edit the line below.
exports.Node = Node;
