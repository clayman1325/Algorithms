
class TrieNode {
    constructor() {
        this.children = {};
        this.endWord = false;
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let curNode = this.root;

    for(const cha of word) {
        if(!curNode.children[cha]) {
            curNode.children[cha] = new TrieNode();
        }
        curNode = curNode.children[cha];
    }

    curNode.endWord = true;
};


/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curNode = this.root;

    for(const cha of word) {
        if(!curNode.children[cha]) return false;
        curNode = curNode.children[cha];
    }
    return curNode.endWord == true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curNode = this.root;

    for(const cha of prefix) {
        if(!curNode.children[cha]) return false;
        curNode = curNode.children[cha];
    }
    return true;
};