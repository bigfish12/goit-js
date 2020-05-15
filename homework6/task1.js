'use strict'

import * as allUsers from "/users.js";
let users = allUsers.default;

console.log("User array", users);
// ================ 1 ====================

const getUserNames = (users) => {
    return users.map((user) => user.name)
};

console.log(getUserNames(users));

// // ================ 2 ====================
// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter((usr) => usr.eyeColor == color)
};

console.log("task 2: ", getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ================ 3 ====================

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    return users.filter((user) => user.gender === gender)
    .map((user) => user.name)
  };
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ================ 4 ====================
  
  // Получить массив только неактивных пользователей (поле isActive).
  const getInactiveUsers = (users) => {
    return users.filter((user) => user.isActive === false)
    .map((user) => user.name)
  };

  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ================ 5 ====================
  
// Получить пользователя (не массив) по email (поле email, он уникальный).

    
const getUserWithEmail = (users, email) => {
    return users.find((user) => user.email === email)
  };
  
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
  
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
  
// ================ 6 ====================
  
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
  
const getUsersWithAge = (users, min, max) => {
    return users.filter((user) => user.age <= max && min <= user.age)
    .map((user) => user.name)
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ================ 7 ====================
  
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
    return users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// ================ 8 ====================
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => user.friends.indexOf(friendName) !== -1)//if the index isn't -1, it means that it is present
    .map((user) => user.name)
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ================ 9 ====================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
   return users.sort((a, b) => a.friends.length - b.friends.length)
   .map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ================ 10 ====================
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
  

const getSortedUniqueSkills = (users) => {
    return users.reduce((sumSkills, user) => {
        sumSkills.push(...user.skills);
        return sumSkills;
    }, [])
    .sort()
    .filter((user, index, arr) => arr.indexOf(user) === index)
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]