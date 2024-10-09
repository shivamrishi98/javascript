// Primitive Data Type
// call by value

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascipt is a dynamic typed language

const bigNumber = 34265352625n


// Non-primitive Data Type (Reference type)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

// Objects
let myObj = {
    name: "Shivam",
    age: 22
}

const myFunction = function() {
    console.log("Hello world");
}

// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "shivamrishidotcom"

let anotherName = myYoutubeName
anotherName = "new shivam"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "shivam@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "rishi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


