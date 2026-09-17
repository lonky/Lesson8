// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

function checkDoubleChars(str: string) {
  return str
    .toLowerCase()
    .split("")
    .some((char, i, arr) => arr.includes(char, ++i));
}

console.log(checkDoubleChars(str1));
console.log(checkDoubleChars(str2));
