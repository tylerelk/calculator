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

function funcAdd(inputA, inputB) {
    return inputA + inputB;
}

function funcSub(inputA, inputB) {
    return inputA - inputB;
}

function funcMultiply(inputA, inputB) {
    return inputA * inputB;
}

function funcDivide(inputA, inputB) {
    return inputA / inputB;
}

one.addEventListener('click', () => {
    screen.textContent = '1';
    return 1;
})

two.addEventListener('click', () => {
    screen.textContent = '2';
    return 2;
})

three.addEventListener('click', () => {
    screen.textContent = '3';
    return 3;
})

four.addEventListener('click', () => {
    screen.textContent = '4';
    return 4;
})

five.addEventListener('click', () => {
    screen.textContent = '5';
    return 5;
})

six.addEventListener('click', () => {
    screen.textContent = '6';
    return 6;
})

seven.addEventListener('click', () => {
    screen.textContent = '7';
    return 7;
})

eight.addEventListener('click', () => {
    screen.textContent = '8';
    return 8;
})

nine.addEventListener('click', () => {
    screen.textContent = '9';
    return 9;
})

plus.addEventListener('click', () => {
    screen.textContent = '+';
    return '+';
})

minus.addEventListener('click', () => {
    screen.textContent = '-';
    return '-';
})

multiply.addEventListener('click', () => {
    screen.textContent = 'x';
    return 'x';
})

divide.addEventListener('click', () => {
    screen.textContent = '/';
    return '/';
})

zero.addEventListener('click', () => {
    screen.textContent = '0';
    return 0;
})