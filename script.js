/*

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

*/


  /* const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
  */

//console.log(divide(12,2));





const body = document.body;

const container = document.querySelector('.mainContainer');

const numberButtons = document.createElement("div");
numberButtons.id = 'numberButtons';
numberButtons.className = 'numberButtons'
container.appendChild(numberButtons);


const zero = document.createElement('button');
zero.id = 'zero';
zero.className = 'numberButtons';
zero.innerHTML = '0';
numberButtons.appendChild(zero);

const one = document.createElement('button');
one.id = 'one';
one.className = 'numberButtons';
one.innerHTML = '1'
numberButtons.appendChild(one);

const two = document.createElement('button');
two.id = 'two';
two.className = 'numberButtons';
two.innerHTML = '2';
numberButtons.appendChild(two);

const three = document.createElement('button');
three.id = 'three';
three.className = 'numberButtons';
three.innerHTML = "3";
numberButtons.appendChild(three);

const four = document.createElement('button');
four.id = 'four';
four.className = 'numberButtons';
four.innerHTML = '4';
numberButtons.appendChild(four);

const five = document.createElement('button');
five.id = 'five';
five.className = 'numberButtons';
five.innerHTML = '5';
numberButtons.appendChild(five);

const six = document.createElement('button');
six.id = 'six';
six.className = 'numberButtons';
six.innerHTML = '6';
numberButtons.appendChild(six);

const seven = document.createElement('button');
seven.id = "seven";
seven.className = 'numberButtons';
seven.innerHTML = '7';
numberButtons.appendChild(seven);

const eight = document.createElement('button');
eight.id = 'eight';
eight.className = 'numberButtons';
eight.innerHTML = "8";
numberButtons.appendChild(eight);

const nine = document.createElement('button');
nine.id = 'nine';
nine.className = 'numberButtons';
nine.innerHTML = '9';
numberButtons.appendChild(nine);

const operatorButtons = document.createElement("div");
operatorButtons.id = 'operatorButtons';
operatorButtons.className = 'buttonOp';
container.appendChild(operatorButtons);

const plus = document.createElement('button');
plus.id = 'plus';
plus.className = 'buttonOp'
plus.innerHTML = '+';
operatorButtons.appendChild(plus);

const minus = document.createElement('button');
minus.id = 'minus';
minus.className = 'buttonOp';
minus.innerHTML = '-';
operatorButtons.appendChild(minus);

const multiply = document.createElement('button');
multiply.id = 'multiply';
multiply.className = 'buttonOp';
multiply.innerHTML = '*';
operatorButtons.appendChild(multiply);

const divide = document.createElement('button');
divide.id = 'divide';
divide.classList = 'buttonOp';
divide.innerHTML = '/';
operatorButtons.appendChild(divide);

const equals = document.createElement('button');
equals.id = 'equals';
equals.className = 'equals';
equals.innerHTML = '=';
operatorButtons.appendChild(equals);

const clear = document.createElement('button');
clear.id = 'clear';
clear.className = 'clear';
clear.innerHTML = 'CLEAR';
operatorButtons.appendChild(clear);



/*function operate(a,b){
   

    let curentOperator = add(a,b);

    

    return console.log(curentOperator);
   

    
};

operate(4,5);*/

let a = '';
let b = '';
let currentOperator = '';

let result = document.createElement("span");
result.id = "result";


display.appendChild(result);

let results = document.getElementById('display');
results.textContent = '';

const buttons = document.querySelectorAll('.mainContainer');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => { 
    if(event.target.textContent === 0 | event.target.textContent <10)
     // 'event.target' refers to the exact button that was clicked
    return results.innerText += event.target.textContent; 
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => { 
    if(event.target.textContent === '+' | event.target.textContent === '-' | event.target.textContent === '/' | event.target.textContent === '*')
    return console.log(event.target.textContent); 
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => { 
    if(event.target.textContent === 'CLEAR')
    return results.innerText = ''; 
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => { 
    if(event.target.textContent === '=')
      return console.log("=");
    //return (insert operate function); 
  });
});







  

      












