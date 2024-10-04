'use strict';

// String 
let msg1 = "строка 1"
let msg2 = 'строка 2'
let msg3 = `строка 3`

let a = 5,
b = 2
let msg4 = `a = ${a}, b = ${b}`;

let cl = "class = \"myclass\"" // экранирование 

let cl2 = 'class = "myclass"'// не экранирование 

console.log(cl2)



// Boolean 
let isWin = true,
isCheckedField = false

let isGreater = 4 < 1



// Null
let idProcess = null



// Symbol
let id = Symbol()
let id2 = Symbol("id")

console.log(id === id2)
