"use strict";
let deck = document.querySelectorAll(".deck-item");

let start = 0;
for (let i in deck) {
  if (i == 0) {
    start = (100 - (12.5 + (deck.length - 1) * 10)) / 2;
    console.log(start);
    // start = a / 2;
  } else {
    start = start + 10;
  }
  deck[i].style.left = `${start}%`;
  deck[i].style.zIndex = `${deck.length - i}`;
}
