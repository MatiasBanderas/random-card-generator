/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  const cardPicker = document.querySelector(".card");

  switch (Math.floor(Math.random() * 4) + 1) {
    case 1:
      cardPicker.classList.add("heart");
      break;
    case 2:
      cardPicker.classList.add("diamond");
      break;
    case 3:
      cardPicker.classList.add("club");
      break;
    case 4:
      cardPicker.classList.add("spade");
  }
};
