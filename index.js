// EXAMPLE 1 - Check if Array contains any element of another Array in JS

const arr1 = ['pizza', 'cake', 'cola'];
const arr2 = ['pizza', 'beer'];

const contains = arr1.some(element => {
  return arr2.includes(element);
});

console.log(contains); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if Array contains any element of another Array using indexOf()

// const arr1 = ['pizza', 'cake', 'cola'];
// const arr2 = ['pizza', 'beer'];

// const contains = arr1.some(element => {
//   return arr2.indexOf(element) !== -1;
// });

// console.log(contains); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if Array contains any element of another Array using for...of

// const arr1 = ['pizza', 'cake', 'cola'];
// const arr2 = ['pizza', 'beer'];

// let containsAny = false;

// for (const element of arr1) {
//   if (arr2.includes(element)) {
//     containsAny = true;
//     break;
//   }
// }

// console.log(containsAny); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if Array contains any element of another Array using `for`

// const arr1 = ['pizza', 'cake', 'cola'];
// const arr2 = ['pizza', 'beer'];

// let containsAny = false;

// for (let index = 0; index < arr1.length; index++) {
//   if (arr2.includes(arr1[index])) {
//     containsAny = true;
//     break;
//   }
// }

// console.log(containsAny); // 👉️ true
