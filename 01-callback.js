// Функция обратного вызова(callback)
//     - функция может принимат другие функции как параметр
//     - функция которая передается другой функции как аргумент называется -
//     "Функцией обратного вызова(отложенного вызова)"(cfllback - функцией)
//     - функция которая принимает другую функцию как параметр или
//       возвращает функцию как результат своей работы называется "Функция высшего порядка"

//********* */ fnA - функция высщего порядка
//********* */ fnB - функция обратного вызова

// const fnA = function (message, callback) {
//     console.log(message);

//     // console.log(callback);
//     callback(100); // в консоле будет'Это вызов функции fnB'
// }

// const fnB = function (number) {
//     console.log('Это вызов функции fnB',number);
// }

// fnA('вызов fnA', fnB);


// ********** Функция doMath(a, b, callback)
 
// const doMath = function (a, b, callback) {
//     const result = callback(a, b)
//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 3, sub);

//***** */ Анонимные функции
// const doMath = function (a, b, callback) {
//     const result = callback(a, b)
//     console.log(result);
// };


// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(10, 3, function (x, y) {
//     return x - y;
// });

// ********** Отложенный вызов: зугистрация событий
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('This I click' + Date.now());

// };

// buttonRef.addEventListener('click', handleBtnClick);

// ****** Отложенный вызов: гнолокация

// const onGetPositionSucces = function (position) {
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionError, onGetPositionSucces,
// )

// ****** Oтложеный вызов: интервылы

// const callback = function () {
//     console.log('Через 3 секунды внутри колбека в таймауте');
// }

// console.log('В коде перед таймаутом');

// setTimeout(callback, 3000);

// console.log('В коде после таймауте');

// ****** Oтложенный вызов: http-запрос
// - API URL:https://pokeapi.co/api/v2/pokemon

// const onRequestSuccess = function (reponse) {
//     console.log('вызов функции onRequestSuccess после успешного ответа от бека ')

//     console.log(reponse);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json()
//     .then(onRequestSuccess));


// ********функция фильтр

const filter = function (array, test) {
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

const callback1 = function (value) {
    return value >= 3;
};

const callback2 = function (value) {
    return value >= 4;
};



console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([0, 1, 2, 3, 7, 8, 9, 6], callback2));

const frutis = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 180, isFresh: true },
];

const getFrutisWithQuantity = function (frutis) {
    return frutis.quantity >= 180;
}

console.log(filter(frutis, getFrutisWithQuantity));