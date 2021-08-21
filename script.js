//Seçme İşlemleri

let btn1 = document.querySelector("#btn1");
let sac1 = document.querySelector(".sac1");
let btn2 = document.querySelector("#btn2")
let sac2 = document.querySelector(".sac2");
let btn3 = document.querySelector("#btn3");
let sac3 = document.querySelector(".sac3");

let btn4 = document.querySelector("#btn4")
let mouth1 = document.querySelector(".mouth1");
let btn5 = document.querySelector("#btn5")
let mouth2 = document.querySelector(".mouth2");
let btn6 = document.querySelector("#btn6")
let mouth3 = document.querySelector(".mouth3");

let btn7 = document.querySelector("#btn7")
let gozluk = document.querySelector(".gozluk");
let btn8 = document.querySelector("#btn8")
let cicek = document.querySelector(".cicek");
let btn9 = document.querySelector("#btn9")
let kulaklik = document.querySelector(".kulaklik");

//sac-buton1
btn1.addEventListener("click", show)

function show() {
    sac1.classList.toggle("sac1");
}

//saç-buton2
btn2.addEventListener("click", show2)

function show2() {
    sac2.classList.toggle("sac2");
}

//saç-buton3
btn3.addEventListener("click", show3)

function show3() {
    sac3.classList.toggle("sac3");
}

//mouth-buton4

btn4.addEventListener("click", show4)

function show4() {
    mouth1.classList.toggle("mouth1");
}

//mouth-buton5

btn5.addEventListener("click", show5)

function show5() {
    mouth2.classList.toggle("mouth2");
}
//mouth-buton6

btn6.addEventListener("click", show6)

function show6() {
    mouth3.classList.toggle("mouth3");
}

//aksesuar-buton7
btn7.addEventListener("click", show7)

function show7() {
    gozluk.classList.toggle("gozluk");
}
//aksesuar-buton8
btn8.addEventListener("click", show8)

function show8() {
    cicek.classList.toggle("cicek");
}

//aksesuar-buton9

btn9.addEventListener("click", show9)
function show9() {
    kulaklik.classList.toggle("kulaklik");
}

