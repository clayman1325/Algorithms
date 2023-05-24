var uniquePaths = function(m, n) {
    let cols = new Array(n).fill(1);
    let board = [];

    for(let i= 0; i < m; i++) {
        board[i] = [...cols];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1]
        }
    }

    return board[m-1][n-1];
}