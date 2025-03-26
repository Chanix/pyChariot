---
layout: doc
---

# 快速开始 {#getting-started}

pyChariot 是个跨平台的绿色软件，无需安装即可使用。

一般来说，小应用的开发需要以下几个阶段：

1. 下载与安装；
2. 开发调试；
3. 分发至用户；

## 下载与安装

[点这里下载对应版本](/changelog)

pyChariot 支持两种打包形式：***单文件方式*** 和 ***多文件方式***。

- 多文件方式是最常见的发布形式，所有的文件，包括可执行文件、支持库、资源文件等都在一个目录下，文件数量较多。
- 单文件方式将所有文件压缩打包进单个的可执行文件，运行时先解压到系统临时文件夹，然后再运行对应的可执行文件。
  虽然多了一个解压的步骤，但在当前 CPU 和 SSD 的加持下，几乎无感。

单文件方式相对更为简洁，本手册将以单文件方式为主来介绍，多文件方式是类似的做法。

- 下载前请先确认 ***操作系统*** 和 ***硬件架构***
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

## 环境依赖

pyChariot 已经考虑到了环境依赖，理论上无需配置环境即可独立运行。

<br>如果运行出现问题，您可以在这里对照自己的环境，查看是否满足运行环境依赖。
<br>同时也请您通知我们，这让我们有可能做得更好。

### Windows

Windows 10 以上操作系统系统内置，Windows 7 需要检查以下组件：

- .NET 环境 4.0 以上
- WebView2 运行时

详情请参阅： [分发应用和 WebView2 运行时](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/concepts/distribution?tabs=dotnetcsharp)。

### Linux

Linux 操作系统需内置了 WebKit2 2.22 或以上版本的 GTK，您可能需要新安装对应的软件包：
<br>*Linux各发行版使用多种系统包管理工具，具体请参阅相关文档。*
::: code-group

```shell [apt:Ubuntu/Deepin/Debian...]
sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-webkit2-4.1
```

```shell [pacman:Arch...]
sudo pacman -S python-gobject gtk4
```

```shell [dnf:Fedora...]
sudo dnf install python3-gobject gtk4
```

```shell [zypper:openSUSE...]
sudo zypper install python3-gobject python3-gobject-Gdk typelib-1_0-Gtk-4_0 libgtk-4-1
```

:::

## 开发与调试

pyChariot 共有两个可执行文件，以 Windows 为例：

| 名称               | 说明                       |
|------------------|--------------------------|
| pyChariot.exe    | 运行环境，供生产环境使用，需分发给最终用户。   |
| pyChariotKit.exe | 开发环境，供开发调试使用，具调试工具，无需分发。 |

两者功能特性一致，pyChariotKit 增加了一些调试工具：

- 会打开终端窗口显示运行日志、错误信息等底层调试信息；
- 会在独立窗口中打开浏览器开发者工具（DevTools）；
- 在小应用主窗口点击右键，会打开上下文关联菜单；

***pyChariotKit = pyChariot + 调试工具***

pyChariot 的小应用运行于系统浏览器控件之上，本质上就是个 WebApp，支持所有前端开发框架，以同样的方式开发调试即可。

开发时请按照约定存储文件，请参阅 [文件与目录结构](dirs-and-files)。

开发调试时最常用的就是开发者工具（DevTools），也可以使用您惯用的其他工具。
<br>若需进一步自动化调试流程，建议结合浏览器开发工具的自定义配置或专用测试工具（如 Puppeteer、Selenium）。

更多使用开发者工具（DevTools）进行调试的方法和技巧，请参阅 [DevTools](https://developer.chrome.com/docs/devtools?hl=zh-cn)。

在使用 edgechromium 时可以启用远程调试，编写 Playwright 测试，更多请参阅 [Playwright](https://playwright.dev/)。

## 分发至用户

将必须的文件和目录分发给最终用户即可，即：

1. pyChariot.exe；
2. appchips 目录，其中包含您的应用子文件夹；
3. 其他项目需要的文件和目录；

简单的将上述文件（文件夹）分发给最终用户，然后让最终用户运行 pyChariot 即可。

运行时会打开默认小应用 `default`，显示所有已安装小应用，用户点选运行即可。

如果希望指定默认运行的小应用，可以：

- 将指定的小应用改名为 `default`；
- 指定命令行参数 `--appchip` ；

## 独立应用

上面的分发方式已足够满足日常需求，尤其在最终用户已经拥有 pyChariot 的基础上，日常分发和修改只需要分发小应用即可。

但在某些情况下，最终用户可能需要独立的应用程序包，这需要额外的定制裁剪和编译工作，可以联系作者完成。

更进一步，可以将已编译的程序通过 NSIS 等工具生成软件安装包。


