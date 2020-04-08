'use strict'
// // ============== 1 =========================================

const toPassTests = () => console.log("Before accessing this exercise, you must have submitted 5 tests!");
toPassTests();

toPassTests2();
 function toPassTests2() {
    return console.log("Before accessing this exercise, you must have submitted 5 tests!");
}



// // ============== 2 =========================================

// let message = prompt("Please enter your age");
// const checkAge = function(message) {
//     if(message < 18) {
//         console.log("Sorry, you can't access this site");
//     } else {
//         console.log('Access granted');
//     }
// }
// checkAge(message);

// let checkAge2 = (message) => { 
//     if(message < 18) {
//     console.log("Sorry, you can't access this site");
// } else {
//     console.log('Access granted');
// }
// }
// checkAge2(message);

// // ============== 3 =========================================

function toGetCost(message, pricePerWord) {
    let messageArr = message.split(" ");
    let wordCount = messageArr.length;
    return wordCount * pricePerWord;
}

// let toGetCost = (message, pricePerWord) => {
//     let messageArr = message.split(" ");
//     let wordCount = messageArr.length;
//     return wordCount * pricePerWord;
// }
 
console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180
 
// // ============== 4 ==========================================
// // Напиши функцию logItems(array), которая получает массив и использует цикл for,
// // который для каждого элемента массива будет выводить в консоль сообщение
// // в формате [номер элемента] - [значение элемента].
// // Нумерация должна начинаться с 1. К примеру для первого
// // элемента массива ['Mango', 'Banana', 'Ajax']
// // с индексом 0 будет выведено '1 - Mango',
// // а для индекса 2 выведет '3 - Ajax'.
const array = ['Mango', 'Banana', 'Ajax'];

function logItems(array) {
    for (const elements of array) {
       for (let i = 0; i <= array.length; i += 1) {
        console.log(`${array.indexOf(elements) + 1} - ${elements}`);
        } 
    }
}

logItems(['Mango', 'Banana', 'Ajax']);

logItems([
    "Wolverine",
    "Thor",
    "Iron Man",
    "Deadpool",
    "Nick Fury",
    "Colossus"
  ]);
   
logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
   
//   // ============== 5 =========================================
   
function checkTheWord(message) {
    let array = message.split(" ");
    console.log(array);
    return array.includes("lose" || "not")
}

// let checkTheWord = (message) => {
//     let array = message.split(" ");
//     console.log(array);
//     return array.includes("lose" || "not")
// }

  console.log(checkTheWord("Than fly to others that we know not of?")); // true
  console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
  console.log(checkTheWord("And enterprises of great pitch and moment")); // false
  console.log(checkTheWord("And lose the name of action")); // true
   
//   // ============== 6 =========================================
   
function countTestsScore() {
    let total = 0;

    for (const argument of arguments) {
        total += argument;
    }
    console.log(total);
}

  countTestsScore(16, 22, 23); //61 
  countTestsScore(15, 20, 22, 20); //77 
  countTestsScore(14, 19, 21, 20, 23); //97
   
//   // ============== 7 =========================================
   
const arrowFn = (...args) => console.log(args);

arrowFn(1, 2, 3); //[1, 2, 3]
arrowFn(100, 200, 300, 400, 500); //[100, 200, 300, 400, 500]
arrowFn("Js", "Python", "Java", "PHP", "C++"); //["Js", "Python", "Java", "PHP", "C++"]
  
  