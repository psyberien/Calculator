
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a ,b){
    return a / b;
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
displayContent.textContent = "6 + 9 = 68";
displayMain.textContent = "69";

const buttons = document.querySelector("#buttons");
const childButtons = buttons.children;
  for (let btn of childButtons){
    btn.addEventListener('click', (e)=> {
        console.log(e.target.textContent);
        let btnChoice = e.target.textContent;
        let content = displayMain.textContent;
        let operators = /[^+\-*/]/g;
        let operator = content.replace(operators, "");
        let result = content.match(/[0-9.]+/g);
        let num1 = "";
        let num2 = "";
        console.log(result);
        if(result !== null){
        num1 = result[0];
        num2 = result[1];
         }
        console.log(num1, num2, operator[0],operator[1]);
        console.log(num2 > num1);
        
        // const isButton = e.target.nodeName === 'BUTTON';
            switch(btnChoice){
                case "CLR": 
                        displayMain.textContent = "";  
                        displayContent.textContent = "";                   
                        break;
                case "DEL":
                        displayMain.textContent = (content = content.substring(0, content.length-1));
                        console.log(content);
                        break;
                case "/":
                        if(!content.includes("/"))
                        displayMain.textContent += "/";
                        break;
                case "*":
                        if(!content.includes("*"))
                        displayMain.textContent += "*";
                        break;
                case "-":
                        displayMain.textContent += "-";
                        break;
                case "+":
                        displayMain.textContent += "+";
                        break;
                case "=":
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
                        break;
                default:
                        displayMain.textContent += e.target.textContent;
                        break;
            }
    });
 };





