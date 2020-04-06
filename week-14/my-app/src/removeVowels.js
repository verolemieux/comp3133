function removeVowels(sentence) {
    return sentence.replace(/[aeiouy]/ig,'');
}

module.exports = removeVowels;

