---
layout: doc
---

# 更新日志

## 路线计划

- 主窗口关闭时保存最后的大小位置，下次打开时恢复；
- 扩展对象 hotkey 优化，着重跨平台兼容性，尽量不需要特权；
- 开发者使用的小应用独立编译打包功能；
- 编译器优化升级；
- 跨操作系统；
- 默认小应用的优化与完善；
- 菜单与各种常用窗口；
- 远程升级与安装；
- MacOS 下载
- 各种事件的自定义脚本支持；

🚀 新增与优化

🐞 修补与更正

🔧 JS扩展模块

## 25.5.20.176

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.5.20.176)

🚀 新增与优化

- 调整主窗口 `closed` 事件处理；

🐞 修补与更正

- Linux、MacOS 下窗口图标的设置；

🔧 JS扩展模块

- appchip:
    - 修改 `getDirAppchip`，`getDirTemp`，`getDirData`，`getDirWebview`，允许指定小应用（默认为当前小应用）；
    - 新增 `installFromUrl`，从网址安装小应用；
    - 新增 `installFromZip`，从文件安装小应用；
    - 新增 `uninstall`，卸载指定小应用；
    - 删除原 `list` `list2`；
    - 新增 `list`，返回小应用的简要信息对象；
- autostart:
    - 修改 `enable` `disable` `isEnable`，允许指定小应用（默认为当前小应用）；
- core:
    - 新增 `error`，直接抛出错误；
    - 新增 `about`，打开窗口，显示关于信息；
    - 优化 `getArgv`，简化代码逻辑；
- env:
    - 删除 `list`；
- mainwin:
    - 新增 `reload`，重新装载浏览器窗口当前网址；
- memdb:
    - 新增 `load` `dump`，便于进行数据的装载和导出；

## 25.4.15.174

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.4.15.174)

🚀 新增与优化

- 新增扩展对象 fsys 模块，提供文件系统操作；
- 新增扩展对象 properties 模块，提供简单的数据属性存取功能；
- 新增扩展对象 python 模块，提供 python 支持；
- 优化调整内置 HttpServer：
    - 重构部分代码，优化执行效率和逻辑；
    - 增加默认文档功能，搜索顺序为 `index.html`，`index.htm`；
    - 不再使用 SSL，降低资源消耗；
    - 调整 Server 标识为 pyChariot 版本号；
    - 对 user-agent 进行了限制（pyChariotKit 不受影响）；

🐞 修补与更正

- 修正 appchip.json 中 url 处理，其可能导致无服务器模式下（`file://`）小应用装载失败；

🔧 JS扩展模块

- mainwin:
    - 新增 `getStatus`，获得主窗口的简要信息；
- appchip:
    - 新增 `list2`，返回小应用的简要信息对象；
    - 修改 `list`，忽略以 `.` 开头的对象；
    - 修改 `runWait`，指定编码为 utf-8，修复 gbk 解码缺陷；
- env:
    - 新增 `items` `keys` `values`，提供更为统一的接口；
    - 废弃 `list`，将在后继版本中删除；
- device:
    - 修正 `device.getCPUFfreq()`，应为 `device.getCPUFreq()`；

## 25.4.1.167

*2025/03/26*

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.3.5.100)

🚀 新增与优化

- 新增扩展对象 mainwin 模块，提供主窗口操作；
- 新增扩展对象 hotkey 模块，提供系统热键支持；
- 调整 Windows amd64 下载（调整结构，恢复多文件方式）；
- 新增 Linux amd64 下载；
- 重构代码，调整和优化代码结构，降低运行开销；
- 默认小应用 `default` 微调：现在可以列出所有已安装的小应用了；
- 重写了底层构建工具；

🐞 修补与更正

- 调整目录结构，对可能带来的困扰深表歉意：
    - 新增目录 `pyChariot.files`，
    - 将 `wvdata`、`data`、`temp` 等目录移动到该目录下；
- 取消文件方式定义的系统热键，转为扩展对象 hotkey；
- utf-8 多字节文本的兼容性；
- 修正 `device.getSensorsBattery()` （未能正确返回数据对象）；

## 25.3.5.100

*2025/03/05*

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.3.5.100)

🚀 新增与优化

- 新增扩展对象 clipboard 模块，提供剪贴板操作；
- 新增扩展对象 device 模块，提供设备信息；
- 新增扩展对象 dialog 模块，提供对话框操作；
- 新增扩展对象 env 模块，提供环境变量操作；
- 新增扩展对象 memdb 模块，提供开箱即用的简单内存数据库；
- 新增扩展对象 process 模块，提供系统进程操作；
- 扩展对象的 core 模块新增 getArgv；
- 应用退出运行后，删除其临时目录中的所有文件（不保证一定被删除）；
- 允许通过环境变量 `PYCHARIOT_ADDITIONAL_BROWSER_ARGUMENTS` 向 Edge 传递更多参数；
- 新增主窗口自定义注入脚本，当主窗口装载完成后执行自定义代码；
- 增加系统级热键功能，当按下热键时，在主窗口执行自定义代码；
- 优化运行方式的判断逻辑；

🐞 修补与更正

- pyChariot 不再打开终端窗口；
- 本版只提供单可执行文件的下载；

## 25.3.1.83

*2025/03/01*

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.3.1.83)

pyChariot 的第一个初始版本。

以 WebApp 技术为基础生成桌面应用做小工具，已经有段很长的时间了。之前偷懒，都是将代码复制粘贴完事。
为了方便后期复用，趁着最近有空，将前期的代码整理和抽象了一下，做了这个基础版本。

初始版本确定了基础的架构和模式，仅提供 core 模块（仅包括 noop, exit）。


[//]: # (⚡🚀🐞)
