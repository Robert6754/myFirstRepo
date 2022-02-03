let title, screens, screenPrice, rollback, fullPrice, adaptive;
title = "lesson02";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 123;
rollback = 85;
fullPrice = 100000;
adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(title);
console.log(fullPrice);
console.log(adaptive);

//Вывести в консоль длину строки screens
console.log(screens.length);

//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

let sPrice = `"Стоимость верстки экранов ${screenPrice} рублей / долларов / гривен / юани”`
console.log(sPrice);

let fPrice = `"Стоимость разработки сайта ${fullPrice} рублей / долларов / гривен / юани"`
console.log(fPrice);

//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = screens.toLowerCase();

const myArraySplits = screens.trim().split(", ");
console.log(myArraySplits);

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

let myFullPrice = fullPrice * (rollback / 100);
console.log(myFullPrice);
