function validStartingCity(distances, fuel, mpg) {
  for(let i = 0; i < distances.length; i++) {
    let finish = false;
    let cont = true;
    let city = i;
    let currentFuel = 0;
    let citiesVisited = 0;
    
    while(cont && !finish && currentFuel > -0.000001) {
      citiesVisited++
      currentFuel += fuel[city];
      if(currentFuel * mpg >= distances[city] - 0.000001){
        currentFuel -=  distances[city] / mpg;
        let nextCity = city + 1;

        if(nextCity > distances.length - 1) nextCity = 0;

        city = nextCity
      } else {
        cont = false
      }

      if(citiesVisited == distances.length) {
        finish = true;
      }
    }

    if(finish == true) {
      return city
    }
  }
  return -1;
}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;