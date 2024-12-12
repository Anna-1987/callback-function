const number = [1, 5, 2, 4, 3];
console.log('ARRAY: ', number);

// const greaterThenTwo = number.filter(num => num > 2);
// console.log('нечетные ', greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3);
// console.log('помножили на 3 ',multByTwo);

// const sorted = multByTwo.sort(( a, b ) => a - b);
// console.log('перепилано с право на лево ', sorted);

// const res = number
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(res);

// ****** Сортируем тех кто онлайн------

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },

// ];

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((player, nextplayer) => player.rank - nextplayer.rank);

// console.table(onlineAndSorted);

//*** Увеличиваем количество поинтов каждого игрока */

const players = [
    { id: 'player -1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player -2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player -3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player -4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player -5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
]

console.table(players);

// const upatedPlayrs = players.map(player => // без return тело функции оборачиваем ({})
// ({
//     ...player,
//     points: player.points + player.points * 0.1,
// })

// );

// console.table(upatedPlayrs);

//**** Увеличиваем кол-во часов игрока по id*-------/

const playerIdToUpdate = 'player -3';



// ####1
// const updatePlayers = players.map(player => {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// });

// console.table(updatePlayers);

// ####2
const updatePlayers = players.map(player => {
    // console.log(player.id);
    // console.log(player.timePlayed + 50);
    return player.id === playerIdToUpdate
        ? {
            ...player,
            timePlayed: player.timePlayed + 50}
        : player;

}
);

console.table(updatePlayers);