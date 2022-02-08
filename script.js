"use strict";
//блок объявления переменных
let title = prompt("Как называется ваш проект?", "Калькулятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Обычные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "10000");
if (screenPrice === "" || isNaN(screenPrice)) {
  alert(
    "Было введено не число, попробуйте еще раз ввести стоимость разработки экранов"
  );
}
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt(
  "Какой дополнительный тип услуги нужен?",
  "Поиск на сайте"
);
let servicePrice1 = +prompt("Сколько это будет стоить?", 15000);
if (servicePrice1 === "" || isNaN(servicePrice1)) {
  alert(
    "Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №1"
  );
}
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Экспресс");
let servicePrice2 = +prompt("Сколько это будет стоить?", 5000);
if (servicePrice2 === "" || isNaN(servicePrice2)) {
  alert(
    "Было введено не число, попробуйте еще раз ввести стоимость дополнительной услуги №2"
  );
}
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
let allServicePrices;

// блок объявления функций
//1
const getAllServicePrices = function (ser1, ser2) {
  return ser1 + ser2;
};
//2
function getFullPrice(scr, asp) {
  return scr + asp;
}
//3
const getTitle = function (str) {
  if (!str) {
    return "аргумент - пустая строка";
  }
  str = str.trim();
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
};
//4
const getServicePercentPrices = function (fuPr) {
  return Math.ceil(fuPr - fuPr * (rollback / 100));
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15e3 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

// функционал
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice);
title = getTitle(title);
//вывод в консоль

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log("Наименование проекта: " + title);
console.log("Общая сумма разработчику " + servicePercentPrice);
console.log("Сколько скидка?: " + getRollbackMessage(fullPrice));
console.log("Дополнительные услуги стоят: " + allServicePrices);
