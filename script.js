// Pull from HTML

const numbers = document.querySelector('#number-wrapper');
const operators = document.querySelector('#operation-wrapper');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#operate');
const display = document.querySelector('#calculation');
const accummulator = document.querySelector('#running-total');
const resetButton = document.querySelector('#reset');
let opSwitch = 0;

// Start accumulator at 0;
accummulator.textContent = '0';
// Declare reused variables

let num1 = '',
  num2 = '',
  selectedOperator = '',
  returnedResult = '';

// Add event listeners to button groups

numbers.addEventListener('click', receiveNumber);
operators.addEventListener('click', receiveOperator);
zero.addEventListener('click', receiveZero);
equals.addEventListener('click', calculation);

resetButton.addEventListener ('click', () => {
  num1 = '';
  num2 = '';
  opSwitch = 0;
  selectedOperator = '';
  returnedResult = '';
  display.textContent = '';
  accummulator.textContent = '0';
})

// Behavior to place numbers into display

function receiveNumber(n) {
  if (n.target !== n.currentTarget) {
    let targetNumber = n.target.textContent;
    display.textContent += targetNumber;
  }
}

function receiveZero(z) {
  let targetZero = z.target.textContent;
  display.textContent += targetZero;
}

// TO DO: receiveOperator should act as calculation() when entering multiple operations

function receiveOperator(o) {
  let targetOperator;
  if (o.target !== o.currentTarget) {
    targetOperator = o.target.textContent;
  }
  if (opSwitch === 1) {
    calculation();
  } else {
    num1 = Number(display.textContent);
    opSwitch = 1;
  }
  accummulator.textContent = display.textContent;
  display.textContent = '';
  return selectedOperator = targetOperator;
}

//Basic calculation function

function calculation() {
  if (opSwitch === 0 && display.textContent === '') {
    return display.textContent = 'ERROR';
  } else {
    num2 = Number(display.textContent);
    switch (selectedOperator) {
      case '+':
        returnedResult = num1 + num2;
        display.textContent = returnedResult;
        opSwitch = 0;
        break;
      case '-':
        returnedResult = num1 - num2;
        display.textContent = returnedResult;
        opSwitch = 0;
        break;
      case 'x':
        returnedResult = num1 * num2;
        display.textContent = returnedResult;
        opSwitch = 0;
        break;
      case '/':
        if (num2 === 0) {
          display.textContent = 'FUCK YOU';
          break;
        } else {
          returnedResult = num1 / num2;
          display.textContent = returnedResult;
          opSwitch = 0;
          break;
        }
    };
  }
}