---
title: SoftAP using hostapd &amp; dnsmasq
layout: post
css: [ post, code ]
---

總之因為今天很閒所以把之前的軟AP又搬出來弄過一遍  
現在是已經可以正常啟動而且手機也抓的到  
但是驗證完之後會卡在取得IP  
總之就是負責 dhcp 的 dnsmasq 哪裡出了狀況就是 orz (研究中  

***

**hostapd.conf**

    interface=wlan0
    driver=nl80211
    ssid=lol
    hw_mode=g
    channel=6
    wpa=2
    wpa_passphrase=*********
    wpa_key_mgmt=WPA-PSK
    wpa_pairwise=TKIP
    rsn_pairwise=CCMP
    ignore_broadcast_ssid=0 #隱藏ssid 但是其實現在是公開狀態
    debug=0
    macaddr_acl=0
    auth_algs=1
    deny_mac_file=/etc/hostapd/hostapd.deny

***

**dnsmasq.conf**

    no-resolv
    interface=wlan0
    except-interface=eth0
    no-dhcp-interface=eth0
    dhcp-range=192.168.150.2,192.168.150.20
    dhcp-authoritative
    server=8.8.8.8
    server=8.8.4.4

***

順便把啟動 script 放進來好了 說不定是他在搞鬼(?  

**wlanAP.sh**

    #!/bin/bash
    
    if [[ `id -u` -ne 0 ]]; then
        echo "This script should run as root";
        exit;
    fi
    
    hostapdConf='${HOME}/.config/hostapd/hostapd.conf'
    dnsmasqConf='${HOME}/.config/dnsmasq/dnsmasq.conf'
    wireless='wlan0'
    ethernet='eth0'
    
    iptables --flush
    iptables --table nat --flush
    iptables --delete-chain
    iptables --table nat --delete-chain
    iptables --table nat --append POSTROUTING --out-interface $ethernet -j MASQUERADE
    iptables --append FORWARD --in-interface $wireless -j ACCEPT
     
    sysctl -w net.ipv4.ip_forward=1
    dnsmasq -C $dnsmasqConf
    #start hostapd
    hostapd $hostapdConf

