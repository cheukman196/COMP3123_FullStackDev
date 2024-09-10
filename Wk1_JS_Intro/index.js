console.log('Hello World!');

// creating an object (js objects are key-value pairs)
var obj = {
    name: 'Rion',
    age: 37
}

console.log(obj);

var student = {
    name: 'Timmy',
    year: 2,
    program: 'T177',
    semester: 'winter',
    courses: ['AAA', 'BBB', 'CCC'],
    grant: null,
    application: '',
}

// access object attribute
console.log(student.name);
console.log(student.year);

// ensuring type safe
console.log(typeof(student.year));
console.log(typeof(student.program));
console.log(typeof(student.courses)); // arrays ARE objects in JS
console.log(typeof(student.grant)); // null is NOT an object, but it does show
console.log(typeof(student.application));

// functions
function greeting(){
    console.log("Hello")
}

greeting()
console.log(typeof(greeting)) // of type function

// function expression
var makeGreeting = function(){
    console.log("Hello to you too!");
}
makeGreeting()

// arrow function
var expressGreeting = () => {
    console.log('See you later!');
}
expressGreeting();
console.log(typeof(expressGreeting))


// string also having properties (like an object)
const name = 'Dall Saborar';
console.log(name.length)

// Higher order functions
// Any function that takes a function as a parameter OR
// Any function that returns a function as a result