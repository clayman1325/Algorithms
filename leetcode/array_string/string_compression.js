var compress = function(chars) {
    let finish = chars.length;
    if(finish < 2) return 1;
    let idx = 0
    let left = 0;
    let right = 0;
    let count = 1;


    for(let i = 0; i < finish; i++) {
        if(chars[left] != chars[right+1]){
            chars[idx] = chars[left];
            if(count > 1 && count < 10) {
                chars[idx + 1] = `${count}`;
                idx += 2;
            } else if(count >= 10) {
                idx += plotBigNum(chars, idx, count)
            } else {
                idx++;
            }
            left = right + 1;
            right++
            count = 1;
        } else {
            count++
            right++
        }
    }
    return idx;
}

function plotBigNum(chars, idx, count) {
    let positions = [];
    getPositions(count, 10, positions);

    let j = 1;
    for(let i = positions.length - 1; i >= 0; i--) {
        chars[idx + j] = `${positions[i]}`;
        j++;
    }

    return positions.length + 1;
}

function getPositions(count, exp, result) {
    console.log(count)
    if(count == 0) {
        return
    }

    value = count % 10
    count = Math.floor(count / 10)

    result.push(value)

    getPositions(count, exp, result)
}