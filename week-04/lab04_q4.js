// COMP3133 Lab 04 - Monday January 27, 2020

// Exercise 4

const fork = require('child_process').fork;
const child = fork("compute.js");

child.send({message: "start calculation!"});

child.on('message', result => {
    console.log('Long computation result:', result);
})