/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
*/
[1, 2, 3].sum() // Output: 6

Array.prototype.sum = function () {
  let sum = 0;
  let arr = this;
  for(i in arr){
    if(isNaN(arr[i])){
      continue;
    }
    sum += arr[i];
  }
  return sum;
}


/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
*/
const obj = {};
String(obj); // Output: 'This is an object'.

Object.prototype.toString = () => {return 'This is an object';}


// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
const obj = { message: 'This is a message' };
String(obj) // Output: 'This is a message'.

Object.prototype.toString = function () {
  if (this.message) {
    return this.message;
  }else{
    return 'This is an object';
  }  
}

/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/
// using ES5:
Animal.counter = 0;
function Animal(clr,wt) {
  if(Animal.counter >= 100) {
    throw error = new Error("Max number of Animals has been reached");
  }else{
    Animal.counter++;
    this.color = clr;
    this.weight = wt;
  }
}

Animal.prototype.walk = function () {
  console.log("It's walking!");
}
Animal.prototype.run = function () {
  console.log("It's running!");
}
Animal.prototype.eat = function () {
  console.log("It's eating WuW!");
}
Animal.prototype.attack = function () {
  console.log("IT'S ATTAKING");
}

function Bird(clr,wt) {
  Animal.call(this,clr,wt);
}

Bird.prototype = Object.create(Animal.prototype)




// using ES6:
class Animal {
  static counter = 0;
  constructor(clr,wt){
    if(Animal.counter >= 100) {
      throw error = new Error("Max number of Animals has been reached");
    }else{
      Animal.counter++;
      this.color = clr;
      this.weight = wt;
    }
  }

  walk() {
    console.log("It's walking!");
  }
  run() {
    console.log("It's running!");
  }
  eat() {
    console.log("It's eating WuW!");
  }
  attack() {
    console.log("IT'S ATTAKING");
  }
}

class Bird extends Animal {
  constructor(clr,wt) {
    super(clr,wt);
  }
  fly() {
    console.log("I can fly!");
  }

}

function isBird(animal) {
  if(animal instanceof Bird) {
    console.log(animal + " is a bird");
    return true;
  }else{
    console.log(animal + " is not a bird");
    return false;
  }
}