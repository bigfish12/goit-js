'use strict'

let a = 5; 
let b = a;
console.log(a);//5
console.log(b);//5

a = 10;
console.log(a);//10
console.log(b);//5

let lastName = 'jo';
let newLastName = 'jo';
console.log(lastName);//jo
console.log(newLastName);//jo

lastName = 'mama';
console.log(lastName);//jo
console.log(newLastName);//jo

const units = ['alpha', 'beta', 'gamma'];
const newUnits = units;
console.log(units);//['alpha', 'beta', 'gamma'
console.log(newUnits);//['alpha', 'beta', 'gamma'

units[0] = '1';
console.log(units);//['1', 'beta', 'gamma']
console.log(newUnits);//['1', 'beta', 'gamma']

// .join("") - joins together elements out of group
// .shift() - removes first (with index 0) from the group
console.log(units.join(""));//1betagamma
console.log(units.join(", "));//1, beta, gamma

// .split() - transforms string into group
const msg = "Please come faster mate"
console.log(msg.split(" "));//["Please", "come", "faster", "mate"]
console.log(msg.split('m'));//["Please co", "e faster ", "ate"]
console.log(msg.split(""));

// .indexOf() gives index of specified element in group, else -1    
console.log(units.indexOf('beta'));
console.log(units.indexOf('b'));

// .includes() states presence or absence of element in group
console.log(msg.includes('come'));
console.log(msg.includes('pen'));

// const fruit = 'apple';
// if(fruit === 'apple' || fruit === 'strawberry') {
//     console.log("It's a fruit");
// }

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberry']
// let fruit = prompt('Enter a fruit')

// if(redFruits.includes(fruit)) {
//     console.log('Its a red fruit');
// } else {
//     console.log('Its not a red fruit');
// }

const numList = [0,1,2,3,4,5,6,7];
console.log(numList.slice(0,3));//[0,1,2]
console.log(numList.slice(2));//[2,3,4,5,6,7]
console.log(numList.slice());//[0,1,2,3,4,5,6,7]
console.log(numList.slice(-1));//[7]
console.log(numList.slice(-3));//[5,6,7]

const newNumList = numList.slice(4);
console.log(newNumList);

// .splice() changes original group
console.log(numList);
let splicer = numList.splice(0,2);
console.log(splicer);//[0,1] have been cut out
console.log(numList);//[2,3,4,5,6,7]

console.log(numList.splice(0,0,1));
console.log(numList);[1,2,3,4,5,6,7]
console.log(numList.splice(7,0,"8",'9'));
console.log(numList);//[1, 2, 3, 4, 5, 6, 7, "8", "9"]

splicer = numList.splice(7,0,"8","9")
console.log(splicer);
splicer = numList.splice(3,0,9889)
console.log(splicer);
console.log(numList);

// .concat
const arr1 = "Hello";
const arr2 = "World!";
const lang = arr1.concat(arr2);
// console.log(lang.join(", "));

const test = ["1", 4, 12,6,16,13,4,15]
const test2 = ['2',17, 13, 4, 4, 15, 10, 34, 43]
const test3 = ['3', 54, 2, 12, 43]

const allTests = test .concat(test2).concat(test3);
console.log(allTests);

const add = function(a, b, c) {
    return a + b + c;
};

const result = add(1, 2, 3);
console.log(result);
console.log(add(5, 15, 10));

const fn1 = function();
console.log(object);


