// 変数numに0~15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numが3と5の倍数の時は、「3と5の倍数です」を出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
}
// 変数numが5の倍数の時は、「5の倍数です」を出力する
else if (num % 5 === 0) {
  console.log("5の倍数です");
}
// 変数numの値が3の倍数であれば、「3の倍数です」という文字を出力する
else if (num % 3 === 0) {
  console.log("3の倍数です");
}
// それ以外の時は、変数(num)を出力
else {
  console.log(num);
}
