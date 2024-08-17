"use strict";
const inputs = document.querySelectorAll("input");
inputs[0].focus();

let i = 0;

document.addEventListener("click", (e) => {
  i = e.target.dataset.order;
});

inputs.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    const arr = inputs[index].value.split("");

    // index : 0
    if (index === 0) {
      if (arr.length === 4) {
        inputs[index + 1].focus();
        i = index + 1;
      }
    }

    // index : 3
    else if (index === 3) {
      if (arr.length === 0) {
        inputs[index - 1].focus();
        i = index - 1;
      }
    }
    // another indexes
    else {
      if (arr.length === 4) {
        inputs[index + 1].focus();
        i = index + 1;
      } else if (arr.length === 0) {
        inputs[index - 1].focus();
        i = index - 1;
      }
    }
  });
});
