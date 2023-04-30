"use strict";

import { keys } from "./keys.js";

console.log("heloo");

console.log(keys);

const body = document.querySelector("body");

//wrapper
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.appendChild(wrapper);

//header
const header = document.createElement("header");
header.classList.add("header");
header.innerText = "Virtual keyboard by me";
wrapper.appendChild(header);

//textarae
const textArea = document.createElement("textarea");
textArea.rows = "5";
textArea.cols = "50";
textArea.classList.add("textarea");
wrapper.appendChild(textArea);

// keyboard
const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
wrapper.appendChild(keyboard);

// keyboard
const keysLine = document.createElement("div");
keysLine.classList.add("keys-line");

const key = document.createElement("div");
key.classList.add("key");

let lang;

for (let i = 0; i < keys.length; i++) {
  keyboard.appendChild(keysLine.cloneNode(true));
  for (let j = 0; j < keys[i].length; j++) {
    // console.log("i=", i, " j=", j);
    // if (lang === "ru") {
    //   console.log("lang=ru");
    //   key.innerText = keys[i][j].nameRuShift;
    // } else {
    //   console.log("lang=en");
    key.innerText = keys[i][j].nameShift;
    // }
    console.log(keys[i][j].nameShift);
    keysLine.appendChild(key.cloneNode(true));
  }
}
