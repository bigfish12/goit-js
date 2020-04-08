'use strict'
// ============== 1 =========================================
 
const authors = ["William Shakespeare", "Guy de Maupassant", "Dante Alighieri", "Mikhail Bulgakov", "Albert Camus", "Erich Maria Remarque"]
authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
authors.unshift('Charles Dickens', 'Edgar Allan Poe', 'Gabriel Garcia Marquez');
console.log(authors);
console.log(authors.length);//12

// ============== 2 =========================================
 
const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
scores.shift();
scores.shift();
scores.pop();
scores.pop();
scores.pop();
console.log(scores);//[15, 17, 3, 4, 98, 67, 532, 611]

// ============== 3 =========================================

const things = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

const removeFromStart = things.splice(0,2);
const removeFromEnd = things.splice(8,3);
console.log(removeFromStart);//[12, 32]
console.log(removeFromEnd);//[7, 100, 42]
console.log(things);//[15, 17, 3, 4, 98, 67, 532, 611]
 
// ============== 4 =========================================
 
const partOfResults = things.slice(2,7);
console.log(partOfResults);//[3, 4, 98, 67, 532]

// ============== 5 =========================================

const doubleResults = things.slice();
console.log(doubleResults);//[15, 17, 3, 4, 98, 67, 532, 611]
 
// ============== 6 =========================================

sort(doubleResults);

function sort(doubleResults) {

let evens = [];
let odds = [];
window.evens1 = evens;
window.odds1 = odds;

for (let i = 0; i < doubleResults.length; i++) {

if (doubleResults[i]  % 2 === 0){
        evens.push(doubleResults[i]);
      }
      else {
        odds.push(doubleResults[i]);
      }
      console.log(evens);
      console.log(odds);
    }
}


// ============== 7 =========================================

let allResults = odds1.concat(evens1)
console.log(allResults);
let includesOne = [];

for (const elements of allResults) {
    
    if(elements.toString().indexOf(1) > -1) {
        includesOne.push(elements)
    }
}
console.log(includesOne);
