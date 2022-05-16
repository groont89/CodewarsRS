//#23__Transportation on vacation
function rentalCarCost(d) {
    let result;
    d < 3 ? result = (d * 40) :
        d >= 7 ? result = ((d * 40) - 50) :
        result = ((d * 40) - 20);
    return result;
}