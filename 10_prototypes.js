// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myay`);
}

const cat = new Cat('Kot', 'white');

cat.voice(); // => Cat Kot says myay
console.log(Cat.prototype); // => Cat { voice: [Function] }
console.log(cat); // => Cat { name: 'Kot', color: 'white' }
console.log(cat.__proto__ === Cat.prototype); // => true
console.log(cat.constructor); // => [Function: Cat]

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Andrii';
console.log('skin' in person); // => true
console.log(person.legs); // => 2
console.log(person.name); // => Andrii

console.log(person.hasOwnProperty('legs')); // => false
console.log(person.hasOwnProperty('name')); // => true

// Object.create()
const proto = { year: 2019 };
const myYear = Object.create(proto);

console.log(myYear.year); // => 2019
console.log(myYear.hasOwnProperty('year')); // => false
console.log(myYear.__proto__ === proto); // => true
