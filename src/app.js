/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  cartaAleatoria();
  setInterval(cartaAleatoria, 10000);
};

window.cartaAleatoria = function cartaAleatoria() {
  let numeroCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  document.getElementById("numerocarta").textContent =
    numeroCarta[Math.floor(Math.random() * 13)];
  let pintas = ["♦", "♥", "♠", "♣"];
  let pintaRandom = pintas[Math.floor(Math.random() * 4)];
  document.getElementById("pinta").textContent = pintaRandom;
  document.getElementById("pinta2").textContent = pintaRandom;
  document.querySelector(".pinta2").style.transform = "rotate(180deg)";
};

window.cambiarTamano = function cambiarTamano() {
  console.log("cambio tamaño");
  let alto = document.getElementById("alto").value;
  let ancho = document.getElementById("ancho").value;
  document.getElementById("carta").style.height = alto + "px";
  document.getElementById("carta").style.width = ancho + "px";
};
