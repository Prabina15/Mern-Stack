const list = [ 
    34, 54 , 67 , 89 , 90, 70, 77, 78, 80, 90
];

const doubleList =[];

for (let i = 0; i< list.length; i++){

   const items = list[i]*2;
   doubleList.push(items);

}
    console.log(doubleList);

    /** 
     * Map: array.map() => array
     * [a, b, c ]=> [x, y, z]
     */
    console.log("====Map List =====")
    // const doubleNumber = (number) => number * 2;

    const mappedList = list.map((number, index) => number * 2);
    console.log(mappedList);


/**
 * Filter : [a,b,a,a,b,b,a] =>filter(a)=> [a,a,a,a]
 */

const filteredLit = list.filter((number, index) => number % 2== 0);

console.log(filteredLit);

/**
 * Find: [a,b,c,d ,s ,f ] => find(s) => s
 */

//list of 10 students with name, class, section and roll
const students = [
    {name: "Ramesh", class: 12, section: "A", roll: 1},
    {name: "Suresh", class: 12, section: "B", roll: 2},
    {name: "Gopal", class: 11, section: "A", roll: 3},
    {name: "Mohan", class: 10, section: "C", roll: 4},
    {name: "Sita", class: 9, section: "B", roll: 5},
    {name: "Geeta", class: 8, section: "A", roll: 6},
    {name: "Hari", class: 7, section: "C", roll: 7},
    {name: "Shyam", class: 6, section: "B", roll: 8},
    {name: "Radha", class: 5, section: "A", roll: 9},
    {name: "Gita", class: 4, section: "C", roll: 10},
];

const student = students.find((student) => student.roll === 5);
console.log(student);


/**
 * Includes :array.include(a) => boolean
 * Some : array.some(() => condition) => boolean
 * Every : array.every((element) => condition)
 */

const values =
[4, 5, 6, 7, 8, 9, 10];

console.log(values.includes(5));

const someResult= values.some((number, index)=> number >4);
console.log(someResult);    

const everyResult = values.every((number, index) => number  >5);
console.log(everyResult);


//sort

values.sort((a, b) => b- a); // descending order
console.log(values);


students.sort((a, b) => a.name.localeCompare(b.name)); // ascending order
console.log(students);

//Reduce

 let totalSum = 0;

 for (let i = 0; i <list.length ; i++){

    const item = list[i];
    totalSum = totalSum + item;
 }

 console.log(totalSum);

 const reducedSum = list.reduce((total, item)=>{
    total = total + item;

    return total;
 },0);
    console.log(reducedSum);

    const myList = [
         {
        name: "Ram",
        age: 2,
    },
    {
        name: "Ramesh",
        age: 3,
    },
    {
        name: "Shyam",
        age: 2,
    },
    {
        name: "Anish",
        age: 3,
    },
  ];
 
const groupedList = myList.reduce((acc, item) => {
    acc[item.age] = acc[item.age] || [];
    acc[item.age].push(item);

    return acc;

}, {});
console.log(groupedList);git



