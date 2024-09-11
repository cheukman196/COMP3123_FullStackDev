// 101422756
// Cheuk Man Sit

// COMP3123 Full Stack Development
// Lab 2

// !Note: assessments will cover git repo initialization commands

var add = (a, b) => { return a + b; }
var sub = (a, b) => { return a - b; }

var makeFunctionCall = function(a, b, add, sub){
    if(a > b)
        return add(a, b);
    else 
        return sub(a, b)
}

console.log(makeFunctionCall(5, 1, add, sub));

// == PROMISE == 
// promise is an object
// promise takes two parameters: on resolve, on reject
// parameters can be values, objects (and by extension functions)

// note: the parameter names(resolve and reject here) does NOT matter 
var p1 = new Promise((success, failure) =>{
    var successObj = {message: 'success', statusCode: 200};
    var failureObj = {message: 'failure', statusCode: 100};
    if (number > 10)
        resolve(successObj); // resolve() only takes 1 parameter ONLY
    else 
        reject(failureObj); // same, reject() only takes 1 parameter ONLY
    // !! use JSON / OBJECTS to pass multiple values back !!
})

// .then(success block callback, failure block callback)
p1.then((result) => {
    console.log("Success: " + result.message);
}, (error_msg) => {
    console.log("Failure: " + error_msg.message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally block');
})

var api = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

