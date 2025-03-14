---
layout: doc
---

# pyChariot.api.python

python 支持，深入内部，允许执行 python 代码。

注意：本模块将允许执行python源代码，请在熟悉 pyChariot 和 python 后再使用。

## exec(pysrc) <Badge type="tip" text="Since 25.4.1.1" /> {#exec}

执行python源代码，不保证可用和正确性。

| 参数    | 类型     | 说明                |
|:------|:-------|:------------------|
| pysrc | string | python 源代码，默认为 '' |   

```javascript
await __A.python.exec('print("this is python code run by JavaScript")');
```