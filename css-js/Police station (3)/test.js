// i create this to see how can i test my regex pattern with js

let pattern = /^(?!.*(s|S)herlock)[a-zA-Z]{5,15}$/;
let input = "Sherlock";

if (pattern.test(input)) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}
