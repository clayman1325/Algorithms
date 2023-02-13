const keyPad = {
  1:["1"],
  0:["0"],
  2:["a","b","c"],
  3:["d","e","f"],
  4:["g","h","i"],
  5:["j","k","l"],
  6:["m","n","o"],
  7:["p","q","r","s"],
  8:["t","u","v"],
  9:["w","x","y","z"],
}
function phoneNumberMnemonics(phoneNumber) {
  let result = [[]]
  for(const phN of phoneNumber){
    result = recPhnum(keyPad[phN], result)
  }
  result = result.map((res) => res.join(""))
  return result
}

function recPhnum(nums, curTranslation) {
  let result = [];
  for(const res of curTranslation){
    for(const value of nums) {
      const curResult = res.concat([value])
      result.push(curResult)
    }
  }
  return result
}


// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
