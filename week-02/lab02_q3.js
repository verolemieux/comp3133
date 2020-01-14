// COMP3133 Lab 02 - Monday January 13, 2020

// Exercise 3
var promise1 = 101
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit.. neo")
})

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values)
});

