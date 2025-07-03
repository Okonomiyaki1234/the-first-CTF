let ret = false
ret = window.confirm("もしこのページが見たいなら、キャンセルを選んで！")
if(ret == true){
    alert("なるほど。帰れ！")
    window.location.href = `indexa.html`;
  }else if(ret == false){
    ret = window.prompt("やるじゃん。名前は？(お好きなユーザー名を入力してください。)")
    if(ret){
        alert("へえ、ここまで来て入力しちゃうんだ～。案外お茶目なんだね、" + ret + "って。特別に「ゲスト」ってことにしてあげるけど。")
    }else{
        ret = window.confirm("もしこのページが本当に見たいなら、キャンセルを選ばないで！")
        if(ret == true){
            alert("ようこそ！「ゲスト」様")
        }else if(ret == false){
            alert("選ばないでって言ったのに…もしかして見たくないんだ。そうかそうか君はそういうやつなんだな…帰れ！")
            window.location.href = `indexa.html`;
        }
    }
  }