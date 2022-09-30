
//! Depending on the line of code, age will need to be changed for it to return anything.
var age = 10;
var ageTwo = 24; //if its anything OTHER then 27, it does NOT return anything

// if (age === ageTwo){
//     console.log('They are equal');
// }

//!Best practice is having 3 === 


// if (age !== ageTwo) {
//     console.log('Not equal');
// }

//!Best practice is the have !== NOT !=

// if (age >= 25) {
//     console.log('Old enough to rent a car')
// }

//You could do if (age > 24), which WOULD be true however thats also really weird since its 25 years old AND up.

if (age <= 10) {
    console.log("You can eat from the kid's menu")
}