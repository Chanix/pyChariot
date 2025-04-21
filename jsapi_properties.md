---
layout: doc
---

# pyChariot.api.properties <Badge type="tip" text="Since 25.4.9.1" />

此模块用来保存一些简单的数据，数据保存在 _properties.json 中，当小应用启动时自动装载，退出时自动保存。

## set(name, value) <Badge type="tip" text="Since 25.4.9.1" /> {#set}

设置指定属性的值

|  参数   | 类型     | 说明                        |
|:-----:|:-------|:--------------------------|
| name  | string | 属性变量名称                    |
| value | string | 属性变量值，可忽略，默认为 null（即删除属性） |

```javascript
await __A.properties.set('nnn', 'vvv');    // 设置属性 nnn 的值为 "vvv"
await __A.properties.set('nnn', 12345);    // 设置属性 nnn 的值为 "12345"
await __A.properties.set('nnn', null);     // 删除名称属性 nnn
await __A.properties.set('nnn');           // 删除名称属性 nnn
```

## unset(name) <Badge type="tip" text="Since 25.4.9.1" /> {#unset}

删除指定属性

|  参数  | 说明     | 默认值  |
|:----:|:-------|:-----|
| name | string | 属性名称 |

```javascript
await __A.properties.unset('nnn');           // 删除属性 nnn
```

## get(name, default) <Badge type="tip" text="Since 25.4.9.1" /> {#get}

获取指定属性的值。

|   参数    | 类型     | 说明               |
|:-------:|:-------|:-----------------|
|  name   | string | 属性名称             |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                      |
|:------:|:------------------------|
| string | 返回属性的值，如果指定属性不存在则返回默认值。 |

```javascript
await __A.properties.get('nnn');           // 获取属性 nnn，默认返回 null
await __A.properties.get('nnn', null);     // 获取属性 nnn，默认返回 null
await __A.properties.get('nnn', 12345);    // 获取属性 nnn，默认返回 "12345"
await __A.properties.get('nnn', "vvv");    // 获取属性 nnn，默认返回 "vvv"
```

## pop(name, default) <Badge type="tip" text="Since 25.4.9.1" /> {#pop}

删除指定属性，并返回其值。

|   参数    | 说明     | 默认值              |
|:-------:|:-------|:-----------------|
|  name   | string | 属性名称             |
| default | string | 默认值，可忽略，默认为 null |

|  返回值   | 说明                          |
|:------:|:----------------------------|
| string | 返回属性的值，如果指定的属性不存在则返回指定的默认值。 |

```javascript
await __A.properties.pop('nnn');           // 获取属性 nnn，默认返回 null
await __A.properties.pop('nnn', null);     // 获取属性 nnn，默认返回 null
await __A.properties.pop('nnn', 12345);    // 获取属性 nnn，默认返回 "12345"
await __A.properties.pop('nnn', "vvv");    // 获取属性 nnn，默认返回 "vvv"
```

## getsep() <Badge type="tip" text="Since 25.4.9.1" /> {#getsep}

获取指定属性中使用的分隔符

|  返回值   | 说明                    |
|:------:|:----------------------|
| string | 属性中使用的分隔符，`:` 或者 `;`。 |

```javascript
await __A.properties.getsep();
```

## items() <Badge type="tip" text="Since 25.4.2.1" /> {#items}

获取当前所有属性名值对对象

|  返回值   | 说明 |
|:------:|:---|
| object |    |

```javascript
env = await __A.properties.items();
```

## keys() <Badge type="tip" text="Since 25.4.2.1" /> {#keys}

获取当前所有属性的名称

|  返回值   | 说明 |
|:------:|:---|
| object |    |

```javascript
env = await __A.properties.keys();
```

## values() <Badge type="tip" text="Since 25.4.2.1" /> {#values}

获取当前所有属性的值

|  返回值   | 说明 |
|:------:|:---|
| object |    |

```javascript
env = await __A.properties.values();
```

## save() <Badge type="tip" text="Since 25.4.2.1" /> {#save}

将数据保存到文件 _properties.json 中

```javascript
env = await __A.properties.save();
```

