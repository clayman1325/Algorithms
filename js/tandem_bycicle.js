function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  const length        = redShirtSpeeds.length;
  let   speed         = 0
  let   fastestShirts = []
  let   slowestShirts = []
  
  redShirtSpeeds  = redShirtSpeeds.sort((a, b)  => { return a - b})
  blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => { return a - b})
  
  if(redShirtSpeeds[length-1] >= blueShirtSpeeds[length-1]){
    fastestShirts = redShirtSpeeds
    slowestShirts = blueShirtSpeeds
  } else {
    fastestShirts = blueShirtSpeeds
    slowestShirts = redShirtSpeeds
  }

  for(let i = (length - 1), j = 0; j < length; i--, j++){
    if(fastest) {
      speed += Math.max(fastestShirts[i], slowestShirts[j])
    } else {
      speed += Math.max(fastestShirts[j], slowestShirts[j])
    }
  }
  return speed;
}

exports.tandemBicycle = tandemBicycle;