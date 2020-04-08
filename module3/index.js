'use strict'

// const obleject = {
//     key: value,
//     key: value,     
// }

const frontend = {
    language1: "HTML",
    language2: "CSS",
    language3: "JS"
};
console.log(frontend);

const student = {
    name: "Alexandra",
    age: 31,
    sex: 'female',
    course: frontend
};
console.log(student.name);
console.log(student.age);

console.log(frontend["language1"]);
console.log(frontend['language3']);

//changes existing values
student.name = "Joe"
console.log(student.name);
console.log(student);

frontend['language3'] = "JavaScript"
console.log(frontend['language3']);
console.log(frontend);

//add values to object
student.adress = "Heroiv 6";
console.log(student.adress);
console.log(student);

student['phone number'] = 3243;
console.log(student['phone number']);
console.log(student);

//to delete
delete frontend.language1;
console.log(frontend.language1);
console.log(frontend);

//shorthand properties
const teacher = "Sasha";
const course = "frontend";
const group4 = {
    teacher,
    course,
    count: 9
}
console.log(group4);

const key = "test";
const name = "Lucy"
const age = "age";

const testResult = {
    key,
    [key]: 2,
    // [getKey()]: 22,
    [name]: "my friend",
    [age]: 32
}
console.log(testResult);


const myProduct = {
    milk: 0.5,
    eggs: 10,
    apples: 5,
    toCheck() {
        console.log('Check value');
    },
    oranges: 10
}
myProduct.toCheck();
console.log(myProduct);

myProduct.toBuySweets = function() {
    console.log("Come on, buy something sweet");
}

myProduct.toBuySweets();
console.log(myProduct);

delete myProduct.toBuySweets;
console.log(myProduct);

const product = {
    type: "wellness & spa",
    category: "hair care",
    productName: "Shampoo",
    price: 76.34,
    showProductName() {
        console.log(this.productName);
    },
    changePrice(value) {
        this.price = value;
    }
};

product.showProductName();//shampoo

product.changePrice(89.5);
console.log(product.price);

const myCars = {
    subaru: "Forester",
    mazda: "626",
    volkswagen: "Golf",
    landrover: "Range Rover"
}

for (const key in myCars) {
    console.log(key);
}

for (const key in myCars) {
    console.log(myCars[key]);
}

//Methods for constructor Object
const hero = {
    name: "Black Cat",
    power: 100,
    lives: 9,
    speed: 45
};
console.log(hero);
const keysOfHero = Object.keys(hero);
console.log(keysOfHero);

for (const key of keysOfHero) {
    console.log(key);
    console.log(hero[key]);
}

const entriesOfHero = Object.entries(hero);
console.log(entriesOfHero);

for (const entry of entriesOfHero) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}, ${value}`);
}

const valuesOfHero = Object.values(hero);
console.log(valuesOfHero);


const testScore = {
    test1: 16,
    test2: 21,
    test3: 22, 
    test4: 23
};

const arrValues = Object.values(testScore);
console.log(arrValues);

let totalScore = 0;

//Attributes value to every element of Object
for (const value of arrValues) {
    totalScore += value;
    console.log(totalScore);
}


