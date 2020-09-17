// Immediate Invoked Function Expression
let result = [];

for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i);
  })
}

result[2](); // => 5
result[4](); // => 5

for (var i = 0; i < 5; i++) {
  (function () {
    var j = i
    console.log(j) // => 0, 1, 2, 3, 4
  })()
}
