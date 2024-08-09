function addMatrices(matrix1, matrix2) {
  const rowNumber = 4;
  const columnNumber = 4;
  const finalMatrix = [[], [], [], []];
  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < columnNumber; j++) {
      finalMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
    }
  }
  return finalMatrix;
}

module.exports = addMatrices;
