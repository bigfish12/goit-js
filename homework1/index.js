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

// Logical operators 
// && = and
const KPI = 30;
let fact = KPI > 20 && KPI < 31;
//               true && true
console.log(fact); //true

fact = KPI > 20 && KPI < 29;
//         true && false
console.log(fact);// false

fact = KPI < 29 && KPI > 20;
//         false && true
console.log(fact);// false

// Only true if: true && true
//Gives last true if all true

console.log("cat" && "dog" && "parrot");// parrot
console.log("cat" && 1 > 2 && "parrot");// false
console.log("cat" && 0 && "parrot");// 0

// || = or

fact = KPI > 20 || KPI < 31;
//         true || true
console.log(fact)//true

fact = KPI > 20 || KPI < 29;
//         true || false
console.log(fact);// true

fact = KPI < 29 || KPI > 20;
//         false|| true
console.log(fact);// true

fact = KPI > 30 || KPI < 29;
//        false || false
console.log(fact);// false

// Only false if false || false

console.log("cat" || "dog" || "parrot");// cat
console.log("cat" || 1 > 2 || "parrot");// cat
console.log(1>2 || "cat" || "parrot");// cat

// Puts first true into console

// ! = not; reverses value
console.log(!true); //false
console.log(!false) //true
console.log(!!true); //true
console.log(!!false) //false

console.log(!1); //false
console.log(!0) //true
console.log(!!1); //true
console.log(!!0) //false

console.log(!null); //true
console.log(!undefined) //true
console.log(!!null); //false
console.log(!!undefined) //false

let age = 12;
let group;

// if (age > 18) {
//     //If clause and action. If clause happens if true
//     console.log("You are an adult")
// } 

// if (age > 18) {
//     //if - else clause
//     console.log("You are an adult")
// } else {
//     //else clause happens if false
//     console.log("You are a child")

// }

if (age > 18) {
    console.log("You are an adult")
} else if (14 < age && age < 18) {
    console.log("You are an teenager")
} else if (6 < age && age < 14) {
    console.log("You are an child")
} else {
    console.log("I don't know, dead?")
}
// use && or || in case of more than one operations

// let day = prompt("Enter day of the week");
// console.log(day)
// let weekday;
// if (day === "Saturday" || day === "Sunday") {
//       weekday = "holiday";
//     } else if (
//       day === "Monday" ||
//       day === "Tuesday" ||
//       day === "Wednesday" ||
//       day === "Thursday" ||
//       day === "Friday"
//     ) {
//       weekday = "workday";
//     } else {
//       weekday = "Invalid entered data";
//     }
//     console.log(day);
//     alert(`${day} is ${weekday}`);
    
// let message = confirm('Are you real?')
// console.log(message) //If click OK = true,  if click Cancel = false





