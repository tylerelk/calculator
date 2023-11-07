const numbers = document.querySelector('#number-wrapper');
const operators = document.querySelector('#operation-wrapper');
let opSwitch = false;
const zero = document.querySelector('#zero');
const equals = document.querySelector('#operate');
const display = document.querySelector('#calculation');

let num1,
  num2,
  selectedOperator;

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
  switch (opSwitch) {
    case false:
      num1 = Number(display.textContent);
      display.textContent = '';
      break;
    case true:
      num2 = Number(display.textContent);
      display.textContent = '';
      break;
  };
  opSwitch = true;
  return selectedOperator = targetOperator;
}

function calculation(num1, num2, selectedOperator) {
  // console.log('CLICKING THIS WILL EVALUATE')
  num2 = Number(display.textContent);
  let result;
  if (opSwitch = false) {
    return 'ERROR';
  } else {
    result = function() {
      switch (selectedOperator) {
        case '+':
          return result = num1 + num2;
        case '-':
          return result = num1 - num2;
        case 'x':
          return result = num1 * num2;
        case '/':
          return result = num1 / num2;
      }
    }
  }
  display.textContent = result;
}