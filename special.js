//Создать переменную num со значением 266219 (тип данных число)
const num = 266219;
console.log(typeof  num);


let Count = String(num);
console.log(Count);
let mCount = (Count.length);
console.log(mCount);
let mymyCount = 0;
let myCount = 0;


 console.log(mymyCount);
 console.log(myCount);


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