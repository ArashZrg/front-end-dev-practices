"use strict";
import request from "./request.js";
//import requset from "./request.js";
// use request function to send a fake request to a server

function checkPerformance(requestCount) {
  const sucArray = [];
  const failArray = [];
  const requests = [];

  for (let i = 0; i < requestCount; i++) {
    const req = request();
    requests.push(
      req
        .then((d) => {
          sucArray.push(d);
        })
        .catch((d) => failArray.push(d))
    );
  }

  const result = Promise.all(requests).then(() => {
    const sucAvg = sucArray.reduce((a, b) => a + b, 0) / sucArray.length;
    const failAvg = failArray.reduce((a, b) => a + b, 0) / failArray.length;
    const per = (sucArray.length * 100) / requestCount;
    return {
      successAverage: sucAvg,
      failureAverage: failAvg,
      performance: per,
    };
  });
  return result;
}

console.log(checkPerformance(3));

// module.exports = checkPerformance;
