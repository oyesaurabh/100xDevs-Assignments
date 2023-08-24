/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

//  //callback hell
// function calculateTime() {
//   console.time("t1");
//   waitOneSecond().then(() => {
//     waitTwoSecond().then(() => {
//       waitThreeSecond().then(() => {
//         console.timeEnd("t1");
//       });
//     });
//   });
// }

//so using async-await
async function calculateTime() {
  console.time("t1");
  await waitOneSecond();
  await waitThreeSecond();
  await waitTwoSecond();
  console.timeEnd("t1");
}
calculateTime(); // t1: 6.007s

/*
Compare it with the results from 3-promise-all.js

this one is taking twice the time taken by promiseAll because
async/await: Executes promises sequentially. Total time is the sum of all promises.
Promise.all(): Executes promises concurrently. Total time is equal to the longest promise.

*/
