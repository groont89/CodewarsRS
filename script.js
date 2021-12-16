
//#1__Function 1 - hello world
function greet(){//создаем функцию greet
    var res = "";// создаем переменную и присваиваем ей пустую строку
    var str = "hello world!";// создаем переменную str  и присванием ей строку " hello world!"
    for(let i = 0; i < 1; i++) {// создаем цикл ( началы= 0, до условия пока i < 1, c шагом выполнения i++) с одной итерацией( выполнение тела цикла, пока i < 1)
      res += str;// присваиваем строке res значение строки str 
    }
    return res; // выводим получившуюся строку res после цикла
   }

//#2__Can we divide it?
function isDivideBy(number, a, b) {// создаем фукцию
    return number % a == 0 && number % b == 0; // проверяем делится ли number на a и на b без остатка (равен ли остаток от деления нулю)
 }

 //#3__Capitalization and Mutability
 function capitalizeWord(word) {//создаем функцию
    return word[0].toUpperCase() + word.slice(1);// выводим слово с первым символом в верхнем регистре + верезанная часть слова со второго символа без изменений
    }

//#4__Century From Year
function century(year) {// создаем функцию
   let a = year/100;// количество лет делим на 100
    let b = Math.ceil(a);// округляем полученное значение к большему целому
    return b;//выводим результат
  }
  //#5__Convert a Number to a String!
  function numberToString(num) {// создаем функцию
   let a = num.toString();// .toString преобразует элемент (все элементы массива) в строковое значение
   return a;// выводит результат
 }

//#6__Convert a String to a Number!
var stringToNumber = function(str){
    return Number(str);// number в данном случае преобразует тип данных строка в число
}

//#7__Convert to Binary
function toBinary(n){//создаем функцию
  let a = n.toString(2);//преобразуем число n к двоичной системе исчесления в строковом значении  
  let b = Number(a);//преобразуем трокое значение в численное
  return b;//возващаем результат
}