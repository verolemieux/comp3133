function filterFalseValues(arrObjects) {
    return arrObjects.filter(function(obj) {
        return obj.authenticated == true;
    });
}

module.exports = filterFalseValues;