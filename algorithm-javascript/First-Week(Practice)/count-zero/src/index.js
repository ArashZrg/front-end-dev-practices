"use strict";
function countZeros(n) {
  let count = 0;
  let factor = 1;

  while (factor <= n) {
    let lowerNumbers = n - ((n / factor) | 0) * factor;
    let currentDigit = ((n / factor) | 0) % 10;
    let higherNumbers = (n / (factor * 10)) | 0;

    if (currentDigit === 0) {
      count += higherNumbers * factor;
    } else {
      count += higherNumbers * factor + lowerNumbers + 1;
    }

    factor *= 10;
  }

  return count;
}

let start = Date.now();
console.log(countZeros(100));
let time_taken = Date.now() - start;
console.log(time_taken);
module.exports = countZeros;
