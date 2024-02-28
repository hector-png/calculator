const mathExpresion = {
    value1: '',
    value2: '',
};

function handleButtonEvent(node) {
    let buttonClicked = node.innerText;
    const displayContent = document.querySelector('.display-text');

    if(node.className != 'operand' && !mathExpresion.operand){
        mathExpresion.value1 = mathExpresion.value1 + buttonClicked;
        displayContent.innerText = mathExpresion.value1;
    } else if(node.className === 'operand' && !mathExpresion.operand) {
        mathExpresion.operand = buttonClicked;
        displayContent.innerText = `${mathExpresion.value1} ${mathExpresion.operand}`;
    } else if(node.className != 'operand' && mathExpresion.operand) {
        mathExpresion.value2 = mathExpresion.value2 + buttonClicked;
        displayContent.innerText = `${mathExpresion.value1} ${mathExpresion.operand} ${mathExpresion.value2}`;
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', (event) => {
    if(event.target.type != undefined) {
        handleButtonEvent(event.target);
    }
}));