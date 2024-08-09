document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("submit", addPost);
async function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => data)
    .then((data) => {
      document.getElementById("output").innerText = data;
    })
    .catch((err) => console.log(err));
}

async function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h3>Users</h3>";
      data.forEach(function (user) {
        output += `
          <ul>
            <li>
              ID : ${user.id}
            </li>
            <li>
              Name : ${user.name}
            </li>
            <li>
              Email : ${user.email}
            </li>
          </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await response.json();
  let output = `<h3>Posts</h3>`;
  res.forEach(function (post) {
    output += `
      <ul>
        <li>
          ID : ${post.id}
        </li>
        <li>
          TITLE : ${post.title}
        </li>
        <li>
          BODY : ${post.body}
        </li>
      </ul>
    `;
  });

  document.getElementById("output").innerHTML = output;
}

async function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json , text/plain , */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
