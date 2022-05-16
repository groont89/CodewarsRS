//#2__Can we divide it?
function isDivideBy(number, a, b) { // создаем фукцию
    return number % a == 0 && number % b == 0; // проверяем делится ли number на a и на b без остатка (равен ли остаток от деления нулю)
  }