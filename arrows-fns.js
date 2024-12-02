// Стрелочные функци
//     - объявление
//     - Явный и неяный возврат
//     - Аргумент
//     - Неявнфый возврат

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// // *******----Стрелочная ф-ция, Явный ретерн-------
// // Тело функции две и больше строк
// const addArrow1 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };


// // *******----Стрелочная ф-ция, Неявный ретерн-------
// // Тело функции одна строка
// const addArrow2 = (a, b, c) =>  a + b + c;

// console.log(add(5, 6, 7));
// console.log(addArrow1(2, 4, 8));


// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5, });

// console.log(arrowFnA());


// ************----Геолокация----------

const onGetPositionSucces = (position) => {
    console.log(position);
}

const onGetPositionError = (error) => {
    console.log(error);
}
window.navigator.geolocation.getCurrentPosition(
    onGetPositionError, onGetPositionSucces,
)


// ********функция фильтр

const filter = (array, test)=> {
    const filterArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filterArray.push(el)
        }
    } 
    
    return filterArray;
};

const callback1 = value => value >= 3;


const callback2 = value => value >= 4;


console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([0, 1, 2, 3, 7, 8, 9, 6], callback2));

const frutis = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 180, isFresh: true },
]