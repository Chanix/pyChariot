---
layout: doc
---

# pyChariot.clipboard
剪贴板，操作系统剪贴板的管理与操作
- Window，不需要额外模块；
- MacOS，通过 pbcopy 和 pbpaste 实现（操作系统预装）；
- Linux，通过尝试调用下列命令来实现，您可能需要额外安装软件包；
    - which
    - pbcopy
    - pbpaste
    - xclip
    - xsel
    - wl-copy/wl-paste
    - klipper
    - qdbus
  

## isAvailable() <Badge type="tip" text="Since 25.3.5.1" /> {#isAvailable}

系统剪贴板是否可用
| 返回值  | 说明         |
|:----:|:-----------|
| bool | 系统剪贴板是否可用 |

```javascript
await __A.clipboard.isAvailable();
```

## get() <Badge type="tip" text="Since 25.3.5.1" /> {#get}

获取系统剪贴板中的值（仅支持字符串）

|  返回值   | 说明       |
|:------:|:---------|
| string | 剪贴板中存储的值 |

```javascript
await __A.clipboard.get();
```

## set(text) <Badge type="tip" text="Since 25.3.5.1" /> {#set}

设置系统剪贴板的值（仅支持字符串）

|  参数  | 类型     | 说明                   |
|:----:|:-------|:---------------------|
| text | string | 设置系统剪贴板的值，可缺省，默认为 '' | 

```javascript
await __A.clipboard.write('写入系统剪贴板的字符串值');
```
