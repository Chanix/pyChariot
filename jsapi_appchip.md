---
layout: doc
---

# pyChariot.api.appchip

小应用管理，运行于 pyChariot 之上小应用的管理与操作

## getDirTemp() <Badge type="tip" text="Since 25.3.5.1" /> {#getDirTemp}

获取当前运行小应用的临时目录

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirTemp();
```

## getDirData() <Badge type="tip" text="Since 25.3.5.1" /> {#getDirData}

获取当前运行小应用的数据目录

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirData();
```

## getDirWebview() <Badge type="tip" text="Since 25.3.5.1" /> {#getDirWebview}

获取当前运行小应用的浏览器控件的数据目录

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirWebview();
```

## list() <Badge type="tip" text="Since 25.3.5.1" /> {#list}

获取所有小应用的名称

| 返回值          | 说明 |
|:-------------|:---|
| list[string] |    |

```javascript
await __A.appchip.list();
```

## run(id, params) <Badge type="tip" text="Since 25.3.5.1" /> {#run}

运行指定的小应用

| 参数     | 类型     | 说明         |
|:-------|:-------|:-----------|
| id     | string | 小应用标识      |   
| params | string | 命令行参数，可忽略。 |   

| 返回值 | 说明  |
|:----|:----|
| int | 进程号 |

```javascript
await __A.appchip.run('calc');
```

## runWait(id, params) <Badge type="tip" text="Since 25.3.5.1" /> {#runWait}

运行指定的可执行文件，并等待其运行完毕。<br />运行完毕后，返回运行结果信息。

| 参数     | 类型     | 说明         |
|:-------|:-------|:-----------|
| id     | string | 小应用标识      |   
| params | string | 命令行参数，可忽略。 |   

| 返回值    | 说明 |
|:-------|:---|
| object |    |

返回对象，描述进程的运行情况，包括以下属性：

- retcode: 进程返回值；
- stdout: 标准输出；
- stderr: 标准错误；

```javascript
await __A.appchip.runWait('calc');
```
