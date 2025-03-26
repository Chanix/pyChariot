---
layout: doc
---

# pyChariot.api.hotkey

全局热键，提供全局热键功能。

全局热键是指在操作系统中，无论当前焦点在哪个应用程序或窗口，按下特定组合键时都能触发相应操作的功能。

已知限制：
- 在Linux下媒体键可能没有名字(只有扫描码)或者根本就没有。
- 阻止继续派发事件功能只在 Windows 上可用。
- 为了避免依赖X，Linux 下需要读取原始设备文件 `/dev/input/input*`，需要 root 才能使用。
- 其他的应用程序（如游戏），可能屏蔽热键，导致无法触发事件。


## set(key_name, key_js, suppress, timeout, trigger_on_release) <Badge type="tip" text="Since 25.4.1.1" /> {#set}

设置热键

| 参数                 | 类型      | 说明                     |
|:-------------------|:--------|:-----------------------|
| key_name           | string  | 热键键名                   |
| key_js             | string  | JavaScript 代码，默认为 null |
| suppress           | boolean | 是否阻止继续派发事件，默认为 true    |
| timeout            | int     | 按键间允许的间隔，默认为 1         |
| trigger_on_release | boolean | 触发时机，默认为 false         |

设置一个全局热键，触发时在主窗口执行指定的 JavaScript 代码。
<br>热键键名格式为 `ctrl+shift+a, s`，即：用户同时按住 `ctrl` 、 `shift` 和 `a`，释放，然后按 `s` 时触发。
<br>要表示逗号，加号和空格，请使用它们的名称，即 `comma`、`plus`、`space`。
<br>键名也可以用键盘扫描码，例如空格键为 57.

JavaScript 代码会在主窗口中异步执行，如果为 null，则等价于删除热键（即 unset）。

suppress 决定是否阻止按键事件发送到其他程序：

- 例 1：true，注册 `ctrl+c`，按下时执行代码，然后结束（不再执行原已定义的“复制”）。
- 例 2：false，注册 `ctrl+c`，按下时执行代码，然后继续派发事件（继续执行原先定义的“复制”）。

timeout 决定按键之间允许的间隔，单位为秒。

trigger_on_release 决定触发执行时机，默认为 false。
默认情况下，热键在按下最后一个键时触发执行脚本。
如果设置为 True，则需要等待到热键按下，然后松开释放的时候，才触发执行脚本。



```javascript
await __A.hotkey.set('ctrl+al+t', 'console.log("Hotkey ctrl+alt+t pressed.")');
```

## unset(name) <Badge type="tip" text="Since 25.4.1.1" /> {#unset}

删除热键


| 参数                 | 类型      | 说明                  |
|:-------------------|:--------|:--------------------|
| key_name           | string  | 热键键名                |


```javascript
await __A.hotkey.unset('ctrl+al+t');
```

## list() <Badge type="tip" text="Since 25.4.1.1" /> {#list}

获取所有热键定义

|  返回值   | 说明              |
|:------:|:----------------|
| object | 一个包含 键名，代码 对的字典 |

```javascript
await __A.hotkey.list();
```

## clear() <Badge type="tip" text="Since 25.4.1.1" /> {#clear}

清空热键

```javascript
await __A.hotkey.clear();
```