// COMP3133 Lab 03 - Monday January 20, 2020

// Exercise 1

const buffer_array = Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");

console.log(buffer_string.toString('ascii'));

console.log(buffer_string.toString('hex'));

console.log(buffer_string.toString('utf8', 0, 10));

const joined_buffer = Buffer.concat([buffer_array, buffer_string]);
console.log(joined_buffer);

console.log(joined_buffer.toJSON());



