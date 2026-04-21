/**
 * Template literals
 * Spread operator
 * Rest operator
 * Arrow function
 * Array methods
 * Destructuring(Array and Object)
 */

console.log("heelo from es6");

//Template literals

const name = "hari";
const address = "Bhaktapur";

const result= "Hello my name is "+ name +" and I live in " + address;

console.log(result);

const templateResult =`Hello my name is ${name} 

I live in ${address}`;

console.log(templateResult);

//Spread operator adn rest operator
const user = {
    name: "Hari",
    age: 30,
    city: "Bhaktapur"
};

const profile ={
    phoneNumber: "1234567890",
    gender : "Male",
    isMarried: true,
};

const userProfile = {...user, ...profile};

console.log(userProfile);

const List1 =[12, 13, 14, 15, 16, 17, 18, 19, 20];
const List2 =[21, 22, 23, 24, 25];
const combinedList = [...List1, ...List2];
console.log(combinedList);

// Object destructuring

const student = {
    name : "Prabina",
    grade : 12,
    roll: 15,
    section: "A",
};

//  const grade = student.grade;
//  const roll = student.roll;
//  const section = student.section;

//  console.log(grade);
//     console.log(roll);

    const {grade , roll, section, name: stdname} = student; 
    console.log(grade);
    console.log(roll);
    console.log(section);
    console.log(stdname);


//Array destructuring

const students =["Ramesh", "Suresh", "Gopal", ];

const [first, second, third] = students;
console.log(first);
console.log(second);
console.log(third);
// console.log(fourth); //undefined
console.log(students[2]);

// Rest operator

const {phoneNumber, gender, ...remainingData} = profile;
console.log(phoneNumber);
console.log(gender);
console.log(remainingData);


//Arrow function

// function sum(a,b){
//     console.log(a+b);
// }

const sum = (a, b) => a + b;

console.log(sum(5, 10));


