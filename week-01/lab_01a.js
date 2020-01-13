// COMP3133 Lab 01 - Monday January 6, 2019

// Exercise 1
capitalizeSentence = (sentence) => {
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedWords.join(' ');
}

console.log(capitalizeSentence("the quick brown fox"));

// Exercise 2
max = (numbers) => {
    console.log(Math.max(numbers))
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

// Exercise 3
right = (word) => {
    if (word.length < 3){ return word }
    return `${word.slice(-3)}${word.slice(0,-3)}`
}

console.log(right("Python"))
console.log(right("JavaScript"))
console.log(right("Hi"))

// Exercise 4
angleType = (angle) => {
    if (angle >= 0 && angle < 90) {
        return "Acute angle"
    } else if (angle == 90) {
        return "Right angle"
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    } else if (angle == 180) {
        return "Straight angle"
    }
}

console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))


