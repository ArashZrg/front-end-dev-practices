"use strict";

class App {
  #url;
  #Books;
  constructor() {
    this.#Books = [];
    this.#url =
      "https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json";
    this.createArticle();
  }

  async fetchData(url) {
    try {
      const request = await fetch(url);
      if (!request.ok) {
        throw new Error(`status is : ${request.status}`);
      } else {
        const response = await request.json();
        this.#Books = response;
      }
    } catch (err) {
      console.error("Something went wrong while fetching data:", err);
    }
  }

  async createArticle() {
    await this.fetchData(this.#url);

    const article = document.querySelector("article");
    article.classList.add("flex_design");
    article.classList.add("first-color");

    for (let i = 0; i < this.#Books.length; i++) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      h3.innerHTML = `
        Book Name: ${this.#Books[i].name} 📕
      `;
      p.innerHTML = `
        Genre: ${this.#Books[i].genre} 🌀
        <br>
        Author: ${this.#Books[i].author} ✏️
        <br>
        PublishDate: ${this.#Books[i].publishData} 📢
        <br>
        Price: ${this.#Books[i].price} 💵
      `;
      img.src = this.#Books[i].image;
      div.appendChild(h3);
      div.appendChild(img);
      div.appendChild(p);
      h3.classList.add("flex-grow");
      p.classList.add("flex-grow");
      div.classList.add("flex_design");
      div.classList.add("second-color");
      article.appendChild(div);
    }
  }
}

const app = new App();
console.log(document.querySelector("html"));
