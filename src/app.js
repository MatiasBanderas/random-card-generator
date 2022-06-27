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
      document.getElementById("who").textContent = "1";
      break;
    case 2:
      document.getElementById("who").textContent = "2";
      break;
    case 3:
      document.getElementById("who").textContent = "3";
      break;
    case 4:
      document.getElementById("who").textContent = "4";
      break;
    case 5:
      document.getElementById("who").textContent = "5";
      break;
    case 6:
      document.getElementById("who").textContent = "6";
      break;
    case 7:
      document.getElementById("who").textContent = "7";
      break;
    case 8:
      document.getElementById("who").textContent = "8";
      break;
    case 9:
      document.getElementById("who").textContent = "9";
      break;
    case 10:
      document.getElementById("who").textContent = "10";
      break;
    case 11:
      document.getElementById("who").textContent = "J";
      break;
    case 12:
      document.getElementById("who").textContent = "Q";
      break;
    case 13:
      document.getElementById("who").textContent = "K";
  }
};
