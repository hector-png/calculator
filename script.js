const mathExpresion = {
    value1: '',
    value2: '',
    equalsPressed: false,
};

function operate() {
    let value1 = parseInt(mathExpresion.value1);
    let value2 = parseInt(mathExpresion.value2);
    console.log(value1*value2);
    switch(mathExpresion.operand) {
        case '+': mathExpresion.result = value1 + value2;
        break;
        case '−': mathExpresion.result = value1 - value2;
        break;
        case '×': mathExpresion.result = value1 * value2;
        break;
        case '÷': mathExpresion.result = value1 / value2;
        break;
    }
}

function clear() {
    mathExpresion.value1 = '';
    mathExpresion.value2 = '';
    delete mathExpresion.result;
    delete mathExpresion.operand;
}

function handleButtonEvent(node) {
    let buttonClicked = node.innerText;
    const displayContent = document.querySelector('.display-text');

    if(node.className != 'clear' && node.className != 'equals') {
        if(node.className != 'operand' && !mathExpresion.operand){
            mathExpresion.value1 = mathExpresion.value1 + buttonClicked;
            displayContent.innerText = mathExpresion.value1;
        } else if(node.className === 'operand') {
            mathExpresion.operand = buttonClicked;
            if(mathExpresion.value2 != '' && !mathExpresion.equalsPressed) {
                operate();
                mathExpresion.value1 = mathExpresion.result;
                mathExpresion.value2 = '';
                displayContent.innerText = mathExpresion.value1;
            } else {
                mathExpresion.equalsPressed = false;
                mathExpresion.value2 = '';
            }
        } else if(node.className != 'operand' && mathExpresion.operand) {
            mathExpresion.value2 = mathExpresion.value2 + buttonClicked;
            mathExpresion.lastNumber = mathExpresion.value2
            displayContent.innerText = buttonClicked;
        }
    } else if(node.className === 'equals') {
        operate();
        mathExpresion.value1 = mathExpresion.result;
        mathExpresion.value2 = mathExpresion.lastNumber;
        mathExpresion.equalsPressed = true;
        displayContent.innerText = mathExpresion.result;

    } else if(node.className === 'clear') {
        clear();
        displayContent.innerText = '';
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', (event) => {
    if(event.target.type != undefined) {
        handleButtonEvent(event.target);
    }
}));