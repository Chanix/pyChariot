---
layout: doc
---

# pyChariot.device

设备信息，当前运行设备的相关信息

## isPOSIX() <Badge type="tip" text="Since 25.3.5.1" /> {#isPOSIX}

操作系统是否 POSIX

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isPOSIX();
```

## isLinux() <Badge type="tip" text="Since 25.3.5.1" /> {#isLinux}

操作系统是否 Linux

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isLinux();
```

## isWindows() <Badge type="tip" text="Since 25.3.5.1" /> {#isWindows}

操作系统是否 Windows

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isWindows();
```

## isMacOS() <Badge type="tip" text="Since 25.3.5.1" /> {#isMacOS}

操作系统是否 MacOS

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isMacOS();
```

## isFreeBSD() <Badge type="tip" text="Since 25.3.5.1" /> {#isFreeBSD}

操作系统是否 FreeBSD

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isFreeBSD();
```

## isNetBSD() <Badge type="tip" text="Since 25.3.5.1" /> {#isNetBSD}

操作系统是否 NetBSD

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isNetBSD();
```

## isOpenBSD() <Badge type="tip" text="Since 25.3.5.1" /> {#isOpenBSD}

操作系统是否 OpenBSD

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isOpenBSD();
```

## isBSD() <Badge type="tip" text="Since 25.3.5.1" /> {#isBSD}

操作系统是否 BSD

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isBSD();
```

## isSunOS() <Badge type="tip" text="Since 25.3.5.1" /> {#isSunOS}

操作系统是否 SunOS

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isSunOS();
```

## isAIX() <Badge type="tip" text="Since 25.3.5.1" /> {#isAIX}

操作系统是否 AIX

| 返回值     | 说明 |
|:--------|:---|
| boolean |    |

```javascript
await __A.device.isAIX();
```

## getCPUCount(logical) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUCount}
获取 CPU 数量

| 参数    | 类型      | 说明                 |
|:------|:--------|:-------------------|
| logic | boolean | 逻辑处理器，可忽略，默认为 true |   

| 返回值 | 说明     |
|:----|:-------|
| int | CPU 数量 |

如果 logical 为 false，仅返回物理内核的数量。如果 logical 为 true，返回逻辑内核的数量。
在 OpenBSD 和 NetBSD 上总是返回 null。
请注意， 可能不一定等于当前进程可以使用的实际 CPU 数量。
如果进程 CPU 亲和性已更改、正在使用 Linux cgroups 或（在 Windows 的情况下）在使用处理器组或具有超过 64 个 CPU 的系统上，这可能会有所不同。

```javascript
await __A.device.getCPUCount();
```
```javascript
await __A.device.getCPUCount(false);
```


## getCPUTimes(percpu) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUTimes}

获取 CPU 时间信息

| 参数    | 类型      | 说明                     |
|:------|:--------|:-----------------------|
| percpu | boolean | 详细列出每个内核，可忽略，默认为 false |   

| 返回值    | 说明       |
|:-------|:---------|
| object | CPU 时间信息 |

列出CPU时间信息，其中每个属性代表 CPU 在给定模式下花费的秒数。属性可用性因平台而异。

- user: 进程在用户模式(user mode)下执行所花费的时间； 在 Linux 上，这也包括访客时间(guest time)。
- system: 进程在内核模式(kernel mode)下执行所花费的时间。
- idle: 空闲时间。

特定平台的字段:
- nice (UNIX): niced(优先) 进程在用户模式(user mode)下所花费的时间; 在 Linux 上，这也包括访客优先时间(guest_nice time)。
- iowait (Linux): 等待 I/O 完成所花费的时间。 这不计入空闲时间中。
- irq (Linux, BSD): 服务硬件中断所花费的时间。
- softirq (Linux): 服务软件中断所花费的时间。
- steal (Linux 2.6.11+): 在虚拟化环境中运行的其他操作系统所花费的时间。
- guest (Linux 2.6.24+): 在 Linux 内核的控制下为客户操作系统运行虚拟 CPU 所花费的时间
- guest_nice (Linux 3.2.0+): niced(优先) 访客进程所花费的时间 (用于在 Linux 内核控制下的客户操作系统的虚拟 CPU)
- interrupt (Windows): 服务硬件中断所花费的时间 ( 类似于 UNIX 上的“irq”)
- dpc (Windows): 服务延迟过程调用服务中断 (DPC) 所花费的时间； DPC 是运行优先级低于标准中断(interrupts)的中断。

```javascript
await __A.device.getCPUTimes();
```
```javascript
await __A.device.getCPUTimes(true);
```

## getCPUStats() <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUStats}

获取 CPU 统计信息

| 返回值           | 说明       |
|:--------------|:---------|
| array[number] | CPU 统计信息 |

CPU 统计信息：
- ctx_switches: 自启动以来的上下文切换次数（自愿 + 非自愿）.
- interrupts: 自启动以来的中断数.
- soft_interrupts: 自启动以来的软件中断数。 在 Windows 和 SunOS 上始终为 0.
- syscalls: 自启动以来的系统调用数。 在 Linux 上始终为 0.

```javascript
await __A.device.getCPUStats();
```
