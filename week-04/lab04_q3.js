// COMP3133 Lab 04 - Monday January 27, 2020

// Exercise 3

setInterval(() => process.exit(), 1000);

process.on('exit', function() {
    console.log(`process uptime on exit: ${process.uptime()}`); 
});
process.on('SIGINT', function() {
    console.log(`process uptime on signal interrupt: ${process.uptime()}`);
});


