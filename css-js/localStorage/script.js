const localStorageKey = "greeting";
const localStorageValue = "سلام دنیا!";

const showBtn = document.querySelector("#btn");
const removeBtn = document.querySelector("#remove");
const result = document.querySelector("#result");

showBtn.addEventListener("click", () => {
  localStorage.setItem(localStorageKey, localStorageValue);
});
setInterval(() => {
  if (localStorage.getItem(localStorageKey)) {
    result.textContent = localStorage.getItem(localStorageKey);
  }
}, 1000);

removeBtn.addEventListener("click", () => {
  localStorage.removeItem(localStorageKey);
});
setInterval(() => {
  if (!localStorage.getItem(localStorageKey)) {
    result.textContent = "";
  }
}, 1000);
