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
  switch (Math.floor(Math.random() * 13) + 1) {
    case 1:
      nmbr = "1";
    case 2:
      nmbr = "2";
    case 3:
      nmbr = "3";
    case 4:
      nmbr = "4";
    case 5:
      nmbr = "5";
    case 6:
      nmbr = "6";
    case 7:
      nmbr = "7";
    case 8:
      nmbr = "8;";
    case 9:
      nmbr = "9";
    case 10:
      nmbr = "10";
    case 11:
      nmbr = "J";
    case 12:
      nmbr = "Q";
    case 13:
      nmbr = "K";
  }
};
