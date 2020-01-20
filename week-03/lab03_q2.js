// COMP3133 Lab 03 - Monday January 20, 2020

// Exercise 2

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('convert', function convertListener() {
    for (const i of buf) {
        console.log(i);
    }
    console.log("buffer converted");
});

myEmitter.emit('convert');
