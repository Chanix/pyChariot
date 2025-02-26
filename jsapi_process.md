---
layout: doc
---

# 进程管理 pyChariot.process

操作系统的进程管理与操作

## pyChariot.process.exec(bin_path, parameters) <Badge type="tip" text="Since 25.3.5.1" /> {#run}

运行指定的可执行文件

| 参数        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_path   | string | 可执行文件名     |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明      |
|:-------|:--------|
| number | 新实例的进程号 |

```javascript
await __A.process.exec('notepad');
```
```javascript
await __A.process.exec('notepad', '/aaa.txt');
```

## pyChariot.process.execwait(bin_path, parameters) <Badge type="tip" text="Since 25.3.5.1" /> {#runwait}

运行指定的可执行文件，并等待其运行完毕。<br />运行完毕后，返回运行结果信息。

| 参数        | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_path   | string | 可执行文件名     |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明                     |
|:-------|:-----------------------|
| object | 一个字典对象，其中：             |
|        | retcode (number) 进程返回值 |
|        | stdout (string) 标准输出   |
|        | stderr (string) 标准错误   |

```javascript
await __A.process.execwait('notepad');
```
```javascript
await __A.process.execwait('notepad', '/aaa.txt');
```

