const numbers = document.querySelector('#number-wrapper');
const operators = document.querySelector('#operation-wrapper');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#operate');
const display = document.querySelector('#calculation');
let opSwitch = 0;

let num1 = '',
  num2 = '',
  selectedOperator = '',
  returnedResult = '';

numbers.addEventListener('click', receiveNumber);
operators.addEventListener('click', receiveOperator);
zero.addEventListener('click', receiveZero);
equals.addEventListener('click', calculation);

function receiveNumber(n) {
  if (n.target !== n.currentTarget) {
    let targetNumber = n.target.textContent;
    // console.log(targetNumber);
    display.textContent += targetNumber;
  }
}

function receiveZero(z) {
  let targetZero = z.target.textContent;
  // console.log(targetZero);
  display.textContent += targetZero;
}

function receiveOperator(o) {
  let targetOperator;
  if (o.target !== o.currentTarget) {
    targetOperator = o.target.textContent;
  }
  num1 = Number(display.textContent);
  opSwitch = 1;
  display.textContent = '';
  return selectedOperator = targetOperator;
}

function calculation() {
  if (opSwitch = 0) {
    return 'ERROR';
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
        returnedResult = num1 / num2;
        display.textContent = returnedResult;
        opSwitch = 0;
        break;
    };
  }
}