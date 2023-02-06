// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

  createSet(value) {
    this.parents[value] = value;
    this.ranks = 0;
  }

  find(value) {
    if(!(value in this.parents)) return null;

    if(value !== this.parents[value]) {
      this.parents[value] = this.find(this.parents[value]);
    }

    return this.parents[value];
  }

  union(valueOne, valueTwo) {
    if(!(valueOne in this.parents) || !(valueTwo in this.parents)) return;

    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    if(this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot;
    } else if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot;
    } else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
  }
}

// Do not edit the line below.
exports.UnionFind = UnionFind;
