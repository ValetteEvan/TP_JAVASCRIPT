
const titre = document.querySelector('h1');
titre.textContent = 'Bienvenue sur TP-08';
console.log('TP-08 chargé avec succès');

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const resultDiv = document.getElementById('result');

addButton.addEventListener('click', () => {
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Veuillez entrer des nombres valides.';
    } else {
        const sum = num1 + num2;
        resultDiv.textContent = `Le résultat est : ${sum}`;
    }
});