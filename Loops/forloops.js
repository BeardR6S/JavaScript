var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
}

//can also be as follows below
/*
for (var i = 0; i <=(players.length - 1); i++){
    console.log(players[i]);
} 
*/

// ! More Modern options
// * For Loop

for (player in players) {
    console.log(player);
    console.log(players[player]);
}

// * forEach loops

players.forEach(function(element) {
    console.log(element);
});