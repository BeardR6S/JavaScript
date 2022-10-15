// const page = 'home';

// console.log(`class=${ page === 'home' ? 'master-layout' : 'secondary-layout' }`)


/*In the below function's return, use a ternary that returns "1 point", when the ship variable is set to "hit". Otherwise, have it return "You lost a point". Then, set the ship variable to "hit" or "miss".
*/

//! Coding Exercise Below

var ship = "hit";

function battleShip() {
    return(`${ ship === "hit" ? '1 point' : 'You lost a point'}`);
}