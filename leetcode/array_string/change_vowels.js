const vowels = new Set(["a","e","i","o","u"]);

var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    s = s.split("");

    while(left < right) {
        if (
            vowels.has(s[left].toLowerCase()) &&
            vowels.has(s[right].toLowerCase())
        ) {
            const aux = s[left];
            s[left]   = s[right];
            s[right]  = aux;

            left++;
            right--;
        }
        if(!vowels.has(s[left].toLowerCase())) left++;
        if(!vowels.has(s[right].toLowerCase())) right--;
    }

    return s.join("");
};