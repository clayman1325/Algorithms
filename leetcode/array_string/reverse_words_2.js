
var reverseWords = function(s) {
    s = s.split(" ")

    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        const aux = s[left];
        s[left] = s[right];
        s[right] = aux;
        left++;
        right--;
    }
    let reverse = [];
    for(const word of s) {
        if(word.length > 0) reverse.push(word)
    }

    return reverse.join(" ");
};