function goToPage() {
      const pass = document.getElementById("password").value.trim();
      if(pass == "NON-EXSISTENT"){
          alert("それはこのページやね")
      }else if(pass == "hint"){
          alert("ヒントが欲しいんだ、へえ～。なんで置き換えたのさ？答えの道筋は、それで消されたのさ。")
      }else if (pass) {
        window.location.href = `${encodeURIComponent(pass)}.html`;
      }
    }