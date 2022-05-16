//#1__Function 1 - hello world
function greet() { //создаем функцию greet
  var res = ""; // создаем переменную и присваиваем ей пустую строку
  var str = "hello world!"; // создаем переменную str  и присванием ей строку " hello world!"
  for (let i = 0; i < 1; i++) { // создаем цикл ( началы= 0, до условия пока i < 1, c шагом выполнения i++) с одной итерацией( выполнение тела цикла, пока i < 1)
    res += str; // присваиваем строке res значение строки str 
  }
  return res; // выводим получившуюся строку res после цикла
}

//#2__Can we divide it?
function isDivideBy(number, a, b) { // создаем фукцию
  return number % a == 0 && number % b == 0; // проверяем делится ли number на a и на b без остатка (равен ли остаток от деления нулю)
}

//#3__Capitalization and Mutability
function capitalizeWord(word) { //создаем функцию
  return word[0].toUpperCase() + word.slice(1); // выводим слово с первым символом в верхнем регистре + верезанная часть слова со второго символа без изменений
}

//#4__Century From Year
function century(year) { // создаем функцию
  let a = year / 100; // количество лет делим на 100
  let b = Math.ceil(a); // округляем полученное значение к большему целому
  return b; //выводим результат
}
//#5__Convert a Number to a String!
function numberToString(num) { // создаем функцию
  let a = num.toString(); // .toString преобразует элемент (все элементы массива) в строковое значение
  return a; // выводит результат
}

//#6__Convert a String to a Number!
let stringToNumber = function (str) {
  return Number(str); // number в данном случае преобразует тип данных строка в число
};

//#7__Convert to Binary
function toBinary(n) { //создаем функцию
  let a = n.toString(2); //преобразуем число n к двоичной системе исчесления в строковом значении  
  let b = Number(a); //преобразуем трокое значение в численное
  return b; //возващаем результат
}

//#8__Even or Odd
function even_or_odd(number) { //создаем функцию
  if (number % 2 == 0) { //задаем условие: если чило делится на 2 без остатка( с остатков равным 0)
    return "Even"; // то выводим "четный"
  } else { // иначе
    return "Odd"; // выводим "нечетный"
  }

}

//#9__Fake Binary
function fakeBin(x) {
  let arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    (arr[i] < 5) ? (arr.splice(i, 1, 0)) : (arr.splice(i, 1, 1));
  }
  return arr.join("");
}
console.log(fakeBin('45385593107843568'));

//#10 Largest Square Inside A Circle
function areaLargestSquare(r) {

  let sqr = 2 * (r ** 2);
  return sqr; 
}
console.log(areaLargestSquare(7));

//#11__Number of Decimal Digits
function digits(n) {
  let arr = n.toString().split("");
  console.log(arr.length);
}

digits(12345);

//#12__Opposite number
function opposite(number) {
  let newNumber;
  newNumber = number * (-1);
  return newNumber;
}
//#13__Perimeter sequence
function perimeterSequence(a, n) {
  return a * n * 4;
}

//#14__Remove First and Last Character
function removeChar(str) {
  let arr = str.split("");
  arr.shift();
  arr.pop();
  return arr.join("");

}
console.log(removeChar('eloquent'));

//#15__Remove String Spaces
function noSpace(x) {
  return x.split(" ").join("");
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//#16__String ends with?
function solution(str, ending) {
  let a = ending.length;
  let arr = str.split("");
  let result = arr.splice(arr.length - a);
  return result.join("") == ending;
}
console.log(solution('abcde', 'cde'));

//#17__Simple multiplication
function simpleMultiplication(number) {
  number % 2 == 0 ? number *= 8 : number *= 9;
  return number;
}
console.log(simpleMultiplication(5));

//#18__String repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

//#19__Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects >10)  return 100 
  if(exam > 75 && projects >=5)   return 90 
  if(exam > 50 && projects >=2)  return 75 
  
  return 0;
    }
  console.log(finalGrade(0, 11));

//#20__Switch it Up!
function switchItUp(number){
  let day;
     switch (number){
     case 1: day = "One";
     break;
     case 2:day = "Two";
     break;
     case 3:day = "Three";
     break;
     case 4:day = "Four";
     break;
     case 5:day = "Five";
     break;
     case 6:day = "Six";
     break;
     case 7: day = "Seven";
     break;
     case 8: day = "Eight";
     break;
     case 9:day = "Nine";
     break;
     case 0:day = "Zero";
     break;  
     }
   return day;
 }
 
 //#21__Thinkful - Logic Drills: Traffic light
 function updateLight(current) {
  let result;
  current == "green" ? result = "yellow" :
  current == "yellow" ? result = "red" : 
  result = "green";
  return result;
  }
  updateLight("green");

//#22__Third Angle of a Triangle
function otherAngle(a, b) {
  console.log(180 -(a +b));
}
otherAngle(30,60);

//#23__Transportation on vacation
function rentalCarCost(d) {
  let result;
  d < 3 ? result=(d*40) :
  d >= 7 ? result = ((d*40)-50):
  result=((d*40)-20);
  return result;
}

//#24__Type of sum
function typeOfSum(a, b) {
  return typeof(a + b);
}

//#25__Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let result;
  fuelLeft*mpg < distanceToPump ? result = false : result = true;
  return result;
};