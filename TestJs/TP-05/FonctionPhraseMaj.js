function firstCharToUpperCase(phrase) {
    if (phrase.length === 0) {
        return phrase;
    }
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

console.log(firstCharToUpperCase("bonjour tout le monde")); // "Bonjour tout le monde"
console.log(firstCharToUpperCase("javaScript est génial")); // "JavaScript est génial"
console.log(firstCharToUpperCase("")); // ""