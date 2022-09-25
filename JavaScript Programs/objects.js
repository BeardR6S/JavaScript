var user = {
    name : 'Brandon',
    age: 27,
    city: 'Wilmington',
    grades: { //this lets you nest inside
        math: 90,
        science: 80,
        languageArts: 100
    }
}

//How to update the list of grades
user.grades.coding = 99;

console.log(user.grades);