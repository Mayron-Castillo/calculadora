// const botones = document.querySelectorAll(".buttons");
const numbers = document.querySelectorAll(".number");
const main = document.querySelector("#display");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const percentaje = document.querySelector("#percentaje");
const negative = document.querySelector("#negative");
const equal = document.querySelector("#equal");

let firstNumber = 0;
let operator = " ";

//probando eventos
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (main.textContent === "0") {
            main.textContent = number.textContent;
            return;
        }

        main.textContent += number.textContent;
    });
});


reset.addEventListener("click", () => {
    main.textContent = 0;
});

negative.addEventListener("click", () => {
    main.textContent = Number(main.textContent) * -1;
});

percentaje.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "%";
    main.textContent = "";
});

divide.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "/";
    main.textContent = "";
});

multiply.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "*";
    main.textContent = "";
});

subtract.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "-";
    main.textContent = "";
});

add.addEventListener("click", () => {
    firstNumber = Number(main.textContent);
    operator = "+";
    main.textContent = "";
});

equal.addEventListener("click", () => {
    if (firstNumber !== 0 && operator) {
        let secondNumber = Number(main.textContent);
        let result;

        if (operator === "*") {
            result = firstNumber * secondNumber;
        }
        if (operator === "/") {
            result = firstNumber / secondNumber;
        }
        if (operator === "-") {
            result = firstNumber - secondNumber;
        }
        if (operator === "+") {
            result= firstNumber + secondNumber;
        }
        if (operator === "%") {
            result = firstNumber % secondNumber;
        }

        main.textContent = result.toFixed(2);

        firstNumber = 0;
        operator = '';
    }
});



