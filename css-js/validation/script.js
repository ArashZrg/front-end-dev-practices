"use strict";

// Select Elements
const mainContainer = document.querySelector(".container");
const nameErroe = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const submitBtn = mainContainer.querySelector("[type='submit']");
const nameInput = mainContainer.querySelector("form")[0];
const emailInput = mainContainer.querySelector("form")[1];
const passwordInput = mainContainer.querySelector("form")[2];
// Declare Booleans
const bollArr = [0, 0, 0];
// Validation Functions
const checkName = () => {
  const regName = /^[a-zA-Z' ']+$/g;
  if (!regName.test(nameInput.value)) {
    return false;
  }
  bollArr[0] = 1;
  nameErroe.textContent = "";
  return true;
};

const checkEmail = () => {
  const regEmail = /^\S+@\S+\.+\S+$/g;
  if (!regEmail.test(emailInput.value)) {
    return false;
  }
  bollArr[1] = 1;
  emailError.textContent = "";
  return true;
};

const checkPassword = () => {
  const regPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;
  if (!regPassword.test(passwordInput.value)) {
    return false;
  }
  bollArr[2] = 1;
  passwordError.textContent = "";
  return true;
};

const runFuncs = () => {
  const name = checkName();
  const email = checkEmail();
  const password = checkPassword();
  return name && email && password;
};

mainContainer.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!runFuncs()) {
    for (let i = 0; i < 3; i++) {
      if (bollArr[0] === 0) {
        nameErroe.textContent = "نام کامل را به درستی وارد کنید.";
      }
      if (bollArr[1] === 0) {
        emailError.textContent = "ایمیل را به درستی وارد کنید.";
      }
      if (bollArr[2] === 0) {
        passwordError.textContent =
          "رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد.";
      }
    }
  }
});
