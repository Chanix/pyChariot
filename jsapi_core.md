---
layout: doc
---

# pyChariot.api.core
基础功能，对 pyChariot 最基本的管理与操作

## noop() <Badge type="tip" text="Since 25.3.1.1" /> {#null}

返回 null

```javascript
__A.core.noop();
```

单纯的返回 null，除了调用和通讯再无其他消耗。可作为通讯调试和性能测试的工具。

```javascript
var tsStart = new Date().getTime();
for (var i = 0; i < 100; i++) {
    await __A.core.noop();
}
console.log((new Date().getTime()) - tsStart);
```

## exit() <Badge type="tip" text="Since 25.3.1.1" /> {#exit}

退出运行，返回指定值。

| 参数      | 类型     | 说明            |
|:--------|:-------|:--------------|
| retcode | number | 返回值，可忽略，默认为 0 |   

```javascript
__A.core.exit();
```
```javascript
__A.core.exit(100);
```

## getArgv(para) <Badge type="tip" text="Since 25.3.5.1" /> {#getargv}

获取执行 pyChariot 时使用的命令行参数。

| 参数   | 类型     | 说明                         |
|:-----|:-------|:---------------------------|
| para | 忽略     | 返回所有的命令行参数；                |   
|      | number | 返回对应索引位置的命令行参数，若无则返回 null； |   
|      | string | 返回指定参数名对应的值，若无则返回 null；    |   

| 返回值           | 说明                      |
|:--------------|:------------------------|
| Array[string] | 字符串数组，其中的每个元素是对应的命令行参数值 |

```javascript
await __A.core.getArgv(); // 获取所有命令行参数
```
```javascript
await __A.core.getArgv(0); // 获取第 0 个命令行参数
```
```javascript
await __A.core.getArgv('appchip'); // 获取标志为 appchip 的命令行参数
```

