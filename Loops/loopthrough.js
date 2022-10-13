var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

//! THIS IS THE RIGHT WAY!!!
for (var key in student) {
    console.log(key + " => " + student[key]);
}

//! This only shows the key, but not the information pertaining to the key.
for (var key in student) {
    console.log(key + " => " + student.key);
}