---
layout: doc
---

# pyChariot.api.appchip <Badge type="tip" text="Since 25.3.5.1" />

小应用管理，运行于 pyChariot 之上小应用的管理与操作。

## exist(appchip_id) <Badge type="tip" text="Since 25.5.1.1" /> {#exist}

返回指定的小应用是否存在

| 参数         | 类型     | 说明    |
|:-----------|:-------|:------|
| appchip_id | string | 小应用标识 |   

| 返回值  | 说明 |
|:-----|:---|
| bool |    |

```javascript
await __A.appchip.exist('default');
```

## getDirAppchip(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirAppchip}

获取指定小应用的程序目录（仅按规范返回结果，不检查指定小应用是否存在）

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirAppchip();
```

## getDirData(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirData}

获取指定小应用的数据目录（仅按规范返回结果，不检查指定小应用是否存在）

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirData();
```

## getDirTemp(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirTemp}

获取指定小应用的临时目录（仅按规范返回结果，不检查指定小应用是否存在）

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirTemp();
```

## getDirWebview(appchip_id) <Badge type="tip" text="Since 25.3.5.1" /> {#getDirWebview}

获取指定小应用的浏览器控件的数据目录（仅按规范返回结果，不检查指定小应用是否存在）

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.appchip.getDirWebview();
```

## list(no_default) <Badge type="tip" text="Since 25.5.1.1" /> {#listAsArray}

获取所有小应用的详细信息

| 参数         | 类型   | 说明                          |
|:-----------|:-----|:----------------------------|
| no_default | bool | 是否忽略默认小应用（default），默认为 true |   

| 返回值           | 说明 |
|:--------------|:---|
| Array[object] |    |

返回的数组按小应用标识进行排序，每个元素为一个小应用的详细信息。

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
await __A.appchip.run('default');
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
await __A.appchip.runWait('default');
```

## installFromUrl(url) <Badge type="tip" text="Since 25.5.1.1" /> {#installFromUrl}

从指定的网址下载安装小应用

| 参数  | 类型     | 说明      |
|:----|:-------|:--------|
| url | string | 小应用安装网址 |   

```javascript
await __A.appchip.installFromUrl('http://localhost/calc.zip');
```

## installFromZip(filepath) <Badge type="tip" text="Since 25.5.1.1" /> {#installFromZip}

从指定的网址下载安装小应用

| 参数       | 类型     | 说明         |
|:---------|:-------|:-----------|
| filepath | string | 小应用安装包文件路径 |   

```javascript
await __A.appchip.installFromZip('/download/calc.zip');
```

## uninstall(appchip_id, purge) <Badge type="tip" text="Since 25.5.1.1" /> {#uninstall}

卸载指定的小应用，如果 purge 为 false，仅删除程序包，保留相关数据文件。

| 参数    | 类型     | 说明              |
|:------|:-------|:----------------|
| url   | string | 小应用安装网址         |   
| purge | bool   | 是否完全删除，默认为 true |   

```javascript
await __A.appchip.uninstall('calc');
```
