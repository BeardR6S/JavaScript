function dashboardGreeting() {
  var userObj = {
    email: 'sample@devcamp.com',
    fullName: 'Tiffany Hudgens'
  }
  console.log('Hi there, '.concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);

