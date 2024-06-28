function add(a,b){
    return +a + +b;
};

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let operator;
let firstNumber;
let secondNumber;

function operate(){
    switch(operator){
        case '+':
            return add(firstNumber, secondNumber);
        
        case '-':
            return subtract(firstNumber,secondNumber);

        case 'x':
            return multiply(firstNumber, secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);
    }
}

const calculate=document.querySelector('.equalBtn');

calculate.addEventListener('click', operate());

//stores the number or operator clicked.
const buttons=document.querySelectorAll('.numbers');
buttons.forEach(button=> {
    button.addEventListener('click',(event)=>{
        if(event.target.textContent==='AC'){
            secondNumber=undefined;
            firstNumber=undefined;
            operator=undefined;
           return inputDisplay.textContent='';
        }
        inputDisplay.textContent+=event.target.innerText})
    })

const inputDisplay=document.querySelector('.inputDisplay');

const deleteBtn=document.querySelector('#deleteBtn');

//when user click '='
const resultDisplay=document.querySelector('.resultDisplay');

//when operator was clicked


const operators = document.querySelectorAll('.operatorBtn');

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        operator = e.target.textContent;
        if(firstNumber===undefined){
            firstNumber = Number(inputDisplay.textContent)}
        inputDisplay.textContent = '';
    });
});

const equalBtn=document.querySelector('.equalBtn');

//define second Number when = was clicked as well as to display the result.
equalBtn.addEventListener('click',()=>{
    secondNumber = Number(inputDisplay.textContent)
    inputDisplay.textContent=operate();
    firstNumber=inputDisplay.textContent;
}
)

