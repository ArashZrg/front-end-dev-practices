// Selecting elements
const logoLink = document.querySelector("#logo");
const bootcampLink = document.querySelector("#bootcampLink");
const collegeLink = document.querySelector("#collegeLink");
const junioraLink = document.querySelector("#junioraLink");
const h1 = document.querySelector("h1");

const h1Content = (str) => {
  if (str === "/index.html") {
    h1.textContent = "به کوئرا خوش آمدید";
  } else if (str === "/") {
    h1.textContent = "به کوئرا خوش آمدید";
  } else if (str === "/bootcamp") {
    h1.textContent = "به بوت کمپ خوش آمدید";
  } else if (str === "/college") {
    h1.textContent = "به کالج خوش آمدید";
  } else if (str === "/juniora") {
    h1.textContent = "به جونیورا خوش آمدید";
  }
};

window.addEventListener("popstate", () => {
  h1Content(window.location.pathname);
});

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState({ page: "logo" }, "", e.target.href);
  h1Content("/");
});

bootcampLink.addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState({ page: "bootcamp" }, "", e.target.href);
  h1Content("/bootcamp");
});

collegeLink.addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState({ page: "college" }, "", e.target.href);
  h1Content("/college");
});

junioraLink.addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState({ page: "juniora" }, "", e.target.href);
  h1Content("/juniora");
});
