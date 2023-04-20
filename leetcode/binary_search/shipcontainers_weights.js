var shipWithinDays2 = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((accu, weight)=> accu += weight,0);
    let min = right;
    let weight = Math.ceil((right - left)/2);

    while(weight > 0 && left<= right) {
        const middle = weight;
        const finished = testWeightCapacity([...weights], weight, days * 1);

        if(finished == 0) min = Math.min(weight,min);

        if(finished > 0) {
            weight += Math.ceil((right - weight)/2);
            left = middle + 1;
        } else {
            weight -= Math.floor((weight - left)/2);
            right = middle - 1;
        }
    }

    return min;
};

const testWeightCapacity = function(weights, weight, days) {
    let index = 0;
    const lenght = weights.length;

    while(index < lenght) {
        let currentCapacity = weight;
        while(index < lenght && currentCapacity >= weights[index]) {
            if(weights[index]>0){
                currentCapacity -= weights[index];
                index++;
            }else {
                index++;
                days--
            }
        }
        days--
    }
    return (days < 0) ? 1 : 0;
}