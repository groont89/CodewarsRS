//#14__Remove First and Last Character
function removeChar(str) {
    let arr = str.split("");
    arr.shift();
    arr.pop();
    return arr.join("");

}
console.log(removeChar('eloquent'));