function Cat(color, name) {
  this.color = color;
  this.name = name;
}

const cat = new Cat('black', 'KOT');
console.log(cat); // => Cat { color: 'black', name: 'KOT' }

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype)
  return constructor.apply(obj, args) || obj
}

const catt = myNew(Cat, 'black', 'KOT');
console.log(catt); // => Cat { color: 'black', name: 'KOT' }

const cattt = new Cat();
console.log(cattt); // => Cat { color: undefined, name: undefined }
