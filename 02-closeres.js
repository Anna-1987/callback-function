// Функция результатом своей работы может возвращать другую функцию.Функция

// Возвращенная функция во время вызова будет иметь
// доступ ко всем локальным переменным(области видимости)
// родительской функции(той из которой ее вернули),
//     это называется "замыкание"

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней функции fnA';
    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это функция вызова innerFunction');
    }
    return innerFunction;
};

const fnB = fnA(555);
fnB();
console.log(fnB);


// ********Поваренок

const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

