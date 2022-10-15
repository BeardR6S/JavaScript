//! Combining Arrays

// let shoppingCart = [245, 275, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems);
// console.log(shoppingCart);

//! Copying Arrays

//? Wrong way below, it changes the source array

// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = shoppingCart;
// updatedCart.push(5);
// console.log(updatedCart)

//? This will work, but not the best practice.

// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = shoppingCart.slice();
// updatedCart.push(5);
// console.log(updatedCart)

//TODO This is the best practice, as it doesn't change the source array AND is easier to understand. 

const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart)
console.log(shoppingCart)

//! How Spread Operator is used with function arguments

console.log(Math.max(1, 5, 1, 10, 2, 3)); 
//* ^^Outputs top value aka MAX

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); 
//! ^^How to do this with an Array.

//! How to use Spread Op in object deconstruction 

const { starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregson',
}

console.log(starter);
console.log(closer);
console.log(relievers);