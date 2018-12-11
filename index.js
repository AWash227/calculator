let userInputArray = [0];
let userOperator = ""
let firstNum = 0;
let secondNum = 0;
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function reloadCalcScreen(){
    const calcScreenText = document.querySelector("#calc-screen-text");
    calcScreenText.textContent = convertArrayToInt(userInputArray);
}
function operate(operator, num1, num2){
    if(operator == "add"){
        add(num1,num2);
    }
    else if(operator == "subtract"){
        subtract(num1,num2);
    }
    else if(operator == "multiply"){
        multiply(num1,num2);
    }
    else if(operator == "divide"){
        divide(num1,num2);
    }
    else if (operator == "equals"){
        
    }
}

function getNumeralInput(){
    console.log("Index.js has been loaded.")
    const numerals = document.querySelectorAll(".number");
    numerals.forEach((element) => {
        element.addEventListener('mousedown', (e) => {
            userInputArray.push(element.innerHTML.toString());
            convertArrayToInt(userInputArray);
            reloadCalcScreen();
        });
    });
}

function getOperatorInput(){
    console.log("Operator has been loaded")
    const operators = document.querySelectorAll(".operator");
    operators.forEach((element) => {
        element.addEventListener('mousedown', (e) => {
            userOperator = element.id;
            userInputArray = [0];
            console.log(firstNum)
            reloadCalcScreen();
        });
    });
}

function convertArrayToInt(inputarray){
    let answer = "";
    for(i = 0; i <= inputarray.length; i++){
        answer += inputarray[i];
    }
    //console.log(answer)
    return parseInt(answer, 10);
}

window.addEventListener("load", function(){
    getNumeralInput();
    getOperatorInput();
    reloadCalcScreen();
});
