'use strict'

//Task4
const total = 100;
let ordered = 20;

if(total > ordered) {
    console.log('Order complete, you will be contacted by the manager');
} else{
    console.log('Not enough items in stock');
}

ordered = 80;

if(total > ordered) {
    console.log('Order complete, you will be contacted by the manager');
} else{
    console.log('Not enough items in stock');
}

ordered = 130;

if(total > ordered) {
    console.log('Order complete, you will be contacted by the manager');
} else{
    console.log('Not enough items in stock');
}

//Task 5
const adminPassword = 'jklmao';
let message = prompt('Enter passoword here'); 

if(message === null) {
    console.log('Cancelled by user');
    message = 'Cancelled by user';
} else if(message === adminPassword) {
    console.log('Welcome');
    message = 'Welcome';
} else if(message !== adminPassword) {
    console.log('Access denied, wrong password');
    message = 'Access denied, wrong passoword';
}
alert(message)

//Task 6
let credits = 23580;
let pricePerDroid = 3000;
let message2 = prompt('How many droids do you want to buy?');
let totalPrice = message2 * pricePerDroid;
let remainingCredits = credits - totalPrice;

if(message2 === null) {
    console.log('Cancelled by user');
} else if(totalPrice < credits) {
    console.log(`You bought ${message2} droids, you have ${remainingCredits} credits left`);
} else {
    console.log('Not enough credits');
}

//Task 7
let message3 = prompt('Enter your country')
let China = 'CHINA';
let Chili = 'CHILI';
let Australia = 'AUSTRALIA';
let India = 'INDIA'; 
let Jamaica = 'JAMAICA';
let country = China || Chili || Australia || India || Jamaica;

let chinaPrice = 100;
let chiliPrice = 250;
let australiaPrice = 170;
let indiaPrice = 80;
let jamaicaPrice = 120;

switch(message3.toUpperCase()) {
    case China:
        console.log(`Shipping to ${China} will cost ${chinaPrice} credits`);
        break;
    case Chili:
        console.log(`Shipping to ${Chili} will cost ${chiliPrice} credits`);
        break;
    case Australia:
        console.log(`Shipping to ${Australia} will cost ${australiaPrice} credits`);
        break;
    case India:
        console.log(`Shipping to ${India} will cost ${indiaPrice} credits`);
        break;
    case Jamaica:
        console.log(`Shipping to ${Jamaica} will cost ${jamaicaPrice} credits`);
        break;
    default:
    console.log('Does not ship to your country');
}

//Task 8
let input = prompt('Enter number here');
let total1 = 0;
let answer = parseInt(input);

while(input !== null) {
    total1 += answer;
    console.log(total1);
    input = prompt('Enter number here');
}
alert(`Total sum is equal to ${total1}`)
