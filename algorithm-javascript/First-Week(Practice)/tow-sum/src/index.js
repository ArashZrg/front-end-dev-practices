"use strict";
function twoSum(list, target) {
  let result = -1;
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++)
      if (list[i] + list[j] === target) {
        result = [i, j];
        return result;
      }
  }
  return result;
}

module.exports = twoSum;
