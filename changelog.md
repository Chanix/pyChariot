---
layout: doc
---

# 更新日志

## 25.3.5.XX
*2025/03/05*

🚀 功能与优化
- 扩展对象增加 clipboard 模块，提供剪贴板操作；
- 扩展对象增加 device 模块，提供设备信息；
- 扩展对象增加 env 模块，提供环境变量操作；
- 扩展对象增加 memdb 模块，提供开箱即用的简单内存数据库；
- 扩展对象增加 process 模块，提供系统进程操作；
- 扩展对象的 core 模块新增 getArgv；
- 应用退出运行后，删除其临时目录中的所有文件（不保证一定被删除）；
- 通过环境变量 `PYCHARIOT_ADDITIONAL_BROWSER_ARGUMENTS` 向 Edge 传递更多参数； 

🐞修补与更正
- pyChariot 不再打开终端窗口；

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.3.5.83)

## 25.3.1.83
*2025/03/01*

pyChariot 的第一个初始版本。

以 WebApp 技术为基础生成桌面应用做小工具，已经有段很长的时间了。之前偷懒，都是将代码复制粘贴完事。
为了方便后期复用，趁着最近有空，将前期的代码整理和抽象了一下，做了这个基础版本。

初始版本确定了基础的架构和模式，仅提供 core 模块（仅包括 noop, exit）。

[GitHub 下载](https://github.com/Chanix/pyChariot/releases/tag/v25.3.1.83)


⚡🚀🐞
