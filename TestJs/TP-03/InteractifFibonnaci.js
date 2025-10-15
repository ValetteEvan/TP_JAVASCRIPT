let fibonacci = [0, 1];
let limite = 10;

for (let i = 2; i < limite; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Série de Fibonacci jusqu'à " + limite + ": " + fibonacci.join(", "));