let numBottles = Number(prompt("Enter numBottles"));
const numExchange = Number(prompt("Enter numExchange"));
let drinkCount = numBottles;
while (numBottles >= numExchange) {
  let ration = Math.trunc(numBottles / numExchange);
  let remain = Math.trunc(numBottles % numExchange);
  drinkCount += ration;
  numBottles = ration + remain;
}
console.log(drinkCount);
