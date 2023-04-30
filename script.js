"use strict";

import { keys } from "./keys.js";

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
textArea.readonly = "true";
textArea.classList.add("textarea");
wrapper.appendChild(textArea);
let cursorPosition = document.querySelector(".textarea").selectionStart;
// keyboard
const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
wrapper.appendChild(keyboard);

// keysline
const keysLine = document.createElement("div");
keysLine.classList.add(`keys-line`);

//key
const key = document.createElement("button");
key.classList.add("key");

let lang;

for (let i = 0; i < keys.length; i++) {
  keysLine;
  keysLine.classList.add(`keys-line${i}`);
  keyboard.appendChild(keysLine.cloneNode(true));
  console.log(keyboard);
  for (let j = 0; j < keys[i].length; j++) {
    // console.log("i=", i, " j=", j);
    // if (lang === "ru") {
    //   console.log("lang=ru");
    //   key.innerText = keys[i][j].nameRuShift;
    // } else {
    //   console.log("lang=en");
    const current = document.querySelector(`.keys-line${i}`);
    key;
    if (keys[i][j].type === "letter")
      key.innerText = keys[i][j].name.toUpperCase();
    else key.innerText = keys[i][j].name;
    // }
    console.log(keys[i][j].nameShift);
    current.appendChild(key.cloneNode(true));
    const allKeys = document.querySelectorAll(".key");
    const currentKey = [...allKeys].at(-1);
    console.log([...allKeys].at(-1));

    currentKey.addEventListener("click", function () {
      let textaraeText = textArea.value;
      console.log(textaraeText);
      textaraeText = textaraeText + currentKey.innerText;
      console.log(textaraeText);
      textArea.innerText = textaraeText;
    });
  }
}

console.log(cursorPosition);

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event.code);
  let keyCode = event.code;
  // if (event.code.slice(-1) === /^[A-Z0-9]$/) {

  // console.log(event.code.slice(-1) === /^[A-Z0-9]$/);
  let textaraeText = textArea.value;

  if (keyCode === "Space") {
    textaraeText = textaraeText + " ";
  } else if (keyCode === "Backspace") {
    textaraeText = textaraeText.slice(0, -1);
  } else if (keyCode === "Delete") {
    textaraeText = textaraeText.slice(0, -1);
  } else {
    textaraeText = textaraeText + keyCode.slice(-1).toLocaleLowerCase();
    cursorPosition++;
  }

  textArea.innerText = textaraeText;
  console.log(cursorPosition);
  // }
});
