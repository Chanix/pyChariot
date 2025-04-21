---
layout: doc
---

# pyChariot.api.fsys <Badge type="tip" text="Since 25.4.2.1" />

文件系统，提供文件读写等相关功能。

## len2str(length) <Badge type="tip" text="Since 25.4.2.1" /> {#len2str}

将字节数长度转换为人类可读的字符串形式

|   参数   | 类型     | 说明 |
|:------:|:-------|:---|
| length | number |    | 

```javascript
await __A.fsys.len2str(1024);
```

## sizeof(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#sizeof}

获取指定文件或者目录的大小，并以字节数形式返回。

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

```javascript
await __A.fsys.sizeof('C:\\Windows\\notepad.exe');
```

```javascript
await __A.fsys.sizeof('C:\\Windows');
```

## sizeofInStr(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#sizeofInStr}

获取指定文件或者目录的大小，并以人类可读的字符串返回。

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

```javascript
await __A.fsys.sizeofInStr('C:\\Windows\\notepad.exe');
```

## checksum(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#checksum}

计算指定文件的校验和

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

|  返回值   | 说明  |
|:------:|:----|
| string | 校验和 |

```javascript
await __A.fsys.checksum('C:\\Windows\\notepad.exe');
```

## crc32(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#crc32}

计算指定文件的 CRC32 校验和

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

|  返回值   | 说明  |
|:------:|:----|
| string | 校验和 |

```javascript
await __A.fsys.crc32('C:\\Windows\\notepad.exe');
```

## isFile(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#isFile}

指定的文件是否为文件

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

|   返回值   | 说明 |
|:-------:|:---|
| boolean |    |

```javascript
await __A.fsys.crc32('C:\\Windows\\notepad.exe');
```

## isDir(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#isDir}

指定的文件是否为目录

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

|   返回值   | 说明 |
|:-------:|:---|
| boolean |    |

```javascript
await __A.fsys.isDir('C:\\Windows\\notepad.exe');
```

## read(filepath, charset) <Badge type="tip" text="Since 25.4.2.1" /> {#read}

返回指定文本文件的内容

|    参数    | 类型     | 说明           |
|:--------:|:-------|:-------------|
| filepath | string | 文件路径名        | 
| charset  | string | 编码，默认为 utf-8 | 

|  返回值   | 说明 |
|:------:|:---|
| string |    |

```javascript
await __A.fsys.read('C:\\Windows\\system.ini');
```

## readLines(filepath, charset) <Badge type="tip" text="Since 25.4.2.1" /> {#readLines}

返回指定文本文件的内容

|    参数    | 类型     | 说明           |
|:--------:|:-------|:-------------|
| filepath | string | 文件路径名        | 
| charset  | string | 编码，默认为 utf-8 | 

|      返回值      | 说明 |
|:-------------:|:---|
| Array[string] |    |

```javascript
await __A.fsys.readLines('C:\\Windows\\system.ini');
```

## write(filepath, content, append, charset) <Badge type="tip" text="Since 25.4.2.1" /> {#write}

写入文本文件，返回写入字节数。

|    参数    | 类型      | 说明                  |
|:--------:|:--------|:--------------------|
| filepath | string  | 文件路径名               | 
| content  | string  | 文本内容                | 
|  append  | boolean | 是否追加，默认为 False，即覆盖。 | 
| charset  | string  | 编码，默认为 utf-8        | 

|  返回值   | 说明 |
|:------:|:---|
| number |    |

```javascript
await __A.fsys.readLines('C:\\test.txt', 'This is a test file.');
```

## writeLines(filepath, content, append, charset) <Badge type="tip" text="Since 25.4.2.1" /> {#writeLines}

写入文本文件，返回写入字节数。

|    参数    | 类型            | 说明                  |
|:--------:|:--------------|:--------------------|
| filepath | string        | 文件路径名               | 
| content  | Array[string] | 文本内容列表              | 
|  append  | boolean       | 是否追加，默认为 False，即覆盖。 | 
| charset  | string        | 编码，默认为 utf-8        | 

|  返回值   | 说明 |
|:------:|:---|
| number |    |

```javascript
await __A.fsys.writeLines('C:\\test.txt', 'This is a test file.');
```

## touch(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#touch}

类似于 UNIX “touch” 实用程序的行为

|    参数    | 类型     | 说明    |
|:--------:|:-------|:------|
| filepath | string | 文件路径名 | 

```javascript
await __A.fsys.touch('C:\\test.txt');
```

## getsep() <Badge type="tip" text="Since 25.4.2.1" /> {#getsep}

获取文件路径的分隔符

|  返回值   | 说明 |
|:------:|:---|
| string |    |

```javascript
await __A.fsys.getsep();
```

## mkdirs(path, mode) <Badge type="tip" text="Since 25.4.2.1" /> {#mkdirs}

创建目录树

|  参数  | 类型     | 说明               |
|:----:|:-------|:-----------------|
| path | string | 目录路径名            | 
| mode | number | 权限模式，默认为 `0o777` | 

|  返回值   | 说明 |
|:------:|:---|
| string |    |

```javascript
await __A.fsys.mkdirs('C:\\dir1\\dir2\\dir3');
```

## copy(src, dst) <Badge type="tip" text="Since 25.4.2.1" /> {#copy}

将 src 复制到 dst

## remove(dst) <Badge type="tip" text="Since 25.4.2.1" /> {#remove}

删除指定目标

## move(dst, dst) <Badge type="tip" text="Since 25.4.2.1" /> {#move}

将 src 更名为 dst