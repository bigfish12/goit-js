'use strict'
//Procedural programming
//example

const test1 = 16;
const test2 = 22;
const test3 = 23;

const score = (test1, test2, test3) => {
    return console.log(test1 + test2 + test3);
}

score(test1, test2, test3);

//Object-oriented progogramming(OOP)
//example

const totalScore = {
    test1: 16,
    test2: 22,
    test3: 23,
    toGetSum() {
        return this.test1 + this.test2 + this.test3;
    },
};
console.log(totalScore.toGetSum());



//Classes
const Project = function(title, theme, clients) {
    this.title = title;
    this.theme = theme;
    this.clients = clients;
};

const project = new Project("Habits manager", "Human", "All types");
console.log(project);

const projectFE = new Project("App", "To-Do list", "All types");
console.log(projectFE);


const Human = function(arms, legs, head, body = 1) {
    this.arms = arms;
    this.legs = legs;
    this.head = head;
    this.body = body;
}
const ilia = new Human(2,2,1);
console.log(ilia);

const dima = new Human();
console.log(dima);


const Movie = function(name, rate, category) {
    this.name = name;
    this.rate = rate;
    this.category = category;
    this.countUser = 0;

this.greet = function (userName) {
    console.log(`Hello ${userName}, welcome to ${this.name}`);
}

this.addUser = function (newUser) {
    this.countUser += newUser;
    console.log(this.countUser);
}

this.removeUser = function(newUser) {
    this.countUser -= newUser
    console.log(this.countUser);
    }
}
const movie = new Movie("Hero", 9, 100, 1);
console.log(movie);

movie.greet("Aleks");
movie.addUser(40);
movie.removeUser(30);


const House = function(a,b) {
    this.colour = a;
    this.floors = b;
    this.windows = 20;
    this.doors = 2;
    this.walls = 2.8;
}

const house = new House("red", 6)
console.log(house);

house.windows = 15;
console.log(house);

const salesManager = {
    name: "Obama",
    sales: 5,
    sell(product) {
        this.sales += 1;
        return `Manager ${this.name} has sold ${product}`
    }
}

console.log(salesManager.sales);//5
console.log(salesManager.sell("Spongebob trunks"));
console.log(salesManager.sell('a vibe check'));
console.log(salesManager.sales);//7

const salesManager1 = {
    name: "Trump",
    sales: 1783,
    sell(product) {
        this.sales += 1;
        return `Manager ${this.name} has sold ${product}`
    }
}

console.log(salesManager1.sales);//1783
console.log(salesManager1.sell("Mexican wall"));
console.log(salesManager1.sell("coronavirus vaccine"));
console.log(salesManager1.sales);//1785

function Manager(name = 'manager', sales = 0) {
    this.name = name;
    this.sales = sales;
    this.sell = function(product) {
        this.sales += 1;
        return `Manager ${this.name} has sold ${product}`
    }
}

const manager1 = new Manager('Joe Biden');
console.log(manager1.name);
console.log(manager1.sales);
console.log(manager1.sell("Better America"));
console.log(manager1.sell("Biden for President Hat"));
console.log(manager1.sales);


const manager2 = new Manager("Bernie Sanders")
console.log(manager2.sales);
console.log(manager2.sell("Socialism package"));
console.log(manager2.sell("Free Healtcare for all"));
console.log(manager2.sales);



const teacher = {lang1: "HTML"};
const child = {lang2: "CSS"};

child.__proto__ = teacher;
console.log(child.lang1);
console.log(child.lang2);

const child2 = {lang1: "JS", lang2: "CSS"};
console.log(child2.lang1);

const mainObject = {key1: 1};
console.log(mainObject);

const firstObject = {key2: 2};
firstObject.__proto__ = mainObject;
console.log(firstObject);

const secondObject = {key3: 3}
secondObject.__proto__ = firstObject;
console.log(secondObject);

const thirdObject = {key4: 4};
thirdObject.__proto__ = secondObject;
console.log(thirdObject);
console.log(thirdObject.key1);

for (const key in thirdObject) {
    console.log(key);
}

const animal = {eats: true};

const cat = Object.create(animal);
console.log(cat);

cat.barks = true;
console.log(cat);
console.log(cat.eats);//true - dynamic dispatch || delegation


const parentProd = {colour: 'Red', count: 7};
const childProd = Object.create(parentProd);
childProd.price = 30;

for (const key in childProd) {
    console.log("__proto__", key);
}

for (const key in childProd) {
    if (!childProd.hasOwnProperty(key)) continue;
    console.log(key);
}

const childProdKeys = Object.keys(childProd);
console.log(childProdKeys);

function Guest(name, room) {
    this.name = name;
    this.room = room;
}
console.log(Guest.prototype);

const newGuest = new Guest("Jon", 361);
console.log(newGuest);

Guest.prototype.newMethod = function() {
    console.log(`Method of function-constructor - name: ${this.name}, room: ${this.room}`)
}
newGuest.newMethod();


const Hero = function(name, xp) {
    this.name = name;
    this.xp = xp;
}

Hero.prototype.gainxp = function(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
}

const mango = new Hero("Mango", 1000);
console.log(mango);

mango.gainxp(500);
console.log(mango);


const Warrior = function(name, xp, weapon) {
    Hero.call(this, name, xp);
    this.weapon = weapon;
}

Warrior.prototype.attack = function() {
    console.log(`${this.name} attacks with ${this.weapon}`)
};

const poly = new Warrior('Poly', 200, 'Sword');
console.log(poly);
poly.attack();

const Hero1 = function(name, xp) {
    this.name = name;
    this.xp = xp;
}

Hero1.prototype.gainxp = function(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
};














