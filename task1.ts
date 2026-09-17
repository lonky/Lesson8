// Написать функцию, которая возвращает новый массив только положительных чисел, умноженный вдвое

const array: number[] = [1, -5, 7, 8, -9, 0, -4];

function getPositiveDoubles(arr: number[]) {
  return arr.filter((x) => x >= 0).map((x) => x * x);
}

console.log(getPositiveDoubles(array));

function getPositiveDoublesReduced(arr: number[]) {
  return arr.reduce<number[]>((acc, x) => {
    return x >= 0 ? [...acc, x * x] : acc;
  }, []);
}

console.log(getPositiveDoublesReduced(array));
