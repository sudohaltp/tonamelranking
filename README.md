# トナメル順位確認用ブックマークレット

以下をブックマークして*、トナメルのトーナメント表のページで実行すると、アラートで上位32名が表示されます。

順位と名前はタブで区切られているのでそのままスプレッドシートに貼り付けられるはずです。

（Firefoxでしか確認していません。Chromeは長いアラートは省略されてしまってコピーできないようです。）

*ブックマークバーで右クリックして「ブックマークを追加...」を選びURL欄にコードをコピペする。

~~~
javascript:(function()%7Bconst%20limit%3D32%3B%2F*%20entry-name%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%ABuser-name%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%82%E8%89%AF%E3%81%84%20*%2F%20const%20winner_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22blue%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20loser_names%3D(element)%3D%3E%20%5B...element.querySelectorAll('%5Bdata-bg-color%3D%22gray%22%5D')%5D.map(e%3D%3E%20e.parentElement.getElementsByClassName(%22entry-name%22)%5B0%5D.textContent)%3Bconst%20brackets%3Ddocument.getElementsByClassName(%22tournament-brackets%22)%3Bconst%20winners%3Dbrackets%5B0%5D.getElementsByClassName(%22body-item%22)%3Bconst%20losers%3Dbrackets%5B1%5D.getElementsByClassName(%22body-item%22)%3Bconst%20list%3D%5B%5D%3Blist.push(%5B1%2Cwinner_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blist.push(%5B2%2Closer_names(winners%5Bwinners.length%20-%201%5D)%5B0%5D%5D)%3Blet%20rank%3D2%3Bfor(let%20i%3Dlosers.length%20-%201%3Brank%20%3C%20limit%3Bi--)%7Blet%20names%3Dloser_names(losers%5Bi%5D)%3Brank%20%2B%3Dnames.length%3Bfor(const%20n%20of%20names)%7Blist.push(%5Brank%2Cn%5D)%3B%7D%7Dlet%20str%3D%22%22%3Bfor(const%20user%20of%20list)%7Bstr%20%2B%3D(user%5B0%5D%20%2B%20%22%5Ct%22%20%2B%20user%5B1%5D%20%2B%20%22%5Cn%22)%3B%7Dalert(str)%3B%7D)()%3Bvoid(0);
~~~
