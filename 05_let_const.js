// Let

let a = 'Variable a';
let b = 'Variable b';

{
  a = 'New variable A'
  let b = 'Local Variable B'

  console.log('Scope A', a);
  console.log('Scope B', b);
  // console.log('Scope C', c); // => ReferenceError: Cannot access 'c' before initialization
  let c = 'Some C';
}

console.log('A:', a); // => New variable A
console.log('B:', b); // => Variable b

// Const

const PORT = 8080;
// PORT = 3000; // => TypeError: Assignment to constant variable.

const array = [ 'str1', 'str2']
array.push('str3');

console.log(array); // => [ 'str1', 'str2', 'str3' ]

const obj = { name: 'Andrii', age: 32 };
obj.work = 'Developer';
console.log(obj); // => { name: 'Andrii', age: 32, work: 'Developer' }
