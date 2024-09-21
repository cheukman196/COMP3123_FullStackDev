// global
global.a = 100

var name = "Cheuk Man Sit"
var age = 30
var course = "Programming"

function greet(){
    return "Hello World"
}

// dynamic export (ONLY if you have one thing to export)
// module.exports = name;
// module.exports = age;

// Best Practice for exports
module.exports = {
    exportName: name, // can give alias for export name
    age,
    course,
    greet
}