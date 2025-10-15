let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//entier supérieur ou égal à 3
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 3) {
    console.log(array[i]);
  }
}

//entier pair
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

//valeur corespondant à un indice pair
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}

//entier impair
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}
