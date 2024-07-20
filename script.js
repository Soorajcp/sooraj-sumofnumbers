function sumofnumbers() {

    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);

    const sum = number1 + number2;

    document.getElementById("sum-result").textContent = 'Sum : ' + sum;
}