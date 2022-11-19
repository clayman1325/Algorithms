class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    if(this.childrenn == []){
      array.push(this.name)
    }
    
    array.push(this.name);

    for(let i=0; i < this.children.length ; i++){
      array.concat(this.children[i].depthFirstSearch(array))
    }
    
    return array
  }
}

exports.Node = Node;