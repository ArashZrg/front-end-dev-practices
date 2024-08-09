"use strict";

const likes = document.querySelector("#likes");

const fetchComments = async () => {
  try {
    const request = await fetch("./count.json");
    const response = await request.json();
    return response.count;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateDiv = async () => {
  const data = await fetchComments();
  likes.textContent = data;
};

updateDiv();
