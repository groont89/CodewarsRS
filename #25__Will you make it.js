//#25__Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let result;
    fuelLeft * mpg < distanceToPump ? result = false : result = true;
    return result;
};