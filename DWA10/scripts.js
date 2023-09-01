const MAX_NUMBER = 10;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 1;
const RESET_VALUE = 0;

const domElements = {
    number : document.querySelector('[data-key="number"]'),
    subtract : document.querySelector('[data-key="subtract"]'),
    add : document.querySelector('[data-key="add"]'),
    reset : {
        reset : document.querySelector('[data-key="reset"]'),
        resetOverlay : document.querySelector('[data-key="reset-button"]')
    }
}

const subtractHandler = () =>{
    const newValue = parseInt(domElements.number.value) - STEP_AMOUNT;
    domElements.number.value = newValue;

    if(domElements.add.disabled === true){
        domElements.add.disabled = false;
    }

    if(newValue <= MIN_NUMBER){
        domElements.subtract.disabled = true;
    }
}

const addHandler = () =>{
    const newValue = parseInt(domElements.number.value) + STEP_AMOUNT;
    domElements.number.value = newValue;

    if(domElements.subtract.disabled === true){
        domElements.subtract.disabled = false;
    }
    
    if(newValue >= MAX_NUMBER){
        domElements.add.disabled = true;
    }
}

const resetHandler = () => {    
    domElements.number.value = RESET_VALUE;

    domElements.reset.resetOverlay.show();    
}

domElements.add.addEventListener('click', addHandler);
domElements.subtract.addEventListener('click', subtractHandler);
domElements.reset.reset.addEventListener('click', resetHandler);