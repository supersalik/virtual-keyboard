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
textArea.cols = "83";
textArea.readonly = "true";
textArea.classList.add("textarea");
wrapper.appendChild(textArea);
let cursorPosition = document.querySelector(".textarea").selectionStart;

// keyboard
const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
wrapper.appendChild(keyboard);

// keyboardRU
// const keyboardRu = document.createElement("div");
// keyboard.classList.add("keyboard-ru");
// wrapper.appendChild(keyboardRu);

// keysline
const keysLine = document.createElement("div");
keysLine.classList.add(`keys-line`);

//key
const key = document.createElement("button");
key.classList.add("key");

// let lang = "ru";

const keyboardCreator = function (lang) {
  for (let i = 0; i < keys.length; i++) {
    console.log(keysLine);
    keysLine.classList = "";
    keysLine.classList.add(`keys-line${i}`);
    keyboard.appendChild(keysLine.cloneNode(true));
    console.log(keyboard);
    for (let j = 0; j < keys[i].length; j++) {
      const current = document.querySelector(`.keys-line${i}`);
      key;
      if (keys[i][j].type === "letter") {
        if (lang === "en") key.innerText = keys[i][j].name.toUpperCase();
        if (lang === "ru") key.innerText = keys[i][j].nameRu.toUpperCase();
      } else {
        if (lang === "en") key.innerText = keys[i][j].name;
        if (lang === "ru") key.innerText = keys[i][j].nameRu;
      }

      current.appendChild(key.cloneNode(true));

      const allKeys = document.querySelectorAll(".key");
      const currentKey = [...allKeys].at(-1);

      if (keys[i][j].type === "digit") currentKey.classList.add("digit");
      if (keys[i][j].type === "letter") currentKey.classList.add("letter");
      if (keys[i][j].size === "big") currentKey.classList.add("big");
      if (keys[i][j].size === "space") currentKey.classList.add("space");
      if (keys[i][j].type === "CapsLock") currentKey.classList.add("capslock");
      if (keys[i][j].type === "ShiftLeft")
        currentKey.classList.add("shift-left");
      if (keys[i][j].type === "ShiftRight")
        currentKey.classList.add("shift-right");
      if (keys[i][j].type === "ControlLeft")
        currentKey.classList.add("control-left");
      if (keys[i][j].type === "ControlRight")
        currentKey.classList.add("alt-right");
      if (keys[i][j].type === "AltLeft") currentKey.classList.add("alt-left");
      if (keys[i][j].type === "AltRight") currentKey.classList.add("alt-right");
      if (keys[i][j].type === "Backspace")
        currentKey.classList.add("backspace");

      // Event Listener
    }
  }
};

keyboardCreator("en");

const evetnsVK = function () {
  const capsLockKey = document.querySelector(".capslock");
  const altLeftKey = document.querySelector(".alt-left");
  const shiftLeftKey = document.querySelector(".shift-left");
  const allKeys = document.querySelectorAll(".key");
  allKeys.forEach((currentKey) => {
    // digits and letters
    currentKey.addEventListener("click", function (e) {
      let textaraeText = textArea.value;
      if (
        (currentKey.classList.contains("letter") ||
          currentKey.classList.contains("digit")) &&
        !capsLockKey.classList.contains("act")
      ) {
        textaraeText = textaraeText + currentKey.innerText.toLowerCase();
        console.log(currentKey.innerText.toLowerCase());
        textArea.innerText = textaraeText;
      } else if (
        ((currentKey.classList.contains("letter") ||
          currentKey.classList.contains("digit")) &&
          capsLockKey.classList.contains("act")) ||
        shiftLeftKey.classList.contains("act")
      ) {
        textaraeText = textaraeText + currentKey.innerText.toUpperCase();
        textArea.innerText = textaraeText;
        shiftLeftKey.classList.remove("act");
      }

      // Space
      if (currentKey.classList.contains("space")) {
        textaraeText = textaraeText + " ";

        textArea.innerText = textaraeText;
      }
      //Capslock
      if (currentKey.classList.contains("capslock"))
        currentKey.classList.toggle("act");

      //Shift
      if (currentKey.classList.contains("shift-left"))
        currentKey.classList.toggle("act");
      if (currentKey.classList.contains("shift-right"))
        currentKey.classList.toggle("act");

      //Ctrl
      if (currentKey.classList.contains("control-left"))
        currentKey.classList.toggle("act");
      if (currentKey.classList.contains("control-right"))
        currentKey.classList.toggle("act");

      // (altLeftKey.classList.contains('act')&&shiftLeftKey.classList.contains("act"))

      //Alt
      if (currentKey.classList.contains("alt-left"))
        currentKey.classList.toggle("act");
      if (currentKey.classList.contains("alt-right"))
        currentKey.classList.toggle("act");

      // delete

      if (currentKey.classList.contains("backspace")) {
        textaraeText = textaraeText.slice(0, -1);
      }
    });
  });
};

evetnsVK();

window.addEventListener("click", function () {
  let lang = "en";
  const altLeftKey = document.querySelector(".alt-left");
  const shiftLeftKey = document.querySelector(".shift-left");
  if (
    altLeftKey.classList.contains("act") &&
    shiftLeftKey.classList.contains("act")
  ) {
    console.log(
      altLeftKey.classList.contains("act") &&
        shiftLeftKey.classList.contains("act")
    );
    lang === "en" ? (lang = "ru") : (lang = "en");
    altLeftKey.classList.remove("act");
    shiftLeftKey.classList.remove("act");
    document.querySelector(".keyboard").innerHTML = "";
    keyboardCreator(lang);
    evetnsVK();
  }
});

// const langSwich=function

console.log(cursorPosition);

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event.code);
  let keyCode = event.code;

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

const footer = document.createElement("footer");
footer.classList.add("footer");
footer.innerText = "Use Alt left + Shift left to change the language";
wrapper.appendChild(footer);
