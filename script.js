"use strict";
let title, screens, screenPrice, rollback, fullPrice, adaptive;
title = "lesson02";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 123;
rollback = 25;
fullPrice = 100000;
adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Вывести в консоль длину строки screens
console.log("Длина строки screens: "+screens.length);

//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
// и “Стоимость разработки сайта(fullPrice) рублей / долларов / гривен / юани”

console.log(`Стоимость верстки экранов ${screenPrice} рублей / долларов / гривен / юаней`);

console.log(`Стоимость разработки сайта ${fullPrice} рублей / долларов / гривен / юаней`);


//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = screens.toLowerCase();

const myArraySplits = screens.trim().split(", ");
console.log(myArraySplits);

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

let myFullPrice = fullPrice * (rollback / 100);
console.log(myFullPrice);

//Задания урок 3
// 3
title = prompt("Как называется ваш проект?");
console.log(title);
// 4
screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);
// 5
screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);
// 6
adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
// 7
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
//8
fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);
// 9
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log(servicePercentPrice);
//10
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