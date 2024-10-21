function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero!";
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    let result;

    if (operation === 'add') {
        result = add(num1, num2);
    } else if (operation === 'subtract') {
        result = subtract(num1, num2);
    } else if (operation === 'multiply') {
        result = multiply(num1, num2);
    } else if (operation === 'divide') {
        result = divide(num1, num2);
    }

    document.getElementById("calculation-result").textContent = result;
}

document.getElementById("add-btn").addEventListener("click", () => calculate('add'));
document.getElementById("subtract-btn").addEventListener("click", () => calculate('subtract'));
document.getElementById("multiply-btn").addEventListener("click", () => calculate('multiply'));
document.getElementById("divide-btn").addEventListener("click", () => calculate('divide'));
