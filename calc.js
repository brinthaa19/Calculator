let currentInput = '';
let currentOperation = '';
let previousInput = '';

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const display = document.querySelector('.result');
console.log(display);

const numbers= document.querySelectorAll(".key")

numbers.forEach((number)=> {
    number.addEventListener("click", (event) => {
        console.log(event.target.innerText)
    })
})

const updateScreen = (value) => {
  if (display.textContent === " ") {
    display.textContent = value;
  } else {
    display.textContent = currentNumber;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const value = event.target.innerText;
    updateScreen(value);
  });
});

if (currentNumber === "0") {
    currentNumber = value;
} else {
    currentNumber += value; 
};

const clear = document.querySelector(".big")
clear.addEventListener("click", () => {
    display.innerText = " "
})

// const backspace = document.querySelector(".delete")
// clear.addEventListener("click", () => {
// })


const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.innerText);
    });
});

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = " "
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    calculate()
    display.textContent = currentNumber; 
})

const calculate = () => {
    let result = 0;

    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(currentNumber);

    switch(calculationOperator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break
        default:
            return;
    }

    currentNumber = result.toString();
    calculationOperator = "";
    prevNumber = "";
};

