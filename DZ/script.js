// Выведите с помощью цикла столбец чисел от 1 до 100
// for (let i = 1; i < 101; i++) {
//     document.body.append(i);
//     let br = document.createElement(`br`);
//     document.body.append(br);
// }
//
// // Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100; i >= 0; i--) {
//
//     document.body.append(i);
//     let br = document.createElement(`br`);
//     document.body.append(br);
// }
//
// // Выведите с помощью цикла столбец четных чисел от 1 до 100
//
// for (let i = 100; i > 0; i--) {
//     if (i % 2 == 0) {
//         document.body.append(i);
//         let br = document.createElement(`br`);
//         document.body.append(br);
//     }
// }

// Заполните массив 10-ю иксами с помощью цикла
//  let arr=[];
// for (let i = 0; i < 10; i++) {
//     arr.push('x');
// }
// console.log(arr)

// Заполните массив числами от 1 до 10 с помощью цикла

// let arr=[];
// for (let i = 1; i < 11; i++) {
//     arr.push(i);
// }
// console.log(arr)

// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
// Дроби округляйте до двух знаков в дробной части
// let arr=[];
// for (let i = 1; i < 11; i++) {
//     arr.push(Math.random().toFixed(2));
// }
// console.log(arr)


// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log(arr)

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти
// let arr=[-1, 3,45,0,45,54,-4,-8,5,6,7,8,9,0,-5,-9,7];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 10 && arr[i] > 0) {
//         console.log(arr[i])
//     }
// }

// Дан массив с числами. С помощью цикла проверьте, что
// в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть'
// и оборвите цикл. Если такого элемента нет - ничего не выводите

// let arr=[-1, 3,45,0,45,54,-4,-8,5,6,7,8,9,0,-5,-9,7];
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 5) {
//         console.log("Есть");
//         break
//     }
// }

// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. Показать решение.

// let arr = [-1, 3, 45, 0, 45, 54, -4, -8, 5, 6, 7, 8, 9, 0, -5, -9, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [-1, 3, 45, 0, 45, 54, -4, -8, 5, 6, 7, 8, 9, 0, -5, -9, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] ** 2;
// }
// console.log(sum);

// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let arr = [-1, 3, 45, 0, 45, 54, -4, -8, 5, 6, 7, 8, 9, 0, -5, -9, 7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum / arr.length)