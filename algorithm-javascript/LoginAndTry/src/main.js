"use strict";
const login = require("./login");

async function loginAndTry(username, retry = 10) {
  const time = [];
  let flag = false;
  for (let i = 1; i <= retry; i++) {
    if (flag) {
      break;
    }
    await login(username)
      .then((d) => {
        time.push(d.responseTime);
        flag = !flag;
      })
      .catch((d) => {
        time.push(d.responseTime);
      });
  }

  return {
    try: time.length,
    status: flag,
    timeSpent: time.reduce((a, b) => a + b, 0),
  };
}

// loginAndTry("Arash", 10).then((d) => console.log(d));

module.exports = loginAndTry;
