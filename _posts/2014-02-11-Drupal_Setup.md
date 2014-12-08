---
title: 簡略搭起Drupal on Linux
layout: post
css: [ post, code ]
tags: [ drupal ]
---

因為電腦的硬碟不知道為啥常常出狀況  
所以把手邊的實驗用的 Drupal 站台也重裝了 N 次  
裝到這次決定留個筆記好了.....  
省麻煩  

***

#### 下載安裝包和語言檔 #

    wget http://ftp.drupal.org/files/projects/drupal-7.26.tar.gz
    #版本號自己換 像我這邊用的就是 7.26
    wget http://ftp.drupal.org/files/translations/7.x/drupal/drupal-7.26.zh-hant.po
    #這邊也是 不過多一個地方要注意

***

#### 解壓縮 & 放到要的位置 #

    tar -zxv -f drupal-7.26.tar.gz
    #自己喜歡用啥解壓縮就用啥吧
    mv drupal-7.26/ /var/www/drupal
    #我是直接放在 /var/www 底下啦
    sudo cp drupal-7.26.zh-hant.po /var/www/drupal/profiles/standard/translations/
    #語言檔就定位
***

#### 設定前預備工作 #

*以下工作都是在 /var/www/drupal 底下完成*

    sudo chown -R www-data:www-data sites/
    #改權限 這樣之後不用在那邊煩惱 777 755 的問題
    #不過順帶一提 我用的是 linuxMint(Ubuntu分支)的 Apache
    #不是每個 distro 都是用 www-data 
    sudo chmod 644 profiles/standard/translations/drupal-7.26.zh-hant.po
    #以防萬一 像我剛剛就不知道為啥是 600 還要另外弄

另外就是要記得去開個 database 給 drupal 用  
最好是開個只能讀那個資料的新帳號  
這部份我是用 phpmyadmin 完成的  

***

#### 設定 #

[http://localhost/drupal] (http://localhost/drupal)
接下來就照著 drupal 的指引吧

***

#### 參考站點 #

[Drupal台灣](http://drupaltaiwan.org)
