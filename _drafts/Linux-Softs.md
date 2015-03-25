---
title: Linux mint 上的常裝的東西@@
layout: post
css: [ post , code ]
tags: [ linux ]
---

##總之因為有時候因為一些怪原因重灌....  

***
### 額外 ppa #

```bash
 #ppa:wallch/3+  
   wallch # 幻燈片桌布  

 #ppa:killian/f.lux  
   fluxgui # 螢幕濾鏡 對於常看螢幕到三更半夜的我來說是個好東西  

 #ppa:mozillateam/firefox-next  
   firefox # beta 版 之前裝過 Aurora 太常爆了 折衷換這版  

 #ppa:skunk/pepper-flash  
   pepperflash-installer # 因為 linux 上目前貌似沒有新的 64 bit flash 於是裝這個  

 #ppa: ubuntu-wine/ppa  
   wine # 可以拿到新一點的 wine   

 #ppa: cairo-dock-team/ppa
   cairo-dock # OSX-like  dock

 #ppa: chris-lea/node.js
   node.js # 新一點的 node.js

 #ppa: nilarimogard/webupd8
   # 有一些套件在上面有新一點的版本可用
```

***
### 一般分支的 repo 應該會有的 #

```bash
freemat # gnu 版的 matlab
pcmanx # linux 上的 pcman
hime # 輸入法
htop # 彩色的終端機工作管理員
gparted # 通常有需要的時候會用到 但是那時候通常不太適合再裝東西...
smartmontools # 同上
build-essential # 編譯基本配備
ia32-libs # 在這 32 與 64 交接的年代裡必備....
w3m # X 爆炸時還勉強可以查點東西
```

***
### 額外網路來源 #

```bash
#deb  
  madedit # hex 和一般文字編輯很好用的 ( 雖然一直不知道系統為啥不讓我拿他取代 gedit  
  sublime-text-3 # 神好用的 editor bj4  
  deadbeef # 我就是想用這個你咬我啊 附帶一提 官方 repo 版本有點舊 ppa 上沒有對應到 saucy 的版本要自己改
  skype # 每次裝 64 bit 系統時最大的痛... 好用但是只有 32bit ...
```

***
### 以下自編 #

```bash
ffmpeg
ffplay
ffprobe
```
