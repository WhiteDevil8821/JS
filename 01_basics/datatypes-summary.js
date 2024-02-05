// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


const bigNumber = 23429847388768746783564389456n


// Reference (Non Primitive)

// Arrays, Objects, Funtions

const heros = ["shaktiman", "nagraaj", "doga"];

let myObj = {
    name : "ankit",
    age : 25,
}

const myFunction = function() {
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-Primitive)

let myYTName = "Devil"

let anotherName = myYTName
anotherName = "WhiteDevil"

console.log(myYTName);
console.log(anotherName);

let user1 = {
    email : "user@abc.com",
    upi : "user@ybl",
}

let user2 = user1

user2.email = "ankit@google.com"

console.log(user1.email);
console.log(user2.email);