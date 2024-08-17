// this function make a fake login request and return a response time
function login(username) {
  const time = Math.floor(Math.random() * 200) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`try to login : ${username}`);

      if (time <= 60) {
        resolve({ status: "ok", responseTime: time });
      } else {
        reject({ status: "failed", responseTime: time });
      }
    }, time);
  });
}

module.exports = login;
