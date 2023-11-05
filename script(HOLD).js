const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', 'x', '/'];
const screenInput = [];
let num1Set = false;
let num1 = '';
let num2 = '';
let operator = '';

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const operate = document.querySelector('#operate');
const screen = document.querySelector('#calculation');
const reset = document.querySelector('#reset');

one.addEventListener('click', () => {
    screen.textContent += '1';
    if (num1Set === false) {
        num1Set = true;
        num1 = 1;
        screenInput.push(1);
    } else {
        num2 = 1;
        screenInput.push(1);
    }
})

two.addEventListener('click', () => {
    screen.textContent += '2';
    if (num1Set === false) {
        num1Set = true;
        num1 = 2;
        screenInput.push(2);
    } else {
        num2 = 2;
        screenInput.push(2);
    }
})

three.addEventListener('click', () => {
    screen.textContent += '3';
    if (num1Set === false) {
        num1Set = true;
        num1 = 3;
        screenInput.push(3);
    } else {
        num2 = 3;
        screenInput.push(3);
    }
})

four.addEventListener('click', () => {
    screen.textContent += '4';
    if (num1Set === false) {
        num1Set = true;
        num1 = 4;
        screenInput.push(4);
    } else {
        num2 = 4;
        screenInput.push(4);
    }
})

five.addEventListener('click', () => {
    screen.textContent += '5';
    if (num1Set === false) {
        num1Set = true;
        num1 = 5;
        screenInput.push(5);
    } else {
        num2 = 5;
        screenInput.push(5);
    }
})

six.addEventListener('click', () => {
    screen.textContent += '6';
    if (num1Set === false) {
        num1Set = true;
        num1 = 6;
        screenInput.push(6);
    } else {
        num2 = 6;
        screenInput.push(6);
    }
})

seven.addEventListener('click', () => {
    screen.textContent += '7';
    if (num1Set === false) {
        num1Set = true;
        num1 = 7;
        screenInput.push(7);
    } else {
        num2 = 7;
        screenInput.push(7);
    }
})

eight.addEventListener('click', () => {
    screen.textContent += '8';
    if (num1Set === false) {
        num1Set = true;
        num1 = 8
        screenInput.push(8);
    } else {
        num2 = 8;
        screenInput.push(8);
    }
})

nine.addEventListener('click', () => {
    screen.textContent += '9';
})

plus.addEventListener('click', () => {
    screen.textContent += '+';
})

minus.addEventListener('click', () => {
    screen.textContent += '-';
})

multiply.addEventListener('click', () => {
    screen.textContent += 'x';
})

divide.addEventListener('click', () => {
    screen.textContent += '/';
})

zero.addEventListener('click', () => {
    screen.textContent += '0';
})

reset.addEventListener('click', () => {
    screen.textContent = '';
    screenInput = [];
    num1Set = false;
})