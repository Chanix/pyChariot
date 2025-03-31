---
layout: doc
---

# pyChariot.api.process <Badge type="tip" text="Since 25.3.5.1" />

进程管理，操作系统的进程管理与操作

## execute(bin_path, parameters) <Badge type="tip" text="Since 25.3.5.1" /> {#execute}

运行指定的可执行文件

| 参数         | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_path   | string | 执行文件名      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值 | 说明  |
|:----|:----|
| int | 进程号 |

```javascript
await __A.process.execute('notepad');
```

```javascript
await __A.process.execute('notepad', '/aaa.txt');
```

## executeWait(bin_path, parameters) <Badge type="tip" text="Since 25.3.5.1" /> {#executeWait}

运行指定的可执行文件，并等待其运行完毕。<br />运行完毕后，返回运行结果信息。

| 参数         | 类型     | 说明         |
|:-----------|:-------|:-----------|
| bin_path   | string | 执行文件名      |   
| parameters | string | 命令行参数，可忽略。 |   

| 返回值    | 说明                     |
|:-------|:-----------------------|
| object | 一个字典对象，其中：             |
|        | retcode (number) 进程返回值 |
|        | stdout (string) 标准输出   |
|        | stderr (string) 标准错误   |

```javascript
await __A.process.executeWait('notepad');
```

```javascript
await __A.process.executeWait('notepad', '/aaa.txt');
```

## list() <Badge type="tip" text="Since 25.3.5.1" /> {#list}

列出操作系统中的所有进程号。

| 返回值   | 说明             |
|:------|:---------------|
| array | 以操作系统进程号为元素的数组 |

```javascript
await __A.process.list();
```

## exists(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#exists}

检查指定进程号的进程是否存在

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.process.exists(0);
```

## getInformation(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#getInformation}

获得指定进程的详细信息

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

| 返回值    | 说明      |
|:-------|:--------|
| object | 进程的详细信息 |

```javascript
await __A.process.getInformation(999);
```

## send_signal(pid, signal) <Badge type="tip" text="Since 25.3.5.1" /> {#send_signal}

向进程传递信号

| 参数     | 类型  | 说明   |
|:-------|:----|:-----|
| pid    | int | 进程号  |   
| signal | int | 信号编码 |   

```javascript
await __A.process.send_signal(999，999);
```

## suspend(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#suspend}

挂起（暂停运行）指定的进程

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

```javascript
await __A.process.suspend(999);
```

## resume(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#resume}

恢复（继续运行）指定的进程

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

```javascript
await __A.process.resume(999);
```

## kill(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#kill}

停止指定的进程

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

```javascript
await __A.process.kill(999);
```

## terminate(pid) <Badge type="tip" text="Since 25.3.5.1" /> {#terminate}

终止指定的进程

| 参数  | 类型  | 说明  |
|:----|:----|:----|
| pid | int | 进程号 |   

```javascript
await __A.process.terminate(999);
```