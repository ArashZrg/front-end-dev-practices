"use strict";
function filterByTerm(inputArr, searchTerm) {
  if (!inputArr) {
    throw new Error("inputArr cannot be empty");
  } else if (!searchTerm) {
    throw new Error("searchTerm cannot be empty at filterByTerm");
  }

  const filterResult = [];
  const lowerSearchItem = searchTerm.toLowerCase();
  inputArr.forEach((ob) => {
    if (ob.url.includes(lowerSearchItem)) {
      filterResult.push(ob);
    }
  });
  return filterResult;
}

module.exports = filterByTerm;
