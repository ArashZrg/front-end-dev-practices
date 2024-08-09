"use strict";

const container = document.querySelector("#container");

//Write a selector for selecting only odd li !
const odd_li = document.querySelectorAll(".child:nth-child(odd)");

// selecting only even li
const even_li = document.querySelectorAll(".child:nth-child(even)");

/* Insert an a tag inside each odd li element 
and set their color to red . remove all even li
elements,
and then assign the class name child to all 
remaining li elements
*/
odd_li.forEach((li) => {
  const a = document.createElement("a");
  a.textContent = 'Arash loves taht boy whose name is " Mahdi Mazaheri "';
  a.style.color = "red";
  li.appendChild(a);
});

even_li.forEach((li) => {
  container.removeChild(li);
});

//get remaining li to add a class name into them
const all_li = document.querySelectorAll("li");
all_li.forEach((li) => li.classList.add("name"));
