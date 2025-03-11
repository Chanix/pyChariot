---
layout: doc
---

# 热键 / 快捷键 {#hotkey}

热键，又称为快捷键、快速键、或组合键，指通过某些特定的按键、按键顺序或按键组合来完成一个操作。
很多快捷键往往与辅助键，例如 `Ctrl`、`Shift`、`Alt`、`Fn`、`Cmd` 等配合使用。
热键的有效范围不一定相同：
- 系统级快捷键可以全局响应，不论当前焦点在哪里、运行什么程序，按下时都能起作用；
- 小应用级热键只能在主窗口内起作用，当小应用不活动时，热键无效；

## 系统级热键{#system_hotkey}
pyChariot 支持系统级的全局热键，应用内的热键定义需要通过 JavaScript 脚本在小应用内实现。

当pyChariot装载小应用时，将读取约定的脚本文件，待主窗口装载完成后，创建热键定义。
例如 f1.js，则当 F1 被按下时，在主窗口执行 F1.JS 中的脚本。

如果不生效，请检查是否和系统原有的热键定义冲突了。

## 小应用级热键{#appchip_hotkey}

小应用层面的热键需要在小应用的js文件中定义；

例如下面这个例子，用原生代码实现了 `Ctrl+N`：

```javascript
document.addEventListener('keydown', function(event) {
    // 检查是否按下了 Ctrl 键
    // 在 Windows 和 Linux 上通常是 17，在 Mac 上是 91
    // 但 Mac 使用 Cmd 键代替 Ctrl 键
    var isCtrl = event.ctrlKey || event.metaKey; // metaKey用于检测Mac的Cmd键

    // 检查是否按下了N键（键码是78）
    if (isCtrl && event.keyCode === 78) {
        // 阻止默认行为（尽管对于Ctrl+N这样的组合，浏览器可能不会执行默认行为）
        event.preventDefault();

        // 执行你的自定义函数
        customFunction();
    }
});

function customFunction() {
    // 在这里定义你想要执行的操作
    console.log('Ctrl+N 被按下！');
}
```
也可以使用 HotKeys js-hotkey 等 js 库。

提醒：不要忘记扩展对象都是异步的，因此如果需要 await 返回，那么要使用异步方式，例如：
```javascript
(async () => {
  x = await __A.mainwin.getX();
    if (x < 0) {
        __A.mainwin.restore();
    } else {
        __A.mainwin.minimize();
    }
})();
```
