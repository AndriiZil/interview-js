let a = 42;
let b = a;
b++
console.log('a', a); // => 42
console.log('b', b); // => 43

let c = [1, 2, 3];
let d = c;

d.push(4);

let r = [1, 2, 3, 4];

console.log('c', c); // => [ 1, 2, 3, 4 ]
console.log('d', d); // => [ 1, 2, 3, 4 ]

console.log(c === d); // => true
console.log(c === r); // false

let w = 1;
let s = 2;
let m;

m = w
w = s
s = m

console.log(w, s); // => 2, 1
