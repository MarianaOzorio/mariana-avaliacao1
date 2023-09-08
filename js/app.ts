const buttons = document.querySelectorAll(".tecla");
const display = document.getElementById("display") as HTMLSpanElement;
const onButton = document.getElementById("on");
const resultButton = document.getElementById("igual");
const sumButton = document.getElementById("mas");
const substractButton = document.getElementById("menos");
const multiplyButton = document.getElementById("por");
const divideButton = document.getElementById("dividido");

let displayValue: string = "0";
let previousValue: string;
let operator: string | null = null;
let waitingForSecondOperand: boolean = false;
let decimalEntered: boolean = false;
let result: number;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.getAttribute("id");

        switch (buttonText) {
            case "on":
                display.textContent = "0";
                break;
            case "mas":
                previousValue = display.textContent;
                operator = "+";
                display.textContent = "+";
                waitingForSecondOperand = true;
                break;
            case "menos":
                previousValue = display.textContent;
                operator = "-";
                display.textContent = "-";
                waitingForSecondOperand = true;
                break;
            case "por":
                previousValue = display.textContent;
                operator = "*";
                display.textContent = "*";
                waitingForSecondOperand = true;
                break;
            case "dividido":
                previousValue = display.textContent;
                operator = "/";
                display.textContent = "/";
                waitingForSecondOperand = true;
                break;
            case "igual":
                if (waitingForSecondOperand) {
                    let currentValue = parseFloat(display.textContent);
                    switch (operator) {
                        case "+":
                            result = parseFloat(previousValue) + currentValue;
                            break;
                        case "-":
                            result = parseFloat(previousValue) - currentValue;
                            break;
                        case "*":
                            result = parseFloat(previousValue) * currentValue;
                            break;
                        case "/":
                            result = parseFloat(previousValue) / currentValue;
                            break;
                    }
                    display.textContent = result.toString();
                    waitingForSecondOperand = false;
                }
                break;
            default:
                if (display.textContent.length >= 8) return;
                if (display.textContent === "0") {
                    display.textContent = null;
                }
                display.textContent += buttonText!;
                break;
        }
    }) 
})
