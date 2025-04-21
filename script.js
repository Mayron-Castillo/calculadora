const numbers = document.querySelectorAll(".number");
const main = document.querySelector("#display");
const history = document.querySelector("#history");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const percentaje = document.querySelector("#percentaje");
const negative = document.querySelector("#negative");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");

let firstNumber = 0;
let operator = "";
let waitingForSecondNumber = false;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (main.textContent === "0" || waitingForSecondNumber) {
            main.textContent = number.textContent;
            waitingForSecondNumber = false;
        } else {
            main.textContent += number.textContent;
        }
    });
});

dot.addEventListener("click", () => {
    if (!main.textContent.includes(".")) {
        main.textContent += ".";
    }
});

reset.addEventListener("click", () => {
    main.textContent = "0";
    history.textContent = "";
    firstNumber = 0;
    operator = "";
    waitingForSecondNumber = false;
});

negative.addEventListener("click", () => {
    main.textContent = Number(main.textContent) * -1;
});

percentaje.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "%";
    history.textContent = `${firstNumber} %`;
    main.textContent = "";
    waitingForSecondNumber = true;
});

divide.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "/";
    history.textContent = `${firstNumber} ÷`;
    waitingForSecondNumber = true;
});

multiply.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "*";
    history.textContent = `${firstNumber} ×`;
    waitingForSecondNumber = true;
});

subtract.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "-";
    history.textContent = `${firstNumber} -`;
    waitingForSecondNumber = true;
});

add.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "+";
    history.textContent = `${firstNumber} +`;
    waitingForSecondNumber = true;
});

equal.addEventListener("click", () => {
    if (operator && !waitingForSecondNumber) {
        let secondNumber = Number(main.textContent);
        let result;

        if (operator === "*") {
            result = firstNumber * secondNumber;
            history.textContent = `${firstNumber} × ${secondNumber}`;
        } else if (operator === "/") {
            result = firstNumber / secondNumber;
            history.textContent = `${firstNumber} ÷ ${secondNumber}`;
        } else if (operator === "-") {
            result = firstNumber - secondNumber;
            history.textContent = `${firstNumber} - ${secondNumber}`;
        } else if (operator === "+") {
            result = firstNumber + secondNumber;
            history.textContent = `${firstNumber} + ${secondNumber}`;
        } else if (operator === "%") {
            result = firstNumber % secondNumber;
            history.textContent = `${firstNumber} % ${secondNumber}`;
        }

        if (Number.isInteger(result)) {
            main.textContent = result;
        } else {
            main.textContent = result.toFixed(2);
        }

        firstNumber = result;
        operator = "";
        waitingForSecondNumber = true;
    }
});
