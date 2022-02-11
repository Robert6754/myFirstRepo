"use strict";

//блок объявления переменных
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

console.log();

// блок объявления функций

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  //screenPrice = prompt("Сколько будет стоить данная работа?");
  //1
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Поиск на сайте"
      );
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Экспресс");
    }
    sum += +prompt("Сколько это будет стоить?");

    while (!isNumber(sum)) {}
  }
  return sum;
};

function getFullPrice(scr, asp) {
  return scr + asp;
}

const getTitle = function (str) {
  if (!str) {
    return "аргумент - пустая строка";
  }
  // str = str.trim();
  // str = str.toLowerCase();
  // return str[0].toUpperCase() + str.slice(1);
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

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
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice);
title = getTitle(title);

//вывод в консоль

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Сколько скидка?: " + getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log("Длина строки screens " + screens.length);
console.log("Наименование проекта: " + title);
console.log("Общая сумма разработчику " + servicePercentPrice);
console.log("Дополнительные услуги стоят: " + allServicePrices);
