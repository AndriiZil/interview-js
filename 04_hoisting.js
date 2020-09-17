// Example: Function Declaration
console.log(sum(3, 4)); // => 7

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // => 3

console.log(sumNum(4, 3)); // => ReferenceError: Cannot access 'sumNum' before initialization

// Example: Function Expression
const sumNum = function (a, b) {
  return a + b;
}

console.log(sumNum(5, 7)); // => 12

var i;
console.log(i); // => undefined
i = 12;
console.log(i); // => 12

console.log(j); // => undefined
var j = 32;
console.log(j); // => 32

console.log(b); // => ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);

console.log(g); // => ReferenceError: Cannot access 'g' before initialization
const g = 98;
console.log(g);
