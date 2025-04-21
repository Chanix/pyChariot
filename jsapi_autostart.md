---
layout: doc
---

# pyChariot.api.autostart <Badge type="tip" text="Since 25.4.2.1" />

设置开机自启，当用户登录图形界面时自动启动小应用。

## enable <Badge type="tip" text="Since 25.4.2.1" /> {#enable}

设置开机启动，返回是否成功。

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.enable();
```

## disable <Badge type="tip" text="Since 25.4.2.1" /> {#disable}

取消开机启动，返回是否成功。

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.disable();
```

## isEnabled <Badge type="tip" text="Since 25.4.2.1" /> {#isEnabled}

返回当前是否已设置为开机启动

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.isEnabled();
```
