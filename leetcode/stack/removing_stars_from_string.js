var removeStars = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] != "*") stack.push(s[i]);
        if(s[i] == "*") {
            stack.pop();
        }
    }
    return stack.join("");
};

// s = "leet**cod*e"
// s = lecoe