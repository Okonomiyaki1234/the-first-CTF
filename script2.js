function goToPage() {
      const pass = document.getElementById("password").value.trim();
      if(pass == 1528){
          alert("それはほんとにh1か？")
      }else if(pass == 4609){
          alert("確かにタグはh1だけどね。違うんだなぁこれが。")
      }else if(pass == 14562089){
          alert("浅はかやな～")
      }else if(pass == "find me"){
          alert("着眼点はよかったよ...ま、違うんだけどね。")
      }else if(pass == "Enter the password if you are a really administrator. If not, you should back."){
          alert("長い長い！こんなに読んでられないよ！")
      }else if(pass == "contain"){
          alert("なるほどグリフィンドールにマイナス2億点")
      }else if(pass == "数字8桁"){
          alert("...ごめん。ツッコミが思いつかないや。")
      }else if(pass == "h1"){
          alert("いい発想だね。だが断る♪")
      }else if(pass == "password"){
          alert("流石に草")
      }else if (pass == "hint"){
          alert("みんなして踊らされよってからに...containやで～h1とちゃうんよ。")
      }else if (pass == "index"){
          alert("待って、それこのページだから！")
      }else if (pass == "wow"){
          alert("こっちがwowだよ...")
      }else if (pass == "adventure"){
          alert("君は確かに冒険者なのかもしれない。だけど、ここではそうじゃないだろう。")
      }else if (pass) {
        window.location.href = `${encodeURIComponent(pass)}.html`;
      }
    }