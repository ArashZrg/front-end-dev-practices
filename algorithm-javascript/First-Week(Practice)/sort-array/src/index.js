function doubleSort() {
  const ascending = () => {
    const array = [...arguments];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  };

  const dscending = () => {
    const array = [...arguments];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  };

  return {
    ascending: ascending(),
    descending: dscending(),
  };
}

module.exports = doubleSort;
