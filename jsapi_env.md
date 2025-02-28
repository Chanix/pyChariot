---
layout: doc
---

# pyChariot.env
环境变量，操作系统环境变量的管理与操作

## set(name, value) <Badge type="tip" text="Since 25.3.5.1" /> {#set}

设置指定环境变量的值

|  参数  | 类型     | 说明                          |
|:-----:|:-------|:----------------------------|
| name  | string | 环境变量名称                      |
| value | string | 环境变量值，可忽略，默认为 null（即删除环境变量） |

```javascript
await __A.env.set('nnn', 'vvv');    // 设置环境变量 nnn 的值为 "vvv"
await __A.env.set('nnn', 12345);    // 设置环境变量 nnn 的值为 "12345"
await __A.env.set('nnn', null);     // 删除名称环境变量 nnn
await __A.env.set('nnn');           // 删除名称环境变量 nnn
```

## unset(name) <Badge type="tip" text="Since 25.3.5.1" /> {#unset}

删除指定环境变量

|   参数   | 说明     | 默认值              |
|:-------:|:-------|:-----------------|
|  name   | string | 环境变量名称           |

```javascript
await __A.env.unset('nnn');           // 删除环境变量 nnn
```

## get(name, default) <Badge type="tip" text="Since 25.3.5.1" /> {#get}

获取指定环境变量的值。

|   参数   | 类型     | 说明               |
|:-------:|:-------|:-----------------|
|  name   | string | 环境变量名称           |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                          |
|:------:|:----------------------------|
| string | 返回环境变量的值，如果指定环境变量不存在则返回默认值。 |

```javascript
await __A.env.get('nnn');           // 获取环境变量 nnn，默认返回 null
await __A.env.get('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __A.env.get('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __A.env.get('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## pop(name, default) <Badge type="tip" text="Since 25.3.5.1" /> {#pop}

删除指定环境变量，并返回其值。

|   参数   | 说明     | 默认值              |
|:-------:|:-------|:-----------------|
|  name   | string | 环境变量名称           |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                              |
|:------:|:--------------------------------|
| string | 返回环境变量的值，如果指定的环境变量不存在则返回指定的默认值。 |

```javascript
await __A.env.pop('nnn');           // 获取环境变量 nnn，默认返回 null
await __A.env.pop('nnn', null);     // 获取环境变量 nnn，默认返回 null
await __A.env.pop('nnn', 12345);    // 获取环境变量 nnn，默认返回 "12345"
await __A.env.pop('nnn', "vvv");    // 获取环境变量 nnn，默认返回 "vvv"
```

## list() <Badge type="tip" text="Since 25.3.5.1" /> {#list}

获取当前所有的环境变量列表

|  返回值   | 说明             |
|:------:|:---------------|
| object | 一个包含环境变量键值对的字典 |

```javascript
env = await __A.env.list();
```

## getsep() <Badge type="tip" text="Since 25.3.5.1" /> {#getsep}

获取指定环境变量中使用的分隔符

|  返回值   | 说明                      |
|:------:|:------------------------|
| string | 环境变量中使用的分隔符，`:` 或者 `;`。 |

```javascript
await __A.env.getsep();
```