// COMP3133 Lab 02 - Monday January 13, 2020

// Exercise 2
makeUpperCase = (arrayOfNames) => {
    return new Promise((resolve, reject) => {
        arrayOfNames.map(name => { 
            if (typeof name !== "string") 
                reject("Error: Not all items in the array are strings!")
        })
        resolve(arrayOfNames.map(name => name.toUpperCase()));
    })
}
sortWords = (capitalizedNames) => {
    return new Promise((resolve, reject) => {
        resolve(capitalizedNames.sort());
    })
    
}

a1 = ['jaxx', 'tiny', 'clay']
a2 = ['anarchy', 99, true]

makeUpperCase(a1)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeUpperCase(a2)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));