// Challenge 1

function sayHello() {
  console.log("hello")
 return setTimeout(sayHello, 1000)
}

// Uncomment the line below when ready
 //sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  
return setTimeout(function () {
  return resolve("Resolved")
}, 1000)
  // ADD CODE HERE
});

// Should print out "Resolved!"
// ADD CODE HERE
//console.log(promise.then(x => console.log(x)))

// Challenge 3

promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("Rejected"), 1000)
  // ADD CODE HERE
})

// Should print out "Reject!"
// ADD CODE HERE
//console.log(promise.catch(x => console.log(x)))


// Challenge 4

promise = new Promise(function (resolve, reject) {
  
resolve('Promise has been resolved!')
 //ADD CODE HERE
});

// Uncomment the lines below when ready
promise.then((x) => console.log(x));
console.log("I'm not the promise!");


// Challenge 5
function delay(){
return new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000)
})
}

// Uncomment the code below to test
 //This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW

var secondPromise = new Promise(function(resolve, reject) {
                                return resolve("Second")
                                })
                                
var firstPromise = new Promise(function(resolve, reject) {
                               return resolve(secondPromise)
                               }).then(x => console.log(x))


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
   
 return  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)])
  

  // CODE GOES HERE
}

console.log(getAllData().then(x => console.log(x)))
