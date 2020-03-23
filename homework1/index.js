'use strict';

let name;
console.log(name);

name = 'Eva';
console.log(name);

name = 'Felix';
console.log(name);

const lastName = 'Schuring';
console.log(lastName);

// lastName = 'hes'; can't rename const


//Five types of primitive data

let bar; 
console.log(bar); // undefined
console.log(typeof bar); //undefined

bar = 10;
console.log(bar); //10
console.log(typeof bar); //number

console.log(typeof (String(bar)));
console.log(typeof (Boolean(bar)));
console.log(Boolean(bar)) //true

bar = 0;
console.log(Boolean(bar)) //false

bar = "10";
console.log(bar); //10
console.log(typeof bar); //sting

bar = true;
console.log(bar); //true
console.log(typeof bar); //boolean

console.log(typeof (String(bar)));
console.log(typeof (Number(bar)));
console.log(Number(bar)) //1

bar = 'true';
console.log(bar); //true
console.log(typeof bar); //string


bar = null;
console.log(bar); //null
console.log(typeof bar); //object

console.log(typeof (String(bar)));
console.log(typeof (Number(bar)));
console.log(Number(bar)) //0

//Methods for Numbers

console.log(Number.parseInt('10px'));
console.log(Number.parseInt('10px93223'));
console.log(Number.parseInt('10.8679px93223'));
console.log(Number.parseInt('oiehns')); //NaN = Not a Number

console.log(Number.parseFloat('10px'));
console.log(Number.parseFloat('10px93223'));
console.log(Number.parseFloat('10.8679px93223'));
console.log(Number.parseFloat('oiehns'));

console.log(isNaN(32));
console.log(isNaN('net'));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));

let random = Math.random() * (20 - 1) + 1;
console.log("Simple random", random);
console.log("Ceil", Math.ceil(random));
console.log("Floor", Math.floor(random));
console.log("Round", Math.round(random));
console.log("ToFix2", random.toFixed(2)); 
console.log("ToFix1", random.toFixed(1));
console.log("ToFix0", random.toFixed(0));










