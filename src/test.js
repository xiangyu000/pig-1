import string from "./css.js";
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
let n = 1;
let speed = 100;
let counter;
const player = {
  init: () => {
    counter = player.play();
    player.bindEvents();
  },
  hashTable: {
    "#btnPause": "clear",
    "#btnPlay": "playing",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.hashTable) {
      if (player.hashTable.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.hashTable[key]];
      }
    }
  },
  btn: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(counter);
      return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    return (counter = setInterval(player.btn, speed));
  },
  clear: () => {
    window.clearInterval(counter);
  },
  playing: () => {
    player.clear();
    player.play();
  },
  slow: () => {
    player.clear();
    speed = 200;
    player.play();
  },
  normal: () => {
    player.clear();
    speed = 50;
    player.play();
  },
  fast: () => {
    player.clear();
    speed = 10;
    player.play();
  },
};
player.init();
