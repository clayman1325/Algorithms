
// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const ancestorsArray1 = recAncestors(descendantTwo, [])
  const ancestorsArray2 = recAncestors(descendantOne, [])
  let commonAncestors   = []
  
  let i = ancestorsArray1.length - 1;
  let j = ancestorsArray2.length - 1;
  
  while(j >= -1 && i >= -1){
    if(ancestorsArray1[i]!= ancestorsArray2[j]) {
      commonAncestors = (i<j) ? ancestorsArray1[i+1] : ancestorsArray2[j+1];

      i = -1;
    }
    i--
    j--
  }

  return commonAncestors;
}

function recAncestors(node, array) {
  if(node.ancestor == null) {
    return [node];
  }

  const ancestor = [node].concat(recAncestors(node.ancestor, array))

  return ancestor
}

exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
