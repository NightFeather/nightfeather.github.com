var currentSlide = document.getElementsByClassName("current")[0];
var mouselock = 0;

var switchSlideClick = function(e) {
    if( e.target.nodeName == "A" || mouselock == 1 || e.buttons != 1 )
    {
        mouselock = 0;
    } else if ( currentSlide.nextElementSibling ) {
        currentSlide.className = "";
        currentSlide.nextElementSibling.className = "current";
        currentSlide = document.getElementsByClassName("current")[0];
    } else {
        alert("最後一張了");
    }
}

var switchSlideKey = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
        case 116: //F5
            location.reload();
            break;
        case 35: //End
            currentSlide.className = "";
            currentSlide.parentElement.lastElementChild.className = "current";
            break;
        case 36: // Home
            currentSlide.className = "";
            currentSlide.parentElement.firstElementChild.className = "current";
            break;
        case 37: //left
        case 38: // up
            if (currentSlide.previousElementSibling) {
                currentSlide.className = "";
                currentSlide.previousElementSibling.className = "current";
            } else {
                alert("最開頭了");
            }
            break;
        case 39: //right
        case 40: //down
            if (currentSlide.nextElementSibling) {
                currentSlide.className = "";
                currentSlide.nextElementSibling.className = "current";
            } else {
                alert("最後一張了");
            }
    }
    currentSlide = document.getElementsByClassName("current")[0];
}

var jumpTo = function ( target ) {
    currentSlide.className = "";
    document.getElementsByTagName("section")[ target -1 ].className = "current";
    currentSlide = document.getElementsByClassName("current")[0];
}

document.body.addEventListener("mousedown",function(){ mouselock = 0; });
document.body.addEventListener("mousemove",function(){ mouselock = 1; });
document.body.addEventListener("mouseup",switchSlideClick);
document.body.addEventListener("keydown",switchSlideKey);
