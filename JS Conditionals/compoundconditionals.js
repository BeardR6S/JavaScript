var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are NOT old enough to drive");
  console.log("You are NOT old enough to rent a car");
} else if (age > 16 && age < 25) {
  console.log("You can NOT eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are NOT old enough to rent a car");
} else if (age >= 25) {
  console.log("You can NOT eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}