// 101422756
// Cheuk Man Sit

// COMP3123 Full Stack Development
// Lab 1

// Exercise 1
function capitalizeFirstLetter(str){
    let splitString = str.split(/(\s+)/);
    let finalString = '';

    for(let i = 0; i < splitString.length; i++){
        if(splitString[i].length > 0 && splitString[i][0].match(/[a-zA-Z]/i))
            finalString += splitString[i][0].toUpperCase() + splitString[i].slice(1);
        else 
            finalString += splitString[i];
    }
    return finalString;
}

console.log(capitalizeFirstLetter("hi my name is james"));
console.log(capitalizeFirstLetter("nice tO mEET You 2"));


// Exercise 2

var getLargestInt = function(arr){
    let max = Number.MIN_VALUE;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    return "The largest number is: " + max;
}

console.log(getLargestInt([-19, -99, 199]));
console.log(getLargestInt([58, 0, -2]));
console.log(getLargestInt([156, 1560, 15600]));


// Exercise 3

var swapLastThreeLettersToStart = (str) =>{
    endPortion = str.substring(str.length - 3);
    startPortion = str.substring(0, str.length - 3)
    return endPortion + startPortion;
}

console.log(swapLastThreeLettersToStart("homebrew"));
console.log(swapLastThreeLettersToStart("Python"));
console.log(swapLastThreeLettersToStart("Javascript"));


// Exercise 4
function angleType(angle){
    result = '';
    switch(true){
        case angle > 0 && angle < 90:
            result = "Acute angle";
            break;
        case angle == 90:
            result = "Right angle";
            break;
        case angle > 90 && angle < 180:
            result = "Obtuse angle";
            break;
        case angle == 180:
            result = "Straight angle";
            break;
        default:
            result = "Angle type not recognized.";
    }
    return result;
}

console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))
