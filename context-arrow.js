// Контекст стелочной функции

// Контекст внутри стрелки определяется местом ее объявления,
// а не вызова и ссылается на контекст родительской функции

// const showThis = () => {
//     console.log('this is showThis', this);
// };

// showThis();// this is showThis: window

// const user = { name: 'Mongo' };
// user.showContext = showThis;

// user.showContext();// this is showThis: window

// const user = {
//     fullName: 'Mongo',
//     showName() {
//         console.log('this:', this);
//         console.log('this.fullname:', this);

//         const inner = () => {
//             console.log('this in inner:', this);
//         };
//         inner();
//     },

// };

// user.showName();

//  ***** Стелки как методы объекта не бывают-------

// const user = {
//     fullName: 'Mongo',
//     showName:() => {
//         console.log('this:', this);
//         console.log('this.fullname:', this);
//     },

// };

// user.showName();// undefind

//****** Стрелка-конструктор------------

const User = function(name){
    this.name = name;
};

console.log(new User('Mango')); // работает

const User2 = (name) => {
    this.name = name;
};

console.log(new User2('Mango'));// не работает

