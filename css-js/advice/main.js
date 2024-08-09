import simulatedApi from "./server/server.js";

const adviceContainer = document.querySelector(".advice");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

const generateAdvice = async () => {
  return await simulatedApi.then((data) => data);
};

btn.addEventListener("click", async () => {
  const data = await generateAdvice();
  heading.textContent = data.id;
  adviceContainer.textContent = data.advice;
});
