function sayHelloTo(name) {
  const message = 'Hello ' + name;

  return function () {
    console.log(message);
  }
}

const helloToElena = sayHelloTo('Elena');
helloToElena() // => Hello Elena

const helloToAndrii = sayHelloTo('Andrii');
helloToAndrii() // => Hello Andrii

function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      console.log(fw);
    },
    add: function (framework) {
      fw.push(framework)
    }
  }
}

const manager = createFrameworkManager();
console.log(manager); // => { print: [Function: print], add: [Function: add] }

manager.add('Vue');
manager.print(); // => [ 'Angular', 'React', 'Vue' ]

// setTimeout

const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) { // change var to let
  (function (j) {
    setTimeout(() => {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500)
  })(i)
}

