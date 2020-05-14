'use strict'

// // =====================1================
// // Напиши класс User для создания пользователя со следующим свойствами:

// // name - строка
// // age - число
// // followers - число
// // Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mango1 = new User("Mango", 2, 20);

mango1.getInfo(); // User Mango is 2 years old and has 20 followers

const poly1 = new User("Poly", 3, 17);

poly1.getInfo(); // User Poly is 3 years old and has 17 followers

//====================2================

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
        return this.items;
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
        return this.items;
    }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
// console.log(storage);

const items = storage.getItems();
console.table("getItems", items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table("addItem", storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table("removeItem", storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]








// // ======================= 3 ==========================

class StringBuilder {
    constructor(string) {
        this._value = string;
    }
    get value() {
        return this._value;
    }

    append(string) {
        this._value += string;
        return this._value
    }

    prepend(string) {
       this._value = string += this._value;
        return this._value;
    }

    pad(string) {
        this._value = string += this._value += string;
        return this._value
    }
}

const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

// ======================= 4 ==========================

class Car {
    static getSpecs(car) {
        console.log(
            car.maxSpeed,
            car.speed,
            car.isOn,
            car.distance,
            car.price,
        );
    }

    constructor(maxSpeed, price) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
}

    set price(price) {
    return (this._price = price);
}

    get price() {
    return this._price
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    accelerate(spd) {
        if (this.speed + spd <= this.maxSpeed) {
            this.speed += spd;
        }
    }
    
    decelerate(spd) {
        if (this.speed - spd !== 0) {
            this.speed -= spd;
        }
    }

    drive(hours) {
        if (this.isOn = true) {
            this.distance = this.distance += this.speed * hours;
        }
    }
}

const mustang = new Car(200, 2000);

 

mustang.turnOn();

mustang.accelerate(50);

mustang.drive(2);

 

Car.getSpecs(mustang);

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

 

mustang.decelerate(20);

mustang.drive(1);

mustang.turnOff();

 

Car.getSpecs(mustang);

// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

 

console.log(mustang.price); // 2000

mustang.price = 4000;

console.log(mustang.price); // 4000
