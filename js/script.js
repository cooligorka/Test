"use strict";

    // Number type
let number = 5.7;
console.log(4/0);  //Infinity number
console.log('string' * 9);  // Not a Number - NaN


    // String type

const persone = `Alex`;

    // Boolean type true or false

const bool = true;
const bool2 = false;

    // Null type

//console.log(something);

    // Undefined type

let und; // Переменная просто задана, без значения
console.log(und);

    // Object type

const obj = {
    name: "John",
    age: 35,
    isMarried: false
};

console.log(obj.name);  // Вывод значения свойства обЬекта, через точку

    // Array type

let arr = ['plum.png', 'orange.jgp', 6, {}, []]; // массив может содержать любые типы данных, они расположены строго в порядке очереди следования, первое значение массивов
                                                 //  имеет порядковый номер 0
console.log(arr[1]);

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Are you 18?", "");
//console.log(typeof(answer));

const answers = [];

// answers[0] = prompt("Ваше имя", "");
// answers[1] = prompt("Ваша фамилия", "");
// answers[2] = prompt("Сколько вам лет", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://site.com/${category}/56`);

// const user = "Ivan";

// console.log(`Привет, ${user}`);

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);