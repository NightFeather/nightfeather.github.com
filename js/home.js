function Link01() {
        location.href = "editor.html";
}

function Link02() {
        location.href = "audio.html";
}

function Link03() {
        alert("這個頁面因為有隱私上的疑慮已遭移除");
}

function Link04() {
        location.href = "/nicolist/";
}

function Link05() {
        location.href = "/drupal/";
}

function Link06() {
        location.href = "/board/";
}

var L01 = document.getElementById("link01_btn");
    L01.addEventListener('click',Link01);
var L02 = document.getElementById("link02_btn");
    L02.addEventListener('click',Link02);
var L03 = document.getElementById("link03_btn");
    L03.addEventListener('click',Link03);
var L04 = document.getElementById("link04_btn");
    L04.addEventListener('click',Link04);
var L05 = document.getElementById("link05_btn");
    L05.addEventListener('click',Link05);
var L06 = document.getElementById("link06_btn");
    L06.addEventListener('click',Link06);
