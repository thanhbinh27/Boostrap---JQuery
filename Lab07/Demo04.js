/*
* Function in ES
*/

'use strict'

console.clear();

function sayHello() { console.log("Hello"); }
sayHello();

//? Pass by value
function doubleValue(value) {
    value *= 2;
    console.log("-->", value);
}

let a = 100;
console.log("1. a = ",a);
doubleValue(a);
console.log("2. a = ",a);

//? Pass by reference
function inscrementValue(object) {
    object.value += 10;
    console.log("-->", object);
}

let b = { value: 100 };
console.log("1. a = ", b);
inscrementValue(b);
console.log("2. a = ", b);

//? Default parameter
function sayHi(value, name = "Peter") { console.log(value, "Hi ",name) }

sayHi(1, "Thay Huy");
sayHi(2);

let showMessage = function(message) { console.log(message); }
showMessage("Hello someone");

//? Arrpw functions
let showMessage_2 = (message) => { console.log(message); }
showMessage("This is new paragraph");

let tripleValue = a => a * 3;
console.log(tripleValue(100));

let arr = [1, 2, 3, 4, 5]
arr.forEach(item => console.log(item));