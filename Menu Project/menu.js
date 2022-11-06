const entreeOptions = {
    "Chicken wrap": 5,
    "Burger and fries": 11,
    "Chicken Sandwich": 12,
    "Steak": 9,
    "Tomahawk Steak": 32,
    "Döner Kebab w/ signature sauce": 14,
}
const sideOptions = {
    "Onion Rings": 3,
    "Home Fries": 3,
    "Fries": 2,
    "Cheese fries": 4,
    "Mixes Veggies": 4,
    "Side Salad w/ homemade dressing": 5
}


const commentVault = ["Sure, is that all?", "Alright, anything else?"];
let randResponse = Math.floor(Math.random() * commentVault.length);
console.log(randResponse[commentVault]);


// Print mainmenu if true, don't if false
let customerSeeMainMenu = 'False';
if (customerSeeMainMenu === 'True'){
    console.log(entreeOptions)
}

//Greet customer/Random generated response from the list
let customerOrder = prompt("Hi, what would you like?")
console.log(customerOrder);
if (customerOrder){
    let response = confirm(commentVault[randResponse]);
    console.log(response)
} 

//Create an empty list for selected items:
let customerTotal = [];
//Push each customer order to the list, based on the result. 
//Start with adding order from main menu to list
if (customerOrder){
    customerTotal.push(entreeOptions[customerOrder]);
}

//Customer chooses 2 sideOptions
//Create an array of sideOptions based on sideOptions object
const entreeOrderList = Object.keys(sideOptions);
console.log(entreeOrderList);

    //Use for loop to select random two orders, if the list is longer than three, set i to list.length - 2(to determine what index to begin counting from)
for (let i=1; i<entreeOrderList.length; i++){
    let twoOrders = Math.floor(Math.random() * entreeOrderList.length);
    console.log(confirm(entreeOrderList[twoOrders])); 
//Add both side order options to customerTotal
if (twoOrders){
        customerTotal.push(sideOptions[entreeOrderList[twoOrders]])
        customerTotal.push(sideOptions[entreeOrderList[twoOrders]])
    }
}

let reducer = (accumulator, currentValue) => accumulator + currentValue
let finalTotal = customerTotal.reduce(reducer);
let finalResponse = confirm(`Alright, your total comes out to ${finalTotal}`)