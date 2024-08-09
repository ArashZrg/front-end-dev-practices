const initialObject = {
  name: "John Doe",
  age: 24,
  scores: {
    math: 18,
    science: 20,
  },
  avg: function () {
    return (this.scores.math + this.scores.science) / 2;
  },
};

function shallowCopy(obj) {
  if (obj === null) return null;
  return { ...obj };
}

function deepCopy(obj) {
  if (obj === null || obj === undefined) return;
  const newObj = {};
  for (key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[`${key}`] = obj[key].map((item) => item);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[`${key}`] = deepCopy(obj[key]);
    } else {
      newObj[`${key}`] = obj[key];
    }
  }
  return newObj;
}

module.exports = { shallowCopy, deepCopy };
