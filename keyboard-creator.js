export const keyboardCreator = function (keys) {
  for (let i = 0; i < keys.length; i++) {
    keysLine;
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

      // Event Listener
      currentKey.addEventListener("click", function () {
        let textaraeText = textArea.value;
        console.log(currentKey);
        if (
          currentKey.classList.contains("letter") ||
          currentKey.classList.contains("digit")
        ) {
          console.log(textaraeText);
          textaraeText = textaraeText + currentKey.innerText;
          console.log(textaraeText);
          textArea.innerText = textaraeText;
        }
      });
    }
  }
};
