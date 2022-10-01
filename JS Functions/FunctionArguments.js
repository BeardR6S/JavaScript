function fullName(firstName, lastName) {
  return lastName.toUpperCase() + ', ' + firstName.toUpperCase();
}

fullName('Brandon', 'Hale');

function sample(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

// ! Break

function fullName(firstName, lastName, language) {
  var language = language || 'English'.toUpperCase();
  return lastName.toUpperCase() + ', ' + firstName.toUpperCase() + ' - ' + language.toUpperCase();
}

console.log(fullName('Brandon', 'Hale', 'Spanish')) //Returns Last, First, Undefined