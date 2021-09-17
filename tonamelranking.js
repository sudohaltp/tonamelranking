/*
  トナメルの終了済みのトーナメント表から上位者をアラートで表示する。
  ブックマークレットで使うことを想定しています。このファイルは中身の確認用です。
*/
(function() {
  const limit = 32;
  
  /* entry-nameの代わりにuser-nameを使っても良い */
  const winner_names = (element) => [...element.querySelectorAll('[data-bg-color="blue"]')].map(e => e.parentElement.getElementsByClassName("entry-name")[0].textContent);
  const loser_names = (element) => [...element.querySelectorAll('[data-bg-color="gray"]')].map(e => e.parentElement.getElementsByClassName("entry-name")[0].textContent);

  const brackets = document.getElementsByClassName("tournament-brackets");
  const winners = brackets[0].getElementsByClassName("body-item");
  const losers = brackets[1].getElementsByClassName("body-item");

  const list = [];

  list.push([1, winner_names(winners[winners.length - 1])[0]]);
  list.push([2, loser_names(winners[winners.length - 1])[0]]);

  let rank = 2;
  for (let i = losers.length - 1; rank < limit; i--) {
    let names = loser_names(losers[i]);
    
    rank += names.length;
    for (const n of names) {
      list.push([rank, n]);
    }
  }

  let str = "";
  for (const user of list) {
    str += (user[0] + "\t" + user[1] + "\n");
  }

  alert(str);
})();
