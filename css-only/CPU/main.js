const scroll = document.querySelector(".scroll-div");

for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("scroll-object");
  div.innerHTML = `0X${i}4F`;
  scroll.appendChild(div);
}

const items = document.querySelectorAll(".scroll-object");

items.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const p = document.querySelector(".where-to-go");
    const text = item.textContent;
    console.log(text);
    p.textContent = text;
    console.log(p.textContent);
  })
);
