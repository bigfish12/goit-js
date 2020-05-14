'use strict'

// // ==================== 1 ========================

// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'

// // заменяет значение hobby на 'coding'

// // заменяет значение premium на false

// // выводит с помощью функции toShowUpdatedUser(obj) содержимое переданного ей

// // объекта user, в формате пар (ключ:значение), используя Object.keys() и for...of

 

const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
  };
  
user.mood = "Happy";
user.hobby = "Coding";
user.premium = false;
console.log(user);
   
  
  const toShowUpdatedUser = function (obj) {
    for (let keys in user) {
      console.log(`${keys}: ${user[keys]}`);
        }
  };
    
  toShowUpdatedUser(user);
  
  // name: Semen
  
  // age: 15
  
  // hobby: coding
  
  // premium: false
  
  // mood: happy
  
   
  
//   // ==================== 2 ========================
  
//   // Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  
//   // Функция возвращает число - количество свойств.
  
   
  
  const countProps = function (obj) {
    let count = 0;
    for (const c in obj) {
        count += 1
    } 
    return count
  };
  
  console.log(countProps({})); // 0
  
   
  
  console.log(countProps({ name: "Mango", age: 2 })); // 2
  
   
  
  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
  
   
  
   
  
//   // ==================== 3 ========================
  
//   // Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
  
//   // Функция считает общую сумму зарплаты работников и возвращает ее.
  
//   // Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
  
   
  
  const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    let total = 0;
    for (const value of values) {
        total += value
    }
    return total;
    };
  
   
  
//   // Вызовы функции для проверки работоспособности твоей реализации.
  
  console.log(countTotalSalary({})); // 0
  
   
  
  console.log(
  
    countTotalSalary({
  
      mango: 100,
  
      poly: 150,
  
      alfred: 80,
  
    })
  
  ); // 330
  
  console.log(
  
    countTotalSalary({
  
      kiwi: 200,
  
      lux: 50,
  
      chelsy: 150,
  
    })
  
  ); // 400
  
   
  
   
  
//   // ==================== 4 ========================
  
//   // Напиши функцию calculateTotalPrice(allProdcuts, productName),
  
//   // которая получает массив объектов и имя продукта (значение свойства name).
  
//   // Возвращает общую стоимость продукта (цена * количество).
  
   
  
  const products = [
  
    { name: "Радар", price: 1300, quantity: 4 },
  
    { name: "Сканер", price: 2700, quantity: 3 },
  
    { name: "Дроид", price: 400, quantity: 7 },
  
    { name: "Захват", price: 1200, quantity: 2 },
  
  ];
  
   
  
  const calculateTotalPrice = function (allProdcuts, productName) {
    let productPrice;
    for (const keys of allProdcuts) {
        if (keys.name == productName) {
            productPrice = keys.price * keys.quantity
        }
    }
    return productPrice;
   };

   
  
//   // Вызовы функции для проверки работоспособности твоей реализации.
  
  console.log(calculateTotalPrice(products, "Радар")); // 5200
  
  console.log(calculateTotalPrice(products, "Дроид")); // 2800