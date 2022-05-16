//#11__Number of Decimal Digits
function digits(n) {
    let arr = n.toString().split("");
    console.log(arr.length);
}

digits(12345);