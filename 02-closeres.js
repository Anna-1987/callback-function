// Функция результатом своей работы может возвращать другую функцию.Функция

// Возвращенная функция во время вызова будет иметь
// доступ ко всем локальным переменным(области видимости)
// родительской функции(той из которой ее вернули),
//     это называется "замыкание"

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней функции fnA';
//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это функция вызова innerFunction');
//     }
//     return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);


// ********Поваренок

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супчик');
// makeDish('Poly', 'кофе');


// ----------------------------------------------------


// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');
 
// mango('чай');
// mango('apple');



// ******** округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.36

// function round(places) {
//     return function (num) {
//         return Number(num.toFixed(places));
//     };
// }

// const rounder2 = round(2);
// const rounder3 = round(3);

// console.log(rounder2(floatingPoint));// 3.46
// rounder3(floatingPoint); //3.467

// -------------------------------------------------------------

// const rounder = function (places) {
//     const floatPoint = function (number) {
//         console.log(Number(number.toFixed(places)));
//     };
//     return floatPoint;
// } 

// const nambers = rounder(3);

// nambers(5.89057);
// nambers(2.1234);
// nambers(1.7654021);


// Приватные данные и функции - скрытие реализации, интерфейс

const salaryManagerFactory = function (eployeeName, baseSalary) {
    let salary = baseSalary;

    const changeBy = function (amout) {
        salary += amout;

    };

    return {
        raise(amout) {
            changeBy(amout);
        },
        lower(amout) {
            changeBy(amout);
        },
        current() {
        return `Tекущая зарплата ${eployeeName} - ${salary}`;
    },
   };
 
};

const salaryManager = salaryManagerFactory('Mongo', 5000);
console.log(salaryManager.current());



