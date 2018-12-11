let userInputArray = [0];
let userOperator = ""
let nextNum = null;
let storedNum = null;
const calcScreenText = document.querySelector("#calc-screen-text");
const calcStoredVal = document.querySelector("#calc-stored-var");
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
    calcScreenText.textContent = convertArrayToInt(userInputArray);

    calcStoredVal.textContent = storedNum;
}
function operate(operator, num1, num2){
    if(operator === "add"){
        return num1 + num2;
    }
    if(operator === "subtract"){
        return num1 - num2;
    }
    if(operator === "multiply"){
        return num1 * num2;
    }
    if(operator === "divide"){
        return num1 / num2;
    }
    else{
        console.log("The operators or numbers affected the calculation.")
        return;
    }
}

function getNumeralInput(){
    console.log("Get Numeral Input is functional.")
    const numerals = document.querySelectorAll(".number");
    numerals.forEach((element) => {
        element.addEventListener('mousedown', (e) => {
            if(userInputArray.length < 16){
                userInputArray.push(element.innerHTML.toString());
                convertArrayToInt(userInputArray);
                reloadCalcScreen();
            }
            else{
                reloadCalcScreen();
            }
        });
    });
}

function getOperatorInput(){
    console.log("Get Operator Input is functional.")
    const operators = document.querySelectorAll(".operator");
    operators.forEach((element) => {
        element.addEventListener('mousedown', (e) => {
            //If the stored number has a value...
            if(storedNum !== null){
                //store user input in next variable
                nextNum = convertArrayToInt(userInputArray);
                //Check if we can calculate and do so if possible
                if(isCalculateable()){
                    console.log(storedNum)
                    storedNum = operate(userOperator, parseInt(storedNum,10), parseInt(nextNum, 10));
                    console.log(storedNum);
                    console.log(operate("multiply", 2, 2));
                    //refresh variables
                    refreshVars();
                    //reload the calculator screen.
                    reloadCalcScreen();
                }
                //store operator value
                userOperator = element.id;
                console.log(element.id);
            }
            else{
                //store user input in storedNum since this is the first number.
                storedNum = convertArrayToInt(userInputArray);
                console.log(storedNum);
                //store operator value
                userOperator = element.id;
                //refresh variables
                refreshVars();
                //reload the calculator screen.
                reloadCalcScreen(); 
            }
        });
    });
}
function refreshVars(){
    userInputArray = [0];
    nextNum = null;
}
function getDeleteInput(){
    console.log("Delete Button is operational");
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener('mousedown', (e) => {
        if(userInputArray.length == 1 && userInputArray[0] == 0){
            return;
        }
        else{
            userInputArray.pop(); 
            console.log("Popped last array value.");
            reloadCalcScreen();
        }
    });
}

function getClearInput(){
    console.log("Clear Button is operational");
    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('mousedown', (e) => {
        userInputArray = [0];
        console.log("Cleared the CalcTextScreen");
        storedNum = null;
        nextNum = null;
        userInputArray = [0];
        userOperator = "";
        reloadCalcScreen();
    });
}

function getEqualsInput(){
    const equalsBtn = document.querySelector("#equals");
    equalsBtn.addEventListener('mousedown', (e) => {
        if(isCalculateable()){
            calcScreenText.textContent = operate(userOperator,storedNum, nextNum);
            calcStoredVal.textContent = null;
        }
        else{
            console.log("not calculatable ran.")
            calcScreenText.textContent = storedNum;
            storedNum = null;
            calcStoredVal.textContent = null;
            return;
        }
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


function isCalculateable(){
    if(storedNum != null && nextNum != null && userOperator != null){
        return true;
    }
    else{
        return false;
    }
}

window.addEventListener("load", function(){
    getNumeralInput();
    getOperatorInput();
    getDeleteInput();
    getClearInput();
    getEqualsInput();
    reloadCalcScreen();
});
