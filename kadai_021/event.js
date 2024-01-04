// btnののidを持つHTML要素を取得し、定数に代入
const Btn = document.getElementById("btn");
// textのidを持つHTML要素を取得し、定数に代入
const Text = document.getElementById("text");

// クリックされときに実行する
Btn.addEventListener("click", () => {
  // 2秒後に実行されるようにsetTimeoutで囲む
  setTimeout(() => {
    // textの文書を変更する
    Text.textContent = "ボタンをクリックしました";
  }, 2000);
});
