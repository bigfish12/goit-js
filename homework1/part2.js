'use strict'

//Task3
//1
let var1 = 1;
let var2 = 0
let var3 = true;


console.log(var1 > var2)//true, 1 > 0
console.log(var1 == var3)//true, 1 becomes true
console.log(var1 === var3)//false, however, it is not strictly equal
console.log(var1 != var3)//false, 1 = true
console.log(var2 != var3)//true, 0 not equal to true, but to false
console.log(var1 > var2 == var3)//true, 1 > 0 not strictly equal to true
console.log(var1 > var2 > var3)//false, 0 not > true, because true = 1

//2
let val;
console.log(val);//undefined

val = "River";
console.log(typeof val);//string

val = "Mountain";
console.log(typeof val);//sting

val = 232;
console.log(typeof val);//number

val = true;
console.log(typeof val);//boolean

val = null;
console.log(typeof val);//object

//3
let alpha = 0.2;
let beta = 0.4;
let result = alpha + beta;

console.log(result.toFixed(1));

//4
let tetra = '12px';
console.log(tetra);//12px

tetra = '13.34em';
console.log(tetra);//13.34em

//5
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

//6
let random = (Math.random() * (19 - 3) + 3).toFixed(2);
console.log(random);