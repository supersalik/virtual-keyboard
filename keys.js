export const data = [
  [
    ["`", "~", "ё", "Ё"],
    ["1", "!", "1", "1"],
    ["2", "@", "2", `"`],
    ["3", "#", "3", "№"],
  ],
  [
    ["Tab", "Tab", "Tab", "Tab"],
    ["q", "Q", "й", "Й"],
  ],
];

class keysCreator {
  constructor(name, nameShift, nameRu, nameRuShift, size = "key") {
    this.name = name;
    this.nameShift = nameShift;
    this.nameRu = nameRu;
    this.nameRuShift = nameRuShift;
    this.size = size;
  }
}

export const keys = data.map((line) => line.map((cur) => new keysCreator(cur)));

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
