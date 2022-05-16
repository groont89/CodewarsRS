//#17__Simple multiplication
function simpleMultiplication(number) {
    number % 2 == 0 ? number *= 8 : number *= 9;
    return number;
}
console.log(simpleMultiplication(5));