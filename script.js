// データ
let quiz = [
    {
        title: "まだ終わらないよ？",
        contain: "Anonymous M",
        contain2: "1:26",
        contain3: "text",
        contain4: "BGcolor:#12d3d6",
        num1: "5",
        num2: "3",
        num3: "8",
        num4: "1",
    },
];

// 変数を定義 & HTMLの要素をいじれるようにする
let quizIndex = 0;
let $questionNumber = document.querySelector(".questionNumber");
let $title = document.querySelector(".title");
let $contain = document.querySelector(".contain");
let $contain2 = document.querySelector(".contain2");
let $contain3 = document.querySelector(".contain3");
let $contain4 = document.querySelector(".contain4");
let $num1 = document.querySelector(".num1");
let $num2 = document.querySelector(".num2");
let $num3 = document.querySelector(".num3");
let $num4 = document.querySelector(".num4");

function setup(quizIndex) {
    $title.innerHTML = quiz[quizIndex].title;
    $contain.innerHTML = quiz[quizIndex].contain
    $contain2.innerHTML = quiz[quizIndex].contain2
    $contain3.innerHTML = quiz[quizIndex].contain3
    $contain4.innerHTML = quiz[quizIndex].contain4
    $num1.innerHTML = quiz[quizIndex].num1
    $num2.innerHTML = quiz[quizIndex].num2
    $num3.innerHTML = quiz[quizIndex].num3
    $num4.innerHTML = quiz[quizIndex].num4
}