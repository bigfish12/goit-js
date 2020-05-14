"use strict";

// // ======================= 1 ==========================

// // Напиши функцию-конструктор Account, которая создает объект
// // со свойствами login и email. В prototype функции-конструктора
// // добавь метод getInfo(), который выводит в консоль
// // значения полей login и email объекта который его вызвал.

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return console.log(`Email: ${this.email}, Login: ${this.login}`);
};

console.log(Account.prototype.getInfo);

const joe = new Account("ILoveElk", "rogan@joe.com");

joe.getInfo();

const luka = new Account("curvedboi", "flag@mail.com");

luka.getInfo();
