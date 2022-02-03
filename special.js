//Создать переменную num со значением 266219 (тип данных число)
const num = 266219;
console.log(typeof  num);

/* Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора */
let Count = "123";
let myCount = (Number(Count[0]) * Number(Count[1]) * Number(Count[2]));
console.log(myCount);
// Сделал без цикла, потом исправлюсь

//Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let a = 3;
let myDegree = (myCount ** a);
console.log(myDegree);

//Вывести в консоль первые 2 цифры полученного числа
let myNumber;
myNumber = String(myDegree);

let myResult = (String(myNumber[0]) + String(myNumber[1]));

console.log(myResult);


//В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub