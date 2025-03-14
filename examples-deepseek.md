---
layout: doc
---

# 小应用示例：DeepSeek

这是一个演示如何将 WebApp 快速封装为跨平台桌面应用的示例。

***阅读、操作并理解本示例后，您将具备将任何网址快速封装为跨平台桌面版的能力。***

*注：可以到 pyChariotExamples 中获得最新示例代码。*

小应用目的：

- 快速封装：将 DeepSeek 官方提供的网页版封装成为桌面版；
- 功能扩展：按个人习惯增加快捷键，方便操作；

## 准备环境

- 在 C 盘根目录下创建新文件夹 `pyChariot`；
- 下载 pyChariot 最新版本，并解压保存到该目录下；
- 在 `C:\pyChariot` 下新建文件夹 `pyChariot.files`;
- 在 `C:\pyChariot\pyChariot.files` 下新建文件夹 `appchips`;
- 运行 pyChariotKit.exe，确保运行正常，然后关闭主窗口退出；
- pyChariotKit.exe 运行的是默认小应用 `default`，并会创建新文件夹 `pyChariot.files`；

此时目录结构大致是这样的：

```text
    C:\pyChariot
        |   pyChariot.exe 
        |   pyChariotKit.exe
        |
        \---pyChariot.files
                +---temp
                +---data
                \---wvdata
```

## 快速封装

- 创建小应用程序包目录：
  <br>在 `C:\pyChariot\pyChariot.files\appchips` 下新建文件夹 `DeepSeek`；
- 创建小应用配置描述文件：
  <br>在 `C:\pyChariot\pyChariot.files\appchips\DeepSeek` 下创建文本文档 `appchip.json`，修改并保存内容如下：

```json
{
  "name": "DeepSeek",
  "version": "1.0.0",
  "description": "深度求索桌面版，一个演示将 WebApp 快速封装为跨平台桌面应用的示例小应用。",
  "url": "https://chat.deepseek.com/",
  "win_title": "深度求索",
  "win_width": 800,
  "win_height": 600,
  "win_min_width": 400,
  "win_min_height": 200
}
```

- 创建小应用图标：
  <br>打开浏览器访问地址（获取网站图标，将其作为小应用主窗口的图标）：

```text
https://www.deepseek.com/favicon.ico
```

鼠标右击图片，选择“图片另存为...”，将图片保存为 `C:\pyChariot\pyChariot.files\appchips\deepseek\appchip.ico`
此时目录结构大致是这样的：

```text
    C:\pyChariot
        |   pyChariot.exe 
        |   pyChariotKit.exe
        |
        \---pyChariot.files
                +---temp
                +---data
                +---wvdata
                \---appchips
                    \--- DeepSeek
                            appchip.ico
                            appchip.json
```

- 运行 `C:\pyChariot\pyChariotKit.exe`；

此时会打开默认的 `default` 小应用，列出了新创建的小应用 `DeepDSeek`。鼠标点击即可运行小应用 `DeepSeek`。

上手操作一下，是不是和正常使用浏览器的感觉一致。还可以和操作系统的浏览器同时 登录/退出登录，测试一下数据的独立性；

**到这里就完成了基本的快速封装。**

## 功能扩展
基本的封装完成以后，希望能跟进一步，根据习惯进行一些调整，例如我更喜欢键盘操作。
- 增加快捷键，方便操作；
- 增加一个快捷键的使用说明；

pyChariot 开放了一些事件自定义脚本执行，例如：
小应用运行时，会打开主窗口并加载指定的网址，当主窗口加载完成事件触发后执行自定义脚本 `mainwin_onloaded.js`。


可以在这个文件中，自定义脚本代码，扩展其功能：
- 在 deepseek 目录下创建新文件夹 js
- 在 js 目录中新建文本文档 `mainwin_on_loaded.js`，修改并保存内容如下：

```javascript
// 创建浮层
var modal = document.createElement('div');
modal.id = 'modal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

// 创建浮层内容
var modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fefefe';
modalContent.style.margin = '15% auto';
modalContent.style.padding = '20px';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '50%';

// 创建关闭按钮
var closeButton = document.createElement('span');
closeButton.innerHTML = '&times;';
closeButton.style.color = '#aaa';
closeButton.style.float = 'right';
closeButton.style.fontSize = '28px';
closeButton.style.fontWeight = 'bold';
closeButton.style.cursor = 'pointer';

closeButton.onclick = function() {
    modal.style.display = 'none';
};

// 创建表格
var table = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

var headerRow = document.createElement('tr');
['', '', ''].forEach(function(headerText) {
    var th = document.createElement('th');
    th.textContent = headerText;
    th.style.border = '1px solid #ddd';
    th.style.padding = '8px';
    th.style.textAlign = 'left';
    th.style.backgroundColor = '#f2f2f2';
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

var data = [
    ['Ctrl+Alt+B 切换左侧边栏', 'Ctrl+Alt+C 复制最后回答', 'Ctrl+Alt+H 切换使用帮助'],
    ['Ctrl+Alt+N 开启新的会话', 'Ctrl+Alt+D 切换“深度思考”', 'Ctrl+Alt+D 切换“联网搜索”']
];

data.forEach(function(rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function(cellData) {
        var td = document.createElement('td');
        td.textContent = cellData;
        td.style.border = '1px solid #ddd';
        td.style.padding = '8px';
        td.style.textAlign = 'left';
        row.appendChild(td);
    });
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

// 将表格和关闭按钮添加到浮层内容中
modalContent.appendChild(closeButton);
modalContent.appendChild(table);

// 将浮层内容添加到浮层中
modal.appendChild(modalContent);

// 将浮层添加到页面中
document.body.appendChild(modal);

// 监听键盘事件，实现小应用快捷键。
document.addEventListener(
    'keydown',
    function(event) {
        const isCTRL = event.ctrlKey || event.metaKey;
        if (isCTRL && event.altKey && event.key.toLowerCase() === 'b') {
            event.preventDefault();
            handleCtrlAltB();
        } else if (isCTRL && event.altKey && event.key.toLowerCase() === 'c') {
            event.preventDefault();
            handleCtrlAltC();
        } else if (isCTRL && event.altKey && event.key.toLowerCase() === 'd') {
            event.preventDefault();
            handleCtrlAltD();
        } else if (isCTRL && event.altKey && event.key.toLowerCase() === 'h') {
            event.preventDefault();
            handleCtrlAltH();
        } else if (isCTRL && event.altKey && event.key.toLowerCase() === 'n') {
            event.preventDefault();
            handleCtrlAltN();
        } else if (isCTRL && event.altKey && event.key.toLowerCase() === 's') {
            event.preventDefault();
            handleCtrlAltS();
        } else if (isCTRL && !event.altKey && event.key.toLowerCase() === 's') {
            event.preventDefault();
            handleCtrlS();
        }
    }
);

function findSpanByText(text) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: (node) => node.textContent.trim() === text ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }
  );
  return treeWalker.nextNode()?.parentElement;
}

// 复制当前会话中的最后一个答案到剪贴板（md 格式）
function handleCtrlAltC() {
    // 先找到最后一个 class 为 ds-flex 的 div
    const dsFlexElements = document.querySelectorAll('div.ds-flex');
    const lastDsFlexDiv = dsFlexElements.length > 0 ? dsFlexElements[dsFlexElements.length - 1] : null;

    // 如果存在该元素，继续查找其内部第一个 ds-icon-button 元素
    if (lastDsFlexDiv) {
        const firstIconButton = lastDsFlexDiv.querySelector('.ds-icon-button'); // 返回第一个匹配的子元素
        if (firstIconButton) { firstIconButton.click(); }
    }
}

// 切换左侧边栏显示
function handleCtrlAltB() {
    document.getElementsByClassName('ds-icon')[0].click();
}

// 显示帮助
function handleCtrlAltH() {
    // 切换浮层的显示状态
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}

// 开启新会话
function handleCtrlAltN() {
    let span = findSpanByText('开启新对话');
    if (!span) {
        span = findSpanByText('New chat');
    }

    if (span) {
        const div = span.closest('div');
        if (div) {
            div.click();
        }
    }
}

function handleCtrlS() {
    console.log('Ctrl+S pressed');
}

// 切换“深度思考”
function handleCtrlAltD() {
    document.getElementsByClassName('ds-button__icon')[0].parentElement.click()
}

// 切换“深度思考”
function handleCtrlAltS() {
    document.getElementsByClassName('ds-button__icon')[1].parentElement.click()
}

// 切换窗口状态（恢复，最小化）
async function hotkeyHandleCtrlAltZ() {
    console.log('Hotkey ctrl+alt+z pressed.');

    x = await __A.mainwin.getX();
    if (x == -32000) {
        __A.mainwin.restore();
    } else {
        __A.mainwin.minimize();
    }
}

__A.hotkey.set('ctrl+alt+z', 'hotkeyHandleCtrlAltZ();')

```
此时目录结构大致是这样的：
```text
C:.
|   pyChariotKit.exe
|
\---pyChariot.files
    \---appchips
        \---DeepSeek
            |   appchip.ico
            |   appchip.json
            |
            \---js
                mainwin_on_loaded.js
```
大功告成。运行测试一下。通过自定义脚本和JS扩展，可以达到更丰富的效果和功能，具体的取决于您的想象力。
