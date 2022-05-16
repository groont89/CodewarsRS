//#4__Century From Year
function century(year) { // создаем функцию
    let a = year / 100; // количество лет делим на 100
    let b = Math.ceil(a); // округляем полученное значение к большему целому
    return b; //выводим результат
}