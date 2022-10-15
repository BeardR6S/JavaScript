//!One of the most important parts of JavaScript.

// function fullName(fName, lName) {
//     console.log(`${fName} ${lName}`)
// }
// fullName('Kristine', 'Hudgens');


// fullName = function(fName, lName) {
//     console.log(`${fName} ${lName}`)
// }
// fullName('Kristine', 'Hudgens');

//!Below are arrow functions 

// helloWorld = () => {console.log('Hi there'); }
// helloWorld();

// firstName = fName => { console.log(fName.toUpperCase()); }
// firstName('Brandon');

// //TODO The following are if you have multiple arguments in an arrow function

// fullName = (fName, lName) => {
//     console.log(`${fName} ${lName}`);
// }
// fullName('Brandon', 'Hale');

function userInfo (city, state, zip) {
    console.log(`${city} ${state} ${zip}`);
}
userInfo('Lehi', 'UT', '84043');