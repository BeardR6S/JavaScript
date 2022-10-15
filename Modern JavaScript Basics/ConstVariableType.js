// var city = 'Scottsdale';

// console.log(city);

//! ^^This is a global variable, can cause major issues but can be useful

//! This is one of the most go to ways to do variables in JS. Keeps it constant, cant be redeclared, reassigned.

const city = 'Scottsdale';
console.log(city);

city = 'Phoenix' //! Assignment to constant variable error thrown.