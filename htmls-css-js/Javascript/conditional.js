//If-else Statement
/**
 * if(conditional){
 * //code
 * }
 */

const age = 20;
if(age>=17) {
    console.log("You are an adult");

} else {
    console.log("You are not an adult");
}

//if else ladder
const gpa=4;

if(gpa>=3.6) {
    console.log("A+");
} else if(gpa<3.6 && gpa>=3.2){
    console.log("A");
} else {
    console.log("B");
}

//nested Staement

if (marks > 40){
    console.log("you are pass");

    if (marks > 80) {
        console.log("you are pass with distinction:");
    }
} else {
    console.log("you ar fail");
}


//Switch Statement
//Ternary operator

const yourAge = 10;

// if(age >=18){
//     console.log("You are an adult");

// } else {
//     console.log("You are not an adult.");
// }
//consition?true:false
yourAge >18 ?
 console.log("You are an adult")
 :console.log("You are not an adult.");
