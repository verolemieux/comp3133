function multiplyElements(array) {
    var multiplier = 1;
    var newElements = [];
    for(i in array) {
        if (array[i]%2 == 0) { 
            multiplier = array[i];
        } else {
            newElements.push(array[i]*multiplier);
        }
    }
    return newElements;
}

module.exports = multiplyElements;