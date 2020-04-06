function filterByTerm(inputArr, searchTeam) {
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(searchTeam)
    })
}

module.exports = filterByTerm;