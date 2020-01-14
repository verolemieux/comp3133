// COMP3133 Lab 02 - Monday January 13, 2020

// Exercise 1
compareNumToTen = (x) => {
    return new Promise((resolve, reject) => {
        if (x > 10) {
            resolve(`${x} is greater than 10, success!`)
        } else {
            reject(`${x} is less than 10, error!`)
        }
    })
};

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))