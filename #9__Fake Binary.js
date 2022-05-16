//#9__Fake Binary
function fakeBin(x) {
    let arr = x.split("");
    for (let i = 0; i < arr.length; i++) {
        (arr[i] < 5) ? (arr.splice(i, 1, 0)) : (arr.splice(i, 1, 1));
    }
    return arr.join("");
}
console.log(fakeBin('45385593107843568'));