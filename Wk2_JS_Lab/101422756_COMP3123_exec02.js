// 101422756
// Cheuk Man Sit

// COMP3123 Full Stack Development
// Lab 2

var add = (a, b) => { return a + b; }
var sub = (a, b) => { return a - b; }

var makeFunctionCall = function(a, b, add, sub){
    if(a > b)
        return add(a, b);
    else 
        return sub(a, b)
}

console.log(makeFunctionCall(5, 1, add, sub));




// Exercise 1
const greet = (nameArray, counter) => {
    let greetText = 'Hello ';
    for (let x of nameArray)
        console.log(greetText + nameArray[x]);
}

greet