//#3__Capitalization and Mutability
function capitalizeWord(word) { //создаем функцию
    return word[0].toUpperCase() + word.slice(1); // выводим слово с первым символом в верхнем регистре + верезанная часть слова со второго символа без изменений
}