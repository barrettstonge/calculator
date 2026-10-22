const add = function (a, b) {
  return a + b;
};

//console.log(add(1,1));
const subtract = function (a, b) {
  return a - b;
};
//console.log(subtract(1,1));
const multiply = function (a,b) {
  return a * b;
};
//console.log(multiply([9,2]));
const divide = function (a,b) {
    return a / b;
};
  /* const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
  */

//console.log(divide(12,2));

//const a = firstInput;
//const b = thirdInput;

function operate(a,b){
   

    let curentOperator = add(a,b);

    

    return console.log(curentOperator);
   

    
};

operate(4,5);

const body = document.body;

const result = document.createElement("span");
result.id = "result";


display.appendChild(result);

const results = document.getElementById('display');
results.textContent = 0;

const buttons = document.querySelectorAll("mainContainer");











