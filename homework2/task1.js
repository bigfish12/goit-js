'use strict'
// ============== 1 ====================================
let fruits = ["Apples", "Bananas", "Oranges"];
console.log(fruits);//["Apples", "Bananas", "Oranges"]
console.log(fruits[1]);//Bananas
fruits[1] = "Kiwi";
console.log(fruits[1]);//Kiwi
fruits.push("Pears", "Grapes", "Peaches")
console.log(fruits);


// ============== 2 ====================================

let test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12]
let score1 = [];

for (const element of test1) {
  if(element > 12) {
    score1.push(element)
  }
}
console.log(score1);
 
// ============== 3 ====================================

let test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
let score2 = [];

for (const element of test2) {
  if(element > 15) {
    score2.push(element)
  }
}
console.log(score2);

// ============== 4 ====================================

let test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
let score3 = []; 

for (const element of test3) {
  if(element > 16) {
    score3.push(element)
  }
}
console.log(score3);

// ============== 5 ===================================

let allTests = [test1, test2, test3];
let allScores = [score1, score2, score3];
console.log(allTests);
console.log(allScores);

for (let i = 0; i < allTests.length; i += 1) {
    // console.log(allTests[i]);
  
    for (let j = 0; j < allTests[i].length; j += 1) {
      console.log(allTests[i][j]);
    }
  }