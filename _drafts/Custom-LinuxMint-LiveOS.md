---
title: 訂製一個自己的 LiveOS (使用Mint)
layout: post
css: [ post , code ]
tags: [ linux , liveos]
---

### 自訂 LiveOS
因為筆電上裝了 Win8.1 不想動他只好生個隨身碟裝 LiveOS 在有需要的時候可以用一下


***

1.  請先把想要的 Linux 映像檔抓回來，並且解封裝下載回來的 iso

2. 安裝必須套件 squashfs-tools genisoimage  # 處理 liveOS 的檔案系統封裝和製作映像檔的工具

3. 使用剛剛下載的工具解封裝 iso 裏面的 `/casper/filesystem.squashfs`

3. 複製 /etc/resolv.conf 如果你待會兒想要在自訂過程使用網路的話

4. 每次 chroot 時要照個這個順序處理 退出來反之

```bash
sudo mount --bind /dev/ edit/dev
sudo chroot edit
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devpts none /dev/pts
```

5. 為了迴避語系問題以及方便後續處理

```bash
export HOME=/root
export LC_ALL=C
```

6. 接下來就 chroot 進去裏面自訂
    基本上在一般的 ubuntu 指令介面可以做的事幾乎都可以弄
    只是要注意不要動到 mount 進來的部份
    附帶一提 所有操作盡可能保持乾淨

7. 自訂完之後的善後

```bash
'aptitude clean' or 'apt-get clean'
rm -rf ~/.bash_history /tmp/*
```

8. 退出 chroot # 步驟 4 反過來做

9. 重新包裝



***

[參考資訊](https://help.ubuntu.com/community/LiveCDCustomization)
