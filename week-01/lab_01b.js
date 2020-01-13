// COMP3133 Lab 02 - Monday January 6, 2019

// Exercise 1
gretter = (myArray) => {
    let greetText = 'Hello ';
    for (var value of myArray){
        console.log(`${greetText} ${value}`);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

// Exercise 2
capitalize = (word) => {
    [a, ...rest] = word.split('')
    let capitalizedWord = [ a.toString().toUpperCase(), ...rest ];
    return capitalizedWord.join('')
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3
const colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map(color => capitalize(color))
console.log(capitalizedColors)

// Exercise 4
var values = [1, 60, 34, 30, 20, 5]
filterLessThan20 = values.filter(value => value < 20);
console.log(filterLessThan20)

// Exercise 5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((acc, curr) => {
    return acc + curr;
}, 0);
const calculateProduct = array.reduce((acc, curr) => {
    return acc * curr;
}, 1);
console.log(calculateSum)
console.log(calculateProduct)

// Exercise 6
class Car {
    constructor (model, year) {
        this.model = model;
        this.year = year;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance}.00`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

