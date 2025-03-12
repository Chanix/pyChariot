---
layout: doc
---

# DeepSeek

目的：封装 DeepSeek 网页版成为桌面版，方便使用。
由于个人习惯，我工作的时候喜欢将手放在键盘上，希望能够尽量减少手部移动范围。
因此我希望能通过快捷键完成常用的操作。

创建小应用目录
按照规范建立小应用的目录
创建小应用配置描述文件 appchip.json

试运行 OK，最简单的桌面版有了

然后通过 loaded 注入自定义脚本和css
```javascript
定义快捷键
定义自己喜欢的css
```

试运行，OK,有快捷键了

更进一步
可以考虑增加系统托盘（暂时不支持）

分发：
    将小应用打包发给朋友

最后完成的小应用示例源代码可以在 pyChariotExamples 库里找到。

# 准备开发环境

pyChariot 是个跨平台的绿色软件，无需安装即可使用。

# 准备开发环境
按下 Win+E 打开文件资源管理器，在 C 盘根目录下新建文件夹，命名为 pyChariot
打开 C:\pyChariot 文件夹，pyChariot.exe 和 pyChariotKit.exe 复制到这个文件夹下；
这样基本的开发环境就做好了， C:\pyChariot 即 pyChariot 主目录

鼠标双击 pyChariot.exe 或者 pyChariotKit.exe，应当能够正常运行。
此时会自动创建一些必须的目录，data temp wvdata
在 pyChariot 主目录内创建新的文件夹 appchips
该目录存储小应用的程序包

## 创建小应用
创建新的文件夹 DeepSeek
创建新的文件 appchip.json
找一个图标文件 appchip.ico
然后
