function Clear() {
    document.getElementById("maininput").value = "";
    document.getElementById("filename").value = "";
}

function Unescape() {
    document.getElementById("maininput").value = unescape(document.getElementById("maininput").value);
}

function Save() {
    if  ((document.getElementById("maininput").value == "" )||(document.getElementById("filename").value = ""))
            alert("Filename or Content is empty!!!");
    else
        {
            var blob = new Blob([document.getElementById("maininput").value], {type: "text/plain;charset=utf-8"});
            saveAs(blob, document.getElementById("filename").value);
        }
}
function Home() {
    location.href = ".";
}


var sav = document.getElementById("save");
    sav.addEventListener('click',Save);
var cls = document.getElementById("clear");
    cls.addEventListener('click',Clear);
var gohome = document.getElementById("home");
    gohome.addEventListener('click',Home);
var uns = document.getElementById("unescape");
    uns.addEventListener('click',Unescape);
