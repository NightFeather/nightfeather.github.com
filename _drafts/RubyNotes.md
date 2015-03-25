---
title: Ruby 筆記
layout: post
css: [ post , code]
tag:  [ruby]
---

### 總之就是聚集了各式從網路上蒐集來的東西@@ #
<br />
### [% 的特殊用途](#percentage_sign) #

***
#### %Q 和 %q #
    這兩個是表示字串的替代方式  
    差在小寫是單引號大寫是雙引號  

***
#### %w 和 %W #
    性質其實跟前一段很像
    差在這個會把他用空白分割變成陣列


***
#### %x #
    跟反引號 ' ` ' 的用途類似
    都是把包起來的字串當成指令執行
    不過他不會去執行你的預設 shell 的 builtin

***
#### %r #
    跟 `/` 的功能一樣
    會把包夾起來的字串變成 regex 物件

***
#### %s #
    跟 `:` 功能類似
    會把包起來的字串變成 symbol

***
***
<br />
### [迭代操作](#iterator) #

#### each #

    ruby 迭代操作的基本
    後面 block 內容是一般的變數操作
    回傳被迭代者的原始副本

***
#### map (collect) #

    基本上跟 each 一樣
    差在回傳的是操作結果

***
#### inject #

    跟前面類似
    但是他提供一個變數
    可以讓你在操作時使用並在結束時回傳

***
#### select , reject #

    後面傳入的部份是 條件式
    回傳符合條件的元素集合
    select => 條件為真
    reject => 條件為偽

***
***
<br />

### [雜項](#misc) #
***
#### Class #
***

`define_method( :method_name , &method_do )` # dynamically add method 

`extend`    # 把後面呼叫的 module **合併** 進此 class 本身

`include`   # 把後面呼叫的 module **引用** 進此 class 產生的物件
