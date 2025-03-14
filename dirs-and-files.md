---
layout: doc
---

# 文件目录结构

pyChariot 被设计为方便迁移的绿色软件，所有文件皆保存于 `pyChariot 主目录` 之下。

- 可执行文件所在目录，即为 `pyChariot 主目录`，简称：`PYCHARIOT_HOME`；
- 运行后，会在主目录内创建新目录 `pyChariot.files` （如果不存在的话）；

<br>由于这样的设计，迁移、删除或者复制您的 pyChariot 环境，只需对主目录进行文件操作即可：

- 使用时，可以保存在移动存储设备上，随身携带，即插即用;
- 复制时，完整复制目录即可，与原环境完全一致;
- 删除时，删除目录即可，不留任何垃圾。

<br>以 Windows 为例，可执行文件解压保存在 `C:\pyChariot` 下：

```text
    PYCHARIOT_HOME                      # C:\pyChariot
        |   pyChariot.exe               # 文件：可执行文件，运行环境
        |   pyChariotKit.exe            # 文件：可执行文件，开发调试环境
        |
        \---pyChariot.files             # C:\pyChariot\pyChariot.files
                |
                +---temp                # 目录：临时文件目录
                |
                +---data                # 目录：应用数据目录
                |
                +---wvdata              # 目录：浏览器组件数据目录
                |
                \---appchips            # 目录：小应用包目录
```

然后，再按小应用的标识建立子目录，存放相应文件。
<br>例如，有个小应用，标识为 `{appchip_id}`，则：

- 小应用的应用包文件目录：      `PYCHARIOT_HOME/pyChariot.files/appchips/{appchip_id}`；
- 小应用的临时文件目录：      `PYCHARIOT_HOME/pyChariot.files/temp/{appchip_id}`；
- 小应用的数据文件目录：      `PYCHARIOT_HOME/pyChariot.files/data/{appchip_id}`；
- 小应用的浏览器组件数据目录： `PYCHARIOT_HOME/pyChariot.files/data/{appchip_id}`；

<br>这样约定的目的是为了更便捷统一的管理各种文件，请按此约定来分类存储对应的文件。

