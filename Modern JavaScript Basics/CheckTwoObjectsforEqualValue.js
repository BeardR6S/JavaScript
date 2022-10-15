//! This is one of the more tricky parts of JavaScript according to Jordan

//! Library recommended for this is LoDash library

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1); //? 
    const obj2Keys = Object.keys(obj2); //?
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }
    return true;
};

const obj1 = {
    name: 'Brandon',
    age: 27,
    favorites: {
        food: 'Pizza'
    }
}


const obj2 = {
    name: 'Brandon',
    age: 27,
    favorites: {
        food: 'Pizza'
    }
}

isEqual(obj1, obj2) //?

//! Above is my code, Below is Jordans code.

// const isEqual = (obj1, obj2) => {
//     const obj1Keys = Object.keys(obj1);
//     const obj2Keys = Object.keys(obj2);

//     if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//     }

//     for (let objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//         return false;
//     }
//     }
//     return true;
// };

// const obj1 = {
//     name: "Brandon",
//     age: 27,
//     favorites: {
//         food: "Pizza",
//         vacation: "Disneyland"
//     }
// };

// const obj2 = {
//     name: "Brandon",
//     age: 27,
//     favorites: {
//         food: "Pizza",
//         vacation: "Disneyland"
//     }
// };