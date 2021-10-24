const Heart = document.getElementById("heart");
const Spade = document.getElementById("spade");
const Clover = document.getElementById("clover");
const Diamond = document.getElementById("diamond");
const displayItems = document.getElementById("display-items");

Heart.onclick = function () {
  displayItems.textContent += "♡";
};

Spade.onclick = function () {
  displayItems.textContent += "♠";
};

Clover.onclick = function () {
  displayItems.textContent += "♧";
};

Diamond.onclick = function () {
  displayItems.textContent += "♦";
};
