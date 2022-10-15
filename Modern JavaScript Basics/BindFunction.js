const userOne = {
    firstName: "Brandon",
    lastName: "Hale"
}

const userTwo = {
    firstName: "Ashley",
    lastName: "Hale"
}

const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

const brandon = fullName.bind(userOne);
const ashley = fullName.bind(userTwo);

brandon() //?
ashley()//?