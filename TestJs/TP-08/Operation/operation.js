const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const resultDiv = document.getElementById('result');
const operationSelect = document.getElementById('operation');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Veuillez entrer des nombres valides.';
    } 
    else  {
        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'Erreur : Division par zéro';
                break;
        }
        resultDiv.textContent = `Le résultat est : ${result}`;
    }
});
