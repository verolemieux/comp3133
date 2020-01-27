// COMP3133 Lab 04 - Monday January 27, 2020

// Exercise 2

var platform = process.platform;
var architecture = process.arch;
var nodeVersion = process.version;
var v8Version = process.versions.v8;
var libuvVersion = process.versions.uv;
var pid = process.pid;
var title = process.title;
var directory = process.cwd();

console.log(`== System == 
platform: ${platform}
processor: ${architecture}`);

console.log(`\n== NodeJS ==
node version: ${nodeVersion}
nv8 version: ${v8Version}
libuv version: ${libuvVersion}`);

console.log(`\n== Process ==
pid: ${pid}
title: ${title}
current directory: ${directory}`);
