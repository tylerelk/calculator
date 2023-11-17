class Calculator {
  constructor(previousInput, currentInput) {
    this.previousInput = previousInput;
    this.currentInput = currentInput;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  operatorChoice(operator) {
    if (this.currentOperand === '') return;
    if (this.previousOperand != '') {
      this.caluclate();
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  caluclate() {
    let computation;
    const previous = Number(this.previousOperand);
    const current = Number(this.currentOperand);
    if (isNaN(previous) | isNaN(current)) return;
    switch (this.operator) {
      case '+':
        computation = previous + current;
        break;
      case '-':
        computation = previous - current;
        break;
      case 'x':
        computation = previous * current;
        break;
      case '÷':
        computation = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operator = undefined;
    this.previousOperand = '';
  }

  updateOutput() {
    this.currentInput.textContent = this.currentOperand;
    if (this.operator != null) {
      this.previousInput.textContent = `${this.previousOperand} ${this.operator}`;
    } else {
      this.previousInput.textContent = '';
    }
  }
}

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');

const calculator = new Calculator(previousInput, currentInput);

numberButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.textContent);
    calculator.updateOutput();
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.operatorChoice(button.textContent);
    calculator.updateOutput();
  })
})

equalsButton.addEventListener('click', button => {
  calculator.caluclate();
  calculator.updateOutput();
})

clearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateOutput();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateOutput();
})