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

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        main.textContent = number.textContent;
    });
});

reset.addEventListener("click", () => {
    main.textContent = 0;
});

negative.addEventListener("click", () => {
    main.textContent = Number(main.textContent) * -1;
});

percentaje.addEventListener("click", () => {
    main.textContent = Number(main.textContent) / 100;
});

divide.addEventListener("click", () => {
    main.textContent = Number(main.textContent) / Number(main.textContent);
});

multiply.addEventListener("click", () => {
    main.textContent = Number(main.textContent) * Number(main.textContent);
});

subtract.addEventListener("click", () => {
    main.textContent = Number(main.textContent) - Number(main.textContent);
});

add.addEventListener("click", () => {
    main.textContent = Number(main.textContent) + Number(main.textContent);
});

equal.addEventListener("click", () => {
    main.textContent = Number(main.textContent);
});




