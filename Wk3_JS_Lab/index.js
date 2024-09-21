// Global object
// you can add variables and object into the global object and access across files
global.a = 100

var module1 = require('./module1.js');

console.log(module1);
console.log(module);
console.log(module1.exportName);
console.log(module1.age);
console.log(module1.course);
console.log(module1.greet());

// console.log(__dirname);
// console.log(__filename);

// console.log(console);

// setTimeout(() => {
//     console.log("Hello World");
// }, 3000);

// setInterval(() => {
//     console.log("Hello World");
// }, 3000);

// console.log(global)