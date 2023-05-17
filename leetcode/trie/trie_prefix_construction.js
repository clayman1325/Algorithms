var Trie = function() {
    this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    word = word.split("");
    let newTrie = {};
    for(let i = word.length - 1; i >= 0; i--) {
        const char = word[i];
        if(newTrie[char]) {
            const prevElement = newTrie[word[i+1]]
            const newElement = {}
            newElement[char]  = prevElement;
            if(Array.isArray(newTrie[word[i]])) {
                newTrie[char] = newTrie[char].concat([newElement])
            } else {
                newTrie[char] = [prevElement].concat([newElement])
            }
        } else {
            if(Object.keys(newTrie).length == 0) {
                newTrie[char] = "*";
            } else {
                const newElement = {}
                newElement[word[i+1]] = newTrie[word[i+1]];
                newTrie[char] = newElement;
            }
        }
    }

    if(this.trie[word[0]]) {
        const prevElement = this.trie[word[0]]
        const newElement = {}
        newElement[word[1]] = newTrie[word[1]];
        if(Array.isArray(this.trie[word[0]])) {
            this.trie[word[0]] = this.trie[word[0]].concat([newElement])
        } else {
            this.trie[word[0]] = [prevElement].concat([newElement])
        }
    } else {
        const newElement = {}
        newElement[word[1]] = newTrie[word[1]];
        this.trie[word[0]] = newElement;
    }
};

// "apple"
// {
//     a: {p:},
//     p: [{l:}, {p: l}]
//     l: {e:},
//     e: "*",
//  }

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    word = word.split("");
    let testTrie = this.trie;
    for(const char of word) {
        console.log(char," char",testTrie[char])
        if(testTrie[char]) {
            console.log(" char2",testTrie[char])
            testTrie = testTrie[char];
        } else if(Array.isArray(testTrie[char])){
            console.log(testTrie[char]," apple")
            for(const opt of testTrie[char]) {
                if(opt[char]) {
                    testTrie = testTrie[char];
                    continue
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */