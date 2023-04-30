var isSubsequence = function(s, t) {
    if(t.length == 1 && s.length == 1 && s != t) return false;

    let sRef = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] == s[sRef]) sRef++;
    }

    return (sRef >= s.length)
};