export const data = [
  [
    ["`", "~", "ё", "Ё", "digit"],
    ["1", "!", "1", "1", "digit"],
    ["2", "@", "2", `"`, "digit"],
    ["3", "#", "3", "№", "digit"],
    ["4", "$", "4", ";", "digit"],
    ["5", "%", "5", "%", "digit"],
    ["6", "#", "6", ":", "digit"],
    ["7", "#", "7", "?", "digit"],
    ["8", "*", "8", "*", "digit"],
    ["9", "(", "9", "(", "digit"],
    ["0", ")", "0", ")", "digit"],
    ["-", "_", "-", "_", "digit"],
    ["=", "+", "=", "+", "digit"],
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
    ["a", "Q", "ф", "Ф"],
    ["s", "W", "ы", "Ы"],
    ["d", "E", "в ", "В"],
    ["f", "R", "а", "А"],
    ["g", "T", "п", "П"],
    ["h", "Y", "р", "Р"],
    ["j", "U", "о", "О"],
    ["k", "I", "л", "Л"],
    ["l", "O", "д", "Д"],
    [";", "P", "ж", "Ж"],
    ["'", "{", "э", "Э"],
    ["Enter", "Enter", "Enter", "Enter", "Enter", "big"],
  ],
  [
    ["Shift", "Shift", "Shift", "Shift", "ShiftLeft", "big"],
    ["z", "Q", "я", "Я"],
    ["x", "W", "ч", "Ч"],
    ["c", "E", "с", "С"],
    ["v", "R", "м", "М"],
    ["b", "T", "и", "И"],
    ["n", "Y", "т", "Т"],
    ["m", "U", "ь", "Ь"],
    [",", "I", "б", "Б"],
    [".", "O", "ю", "Ю"],
    ["/", "P", ".", ","],
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
