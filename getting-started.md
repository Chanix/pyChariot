---
layout: doc
---

# 快速开始 {#getting-started}

pyChariot 是个跨平台的绿色软件，无需安装即可使用。

## 下载与安装

pyChariot 支持两种打包形式：***单文件方式*** 和 ***多文件方式***。

- 多文件方式是最常见的发布形式，所有的文件，包括可执行文件、支持库、资源文件等都在一个目录下。由于文件数量比较多，会显得有点杂乱。
- 单文件方式将运行需要的所有文件压缩打包进了单个的可执行文件，运行时会自动解压到系统临时文件夹，并运行对应的可执行文件。
  虽然多了一个解压的步骤，但在当前 CPU 和 SSD 的加持下，几乎无感。

单文件方式相对更为简洁，本手册将以单文件方式为主来介绍，多文件方式是类似的做法。

- [点这里下载对应版本](http://localhost:5173/pyChariot/changelog.html)，下载前请先确认 ***操作系统*** 和 ***硬件架构***
  ，确保下载了适用的版本。
  - 下载包中带有 onefile 字样的为单文件方式；
  - 对于使用 Intel 或 AMD 处理器芯片的的 Windows 来说，请下载 win-amd64 版；
  - ARM 架构通过转译可使用 amd64 架构的版本（需操作系统支持）；

- 下载完成后将文件解压到您希望存放的地方（例如 `C:\pyChariot`）即可。
  *存放的文件夹名称请使用 ANSI 字符（英文字母+数字），以免带来不必要的问题。*

::: code-group

```powershell [Windows]
md C:\pyChariot
cd C:\pyChariot
move C:\download\pyChariot<version>.exe pyChariot.exe
move C:\download\pyChariotKit<version>.exe pyChariotKit.exe
```

```sh [Linux]
mkdir ~/pyChariot
cd ~/pyChariot
tar -xvfz pyChariot.tgz .
```

:::

## 开发与调试

pyChariot 共有两个可执行文件：Chariot.exe 和 ChariotKit.exe 。

| 名称               | 说明                     |
|------------------|------------------------|
| pyChariot.exe    | 运行环境，供生产环境使用，需分发给最终用户。 |
| pyChariotKit.exe | 开发环境，供开发调试使用，具调试工具。    |

鼠标双击 .exe 即可运行，最低支持 Win7，建议 Win10 及更高。
注：运行后将自动创建相关文件和目录结构，点击查看详细的 [文件与目录结构](dirs-and-files) 说明 。

pyChariot.exe 和 pyChariotKit.exe 提供同样的功能，差别在于 pyChariotKit.exe 还内置了一些开发调试工具，同时在运行中会打开终端窗口和浏览器组件调试窗口。
一般来说，先用 pyChariotKit 开发和调试，然后通过 pyChariot 确认，最后进行分发。

应用的开发支持主流的前端开发框架，例如：React、Vue、Angular、JQuery ...
应用和 WebApp 的开发调试并无太大差异。具体请参阅对应开发框架的相关文档。

开发和调试中请使用 pyChariotKit。

pyChariotKit 包含了一些基础的调试功能，其运行时：
- 打开终端窗口显示运行日志、错误信息等底层代码信息，关闭终端窗口即可关闭整个程序；
- 在独立窗口中打开浏览器组件的开发者工具（DevTools），可通过 F12 等快捷键进行切换；
- 在主窗口点击右键，会打开上下文关联菜单；

pyChariot 的小应用运行于系统浏览器控件之上，支持前端开发框架，可按 WebApp 同样的方式来进行调试。
其中最常用的就是开发者工具（DevTools），也可以使用您惯用的其他工具。
若需进一步自动化调试流程，建议结合浏览器开发工具的自定义配置或专用测试工具（如 Puppeteer、Selenium）。

调试完成后，可以用 pyChariot 进行最后的测试，pyChariot 不会打开终端和开发者工具窗口，同时屏蔽右键上下文关联菜单。

更多使用开发者工具（DevTools）进行调试的方法和技巧，请参阅 [DevTools](https://developer.chrome.com/docs/devtools?hl=zh-cn)。

在使用 edgechromium 时可以启用远程调试，编写 Playwright 测试，更多请参阅 [Playwright](https://playwright.dev/)。


## 分发给最终用户

将必须的文件和目录分发给最终用户即可，即：

1. pyChariot.exe；
2. appchips 目录，其中包含您的应用子文件夹；
3. 其他项目需要的文件和目录；

简单的将上述文件分发给最终用户，然后让最终用户双击 pyChariot.exe 即可。

更进一步，可以考虑用安装制作工具（例如 NSIS）提供可安装版本。

