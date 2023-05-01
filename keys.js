export const data = [
  [
    ["`", "~", "ё", "Ё", "Digit"],
    ["1", "!", "1", "1", "Digit"],
    ["2", "@", "2", `"`, "Digit"],
    ["3", "#", "3", "№", "Digit"],
    ["4", "$", "4", ";", "Digit"],
    ["5", "%", "5", "%", "Digit"],
    ["6", "#", "6", ":", "Digit"],
    ["7", "#", "7", "?", "Digit"],
    ["8", "*", "8", "*", "Digit"],
    ["9", "(", "9", "(", "Digit"],
    ["0", ")", "0", ")", "Digit"],
    ["-", "_", "-", "_", "Digit"],
    ["=", "+", "=", "+", "Digit"],
    ["Backspace", "Backspace", "Backspace", "Backspace", "Backspace", "big"],
  ],
  [
    ["Tab", "Tab", "Tab", "Tab", "Tab", "Tab"],
    ["q", "Q", "й", "Й"],
    ["w", "W", "ц", "Ц"],
    ["e", "E", "у ", "У"],
    ["r", "R", "к", "К"],
    ["t", "T", "е", "Е"],
    ["y", "Y", "н", "Н"],
    ["u", "U", "г", "Г"],
    ["i", "I", "ш", "Ш"],
    ["o", "O", "щ", "Щ"],
    ["p", "P", "з", "З"],
    ["[", "{", "х", "Х"],
    ["]", "}", "ъ", "Ъ"],
    ["&bsol;", "|", "&bsol;", "|"],
    ["Del", "Del", "Del", "Del", "Del"],
  ],
  [
    ["CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock", "big"],
    ["a", "Q", "й", "Й"],
    ["s", "W", "ц", "Ц"],
    ["d", "E", "у ", "У"],
    ["f", "R", "к", "К"],
    ["g", "T", "е", "Е"],
    ["h", "Y", "н", "Н"],
    ["j", "U", "г", "Г"],
    ["k", "I", "ш", "Ш"],
    ["l", "O", "щ", "Щ"],
    [";", "P", "з", "З"],
    ["'", "{", "х", "Х"],
    ["Enter", "Enter", "Enter", "Enter", "Enter", "big"],
  ],
  [
    ["Shift", "Shift", "Shift", "Shift", "ShiftLeft", "big"],
    ["z", "Q", "й", "Й"],
    ["x", "W", "ц", "Ц"],
    ["c", "E", "у ", "У"],
    ["v", "R", "к", "К"],
    ["b", "T", "е", "Е"],
    ["n", "Y", "н", "Н"],
    ["m", "U", "г", "Г"],
    [",", "I", "ш", "Ш"],
    [".", "O", "щ", "Щ"],
    ["/", "P", "з", "З"],
    ["▲", "▲", "▲", "▲", "ArrowUp", "ArrowUp"],
    ["Shift", "Shift", "Shift", "Shift", "ShiftRight", "big"],
  ],
  [
    ["Ctrl", "Ctrl", "Ctrl", "Ctrl", "ControlLeft", "ControlLeft"],
    ["Win", "Win", "Win", "Win", "Win"],
    ["Alt", "Alt", "Alt", "Alt", "AltLeft"],
    [" ", " ", " ", " ", "Space", "space"],
    ["Alt", "Alt", "Alt", "Alt", "AltRight"],
    ["◄", "◄", "◄", "◄", "ArrowLeft", "ArrowLeft"],
    ["▼", "▼", "▼", "▼", "ArrowDown", "ArrowDown"],
    ["►", "►", "►", "►", "ArrowRight", "ArrowRight"],
    ["Ctrl", "Ctrl", "Ctrl", "Ctrl", "ControlRight", "ControlRight"],
  ],
];

class keysCreator {
  constructor(
    name,
    nameShift,
    nameRu,
    nameRuShift,
    type = "letter",
    size = "key"
  ) {
    this.name = name;
    this.nameShift = nameShift;
    this.nameRu = nameRu;
    this.nameRuShift = nameRuShift;
    this.type = type;
    this.size = size;
  }
}

export const keys = data.map((line) =>
  line.map(
    (cur) => new keysCreator(cur[0], cur[1], cur[2], cur[3], cur[4], cur[5])
  )
);
// new keysCreator([...cur])
// const keys = [
//   [
//     {
//       name: "~",
//       nameShift: "`",
//       nameRu: "ё",
//       nameRuShift: "Ё",
//     },
//   ],
//   [
//     {
//       nameShift: "Tab",
//     },
//     {
//       name: "q",
//       nameShift: "Q",
//       nameRu: "й",
//       nameRuShift: "Й",
//     },
//   ],
// ];
