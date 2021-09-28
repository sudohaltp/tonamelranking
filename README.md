# トナメル ダブルエリミトーナメント順位確認用ブックマークレット

以下をブックマークして*、トナメルのトーナメント表のページで実行すると、アラートで上位32名が表示されます。

Firefoxの場合、表示されたテキストをドラッグで選択してコピーしてください。

Chromeの場合、入力欄の中身が選択された状態になっていると思いますので、そのままコピーしてください。その他のブラウザは未確認。

順位と名前はタブで区切られているのでそのままスプレッドシートに貼り付けられるはずです。

間違っていても責任は取れませんので目視で最終チェックをしてください。

*ブックマークバーで右クリックして「ブックマークを追加...」（FFの場合） / 「ページを追加...」(Chromeの場合）を選びURL欄にコードをコピペする。

これを貼り付けて使うランバト集計用のスプレッドシートもあります

https://docs.google.com/spreadsheets/d/1OK-kaOSAaitGmTqQO5KIOBUyMLhD5197d0RWL1rr5VQ/edit#gid=1716235249

[32位まで版]
~~~
javascript:(function()%7Bconst%20limit%3D32%3B%2F*%20entry-name%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%ABuser-name%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%82%E8%89%AF%E3%81%84%20*%2F%20const%20winner_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22blue%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20loser_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22gray%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20brackets%3Ddocument.getElementsByClassName(%22tournament-brackets%22)%3Bconst%20winners%3Dbrackets%5B0%5D.getElementsByClassName(%22body-item%22)%3Bconst%20losers%3Dbrackets%5B1%5D.getElementsByClassName(%22body-item%22)%3Bconst%20list%3D%5B%5D%3Blist.push(%5B1%2Cwinner_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blist.push(%5B2%2Closer_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blet%20rank%3D2%3Bfor(let%20i%3Dlosers.length%20-%201%3Brank%20%3C%20limit%3Bi--)%7Bif(i%20%3C%200)%7Bbreak%3B%7Dlet%20names%3Dloser_names(losers%5Bi%5D)%3Brank%20%2B%3Dnames.length%3Bfor(const%20n%20of%20names)%7Blist.push(%5Brank%2Cn%5D)%3B%7D%7Dlet%20str%3D%22%22%3Bfor(const%20user%20of%20list)%7Bstr%20%2B%3D(user%5B0%5D%20%2B%20%22%5Ct%22%20%2B%20user%5B1%5D%20%2B%20%22%5Cn%22)%3B%7Dif(window.navigator.userAgent.indexOf(%22Chrome%22)!%3D-1)%7Bprompt(%22%E3%81%93%E3%81%AE%E3%81%BE%E3%81%BE%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%22%2Cstr)%3B%7Delse%7Balert(str)%3B%7D%7D)()%3Bvoid(0);
~~~

[64位まで版]
~~~
javascript:(function()%7Bconst%20limit%3D64%3B%2F*%20entry-name%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%ABuser-name%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%82%E8%89%AF%E3%81%84%20*%2F%20const%20winner_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22blue%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20loser_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22gray%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20brackets%3Ddocument.getElementsByClassName(%22tournament-brackets%22)%3Bconst%20winners%3Dbrackets%5B0%5D.getElementsByClassName(%22body-item%22)%3Bconst%20losers%3Dbrackets%5B1%5D.getElementsByClassName(%22body-item%22)%3Bconst%20list%3D%5B%5D%3Blist.push(%5B1%2Cwinner_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blist.push(%5B2%2Closer_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blet%20rank%3D2%3Bfor(let%20i%3Dlosers.length%20-%201%3Brank%20%3C%20limit%3Bi--)%7Blet%20names%3Dloser_names(losers%5Bi%5D)%3Brank%20%2B%3Dnames.length%3Bfor(const%20n%20of%20names)%7Blist.push(%5Brank%2Cn%5D)%3B%7D%7Dlet%20str%3D%22%22%3Bfor(const%20user%20of%20list)%7Bstr%20%2B%3D(user%5B0%5D%20%2B%20%22%5Ct%22%20%2B%20user%5B1%5D%20%2B%20%22%5Cn%22)%3B%7Dif(window.navigator.userAgent.indexOf(%22Chrome%22)!%3D-1)%7Bprompt(%22%E3%81%93%E3%81%AE%E3%81%BE%E3%81%BE%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%22%2Cstr)%3B%7Delse%7Balert(str)%3B%7D%7D)()%3Bvoid(0);
~~~

バグや要望（対応できるかはわかりませんが）があればhttps://twitter.com/sudo_halt_game まで
