// function ageVerification(age) {
  // if (age > 25) {
  //   console.log('Can rent car');
  // } else {
  //   console.log('is not old enough yet');
  // }
//*Ternary Operator is below this comment
//   let answer = age > 25 ? 'can rent a car' : 'Cant rent a car';
//   console.log(answer);


// }

// ageVerification(5)

//* Broken down Ternary Operator explained
//? Conditional = age > 25
//? If conditional was true = "can rent a car" (after the ?)
//? If conditional was false = 'Cant rent a car" (after : )

//! Advanced Ternary Operator Example below

function adminControls(user) {
  // if (user) {
  //   if (user.admin) {
  //     console.log('Showing admin controls...');
  //   } else {
  //     console.log('You need to be an admin');
  //   }
  // } else {
  //   console.log('You need to be logged in');
  // }

  let response =  user ? user.admin ? "showing admin controls" : "You need to be an admin" : "You need to be logged in";
  
  console.log(response)
}

let userOne = {
  name: 'Kristine',
  admin: true
}
adminControls(userOne);

let userTwo = {
  name: 'Jim',
  admin: false
}
adminControls(userTwo);

let userThree = null;
adminControls(userThree);