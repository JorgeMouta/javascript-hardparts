// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// CHALLENGE 1

function sumFunc(arr) {
        let sum = 0;
        for (const index in arr) {
                sum += arr[index];
        }
        return sum;
        // YOUR CODE HERE
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
        let count = 0;

        function next() {
                return arr[count++];
        }
        return next;
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log(myIterator());
console.log(myIterator());
console.log(myIterator());
console.log(myIterator());

// CHALLENGE 2

function nextIterator(arr) {
        // YOUR CODE HERE
        let count = 0;
        const next = {
                next() {
                        return arr[count++];
                },
        };
        // YOUR CODE HERE
        return next;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
        let sum = 0;
        const iterator = nextIterator(arr);

        for (const index in arr) {
                sum += iterator.next();
        }
        return sum;
        // YOUR CODE HERE
        // use your nextIterator function
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
        const entries = [...set];
        let count = 0;
        return {
                next() {
                        return entries[count++];
                },
        };

        // YOUR CODE HERE
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
        let count = 0;
        const array = Object.entries(arr);

        return {
                next() {
                        return array[count++];
                },
        };
        // YOUR CODE HERE
}

// OPTIONAL: You can just return an array with count and arr[count++], but this method is more in line with the instructions provided
// Uncomment the lines below to test your work
const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
        this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
        const splitted = this.str.split(" ");
        let count = 0;

        const next = {
                next() {
                        return { value: splitted[count++], done: count > splitted.length };
                },
        };

        return next;
        // YOUR CODE HERE
};

// Uncomment the lines below to test your work
const helloWorld = new Words("Hello World");
for (word of helloWorld) {
        console.log(word);
} // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array) {
        let count = 0;

        return {
                sentence() {
                        return count++ === 0 ? "was found after index first" : `was found after index ${count - 1}`;
                },
        };
}

const returnedSentence = valueAndPrevIndex([4, 5, 6]);
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());

// CHALLENGE 8

function* createConversation(string) {
        yield setInterval(function() {
                console.log(string === "english" ? "hello there" : "gibberish");
        }, 3000);
}

// console.log(createConversation("english").next());

// this one is kinda weird, not sure if I got what is requested, hopefully I did.

// CHALLENGE 9
function waitForVerb(noun) {
        return `${noun} plays`;
}

async function f(noun) {
        const concat = await new Promise(function(resolve) {
                return setTimeout(function() {
                        resolve(waitForVerb(noun));
                }, 3000);
        });

        return console.log(concat);
}

f("dog");
