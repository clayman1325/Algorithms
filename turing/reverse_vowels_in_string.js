const input2 = "a-/gf-bGt";
console.log(input2, reverseString(input2));


var reverseString = (string) => {
    string = string.split("");
    let left = 0;
    let right = string.length - 1;
    let foundLeft = false;
    let foundRight = false;

    while(left < right) {
        const lAscii = string[left].charCodeAt(0);
        const rAscii = string[right].charCodeAt(0);
        const isLetter = findIndex = (found, ascii) => {
            return (!found && ascii >=65 && ascii <=122)
        }

        left, foundLeft = updatePointer("left",  left,  foundLeft, lAscii);
        right, foundRight = updatePointer("right", right, foundRight, rAscii);

        if(foundLeft && foundRight) {
            const aux = string[left];
            string[left] = string[right];
            string[right] = aux;
            foundLeft = false;
            foundRight = false;
            left++;
            right--;
        }
    }
    return string.join("")
}

const updatePointer = (name, pointer, foundPointer, ascii) => {
    if((!foundPointer && ascii >=65 && ascii <=122)) {
        foundPointer = true;
    } else if(!foundPointer){
        pointer = name === "left" ? pointer + 1 : pointer - 1;
    }

    return [pointer, foundPointer];
}