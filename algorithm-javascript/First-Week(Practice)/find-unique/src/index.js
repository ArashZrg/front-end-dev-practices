"use strict";
function findUniqueCharacter(list) {
  if (list[0] !== list[1] && list[2]) {
    return String(list[0]);
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] !== list[j]) {
        return String(list[j]);
      }
    }
  }
  return "Error";
}

const result = findUniqueCharacter([2024, 3, 3, 3, 3, 3, 3, 3]);
console.log(typeof result);

module.exports = findUniqueCharacter;
