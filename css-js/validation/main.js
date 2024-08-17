"use strict";
//selecting elements
const form = document.querySelector("form");
const userNameErrorEl = document.querySelector(".usernameError");
const emailErrorEl = document.querySelector(".emailError");
const passWordErrorEl = document.querySelector(".passwordError");
const userNameInput = form[0];
const emailInput = form[1];
const passwordInput = form[2];
const submitBtn = form.querySelector("button");

// flag for inputs
const bollArr = [0, 0, 0];

// Cheker functions
const checkName = () => {
  const regName = /^(?!\s*$)[a-zA-Z\s]+$/g;
  if (!regName.test(userNameInput.value)) {
    return false;
  }
  bollArr[0] = 1;
  userNameErrorEl.textContent = "";
  return true;
};
const checkEmail = () => {
  const regEmail = /^\S+@\S+\.\S{2,}$/g;
  if (!regEmail.test(emailInput.value)) {
    return false;
  }
  bollArr[1] = 1;
  emailErrorEl.textContent = "";
  return true;
};
const checkPassword = () => {
  const regPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;
  if (!regPassword.test(passwordInput.value)) {
    return false;
  }
  bollArr[2] = 1;
  passWordErrorEl.textContent = "";
  return true;
};

// run all funcs
const runFuncs = () => {
  const name = checkName();
  const email = checkEmail();
  const password = checkPassword();
  return name && email && password;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!runFuncs()) {
    for (let i = 0; i < 3; i++) {
      if (bollArr[0] === 0) {
        userNameErrorEl.textContent = "نام کاربری را به درستی وارد کنید";
      }
      if (bollArr[1] === 0) {
        emailErrorEl.textContent = "ایمیل را به درستی وارد کنید";
      }
      if (bollArr[2] === 0) {
        passWordErrorEl.textContent =
          "رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد";
      }
    }
  }
});
