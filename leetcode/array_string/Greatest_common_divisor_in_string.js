var gcdOfStrings = function(str1, str2) {
    let result = "";
    const testString = (str1.length < str2.length) ? str1 : str2;
    const smallDivisor = divisor(testString);
    for(const divisor of smallDivisor) {
        const test2String = (testString == str1) ? str2 : str1;
        const valid = checkDivisor(test2String, divisor);
        if(valid) {
            result = divisor;
        }
    }

    return result;
};

const divisor = (str) => {
    let result = []
    let divisor = "";
    for(let i = 0; i < str.length; i++) {
        divisor += str[i]
        if(str.includes(divisor)) {
            const valid = checkDivisor(str, divisor);
            if(valid){
                result.push(divisor);
            }
        }
    }
    return result;
}
const checkDivisor = (str, divisor) => {
    let newDivisor = "";
    const length = str.length;
    const divisorLength = divisor.length;

    while(newDivisor.length + divisorLength <= length) {
        newDivisor += divisor;
    }
    return newDivisor == str
}