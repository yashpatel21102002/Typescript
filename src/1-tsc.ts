// Different types in typescript

//simple type
let coursePrice : number = 45;
let courseName : string = "yash";
let passed : boolean = true;

let password;

// arrays 
let numbers:Array<number> = [1,2,3,4,5];
// Array of numbers
let numbers_2 : number[] = [3,5,5,3];
console.log(numbers,numbers_2)
// Array of strings 
let products: Array<string> = ["hats","pants","jeans"];

// array of string and numbers
console.log(products)

let midData : Array<string|number> = ["ok",23,"hl"];

let midData2 : (string | number)[] = [
    3,5,5,5,"lasjrg"
]

console.log(midData)
// union type not or operators...

//nested number type array
let myNums : number[][] = [
    [434,3434],[34,334]
]

//another method would be
let myNums3 : Array<Array<number|string>> = [[3434,"adfsf"],["sasg",55]]

// okay i understand i will use

let mycontent : (string | number)[][] =[ [3443,335353]]


// tuples are new type in typescript
// Tuple 
// in vanilla javascript we do not have in tuple

// tuples are fix length arrays
// if we will compile it to javascript it will be converted into arrays 

const courseDetails : [string,number] = [
    "the marks in the final is",151
]

console.log(courseDetails)

var ok:(string|boolean|number)[] = ["wefasF0",false , 35453548494949444444444444444444411197917911111111788888888888888888882];
console.log(ok)



// enums - numeric enums

// PascalCase
// camelCase

// enum RollNumbers{
//     john,
//     kelly,
//     sandra,
//     joseph,
//     samantha,
// }


const enum RollNumbers{
    john,
    kelly,
    sandra,
    samantha
}

let studentList : RollNumbers = RollNumbers.sandra;

console.log(studentList)

const enum another{
    name = "yash",
    major = "be"
}

console.log(another.major)

// Heterogeneous enums
const enum details{
    studentName = "joajg",
    studentMajor = "Arts",
    studentId = 235255,

}

console.log(`${details.studentId}-${details.studentName} is doint ${details.studentMajor}`)


