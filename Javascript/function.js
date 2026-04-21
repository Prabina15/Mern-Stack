/**
 * Function : Perform a specific task
 * 
 * function <name> (optional parameter){
 * //code
 * }
 */

function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");
greet("Bob");
greet("Charlie");


function sum(value1, value2) {
    console.log("The sum is: " + (value1 + value2));
}
sum(5, 10);
sum(20,15);
sum(); //NaN- Not a Number
sum(5); //NaN- Not a Number


function square(value){
    const result = value * value;

    return result;
}

const squaredValue = square(7);
console.log(squaredValue);