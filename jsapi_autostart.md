---
layout: doc
---

# pyChariot.api.autostart <Badge type="tip" text="Since 25.4.2.1" />

设置开机自启，当用户登录图形界面时自动启动小应用。

## enable(appchip_id) <Badge type="tip" text="Since 25.4.2.1" /> {#enable}

设置小应用开机启动，返回是否成功。

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.enable();
```

## disable(appchip_id) <Badge type="tip" text="Since 25.4.2.1" /> {#disable}

取消小应用开机启动，返回是否成功。

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.disable();
```

## isEnabled(appchip_id) <Badge type="tip" text="Since 25.4.2.1" /> {#isEnabled}

返回小应用是否已设置为开机启动

| 参数         | 类型     | 说明                 |
|:-----------|:-------|:-------------------|
| appchip_id | string | 小应用标识，可忽略，默认为当前小应用 |   

| 返回值  | 说明 |
|:----:|:---|
| bool |    |

```javascript
await __A.autostart.isEnabled();
```
