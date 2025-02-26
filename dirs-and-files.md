---
layout: doc
---

# 文件目录结构

pyChariot 被设计为方便迁移的绿色软件，所有运行需要的文件都保存于 `pyChariot 主目录` 之下。

由于这样的设计，迁移、删除或者复制您的 pyChariot 环境，只需对此目录进行文件操作即可：

- 使用时，可以保存在移动存储设备（例如移动硬盘）上，即插即用;
- 复制时，完整复制目录即可，与原环境完全一致;
- 删除时，删除目录即可，不留任何垃圾。

## pyChariot_HOME
一般来说，pyChariot 可执行文件的保存位置，即为
`pyChariot 主目录`，即 `pyChariot_HOME`。

以 Windows 为例：pyChariot 可执行文件解压保存在 `D:\pyChariot` 下，则 `pyChariot_HOME` 的值为 `D:\pyChariot`
，则所有运行需要的文件都保存在这个目录之下。

```text
    pyChariot_HOME              # D:\pyChariot
        |   pyChariot.exe       # 文件：可执行文件，运行环境
        |   pyChariotKit.exe    # 文件：可执行文件，开发调试环境
        +---packages            # 目录：外部工具目录
        |
        +---temp                # 目录：临时文件目录
        |
        +---data                # 目录：应用数据目录
        |
        +---wvdata              # 目录：浏览器组件数据目录
        |
        \---appchips            # 目录：应用目录
```

在这些目录下，再按照应用标识建立子目录，存放相应文件。

例如，有个项目，项目标识为 `{appchip_id}`，则：

- 应用的程序文件目录：      `pyChariot_HOME/appchips/{appchip_id}`；
- 应用的临时文件目录：      `pyChariot_HOME/temp/{appchip_id}`；
- 应用的数据文件目录：      `pyChariot_HOME/data/{appchip_id}`；
- 应用的浏览器组件数据目录： `pyChariot_HOME/data/{appchip_id}`；

这样约定的是目的是为了更便捷和统一的管理应用的各种文件。使用中，请按照这个约定来存储对应的文件。

## pyChariot_HOME/appchips

所有应用都存放在 appchips 下，以应用标识作为其存放目录名称，其结构如下：

```text
    appchip_id                  # 目录名即应用的标识，请尽量使用英语字符。
        |   app.json            # 应用的描述文件
        |                       #   详细记录了应用的相关信息，必须存在。
        |                       #   当 pyChariot 启动项目时会读取该文件。
        |
        |   app.ico             # Windows 操作系统下，应用的窗口图标（可选）。
        |
        +---js                  # 应用中使用的一些本地 JavaScript。
        |
        |
        \---webroot             # 应用 httpd 使用的文件
                                #   本地 httpd 服务器将以本目录作为 / 。
```

*<br />运行于 pyChariot 上的应用，称为 `appchip`。嗯……本来想叫 “appclip”的，打错了……不过无论是 “薯片”还是 “芯片”，我都喜欢，就叫 `appchip` 吧 :)*

## pyChariot_HOME/wvdata
浏览器组件数据存放目录。

浏览器组件数据和系统浏览器数据是隔离的，因此应用的数据不会和系统浏览器中的数据相互影响（例如登录数据，Cookie数据）。
这样可以尽最大可能的保证独立性。

因此，应用第一次运行时会略微慢一些（需要重新生成和保存这些数据）。同样基于此，不建议将 pyChariot 保存在劣质 U 盘中，因其读写可靠性甚至差于移动机械硬盘。