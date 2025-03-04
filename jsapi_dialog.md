---
layout: doc
---

# pyChariot.dialog

对话框管理与操作

## confirm(title, message) <Badge type="tip" text="Since 25.3.5.1" /> {#confirm}

打开确认对话框

| 参数      | 类型     | 说明              |
|:--------|:-------|:----------------|
| title   | string | 对话框窗口标题，默认为 ''。 |   
| message | string | 对话框窗口信息，默认为 ''。 |   

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

打开确认对话框，并等待用户选择后返回。如果用户点击了确认，返回 true，其他返回 false。

```javascript
await __A.dialog.confirm('请确认', '您真的确认要执行吗？');
```

## openDir(directory, allow_multiple) <Badge type="tip" text="Since 25.3.5.1" /> {#openDir}

打开确认对话框

| 参数             | 类型      | 说明                                  |
|:---------------|:--------|:------------------------------------|
| directory      | string  | 默认打开的目录，默认为 null。                   |   
|                |         | 如果该参数值为 null，默认打开正在运行的小应用的 data 目录； |   
|                |         | 如果该参数值为 ''，默认打开上次调用时打开的目录；          |
| allow_multiple | boolean | 是否允许多选，默认为 false。                   |   

| 返回值          | 说明 |
|:-------------|:---|
| list[string] |    |

打开对话框，并等待用户选择目录后返回。返回列表，其中的元素为用户选择的目录路径。

- 多选，列表中为多个元素；
- 单选为，列表中仅 1 个元素；
- 取消或其他返回空列表；

```javascript
await __A.dialog.openDir();
```

```javascript
await __A.dialog.openDir(null, true);
```

```javascript
await __A.dialog.openDir('', false);
```

## openFile(directory, file_types, allow_multiple) <Badge type="tip" text="Since 25.3.5.1" /> {#openFile}

打开确认对话框

| 参数             | 类型      | 说明                                                |
|:---------------|:--------|:--------------------------------------------------|
| directory      | string  | 默认打开的目录，默认为 null。                                 |   
|                |         | 如果该参数值为 null，默认打开正在运行的小应用的 data 目录；               |   
|                |         | 如果该参数值为 ''，默认打开上次调用时打开的目录；                        |
| file_types     | string  | 文件类型选择，默认为 ' (\*.\*)'。                            |   
|                |         | 格式 `说明 (*.ext1;*.ext2;*.ext3...)`，多个之间用 ` \| `分隔。 |   
| allow_multiple | boolean | 是否允许多选，默认为 false。                                 |   

| 返回值          | 说明 |
|:-------------|:---|
| list[string] |    |

打开对话框，并等待用户选择文件后返回。返回列表，其中的元素为用户选择的文件路径。

- 多选，列表中为多个元素；
- 单选为，列表中仅 1 个元素；
- 取消或其他返回空列表；

```javascript
await __A.dialog.openFile();
```

```javascript
await __A.dialog.openFile(null, '所有文件 (*.*) | 文档文件 (*.doc;*.md)', true);
```

## saveFile(directory, file_types) <Badge type="tip" text="Since 25.3.5.1" /> {#saveFile}

打开确认对话框

| 参数         | 类型     | 说明                                                |
|:-----------|:-------|:--------------------------------------------------|
| directory  | string | 默认打开的目录，默认为 null。                                 |   
|            |        | 如果该参数值为 null，默认打开正在运行的小应用的 data 目录；               |   
|            |        | 如果该参数值为 ''，默认打开上次调用时打开的目录；                        |
| file_types | string | 文件类型选择，默认为 ' (\*.\*)'。                            |   
|            |        | 格式 `说明 (*.ext1;*.ext2;*.ext3...)`，多个之间用 ` \| `分隔。 |   

| 返回值    | 说明 |
|:-------|:---|
| string |    |

打开对话框，并等待用户选择文件后返回。

返回用户选择要保存的文件名，如果取消则返回 null。

```javascript
await __A.dialog.saveFile();
```

```javascript
await __A.dialog.saveFile(null, '所有文件 (*.*) | 文档文件 (*.doc;*.md)', true);
```
