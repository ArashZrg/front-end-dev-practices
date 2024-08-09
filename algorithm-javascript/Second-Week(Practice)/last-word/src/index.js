function lengthOfLast(str) {
  const reg = /^[a-zA-Z]+$/g;
  const words = str.split(" ");
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    if (reg.test(words[i])) {
      result = words[i];
      break;
    }
  }
  return result.length;
}

module.exports = lengthOfLast;
