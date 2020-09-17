// null, undefined, boolean, number, string, object, symbol

console.log(typeof 0); // => number
console.log(typeof true); // => boolean
console.log(typeof 'JavaScript'); // => string
console.log(typeof undefined); // => undefined
console.log(typeof Math); // => object
console.log(typeof Symbol('JS')); // => symbol
console.log(typeof null); // => object
console.log(typeof NaN); // => number
console.log(typeof 1 / 0); // NaN

console.log('===TYPES===');

console.log(Boolean('')); // => false
console.log(Boolean(0)); // => false
console.log(Boolean(null)); // => false
console.log(Boolean(undefined)); // => false
console.log(Boolean(NaN)); // => false
console.log(Boolean(false)); // => false
console.log(Boolean([])); // => true
console.log(Boolean({})); // => true
console.log(Boolean(function () {})); // => true

console.log('===CONVERTING===');

console.log(typeof (1 + '2')); // => 12 (string)
console.log(typeof ('' + 1 + 0)); // 10 (string)
console.log(typeof ('' - 1 + 0)); // => -1 (number)
console.log(typeof ('3' * '8')); // => 24 (number)
console.log('4' + '10' + 'px'); // => 410px (string)
console.log('px' + 5 + 10); // => px510 (string)
console.log(5 + 10 + 'px'); // => 15px (string)
console.log('42' - 40); // => 2 (number)
console.log('42px' - 2); // NaN
console.log(null + 2); // => 2
console.log(undefined + 42); // => NaN

console.log('== vs ===');

console.log(2 == '2'); // => true
console.log(2 === '2'); // => false
console.log(undefined == null); // => true
console.log(undefined === null); // false
console.log('0' == false); // => true
console.log('0' == 0); // => true
console.log(0 == 0); // => true

console.log('===differences===');

console.log(false == ''); // => true
console.log(false == []); // => true
console.log(false == {}); // => false
console.log('' == 0); // => true
console.log('' == []); // => true
console.log('' == {}); // => false
console.log(0 == []); // => true
console.log(0 == {}); // false
console.log(0 == null); // => false
