---
layout: doc
---

# pyChariot.mainwin

小应用主窗口管理，主窗口状态管理与操作

## show() <Badge type="tip" text="Since 25.4.1.1" /> {#show}

显示主窗口

```javascript
await __A.mainwin.show();
```

## hide() <Badge type="tip" text="Since 25.4.1.1" /> {#hide}

隐藏主窗口

| 返回值    | 说明   |
|:-------|:-----|
| string | 路径名称 |

```javascript
await __A.mainwin.hide();
```

## getTitle() <Badge type="tip" text="Since 25.4.1.1" /> {#getTitle}

获取当前小应用主窗口的窗口标题

| 返回值    | 说明 |
|:-------|:---|
| string |    |

```javascript
await __A.mainwin.getTitle();
```

## setTitle(title) <Badge type="tip" text="Since 25.4.1.1" /> {#setTitle}

获取当前小应用主窗口的窗口标题

|  参数   | 类型     | 说明   |
|:-----:|:-------|:-----|
| title | string | 窗口标题 | 

```javascript
await __A.mainwin.setTitle('新的窗口标题');
```

## getOnTop() <Badge type="tip" text="Since 25.4.1.1" /> {#getOnTop}

返回主窗口 on_top 状态（显示在最前面）

```javascript
await __A.mainwin.getOnTop();
```

## setOnTop(on_top) <Badge type="tip" text="Since 25.4.1.1" /> {#setOnTop}

设置主窗口 on_top 状态（显示在最前面）

| 参数     | 类型   | 说明                 |
|:-------|:-----|:-------------------|
| on_top | bool | 是否显示在最前面，默认为 true。 |   

```javascript
await __A.mainwin.setOnTop();
```

```javascript
await __A.mainwin.setOnTop(false);
```

## getX() <Badge type="tip" text="Since 25.4.1.1" /> {#getX}

获取主窗口坐标 x 值。

| 返回值    | 说明 |
|:-------|:---|
| number |    |

```javascript
await __A.mainwin.getX();
```

## getY() <Badge type="tip" text="Since 25.4.1.1" /> {#getY}

获取主窗口坐标 x 值。

| 返回值    | 说明 |
|:-------|:---|
| number |    |

```javascript
await __A.mainwin.getY();
```

## move(x, y) <Badge type="tip" text="Since 25.4.1.1" /> {#move}

移动小应用主窗口到指定坐标

| 参数 | 类型     | 说明 |
|:--:|:-------|:---|
| x  | number |    | 
| y  | number |    | 

```javascript
// 主窗口向右下移动
x = await __A.mainwin.getX();
y = await __A.mainwin.getY();
await __A.mainwin.move(x + 2, y + 2);
```

```javascript
// 主窗口移动到屏幕左上角
await __A.mainwin.move(0, 0);
```

## getWidth() <Badge type="tip" text="Since 25.4.1.1" /> {#getWidth}

获取主窗口宽度

| 返回值    | 说明 |
|:-------|:---|
| number |    |

```javascript
await __A.mainwin.getWidth();
```

## getHeight() <Badge type="tip" text="Since 25.4.1.1" /> {#getHeight}

获取主窗口高度

| 返回值    | 说明 |
|:-------|:---|
| number |    |

```javascript
await __A.mainwin.getHeight();
```

## resize(width, height) <Badge type="tip" text="Since 25.4.1.1" /> {#resize}

移动小应用主窗口到指定坐标

|   参数   | 类型     | 说明 |
|:------:|:-------|:---|
| width  | number |    | 
| height | number |    | 

```javascript
// 主窗口变大一些
width = await __A.mainwin.getWidth();
height = await __A.mainwin.getHeight();
__A.mainwin.resize(width + 2, height + 2);
```

## restore() <Badge type="tip" text="Since 25.4.1.1" /> {#restore}

还原主窗口

```javascript
await __A.mainwin.restore();
```

## toggleFullscreen() <Badge type="tip" text="Since 25.4.1.1" /> {#toggleFullscreen}

切换主窗口全屏显示状态

```javascript
await __A.mainwin.toggleFullscreen();
```

## maximize() <Badge type="tip" text="Since 25.4.1.1" /> {#maximize}

主窗口最大化

```javascript
await __A.mainwin.maximize();
```

## minimize() <Badge type="tip" text="Since 25.4.1.1" /> {#minimize}

主窗口最小化

```javascript
await __A.mainwin.minimize();
```

## loadUrl(url) <Badge type="tip" text="Since 25.4.1.1" /> {#loadUrl}

在主窗口中加载指定的 url

|   参数   | 类型     | 说明 |
|:------:|:-------|:---|
|  url   | string |    | 

```javascript
await __A.mainwin.loadUrl('https://chanix.github.io/pyChariot/');
```