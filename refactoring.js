const number = [1, 5, 2, 4, 3];
console.log('ARRAY: ', number);

// const greaterThenTwo = number.filter(num => num > 2);
// console.log('нечетные ', greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3);
// console.log('помножили на 3 ',multByTwo);

// const sorted = multByTwo.sort(( a, b ) => a - b);
// console.log('перепилано с право на лево ', sorted);

const res = number
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
    
console.log(res);
