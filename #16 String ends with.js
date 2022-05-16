//#16 String ends with?
function solution(str, ending) {
    let a = ending.length;
    let arr = str.split("");
    let result = arr.splice(arr.length - a);
    return result.join("") == ending;
}
console.log(solution('abcde', 'cde'));