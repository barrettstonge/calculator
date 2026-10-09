const add = function (a, b) {
  return a + b;
};

//console.log(add(1,1));
const subtract = function (a, b) {
  return a - b;
};
//console.log(subtract(1,1));
const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};
//console.log(multiply([9,2]));
const divide = function (a,b) {
    return a / b;
};

//console.log(divide(12,2));

const a = firstInput;
const userOperator = secondInput;
const b = thirdInput;