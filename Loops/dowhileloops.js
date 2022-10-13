var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

// * While Loop first "while loop checks iteration first"

var i = 0;
while (i < players.length) {
    console.log(players[i]); //!DO NOT RUN ONLY THIS
    i++;
}

// * DO/While Loop "the condition is checked after the iteration"

var i = 0; 
do {
    console.log(players[i]);
    i++;
} while (i < players.length)