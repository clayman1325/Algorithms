var longestCommonSubsequence = function(text1, text2) {
    text1 = text1.split("");
    text2 = text2.split("");

    const cols = new Array(text2.length).fill(0);
    const board = [];

    for(let i = 0; i < text1.length; i++) {
      board[i] = [...cols];
    }

    for(let j = 0; j < text2.length; j++) {
      if(text2[j] == text1[0]) board[0][j] = 1;
    }

    for(let i = 1; i < text1.length; i++) {
      board[i][0] = board[i - 1][0];
      if(text1[i] == text2[0]) board[i][0] += 1;
    }

    for(let i = 1; i < text1.length; i++){
      for(let j = 1; j < text2.length; j++) {
        const prevValUp = board[i - 1][j];
        const prevValLeft = board[i][j - 1];
        board[i][j] = text2[j] == text1[i] ? 1 + board[i-1][j-1] : Math.max(prevValUp, prevValLeft);
      }
    }

    return board[text1.length - 1][text2.length - 1];
  };