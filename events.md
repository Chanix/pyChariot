---
layout: doc
---

# 事件 {#events}

pyChariot 运行中会将部分对应的事件开放给 js 调用。
可以通过自定义脚本，当事件发生时在主窗口环境中执行自定义脚本。

注意，某些事件发生事，扩展对象可能还没有准备好。
因此通过 pychariot 是否为 null 来判断。所以并不是所有事件都可以用js。
更详细的，可以执行例子中的events来或者更详细的信息和体验。


pyChariot 支持以下窗口事件中执行自定义脚本：
注意，某些动作会出发多个或者多次事件，因此对事件进行处理时，需要注意到这点。
例如，当鼠标移动窗口时，在松开鼠标键，移动的过程中会不断的发生move事件
当窗口最大化事，会出发 more resize max 
最小化，触发 move resize min
回复窗口，resore。。。

## loaded{#loaded}
## closed{#closed}
## closing{#closing}
## shown{#shown}
## minimized{#minimized}
## maximized{#maximized}
## restored{#restored}
## resized{#resized}
## moved{#moved}
## before_show{#before_show}

