const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    error.style.setProperty("display", "block");
    error.style.setProperty("animation", "fadeIn 0.3s");
    error.style.setProperty("opacity", "100");
    setTimeout(() => {
      error.style.setProperty("display", "none");
    }, 2000);
    return;
  }

  // TODO: Add task to taskList
  if (newTask !== "") {
    const li = document.createElement("li");
    li.classList.add("todos__todo");
    li.textContent = newTask;

    const image = document.createElement("img");
    image.id = "delete";
    image.className = "todos__todo--trash";
    image.src = "./assets/trash.svg";

    li.appendChild(image);
    taskList.appendChild(li);
  }
  // TODO: Reset form input
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  // TODO: Complete task when clicked on task item
  if (e.target.classList.contains("todos__todo")) {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "#c9c8c8";
  }
  // TODO: Delete task item
  if (e.target.classList.contains("todos__todo--trash")) {
    const el = e.target.closest(".todos__todo");
    taskList.removeChild(el);
  }
});
