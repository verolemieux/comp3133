// COMP3133 Lab 02 - Monday January 13, 2020

// Exercise 4
// Task 1
delayedPromise = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500);
    })
};
delayedPromise(5).then(result => console.log(result))

// Task 2
async function asyncPromise(num) {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num);
        }, 500);
    })
}
asyncPromise(6).then(result => console.log(result))

