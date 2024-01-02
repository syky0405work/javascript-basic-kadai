// 配列の宣言と値の代入
const holidays = [
  "正月",
  "成人の日",
  "建国記念日",
  "天皇誕生日",
  "春分の日",
  "昭和の日",
  "憲法記念日",
  "みどりの日",
  "こどもの日",
  "海の日",
  "山の日",
  "敬老の日",
  "秋分の日",
  "スポーツの日",
  "文化の日",
  "勤労感謝の日",
];

// 0~16での整数を順番に出力する
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}

// 変数numを0~15まで順番に出していく
let num = 0;
while (num < holidays.length) {
  console.log(holidays[num]);
  num++;
}
