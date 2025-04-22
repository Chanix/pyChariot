---
layout: doc
---

# pyChariot.api.appchip <Badge type="tip" text="Since 25.3.5.1" />

小应用管理，运行于 pyChariot 之上小应用的管理与操作

## getDirAppchip(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirAppchip}

获取指定小应用的程序目录

| 参数         | 类型     | 说明             |
|:-----------|:-------|:---------------|
| appchip_id | string | 小应用标识，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirAppchip();
```

## getDirTemp(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirTemp}

获取指定小应用的临时目录

| 参数         | 类型     | 说明             |
|:-----------|:-------|:---------------|
| appchip_id | string | 小应用标识，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirTemp();
```

## getDirData(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirData}

获取指定小应用的数据目录

| 参数         | 类型     | 说明             |
|:-----------|:-------|:---------------|
| appchip_id | string | 小应用标识，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirData();
```

## getDirWebview(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirWebview}

获取指定小应用的浏览器控件的数据目录

| 参数         | 类型     | 说明             |
|:-----------|:-------|:---------------|
| appchip_id | string | 小应用标识，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirWebview();
```

## list() <Badge type="tip" text="Since 25.3.5.1" /> {#list}

::: warning 已废弃，将在后继版本中删除。
:::

获取所有小应用的名称列表

| 返回值          | 说明 |
|:-------------|:---|
| list[string] |    |

```javascript
await __A.appchip.list();
```

## list2() <Badge type="tip" text="Since 25.4.2.1" /> {#list2}

获取所有小应用的详细信息

| 返回值    | 说明 |
|:-------|:---|
| object |    |

返回的对方包含以小应用标识为名称的属性，属性的值为对应小应用的详细信息。

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

## installFromUrl(url) <Badge type="tip" text="Since 25.4.15.1" /> {#installFromUrl}

从指定的网址下载安装小应用

| 参数  | 类型     | 说明      |
|:----|:-------|:--------|
| url | string | 小应用安装网址 |   

```javascript
await __A.appchip.installFromUrl('http://localhost/calc.zip');
```

## uninstall(appchip_id, purge) <Badge type="tip" text="Since 25.4.15.1" /> {#uninstall}

卸载指定的小应用，如果 purge 为 false，仅删除程序包，保留相关数据文件。

| 参数    | 类型     | 说明              |
|:------|:-------|:----------------|
| url   | string | 小应用安装网址         |   
| purge | bool   | 是否完全删除，默认为 true |   

```javascript
await __A.appchip.uninstall('calc');
```
