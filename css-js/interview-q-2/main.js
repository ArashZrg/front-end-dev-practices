var container = document.querySelector(".container");
console.log(container[0]);
for (let i = 0; i < 38; i++) {
  let div = document.createElement("div");
  div.classList.add("item");
  if (i % 3 === 0) {
    div.classList.add("item-blue");
  }
  if (i % 3 === 1) {
    div.classList.add("item-pink");
  }

  if (i % 3 === 2) {
    div.classList.add("item-red");
  }

  container.appendChild(div);
}
