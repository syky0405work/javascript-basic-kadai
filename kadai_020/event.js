// btnののidを持つHTML要素を取得し、定数に代入
const Btn = document.getElementById("btn");

// クリックされときに実行する
Btn.addEventListener("click", () => {
  // textのidを持つHTML要素を取得し、定数に代入
  const Text = document.getElementById("text");
  // textの文書を変更する
  Text.textContent = "ボタンをクリックしました";
});
