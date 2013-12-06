var $ = function ( gotName ) {
    switch ( gotName[0] ) {
        case '#':
            return document.getElementById(gotName.slice(1));
        case '.':
            return document.getElementsByClassName(gotName.slice(1));
        default:
            return document.getElementsByTagName(gotName);
    }
};

var List = 0; //handle the playing element in div#playlist , also means the current playing song
var songCount = 0; //Total number of song

function Switch () {
    var valId=0;
    if($('#audio').paused)
    {
        $('#audio').play();
        $('#play_pause').className = "pause";
        $('.list')[List].className = "playing";
        $('title')[0].innerHTML = "▶"+ document.getElementsByClassName('playing')[0].innerHTML;
    }
    else
    {
        $('#audio').pause();
        $('#play_pause').className = "play";
    }
};

function Stop () {
    $('#audio').currentTime = 0;
    $('#dura').value = $('#audio').currentTime + "";
    $('#audio').pause();
    $('.playing').className = "list";
};

function SeekBar () {
    $('#audio').currentTime = $('#dura').value - "";
};

function SyncTimeText () {
    var currMin="";
    var currSec="";
    var totalMin="";
    var totalSec="";
    currMin = String("0" + (Math.floor($('#audio').currentTime/60) + "")).slice(-2);
    currSec = String("0" + (Math.floor($('#audio').currentTime%60) + "")).slice(-2);
    totalMin = String("0" +( Math.floor($('#audio').duration/60) + "")).slice(-2);
    totalSec = String("0" + (Math.floor($('#audio').duration%60) + "")).slice(-2);
    $('#time').innerHTML = currMin+":"+currSec+"/"+totalMin+":"+totalSec;
};

function inPlaying () {
    SyncTimeText();
    if (!$(('#audio').paused)) {
    $('#dura').value = $('#audio').currentTime + "";
    $('#audio').volume = $('#volbar').value - "";
    }
};

function JSONtoList () {
    var Sname = "";
    while(list.Songs[songCount]) {
        pep = document.createElement('li');
        pep.className="list";
        pep.innerHTML = list.Songs[songCount].Name;
        pep.setAttribute("i",(songCount + "")); 
        $('#playlist').appendChild(pep);
        pep.addEventListener('click', songChange );
        songCount++;
    }
};

function barInit() {
    $('#dura').min = "0";
    $('#dura').max = $('#audio').duration + "";
    $('#dura').value = "0";
    $('#volbar').min = "0.0";
    $('#volbar').max = "1.0";
    $('#volbar').step = "0.01";
    $('#volbar').value = "0.7";
    $('#audio').volume = $('#volbar').value - "";
    $('#audio').currentTime = 0;
};

function dbg() {
 alert("errrr")
};

function songChange() {
    alert("gotcha");
    if ( list.Songs[ ( this.getAttribute( "i" ) - "" ) ] )
        {List = this.getAttribute( "i" ) - "" ;}
    else if ( list.Songs[List + (this.getAttribute("index") - "")])
        {List += this.getAttribute("index") - "";}
    alert(List);
};

$('#play_pause').addEventListener('click',Switch);
$('#stop').addEventListener('click',Stop);
$('#prev').addEventListener('click',songChange);
$('#next').addEventListener('click',songChange);
$('#dura').addEventListener('change',SeekBar);
document.addEventListener( "DOMContentLoaded", JSONtoList, false );
$('#audio').addEventListener( "canplay", barInit, false );
$('#audio').addEventListener( "timeupdate",inPlaying, false );
 //這邊要把音量設定成 0.7 進度條定到 0 可能順便把一些元素處理成預設值 要考慮載入新歌時的問題
