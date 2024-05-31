const display = document.querySelector("#screen");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".option")

let displayValue = 0;
let num1 = null;
let num2 = null;
let operator = null;


updateDisplay();

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let number = button.textContent;

        if(operator === null){
            if(number === "."){
                if(num1 === null){
                    num1 = "0.";
                }else{
                    if(!(num1.includes("."))) num1 = num1 + number;
                }
            } else{
                num1 === null ? num1 = number : num1 = num1 + number; 

            }
            displayValue = num1;
        }
        else {
            if(number === "."){
                if(num2 === null){
                    num2 = "0.";
                }else{
                    if(!(num2.includes("."))) num2 = num2 + number;
                }
            } else{
                num2 === null ? num2 = number : num2 = num2 + number; 
            }
         
            displayValue = num2;
        }

        updateDisplay();
        console.log(num1, num2, operator)

    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if(num1 === null && num2 === null){
            num1 = displayValue;
        }

        if(operator !== null){
            num1 === null ? num1 = displayValue : num2 = displayValue;

            if(num1 !== null && num2 !== null){
                let result = operate(num1, num2, operator);
                displayValue = result;
                updateDisplay();
                clearEquation();

                num1 = result;
                console.log("op" + num1, num2, operator)
            }
        }
        operator = value;    
        console.log(num1, num2, operator)
    })

})

equalButton.addEventListener("click", () => {
    if(validEquation(num1, num2, operator)){
        console.log(num1, num2, operator)
        let result = operate(num1, num2, operator);
        displayValue = result;
        updateDisplay();
        clearEquation();

    }
})
// after result if the next one is operator then num1 = reuslt and continue

clearButton.addEventListener("click", () => {
    clearEquation();
    displayValue = 0;
    updateDisplay();
})


function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);
        
        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    }

}

function validEquation(num1, num2, operator){
    return (num1 !== null && num2 !== null && operator !== null)
}


function clearEquation(){
    num1 = null;
    num2 = null;
    operator = null;
    updateDisplay();
}

function updateDisplay(){
    display.textContent = displayValue; 
}

