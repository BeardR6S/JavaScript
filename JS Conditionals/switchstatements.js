var dataPoint = 'Hi there';

switch (typeof dataPoint) {
  case "string":
    console.log('It is a string!');
    break;
  case "number":
    console.log('It is a number!');
    break;
  case "boolean":
    console.log('It is either true or false!');
    break;
  default:
    console.log('No matches');
}