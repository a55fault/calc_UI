let digit = "";
let firstDigit = "";
let secondDigit = "";
let operation = "";


document.getElementById("C").addEventListener("click", clear);
document.getElementById("backspace").addEventListener("click", backspace);

document.getElementById("one").addEventListener("click", digit1);
document.getElementById("two").addEventListener("click", digit2);
document.getElementById("three").addEventListener("click", digit3);
document.getElementById("four").addEventListener("click", digit4);
document.getElementById("five").addEventListener("click", digit5);
document.getElementById("six").addEventListener("click", digit6);
document.getElementById("seven").addEventListener("click", digit7);
document.getElementById("eight").addEventListener("click", digit8);
document.getElementById("nine").addEventListener("click", digit9);
document.getElementById("zero").addEventListener("click", digit0);

document.getElementById("minus").addEventListener("click", actionSub);
document.getElementById("plus").addEventListener("click", actionSum);
document.getElementById("div").addEventListener("click", actionDiv);
document.getElementById("X").addEventListener("click", actionMult);

document.getElementById("result").addEventListener("click", prepearToCalc);

function calc(exec, a, b) {
     if (typeof a != "number" || typeof b != "number" || a != a || b != b) {
          return "Error";
     }
     let operations = {
          sum: a + b,
          sub: a - b,
          mult: a * b,
          div: a / b,
     }
     if (!(exec in operations)) return "unknown operation";
     else {
          return operations[exec];
     }
}

function digit1() {
     digit += "1";
     calcDisplay.innerHTML = digit;
}
function digit2() {
     digit += "2";
     calcDisplay.innerHTML = digit;
}
function digit3() {
     digit += "3";
     calcDisplay.innerHTML = digit;
}
function digit4() {
     digit += "4";
     calcDisplay.innerHTML = digit;
}
function digit5() {
     digit += "5";
     calcDisplay.innerHTML = digit;
}
function digit6() {
     digit += "6";
     calcDisplay.innerHTML = digit;
}
function digit7() {
     digit += "7";
     calcDisplay.innerHTML = digit;
}
function digit8() {
     digit += "8";
     calcDisplay.innerHTML = digit;
}
function digit9() {
     digit += "9";
     calcDisplay.innerHTML = digit;
}
function digit0() {
     digit += "0";
     calcDisplay.innerHTML = digit;
}


function actionSub() {
     firstDigit = +digit;
     digit = "";
     operation = "sub"
}
function actionSum() {
     firstDigit = +digit;
     digit = "";
     operation = "sum"
}
function actionDiv() {
     firstDigit = +digit;
     digit = "";
     operation = "div"
}
function actionMult() {
     firstDigit = +digit;
     digit = "";
     operation = "mult"
}

function prepearToCalc() {
     secondDigit = +digit;
     displayData = calc(operation, firstDigit, secondDigit);
     digit = displayData;
     calcDisplay.innerHTML = `${displayData}`;
}

function clear(){
digit = "";
firstDigit = "";
secondDigit = "";
calcDisplay.innerHTML = "0"
}

function backspace () {
     digit = digit.slice(0, digit.length-1)
     calcDisplay.innerHTML = digit
}

