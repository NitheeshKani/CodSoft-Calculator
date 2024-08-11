const app = document.getElementById("App");

const screen = document.createElement("textarea");
screen.setAttribute("id", "screen");
app.appendChild(screen);

const numButtons = document.createElement("div");
numButtons.setAttribute("id", "numButtons");
app.appendChild(numButtons);

const opButtons = document.createElement("div");
opButtons.setAttribute("id", "opButtons");
app.appendChild(opButtons);

const specialButtons = document.createElement("div");
specialButtons.setAttribute("id", "specialButtons");
app.appendChild(specialButtons);

const equalButton = document.createElement("button");
equalButton.textContent = "=";
equalButton.addEventListener("click", () => {
    screen.value = eval(screen.value);
});
specialButtons.appendChild(equalButton);

const clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.addEventListener("click", () => {
    screen.value = "";
});
specialButtons.appendChild(clearButton);

// functions
let onClickNumber = (number) => {
    screen.value += number;
}
let onClickOperator = (operator) => {
    screen.value += operator;
}
let addNumberButtons = () => {
    for (let i = 0; i < 10; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => onClickNumber(button.textContent));
        numButtons.appendChild(button);
    }
}
let addOperatorButtons = () => {
    let operators = ["+", "-", "*", "/"];
    for (let i = 0; i < operators.length; i++) {
        let button = document.createElement("button");
        button.textContent = operators[i];
        button.addEventListener("click", () => onClickOperator(button.textContent));
        opButtons.appendChild(button);
    }
}

// main
addNumberButtons();
addOperatorButtons();
