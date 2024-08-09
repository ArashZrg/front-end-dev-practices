function joinArrays(list1, list2) {
  if (list1.length === 0 && list2.length === 0) {
    return [];
  } else if (list1.length === 0) {
    return list2.sort((a, b) => a.id - b.id);
  } else if (list2.length === 0) {
    return list1.sort((a, b) => a.id - b.id);
  }
  let mergedList = [...list1];
  for (let i = 0; i < mergedList.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list2[j]["id"] === mergedList[i]["id"]) {
        for (key in mergedList[i]) {
          if (Object.hasOwn(list2[j], key)) {
            mergedList[i][key] = list2[j][key];
          }
        }
        list2.splice(j, 1);
        break;
      }
    }
  }
  console.log(mergedList);
  mergedList.push(...list2);
  return mergedList.sort((a, b) => a.id - b.id);
}

module.exports = joinArrays;
