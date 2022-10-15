// let playerOne = 'Brandon';
// let playerTwo = 'Ashley';

// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = playerTwo;
// playerTwo = playerOne;

// console.log(`
// Player One: ${playerOne}
// Player Two: ${playerTwo}
// `);

//! ^^ This is wrong

let playerOne = 'Brandon';
let playerTwo = 'Ashley';

[playerOne, playerTwo] = [playerTwo, playerOne];
// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

//* Commented out stuff is NOT needed, but what it would look like without variable deconstruction.