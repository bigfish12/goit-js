'use strict'

//IMPERATIVE CODE

//Declarative
const array = [1,2,4,8,27,23,21];
const filteredArr = [0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 3) {
        filteredArr.push(array[i])
    }
}
console.log(filteredArr);

//Imperative
const filteredNumber = array.filter((value) => {
    return value > 3;
});
console.log(filteredNumber);

const dirtyMultiply = (arr, value) => {
    for (let j = 0; j < arr.length; j += 1) {
        arr[j] *= value
    }
};

console.log("Initial array", array);
dirtyMultiply(array, 5);
console.log("Changed array", array);

const pureMultiply = (arr, value) => {
    const result = [];
    for (let k = 0; k < arr.length; k += 1) {
        result.push(arr[k]*value)
    }
    return console.log("Result", result);
}

console.log("Initial array", array);
pureMultiply(array, 5)
console.log("Initial array doesn't change", array);

const arrNumber = [4, 6, 28, 18, 94];
for (let i = 0; i < arrNumber.length; i += 1) {
    console.log("for", arrNumber[i]);
}

arrNumber.forEach((el) => console.log("forEach", el));
arrNumber.forEach((el, x) => console.log(`forEach: index ${x}, value: ${el}`));

const tests = ['test1','test2','test3','test4','test5', 'test6'];
tests.forEach((test) => console.log(test));


console.log(arrNumber);
const doubleNumbers = arrNumber.map((num) => num*2);
console.log(doubleNumbers);


// example 2

const users = [
  { name: "jack", isActive: true },
  { name: "john", isActive: false },
  { name: "Susan", isActive: true },
];

const names = users.map((user) => user.name);
console.log(names);


console.log(arrNumber);
const filteredArray = arrNumber.filter((el) => el > 10);
console.log(filteredArray);

const filteredArray1 = arrNumber.filter((num) => num < 5);
console.log(filteredArray1);


//example 2
const activeUsers = users.filter((el) => el.isActive);
console.log(activeUsers);

const inactiveUsers = users.filter((el) => !el.isActive);
console.log(inactiveUsers);

const newUsers = [
    { id: "000", name: "Mango", isActive: true },
    { id: "001", name: "Poly", isActive: false },
    { id: "002", name: "Ajax", isActive: true },
    { id: "003", name: "Chelsey", isActive: false },
  ];

  const user = newUsers.find((el) => el.id === "002");
  console.log(user);

  const getUserId = (array, idValue) => array.find((el) => el.id === idValue);
console.log(getUserId(newUsers, "003"));
console.log(getUserId(newUsers, "03"));


const someNums = [1, 29, 43, 2, 4];
const isBig = (val) => val > 10;
console.log(someNums.every(isBig));
console.log(someNums.some(isBig));

const fruits = [
  { name: "apples", amount: 3 }, // true
  { name: "bananas", amount: 10 }, // true
  { name: "oranges", amount: 1 }, // true
];
const allAvailable = fruits.every((el) => el.amount > 0);
console.log(allAvailable);

const anyAvailable = fruits.some((el) => el.amount >= 10);
console.log(anyAvailable);

console.log(someNums);
const newSum = someNums.reduce((acc, el) => acc + el, 100);
console.log(newSum);

const tweets = [
    // 0
    { id: "000", likes: 5, tags: ["js", "nodejs"] }, // 5
    { id: "001", likes: 2, tags: ["html", "css"] }, // 7
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] }, // 24
    { id: "003", likes: 8, tags: ["css", "react"] }, // 32
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }, // 32
  ];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes);

const countLikes = (arr) => 
    tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

countLikes(tweets)
console.log(likes);

const getTags = (array) =>
  //             acc, element => {/////}, начальное значение acc
  array.reduce((acc, elem) => {
    acc.push(...elem.tags);
    //["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

    return acc;
  }, []);

const tags = getTags(tweets);
console.log("все теги объектов", tags);

const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    }
    acc[tag] += 1;
    return acc;
};

const countTags = (arr) => arr.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);


const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

console.log("before sort:", alpha);
console.log("after sort", alpha.sort());

const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
console.log("before sort:", clients);
console.log("after sort", clients.sort());






















