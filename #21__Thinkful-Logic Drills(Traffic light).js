//#21__Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    let result;
    current == "green" ? result = "yellow" :
        current == "yellow" ? result = "red" :
        result = "green";
    return result;
}
updateLight("green");