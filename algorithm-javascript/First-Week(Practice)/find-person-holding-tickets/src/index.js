const findPersonHoldingTicket = (n, time) => {
  let flag = true;
  let wichPerson = 1;
  for (let i = 1; i <= time; i++) {
    if (i % n === 0) {
      flag = !flag;
    }
    if (flag) {
      wichPerson++;
    } else if (!flag) {
      wichPerson--;
    }
    if (wichPerson === 0) {
      wichPerson = 2;
    }
  }
  return wichPerson;
};

module.exports = findPersonHoldingTicket;
