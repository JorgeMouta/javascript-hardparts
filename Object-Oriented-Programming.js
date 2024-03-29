// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
const person = {
  name,
  age
}
return person
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
 console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
greet : function () {
  return console.log("hello")
}

};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  const person = Object.create(personStore)
  person.name = name
  person.age = age
  
  return person


}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
 console.log(sandra.name); // -> Logs 'Sandra'
 console.log(sandra.age); //-> Logs 26
 sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function () {
  return console.log("Hi, my name is " + this.name)
}
// add code here

 sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	// add code here
this.greet = function () {
  return console.log("hello")
}

}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here
  PersonConstructor.call(this)
  this.name = name
  this.age = age


}

personFromConstructor.prototype = Object.create(PersonConstructor.prototype)

var mike = new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
    this.name = name
    // add code here


	}
greet () {
  console.log("hello")
}
	// add code here

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
 george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here

class DeveloperClass extends PersonClass {
  constructor(name) {
    super(name)
  }
  introduce() {
    return console.log("Hello World, my name is " + this.name)
  }
}
// /********* Uncomment these lines to test your work! *********/
 var thai = new DeveloperClass('Thai', 32);
 console.log(thai.name); // -> Logs 'Thai'
 thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore)/* Put code here */ ;

function adminFactory(name, score) {
  const admin = userFactory(name, score)
  Object.setPrototypeOf(admin, adminFunctionStore)
  admin.type = "Admin"
  
  return admin
  // Put code here
}

adminFunctionStore.sharePublicMessage = function () {
  return console.log("Welcome users!")
}
/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);
var userFromFactory = userFactory("John", 4);



// /********* Uncomment these lines to test your work! *********/
 adminFromFactory.sayType() // -> Logs "I am a Admin"
 adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
userFromFactory.sayType()
userFromFactory.sharePublicMessage()
