"use strict";
//блок объявления переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
if (screenPrice === '' || isNaN(screenPrice)) {
    alert('Было введено не число, попробуйте еще раз ввести стоимость разработки экранов');
}
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
if (servicePrice1 === '' || isNaN(servicePrice1)) {
    alert('Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №1');
}
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
if (servicePrice2 === '' || isNaN(servicePrice2)) {
    alert('Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №2');
}
let rollback = 10;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

// блок объявления функций

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
      return "Даем скидку в 10%"
  }  else if (price >= 15000 && price < 30000) {
     return "Даем скидку в 5%"
  } else if (price < 15e3 && price >= 0) {
      return "Скидка не предусмотрена"
  } else {
    return "Что то пошло не так"
  }
}
/*
// Проверка введенного числа, числовое или нет.
if (screenPrice === '' || isNaN(screenPrice)) {
    console.log('Было введено не число, попробуйте еще раз ввести стоимость разработки экранов');
}

if (servicePrice1 === '' || isNaN(servicePrice1)) {
    console.log('Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №1');
}

if (servicePrice2 === '' || isNaN(servicePrice2)) {
    console.log('Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №2');
}

*/

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
/*
const myArraySplits = screens.trim().split(", ");
console.log(myArraySplits);
*/



/*
switch (true) {
  case fullPrice >= 3e4:
    console.log("Даем скидку в 10%");
    break;
  case (fullPrice < 3e4) && (fullPrice >= 15e3):
    console.log("Даем скидку в 5%");
    break;
  case (fullPrice < 15e3) && (fullPrice >= 0):
    console.log("Скидка не предусмотрена");
    break;
}
*/