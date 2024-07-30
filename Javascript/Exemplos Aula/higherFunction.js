//o desafio da angela é de criar um calculadora usando highOrderFunctions

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}