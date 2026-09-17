// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];

function sumEven(arr: number[]) {
  return arr.reduce((acc, x) => {
    return x % 2 === 0 ? (acc += x) : acc;
  });
}

console.log(sumEven(array));
