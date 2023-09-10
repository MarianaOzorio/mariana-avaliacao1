const buttons = document.querySelectorAll(".tecla");
const display = document.getElementById("display") as HTMLSpanElement;

let displayValue: string = "0";
let previousValue: string;
let operator: string | null = null;
let waitingForSecondOperand: boolean = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.getAttribute("id");

        switch (buttonText) {
            case "on":
                displayValue = "0";
                break;
            case "mas":
            case "menos":
            case "por":
            case "dividido":
                operator = buttonText;
                previousValue = displayValue;
                waitingForSecondOperand = true;
                break;
            case "igual":
                if (waitingForSecondOperand) {
                    switch (operator) {
                        case "mas":
                            displayValue = (parseFloat(previousValue) + parseFloat(displayValue)).toString();
                            break;
                        case "menos":
                            displayValue = (parseFloat(previousValue) - parseFloat(displayValue)).toString();
                            break;
                        case "por":
                            displayValue = (parseFloat(previousValue) * parseFloat(displayValue)).toString();
                            break;
                        case "dividido":
                            if (parseFloat(displayValue) === 0) {
                                displayValue = "Error";
                            } else {
                                displayValue = (parseFloat(previousValue) / parseFloat(displayValue)).toString();
                            }
                            break;
                    }
                    waitingForSecondOperand = false;
                }
                break;
            default:
                if (displayValue === "0" || waitingForSecondOperand) {
                    displayValue = buttonText!;
                } else {
                    displayValue += buttonText!;
                }
                break;
        }
        display.textContent = displayValue;
    });
});
