'use strict'

//==========1===========
const highOrderFunc = function (callbackFunc) {
    const message = "This is how callback works";
    callbackFunc(message);
}

const showMessage = function (Vania) {
    console.log(Vania);
}
highOrderFunc(showMessage)

//=========2===========
const argumentFunc = function (message) {
    console.log(message);
}

const higherOrderFunc = function (parameter) {
    const string = "DnD is awesome";
    parameter(string);
};
higherOrderFunc(argumentFunc);

//============3============
const showHeroes = function(heroes) {
    console.log(heroes);
}

const mainFunc = function (callback) {
    const heroes = ["Batman", "Robin"];
    for (const hero of heroes){
    callback(hero);
    }
}
mainFunc(showHeroes);

//Repeat
const repeatLog = function (n) {
    let result;
    for (let i = 0; i < n; i +=1) {
        result = i;
        console.log("Each iteration", i);
    }
    console.log("Last iteration", result);
}
repeatLog(5);

//===1===
const showResult = function(result) {
    console.log(result);
}

const withComment = function (value) {
    console.log("Commenting from the boys:",value);
}

const repeat = function (num, callback) {
    for (let i = 0; i < num; i += 1) {
    callback(i);
    }
}
repeat(4, showResult)

repeat(3, withComment)

const arr = [];
repeat(5, (value) => {
    arr.push(`element ${value + 1}`)
});
console.log(arr);

const filterFunc = function (array, cbFunc) {
    const filteredArr = [];
    for (const el of array) {
        const ok = cbFunc(el)
    
        if (ok) {
            filteredArr.push(el);
        }
    }
    return filteredArr;
};

const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true },
  ];

const freshFruits = filterFunc(fruits, (Ilia) => Ilia.isFresh);
console.log(freshFruits);

const withQuantity = filterFunc(fruits, (jo) => jo.quantity >= 120);
console.log(withQuantity);


const thirdChildFunc = function() {
    console.log("3d func");
}

const secondChildFunc = function() {
    console.log(object);
}



const x = 10;
const y = 20;

const summ = function(z) {
    const x = 100;

    return console.log(x + y + z);
}

summ(30);//150

//Closure
const createCounter = function() {
    let privateValue = 0;
    const increment = function() {
        privateValue += 1;
        console.log(privateValue);
    };
    return {
        increment,
    };
};

const counterA = createCounter();
counterA.increment();
counterA.increment();
counterA.increment();


function anotherFunc() {
    console.log(this);
}

anotherFunc();//undefined


const felix = {
    name: "Felix",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.name);
    },
};

felix.showThis();//{name: "Felix", showThis: ƒ, showName: ƒ}
felix.showName();//Felix

function showThis() {
    console.log(this);
}
showThis();

const user = {
    name: "Joe",
}

user.newMethod = function() {
    console.log(this);
}
user.newMethod();

user.showContext = showThis;
user.showContext();

const hilton = {
    name: "Hilton",
    showThis() {
        console.log(this);
    },
};

const fn = function (callback) {
    callback();
};

fn(hilton.showThis);

const arrowThis = () => {
    console.log(this);
}
arrowThis();

const user1 = {
    name: "Alex",
};

user1.showContext = arrowThis;
user1.showContext();

const hotel2 = {
    name: "Holiday Inn",
    showThis() {
        const fn = () => {
            console.log(this);
        };  
        fn();
        console.log(this);
    },
};
hotel2.showThis();

const greet = function() {
    return `Welcome to ${this.name} hotel!`
}
const hotel4 = {name: "Four Seasons"};
console.log(greet.call(hotel4));
console.log(greet.apply(hotel4));


const greet1 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}!`;
}
const motel = {name: "Sunlight Motel"};

console.log(greet1.call(hotel4, "Joe", 5));
console.log(greet1.call(motel, "Joe", 3));

console.log(greet1.apply(hotel4, ["Joe", 5]));
console.log(greet1.apply(motel, ["Joe", 4]));


const greet3 = function(guest) {
    return `${guest}, welcome to ${this.name}`
}
const hotel7 = {name: "Caesar"};
const hotelGreeter = greet3.bind(hotel7, "Joe");
console.log(hotelGreeter());


const hotel8 = {
    name: "Rixos",
    showThis() {
        console.log(this);
    },
} ;

const fn1 = function (callback) {
    callback();
}

fn1(hotel8.showThis.bind(hotel8))







