---
layout: doc
---

# JS 扩展对象概述

pyChariot 内置了扩展对象供 JavaScript 调用。因此，应用可以获得在浏览器中运行时无法获得的功能（例如读写本地文件，本地消息提醒）。

pyChariot 中所有的 JSAPI 皆考虑到跨平台，最大可能的保证在主流操作系统下行为一致。但由于操作系统的差异，某些功能存在差异或仅被限定的操作系统支持。

注意：所有 JSAPI 调用皆为异步调用模式，返回值皆为 Promise。
请使用异步编程（例如：callback, then, await, async...），
具体请参阅 [JavaScript 相关文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 。

## JS 调用与返回

pyChariot 会在浏览器组件窗口装载完成之后新增对象： `window.Chariot`，之后触发事件 `ChariotReady`。
该准备工作完成以后就可以在 JavaScript 中调用扩展对象功能。否则，即 `ChariotReady` 事件触发之前，将会出现错误，可以通过侦听事件来解决这个问题。

```javascript
window.addEventListener('ChariotReady', function () {
    alert('pyChariot 已就绪。');
})
```

为了方便使用，pyChariot 将扩展按功能分成了多个模块，公开于 `window.Chariot.api` 下。 通过 `window.Chariot.api.<模块名>.<函数名>` 这样的方式来进行调用。
所有扩展调用函数，返回值皆为 Promise，为了方便说明理解，文档中的返回值按普通方式来编写。

为了简化写法，方便偷懒，定义了一些预设变量：
```javascript
__C = window.Chariot
__A = window.Chariot.api
__T = window.Chariot.token
```
例如下面几个是等价的调用：

```javascript
window.Chariot.api.core.exit();
Chariot.api.core.exit();
__A.core.exit();
```




## 模块列表

| 模块名称 | 功能描述 |     Test Text      |
|:-----|:-----|:------------------:|
| core | 基础功能 | [点击查看](jsapi_core) |

[//]: # (| clipboard | 剪贴板  | [点击查看]&#40;jsapi_clipboard&#41; |)

[//]: # (| env       | 环境变量 |    [点击查看]&#40;jsapi_env&#41;    |)

[//]: # (| fsys      | 文件系统 |   [点击查看]&#40;jsapi_fsys&#41;    |)

[//]: # (| process   | 进程管理 |  [点击查看]&#40;jsapi_process&#41;  |)

[//]: # (| project   | 应用项目 |  [点击查看]&#40;jsapi_project&#41;  |)

[//]: # ()

[//]: # ([//]: # &#40;| mainwin   | 主窗口         |       [点击查看]&#40;404&#41;       |&#41;)

[//]: # (| memdb     | 内存数据库       |          点击查看           |)

[//]: # (| sqlite3   | sqlite3 数据库 |          点击查看           |)

## 增加与完善

Chariot 以宁缺毋滥的态度来增加 JSAPI，现有扩展已满足大多数常见应用场景。

如果没有您需要的模块，可以 [在这里提出需求](https://github.com/Chanix/pyChariot/issues) 。
我们将定期整理，判断是否增加，并整理出优先顺序逐步完善。

- 现有 API 缺陷的修复，优先级提高
- 需求量大，多人提出的，优先级提高
- 对项目有帮助的人员提出的，优先级提高
- 赞助者提出的，优先级提高

请原谅我们的时间和精力有限，所有的需求都会尽量排期实现，但无法保证一定会被实现或何时实现。
