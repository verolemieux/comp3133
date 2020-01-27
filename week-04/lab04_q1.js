// COMP3133 Lab 04 - Monday January 27, 2020

// Exercise 1

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname)

currentDir = process.cwd()

var extFilter = process.argv[2];

function extension(element) {
    var extName = path.extname(element);
    return extName === '.' + extFilter;
}

fs.readdir(currentDir, function(err, list) {
    console.log("Current Directory:", currentDir);
    list.filter(extension).forEach(function(value) {
        console.log(value);
    });
});
