let currentInput = '';
let currentOperation = '';
let previousInput = '';

let prevNumber = "0";
let calculationOperator = "";
let currentNumber = "0";

const display = document.querySelector('.result');
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".big");
const equalSign = document.querySelector(".equal-sign");
const operators = document.querySelectorAll(".operator");

const updateScreen = (value) => {
  display.textContent = currentNumber;
};


const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  updateScreen(currentNumber);
};

// todo: add calculate to inputOperator to make this work for multiple operations
const inputOperator = (operator) => {
  if (currentNumber === "") return;
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};


const calculate = () => {
  let result = 0;
  const num1 = parseFloat(prevNumber);
  const num2 = parseFloat(currentNumber);

  switch (calculationOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  calculationOperator = "";
  prevNumber = "";
  updateScreen(currentNumber);
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const value = event.target.innerText;
    inputNumber(value);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.innerText);
  });
});

equalSign.addEventListener("click", calculate 
);

clear.addEventListener("click", () => {
  currentNumber = "0";
  prevNumber = "";
  calculationOperator = "";
  updateScreen(currentNumber);
});


const backspaceButton = document.querySelector(".delete");

backspaceButton.addEventListener("click", () => {
  currentNumber = currentNumber.slice(0, -1);

  if (currentNumber === "") {
    currentNumber = "0";
  }

  display.textContent = currentNumber;
});
