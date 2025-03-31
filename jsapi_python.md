---
layout: doc
---

# pyChariot.api.python <Badge type="tip" text="Since 25.4.2.1" />

python 支持，允许执行 python 代码。

::: danger 注意
除非熟悉 pyChariot 和 python，否则请不要使用本模块。使用本模块风险自担。
:::

## exec(pycode) <Badge type="tip" text="Since 25.4.2.1" /> {#exec}

调用 python exec() 执行指定的 python 源代码。

|   参数   | 类型     | 说明         |
|:------:|:-------|:-----------|
| pycode | string | python 源代码 | 

## execFile(filepath) <Badge type="tip" text="Since 25.4.2.1" /> {#execFile}

调用 python exec() 执行指定源代码文件。

|    参数    | 类型     | 说明             |
|:--------:|:-------|:---------------|
| filepath | string | python 源代码文件路径 | 
