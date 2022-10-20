class Instructor {
    constructor ({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name}: ${this.role}`)
    }

    static helloWorld() {
        console.log('Hi there'); 
    }

    static canTeach(Instructor) {
        return (Instructor.role === 'classroom');
    }
}

let john = new Instructor ({ 'name': 'John'}); //?
let alice = new Instructor ({ 'name': 'Alice', 'role' : 'classroom'}); //?

console.log(
    `${john.name} can teach: ${Instructor.canTeach(john)}`
);

console.log(
    `${alice.name} can teach: ${Instructor.canTeach(alice)}`
);


const jon = new Instructor({ name: 'Jon Snow' }); //?
const brandon = new Instructor({name: 'Brandon Hale', role: 'teacher'}); //?
jon.renderDetails();
brandon.renderDetails();


//! ------------------------------------------Below is any exercises they had me do.------------------------------------------------ 

/*Create a class, named Account, that has properties for a username and password. Then instantiate a new object called user and set the username and password to whatever strings you like.*/

class Account {
    constructor ({username, password}){
        this.username = username;
        this.password = password;
    }
}

const acc = new Account({username: 'Brandon', password: '12345'}); //?



/* You're in the market for a new car but want it to be electric. Create an instance of the Car class called model3. The year must be a number (so don't wrap it in quotation marks). Set the brand to "Tesla" and change the poweredBy to "electricity". */

class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car ({year: 2022, brand: 'Tesla', poweredBy: 'electricity'}) //?

/* Now you're in the market for a new home and need to compare some things first. Instantiate an object called choice1 and set the type to "house". It must return true. Instantiate another object called choice2 and the type must be set to "apartment" and that must return false. */

class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

choice1 = new Home({type:'house', payment:"mortgage"}); //?
Home.homeImprovement(choice1) //?

choice2 = new Home({type: 'apartment'});
Home.homeImprovement(choice2) //?