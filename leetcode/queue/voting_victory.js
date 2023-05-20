var predictPartyVictory = function(senate) {
    const n = senate.length;

    const rQueue = [];
    const sQueue = [];

    for (let i = 0; i < n; i++) {
        const char = senate.charAt(i);

        if (char === "R") rQueue.push(i);
        else sQueue.push(i);
    }

    let i = n;
    while(rQueue.length > 0 && sQueue.length > 0) {
      const rFirst = rQueue.shift();
      const sFirst = sQueue.shift();
      i = (i == senate.length - 1) ? 0 : i + 1;
      if(rFirst < sFirst) rQueue.push(i++);
      else sQueue.push(i++);
    }

    return rQueue.length === 0 ? "Dire" : "Radiant";
};