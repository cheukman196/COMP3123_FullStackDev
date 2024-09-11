// Exercise 1
console.log("Exercise 1")

// ES6 function declaration
const greet = (nameArray) => {
    let greetText = 'Hello ';
    for (let x of nameArray)
        console.log(greetText + x);
}

greet(['Lydia', 'Gordon', 'Waidwen']);

// Exercise 2
// Capitalize first letter of given word
console.log("Exercise 2")
var capitalize = (word) => {
    const [firstLetter, ...rest] = word;
    return firstLetter.toUpperCase() + rest.join(''); 
}

console.log(capitalize('foo'));
console.log(capitalize('fEeD'));

// Exercise 3
// Exercise 2 but for arrays
console.log("Exercise 3")

const colours = ['red', 'green', 'blue'];
const capitalizeFirstLetterForArray = (arr) => arr.map((word) => capitalize(word));
console.log(capitalizeFirstLetterForArray(colours));

// Exercise 4
// function that filters out array values < 20
console.log("Exercise 4")

const filterLessThan20 = (arr) => arr.filter(x => x < 20);
resultQ4 = filterLessThan20([1, 60, 34, 30, 20, 5]);
console.log(resultQ4);

// Exercise 5
// array.prototype.reduce() calculate sum and product of all numbers in array
console.log("Exercise 5");

var arrQ5 = [1, 2, 3, 4];
const calcSum = (arr) => arr.reduce((acc, curr) => acc + curr);
const calcProduct = (arr) => arr.reduce((acc, curr) => acc * curr);

console.log(calcSum(arrQ5));
console.log(calcProduct(arrQ5));

// Exercise 6
// ES6 syntax for class constructors and methods
console.log("Exercise 6");

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model}\nYear: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return super.details() + `\nBalance: ${this.balance}`;
    }
}

const car1 = new Car('Pontiac Firebird', 1976);
console.log(car1.details())

const car2 = new Sedan('Corolla Cross', 2024, 30000);
console.log(car2.info())