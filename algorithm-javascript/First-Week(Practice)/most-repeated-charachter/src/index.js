"use strict";
function findMostRepeated(str) {
  const charCount = {};
  let mostRepeatedChar = "";
  let maxCount = 0;

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    console.log(charCount);
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostRepeatedChar = char;
    }
  }
  return mostRepeatedChar;
}

console.log(findMostRepeated("hhellooooo"));

module.exports = findMostRepeated;
