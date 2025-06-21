const input1 = document.getElementById('input1');
const input2 = document.getElementById('input3');
const symbol = document.getElementById('symbols');
const Displayresult = document.getElementById('showresult');
document.getElementById("clear").addEventListener('click', () => {
    input1.value = ''
    input2.value = ''
    symbol.innerText = ''
    Displayresult.innerText = '';
})

document.getElementById("mod").addEventListener('click', () => { symbol.textContent = "%" });
document.getElementById("devesion").addEventListener('click', () => { symbol.textContent = "/" })
document.getElementById("multiply").addEventListener('click', () => { symbol.textContent = "*" })
document.getElementById("minus").addEventListener('click', () => { symbol.textContent = "-" })
document.getElementById("plus").addEventListener('click', () => { symbol.textContent = "+" })

function up1() {
    if (isNaN(input1.value)) {
        input1.value = ''
    }
}

function up3() {
    if (isNaN(input2.value)) {
        input2.value = ''
    }
}


function RESULT() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const calculate = symbol.textContent.trim();
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter Value To be Calculate")
    }
    switch (calculate) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "%":
            result = num1 % num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "*":
            result = num1 * num2
            break;
        default:
            result = "Invalid Operator"
    }
    Displayresult.textContent = result;

}
