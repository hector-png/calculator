const mathExpresion = {
    value1: '',

};

function handleButtonEvent(node) {
    let buttonClicked = node.innerText;
    const displayContent = document.querySelector('.display-text');
    mathExpresion.value1 = mathExpresion.value1 + buttonClicked;
    displayContent.innerText = mathExpresion.value1;
    
}

let buttons = document.querySelector('.buttons-container');
buttons.addEventListener('click', (event) => {
    if(event.target.type != undefined) {
        handleButtonEvent(event.target);
    }
});