// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
 return num + 2
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + "s"

}

// uncomment these to check your work
 console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  
  const newArray = []
  
  for(let i in array) {
    newArray.push(callback(array[i]))
  }
return newArray
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let i in array) {
    array[i] = callback(array[i])
  }
return array
}

// see for yourself if your forEach works!
console.log(forEach([1, 2, 3], addTwo));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  return forEach(array, callback)

}

console.log(mapWith([55, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  
  if (Array.isArray(array)) {
    let acc;
    
    if(initialValue === undefined) {
      initialValue = array[0]
      array = array.slice(1)
    } 
    
    
    acc = initialValue
    
    for(let i in array) {
      acc = callback(acc, array[i])
    }
    return acc
  }
  return console.log("Not an Array")

}


function equals(a , b) {
  const array = []
  for (let i in a) {
    for ( let l in b) {
      a[i] === b[l] && array.push(a[i]) 
    }
  }
  return array
}

//Extension 3
function intersection(arrays) {

  const array = [...arguments]
  
  return reduce(array, equals)
  
}

//console.log(intersection([5, 10, 15, 20, 88], [15, 88, 1, 5, 7], [1,88,10, 15, 5, 20], [5,10,15,88]));
// should log: [5, 15]

function unify(a,b) {
  let i = 0
  
 
 
  a.length === 0 && a.push(b[0])
 
  
     function checker () {   
       
      
       
      for(let l in a) {      
      b[i] === a[l] && i++ && checker () 
     }
   }
      
   
   for(i = 0; i < b.length; i++) {
        b !== undefined && checker()
       b[i] !== undefined && a.push(b[i])
 }		
 
   
   
 
 return a
  
}

//Extension 4
function union(arrays) {
const array = [...arguments]
return reduce(array, unify, [])
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5,5,5,5,5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

function match(a,b) {
  
  for (let i in b[0]) {
    
    b[1][i] === b[2]((b[1][i])) && a.push({[b[0][i]]:b[1][i]})    
  }
return a
  
  // completely unreadble code xD, but works. 
  // the premise is to pass all the arguments, iterate the arrays, pass array2 into the callback, check if the callback comes true and push it into an array.
  // I could easly make this code more readble, but for my own sake, I've choose to keep it like this, because I know I'll be handed code like this one day, so, considerate pratice. 
  // somehow I feel proud of this unreadble piece of code, I guess makes you feel special when you able to understand this abstract piece of code, makes tou feel like you special, the proud of being a software developer.
  // read what only few other humans can read, it's like our special language, our magic language.
  // understand that probably only -1% of earth population can read this, how special are you now? 
 // moving on... :D
}

//Extension 5
function objOfMatches(array1, array2, callback) {
 return reduce([[...arguments]], match, [] )
}

 //console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  
  const obj = {}
  
  map(arrVals, function (x) {
    obj[x] = []
  })
  
  
  map(arrCallbacks, function(x) {
    
    for(let i in arrVals) {
      
      obj[arrVals[i]].push(x(arrVals[i]))
    }
    
  })
  

  
  return obj
  
 
  

}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

