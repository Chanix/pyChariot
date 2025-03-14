---
layout: doc
---

# PYCHARIOT_HOME/pyChariot.files/appchips

运行于 pyChariot 上的 WebApp，称为小应用 `appchip`。
其所有程序包文件存放在目录 appchips 下，以小应用标识作为目录名称，结构如下：

```text
    appchip_id                          # 小应用程序包目录，目录名即小应用标识
        |   appchip.json                # 小应用的描述文件
        |   appchip.ico                 # 小应用的窗口图标（可选），Windows。
        |
        +---js                          # 小应用使用的 JavaScript 脚本文件目录
        |   inject.js                   # 小应用的自定义主窗口注入脚本。
        |   mainwin_on_{xxx}.js         # 主窗口事件自定义脚本
        |
        \---webroot                     # 小应用 httpd 使用的文件
                                        #   本地 httpd 服务器将以本目录作为 / 。
```

[//]: # (        |   \--- hotkeys                # 系统级热键脚本目录：)

[//]: # (        |           f1.js               #    热键 f1 对应的脚本；)

[//]: # (        |           ctrl+f1.js          #    热键 ctrl+f1 对应的脚本；)

[//]: # (        |           ... ...)

## ./appchip.json {#appchip.json}

小应用的描述配置文件：

| 项目                | 说明                            |
|:------------------|:------------------------------|
| name              | 名称，默认为小应用的标识（即目录名）            |
| version           | 版本号，建议使用 `d+.d+.d+.d+` 的格式    |
| description       | 描述                            |
| url               | 浏览器网址，若存在 html 则忽略            |
| html              | 浏览器 html 代码                   |
| win_title         | 窗口标题，默认为 \{name\} \{version\} |
| win_width         | 窗口宽度                          |
| win_height        | 窗口高度                          |
| win_min_width     | 窗口最小宽度                        |
| win_min_height    | 窗口最小高度                        |
| win_hidden        | 是否隐藏窗口                        |
| win_confirm_close | 关闭窗口时是否需要确认                   |
| win_on_top        | 窗口是否总是在前面                     |
| win_resizable     | 窗口可否改变大小                      |
| win_fullscreen    | 窗口是否全屏显示                      |
| text_select       | 是否可以选取窗口内的文本                  |

*pyChariot 的默认小应用为 `default`。*

## ./js{#js}

小应用 JavaScript 脚本存储目录。

## ./js/inject.js{#js.inject.js}

主窗口打开后执行该脚本文件，运行此脚本时，扩展功能模块和常用变量已就绪，可以正常使用；
除非您熟悉 pyChariot，否则不建议使用该脚本。
在使用之前，请先了解注入脚本顺序

## ./js/mainwin_on_\{xxx\}.js{#js.mainwin_on.js}

主窗口事件自定义脚本，事件触发时执行脚本。

| 脚本名称                 | 触发事件          |
|:---------------------|:--------------|
| mainwin_on_loaded.js | 主窗口页面装载完成后触发。 |

[//]: # (| mainwin_on_shown.js | |)

[//]: # (## ./js/hotkeys{#js.hotkeys})

[//]: # ()

[//]: # (hotkeys 目录下存放系统级热键定义，以热键的按键为文件名，当热键被按下时，在主窗口内执行其中的脚本代码；)

[//]: # (*嗯……本来想叫 “appclip”的，打错了……不过无论是 “薯片”还是 “芯片”，我都喜欢，就叫 `appchip` 吧 :&#41;*)
