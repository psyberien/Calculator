
function add(a, b){
    let result = a + b;
    let stringRes = result.toString();
    if(stringRes.includes(".")){
        result = result.toFixed(2);
        stringRes = result.toString();
    } else if (stringRes.length >= 12) {
        stringRes = stringRes.substring(0, 12);
    }

    if(stringRes.length >= 10){
        let expoRes = Number(stringRes).toExponential(3);
        return expoRes;
    }
    return stringRes;
}

function subtract(a, b){
    let result = a - b;
    let stringRes = result.toString();
    if(stringRes.includes(".")){
        result = result.toFixed(2);
        stringRes = result.toString();
    } else if (stringRes.length >= 12) {
        stringRes = stringRes.substring(0, 12);
    }

    if(stringRes.length >= 10){
        let expoRes = Number(stringRes).toExponential(3);
        return expoRes;
    }
    return stringRes;
}

function multiply(a, b){
    let result = a * b;
    let stringRes = result.toString();
    if(stringRes.includes(".")){
        result = result.toFixed(2);
        stringRes = result.toString();
    } else if (stringRes.length >= 12) {
        stringRes = stringRes.substring(0, 12);
    }

    if(stringRes.length >= 10){
        let expoRes = Number(stringRes).toExponential(3);
        return expoRes;
    }
    return stringRes;
}

function divide(a ,b){
    if(b === 0){
         alert("Snarky N00000000");
        return a;
    };
    
    let result = a / b;
    let stringRes = result.toString();
    if(stringRes.includes(".")){
        result = result.toFixed(2);
        stringRes = result.toString();
    } else if (stringRes.length >= 12) {
        stringRes = stringRes.substring(0, 12);
    }

    if(stringRes.length >= 10){
        let expoRes = Number(stringRes).toExponential(3);
        return expoRes;
    }
    return stringRes;
}

function operate(operator, num1, num2){
    let a = Number(num1);
    let b = Number(num2);
    operator = operator[0];
    if(operator === "+")
      return add(a, b);
    if(operator === "-")
      return subtract(a, b);
    if(operator === "*")
      return multiply(a, b);
    if(operator === "/")
      return divide(a, b);
}
const displayContent = document.querySelector("#displayContent");
const displayMain = document.querySelector("#displayMain");
displayContent.textContent = "";
displayMain.textContent = "0";
let maxNum1;
let isDisplay = false;

const buttons = document.querySelector("#buttons");
const childButtons = buttons.children;
  for (let btn of childButtons){
    btn.addEventListener('click', (e)=> {
        let btnChoice = e.target.textContent;


//Separate contents
        let content = displayMain.textContent;
        let nega = content.slice(1);
        if(content.length >= 10 && !content.includes("/") && !content.includes("+") && !content.includes("-") && !content.includes("*")){
            maxNum1 = content;
        }
        let operators = /[^+\-*/]/g;
        let operator = content.replace(operators, "");
        let result = content.match(/[0-9.]+/g);
        
        let num1;
        let num2;
        if (maxNum1 !== undefined && result !== null){
            num1 = maxNum1;
            num2 = result[0];
         }  else if(maxNum1 === undefined && result !== null){
            num1 = result[0];
            num2 = result[1];
         }
         let lastChar = content.at(-1);
         
           //const isButton = e.target.nodeName === 'BUTTON';
            switch(btnChoice){
                case "CALC": 
                        break;
                case "CLR": 
                        maxNum1 = undefined;
                        isDisplay = false;
                        displayMain.textContent = "0";  
                        displayContent.textContent = "";                   
                        break;
                case "DEL":
                        if(content.length <= 1){
                            displayMain.textContent = 0;
                        } else {
                            displayMain.textContent = (content = content.substring(0, content.length-1));
                        }
                        break;
                case "/":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"/";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"/";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"/";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"/";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "/";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "/";
                            } 
                        }
                        break;
                case "*":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"*";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"*";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"*";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"*";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "*";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "*";
                            } 
                        } 
                        break;
                case "-":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"-";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"-";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"-";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"-";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "-";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "-";
                            } 
                        } 
                        break;
                case "+":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"+";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"+";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"+";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"+";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "+";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "+";
                            } 
                        } 
                        break;
                case "=":
                        if(!isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2);
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                        } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1);
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                        } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2);
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                        } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2);
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                        }
                        }
                        maxNum1 = undefined;
                        isDisplay = true;
                        break;
                case ".":
                        if(!content.includes(".")){
                            displayMain.textContent += e.target.textContent;
                        }
                        break;
                default:
                        if(isDisplay){
                            displayMain.textContent = "";
                            isDisplay = false;
                        }
                        if(content.length < 12 && content != 0) {
                            displayMain.textContent += e.target.textContent;
                        } else if(content == 0){
                            displayMain.textContent = e.target.textContent;
                        }
                        break;
            }
    });
 };

// Keyboard Support
    
    document.addEventListener('keydown', function(e) {
        let content = displayMain.textContent;
        let nega = content.slice(1);
        if(content.length >= 10 && !content.includes("/") && !content.includes("+") && !content.includes("-") && !content.includes("*")){
            maxNum1 = content;
        }
        let operators = /[^+\-*/]/g;
        let operator = content.replace(operators, "");
        let result = content.match(/[0-9.]+/g);
        
        let num1;
        let num2;
        if (maxNum1 !== undefined && result !== null){
            num1 = maxNum1;
            num2 = result[0];
         }  else if(maxNum1 === undefined && result !== null){
            num1 = result[0];
            num2 = result[1];
         }
         let lastChar = content.at(-1);
   if (e.key >= '0' && e.key <= '9' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Enter' || e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*" || e.key === ".") {
        let k = e.key;
        switch(k){
                case "Delete": 
                        maxNum1 = undefined;
                        isDisplay = false;
                        displayMain.textContent = "0";  
                        displayContent.textContent = "";                   
                        break;
                case "Backspace":
                        if(content.length <= 1){
                            displayMain.textContent = 0;
                        } else {
                            displayMain.textContent = (content = content.substring(0, content.length-1));
                        }
                        break;
                case "/":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"/";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"/";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"/";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"/";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "/";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "/";
                            } 
                        }
                        break;
                case "*":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"*";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"*";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"*";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"*";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "*";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "*";
                            } 
                        } 
                        break;
                case "-":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"-";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"-";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"-";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"-";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "-";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "-";
                            } 
                        } 
                        break;
                case "+":
                        isDisplay = false;
                        if(nega.includes("*") && !isNaN(lastChar) || nega.includes("/") && !isNaN(lastChar) || nega.includes("-") && !isNaN(lastChar) || nega.includes("+") && !isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2)+"+";
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                            } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1)+"+";
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                            } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2)+"+";
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                            } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2)+"+";
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                            }
                            maxNum1 = undefined;
                        } else {
                            if(content.length < 10 && !isNaN(lastChar)){
                             displayMain.textContent += "+";
                             } else if(content.length >= 10 && !isNaN(lastChar)){
                            displayMain.textContent = "+";
                            } 
                        } 
                        break;
                case "Enter":
                        if(!isNaN(lastChar)){
                            if(operator[0] === "-" && operator[1] === "-"){
                            displayMain.textContent = "-"+operate("+", num1, num2);
                            displayContent.textContent = `-${num1} - ${num2} = ` +operate("+", num1, num2);
                        } else if(operator[0] === "-" && operator[1] === "+"){
                            displayMain.textContent = operate(operator, num2, num1);
                            displayContent.textContent = `-${num1} + ${num2} = ` +operate(operator, num2, num1);   
                        } else if(operator[1] !== undefined && operator[1] !== '+'){
                            operator = operator[1];
                            displayMain.textContent = "-"+operate(operator, num1, num2);
                            displayContent.textContent = `-${num1} ${operator} ${num2} = -`+ operate(operator, num1, num2);
                        } else {
                            operator = operator[0];
                            displayMain.textContent = operate(operator, num1, num2);
                            displayContent.textContent = `${num1} ${operator[0]} ${num2} = `+ operate(operator, num1, num2);
                        }
                        }
                        maxNum1 = undefined;
                        isDisplay = true;
                        break;
                case ".":
                        if(!content.includes(".")){
                            displayMain.textContent += e.key;
                        }
                        break;
                default:
                        if(isDisplay){
                            displayMain.textContent = "";
                            isDisplay = false;
                        }
                        if(content.length < 12 && content != 0) {
                            displayMain.textContent += e.key;
                        } else if(content == 0){
                            displayMain.textContent = e.key;
                        }
                        break;
            }
     }   
     e.preventDefault();
        
    });
