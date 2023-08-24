/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() {
  document.getElementById("card").textContent =
    Math.floor(Math.random() * 6) + 1;
}

randomCard();
