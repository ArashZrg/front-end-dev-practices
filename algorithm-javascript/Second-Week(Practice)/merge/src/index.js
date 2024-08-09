function merge(list1, m, list2, n) {
  list1.splice(m, list1.length - m, ...list2.slice(0, n));
  list1.sort((a, b) => a - b);
  console.log(list1);
}

merge([1, 2, 3, 0, 0, 0], 4, [7, 8, 9, 0, 0, 0], 4);

module.exports = merge;
