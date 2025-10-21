

const inputField = document.getElementById("sampleInput");
const buttonToUpper = document.getElementById("toUpperCaseButton");
const buttonToLower = document.getElementById("toLowerCaseButton");

const value = inputField.value;

var result = 0;

testButton.addEventListener("click", () => {
    result++;
    document.getElementById("testResult").innerText = `Button clicked ${result} times`;
});

function valueChanged(value) {
    document.getElementById("sampleOutput").innerText = `Input value: ${value}`;
}

inputField.addEventListener("input", () => {
    const value = inputField.value;
    valueChanged(value);    
});

buttonToUpper.addEventListener("click", () => {
    const value = inputField.value;
    valueChanged(value.toUpperCase());
});

buttonToLower.addEventListener("click", () => {
    const value = inputField.value;
    valueChanged(value.toLowerCase());
});