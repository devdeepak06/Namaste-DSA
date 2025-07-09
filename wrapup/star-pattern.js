let num = 4;
/**
  1
  0 1
  0 1 0
  1 0 1 0
 */
function printStarPattern6(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
printStarPattern6(num);
/**
  1
  1 0
  1 0 1
  1 0 1 0
 */
// function printStarPattern6(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//   let toggle = 1;
//     for (let j = 0; j < i + 1; j++) {
//       row = row + toggle;
//       if (toggle == 1) {
//         toggle = 0;
//       } else {
//         toggle = 1;
//       }
//     }
//     console.log(row);
//   }
// }
// printStarPattern6(num);
/**
  - - - *
  - - * *
  - * * *
  * * * *
 */
// function printStarPattern6(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j < n - i - 1; j++) {
//       row = row + " -";
//     }
//     for (let k = 0; k < i + 1; k++) {
//       row = row + " *";
//     }
//     console.log(row);
//   }
// }
// printStarPattern6(num);
/**
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */
// function printStarPattern6(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j < n - i; j++) {
//       row = row + (j + 1);
//     }
//     console.log(row);
//   }
// }
// printStarPattern6(num);
/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 */
// function printStarPattern5(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//       row = row + (i + 1);
//     }
//     console.log(row);
//   }
// }
// printStarPattern5(num);
/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 */
// function printStarPattern4(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//       row = row + (j + 1);
//     }
//     console.log(row);
//   }
// }
// printStarPattern4(num);

/**
 * * * * *
 * * * *
 * * *
 * *
 */
// function printStarPattern3(n) {
//   for (let i = 0; i < n; i++) {
// let row = " ";
// for (let j = 0; j < n - i; j++) {
//       row = row + " *";
//     }
//     console.log(row);

//   }
// }
// printStarPattern3(num);


/**
 * *
 * * *
 * * * *
 * * * * *
*/
// function printStarPattern2(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <=i; j++) {
//       row = row + " *";
//     }
//     console.log(row);

//   }
// }
// printStarPattern2(num);

/**
   * * * * *
   * * * * *
   * * * * *
   * * * * *
   */
// function printStarPattern1(n) {
//   for (let i = 0; i < n; i++){
//     let row = " ";
//     for (let j = 0; j < n; j++){
//       row = row + "*";
//     }
//     console.log(row);

//   }
// }
// printStarPattern1(num);
