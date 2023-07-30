let user = {
  word: "",
  score: 0,
  mode: 0,
};
let index = 0;
let isGameOver = false;

let validateWordBtn = document.getElementById("validateWordBtn");
let radioList = document.querySelectorAll(".optionRadio input");
let guessArea = document.querySelector(".guessArea input");
let timerArea = document.querySelector(".timerArea span");
let loveRadio = document.querySelector(".loveRadio");
let loveLabel = document.querySelector(".loveLabel");
