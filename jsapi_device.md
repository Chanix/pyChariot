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
如果进程 CPU 亲和性已更改、正在使用 Linux cgroups 或（在 Windows 的情况下）在使用处理器组或具有超过 64 个 CPU
的系统上，这可能会有所不同。

```javascript
await __A.device.getCPUCount();
```

```javascript
await __A.device.getCPUCount(false);
```

## getCPUTimes(percpu) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUTimes}

获取 CPU 时间信息

| 参数     | 类型      | 说明                     |
|:-------|:--------|:-----------------------|
| percpu | boolean | 详细列出每个内核，可忽略，默认为 false |   

| 返回值                   | 说明       |
|:----------------------|:---------|
| object 或 list[object] | CPU 时间信息 |

列出CPU时间信息，其中每个属性代表 CPU 在给定模式下花费的秒数。属性可用性因平台而异。

- user: 进程在用户模式(user mode)下执行所花费的时间； 在 Linux 上，这也包括访客时间(guest time)；
- system: 进程在内核模式(kernel mode)下执行所花费的时间；
- idle: 空闲时间；

特定平台的字段:

- nice (UNIX): niced(优先) 进程在用户模式(user mode)下所花费的时间; 在 Linux 上，这也包括访客优先时间(guest_nice time)；
- iowait (Linux): 等待 I/O 完成所花费的时间。 这不计入空闲时间中；
- irq (Linux, BSD): 服务硬件中断所花费的时间；
- softirq (Linux): 服务软件中断所花费的时间；
- steal (Linux 2.6.11+): 在虚拟化环境中运行的其他操作系统所花费的时间；
- guest (Linux 2.6.24+): 在 Linux 内核的控制下为客户操作系统运行虚拟 CPU 所花费的时间；
- guest_nice (Linux 3.2.0+): niced(优先) 访客进程所花费的时间 (用于在 Linux 内核控制下的客户操作系统的虚拟 CPU)；
- interrupt (Windows): 服务硬件中断所花费的时间 ( 类似于 UNIX 上的 “irq”)；
- dpc (Windows): 服务延迟过程调用服务中断 (DPC) 所花费的时间； DPC 是运行优先级低于标准中断(interrupts)的中断；

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

- ctx_switches: 自启动以来的上下文切换次数（自愿 + 非自愿）；
- interrupts: 自启动以来的中断数；
- soft_interrupts: 自启动以来的软件中断数。 在 Windows 和 SunOS 上始终为 0；
- syscalls: 自启动以来的系统调用数。 在 Linux 上始终为 0；

```javascript
await __A.device.getCPUStats();
```

## getCPUPercent(percpu) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUPercent}

获取 CPU 利用率

| 参数     | 类型      | 说明                     |
|:-------|:--------|:-----------------------|
| percpu | boolean | 详细列出每个内核，可忽略，默认为 false |   

| 返回值                   | 说明        |
|:----------------------|:----------|
| number 或 list[number] | CPU 利用率信息 |

如果 percpu 忽略或为 false，返回一个浮点数，以百分比形式表示当前系统范围内的 CPU 利用率。
如果 percpu 为 true，返回一个浮点数的 list，其中的元素为每个 CPU 的利用率信息。

***第一次调用它时，会返回一个您应该忽略的无意义的 0.0 值。为了准确起见，建议在两次调用之间至少间隔 0.1 秒来调用此函数。***

```javascript
await __A.device.getCPUPercent();
```

```javascript
await __A.device.getCPUPercent(true);
```

## getCPUTimesPercent(percpu) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUTimesPercent}

获取 CPU 时间利用率百分比

| 参数     | 类型      | 说明                     |
|:-------|:--------|:-----------------------|
| percpu | boolean | 详细列出每个内核，可忽略，默认为 false |   

| 返回值                   | 说明        |
|:----------------------|:----------|
| object 或 list[object] | CPU 利用率信息 |

如果 percpu 忽略或为 false，返回对象，以百分比形式表示当前系统范围内的 CPU 时间利用率。
如果 percpu 为 true，返回一个浮点数的 list，其中的元素为每个 CPU 的时间利用率信息。

在 Linux 上，“guest”和“guest_nice”百分比不计入“user”和“user_nice”百分比。

***第一次调用它时，会返回一个您应该忽略的无意义的 0.0 值。为了准确起见，建议在两次调用之间至少间隔 0.1 秒来调用此函数。***

```javascript
await __A.device.getCPUTimesPercent();
```

```javascript
await __A.device.getCPUTimesPercent(true);
```

## getCPUFfreq(percpu) <Badge type="tip" text="Since 25.3.5.1" /> {#getCPUFfreq}

获取 CPU 频率

| 参数     | 类型      | 说明                     |
|:-------|:--------|:-----------------------|
| percpu | boolean | 详细列出每个内核，可忽略，默认为 false |   

| 返回值                   | 说明       |
|:----------------------|:---------|
| object 或 list[object] | CPU 频率信息 |

如果 percpu 忽略或为 false，返回对象，以百分比形式表示当前系统范围内的 CPU 频率。
如果 percpu 为 true，返回一个浮点数的 list，其中的元素为每个 CPU 的频率。

```javascript
await __A.device.getCPUFfreq();
```

```javascript
await __A.device.getCPUFfreq(true);
```

## getLoadAvg() <Badge type="tip" text="Since 25.3.5.1" /> {#getLoadAvg}

获取系统平均负载。

| 返回值   | 说明                               |
|:------|:---------------------------------|
| array | 包括3个元素，分别为 过去 1、5 和 15 分钟的平均系统负载 |

“负载”表示处于可运行状态的进程，要么使用 CPU，要么等待使用 CPU（例如，等待磁盘 I/O）。

- Unix 中，和 `update` 命令的意义相同；
- 在 Windows 上是通过 Windows API 模拟的，因此第一次调用它，在接下来的 5 秒内，将返回一个无意义的 (0.0, 0.0, 0.0)；

返回的数字仅在与系统上安装的 CPU 内核数相关时才有意义。例如，具有 10 个逻辑 CPU 的系统上的值 3.14 意味着系统负载在过去 N
分钟内为 31.4%。

```javascript
await __A.device.getLoadAvg();
```

## getVirtualMemory() <Badge type="tip" text="Since 25.3.5.1" /> {#getVirtualMemory}

获取系统内存使用状况。

| 返回值    | 说明     |
|:-------|:-------|
| object | 内存使用信息 |

对象中的信息属性如下：

- total: 总物理内存（独占交换）；
- available: 可以立即分配给进程而无需系统进行交换的内存。这是通过根据平台对不同的内存值求和来计算的，它应该用于以跨平台方式监控实际内存使用情况；

其他数据:

- used: 使用的内存，计算方式因平台而异，仅供参考。 total - free 不一定匹配 used；
- free: 根本没有使用（归零）的随时可用的内存； 请注意，这并不反映实际可用内存（请改用可用(available)内存）。 total - used 不一定匹配
  free；
- active (UNIX): 当前正在使用或最近使用的内存，因此它在 RAM 中；
- inactive (UNIX): 标记为未使用的内存；
- buffers (Linux, BSD): 缓存文件系统元数据等内容；
- cached (Linux, BSD): 缓存各种东西；
- shared (Linux, BSD): 可以被多个进程同时访问的内存；
- slab (Linux): 内核数据结构缓存；
- wired (BSD, macOS): 标记为始终保留在 RAM 中的内存。 它永远不会移动到磁盘；

已用 (used) 和可用 (available) 的总和不一定等于总数 (total)。 在 Windows 上可用 (available) 和空闲 (free) 是一样的。

如果您只想知道跨平台方式还剩下多少物理内存，只需依赖可用 (available) 字段即可。

```javascript
await __A.device.getVirtualMemory();
```

```javascript
console.log('当前可用内存：' + (await __A.device.getVirtualMemory()).available)
```

## getSwapMemory() <Badge type="tip" text="Since 25.3.5.1" /> {#getSwapMemory}

获取系统交换内存使用状况。

| 返回值    | 说明     |
|:-------|:-------|
| object | 内存使用信息 |

系统交换内存统计信息，包括以下字段：

- total: 以字节为单位的总交换内存；
- used: 使用的交换内存（以字节为单位）；
- free: 以字节为单位的空闲交换内存；
- percent: 百分比使用率计算为 (total - available) / total * 100；
- sin: 系统从磁盘换入的字节数（累计）；
- sout: 系统从磁盘换出的字节数（累计）；

操作系统差异性：

- Windows 上的 sin 和 sout 始终设置为 0；
- Linux 上，依赖 /proc fs 而不是 sysinfo() 系统调用；

```javascript
await __A.device.getSwapMemory();
```

## getDiskPartitions(all) <Badge type="tip" text="Since 25.3.5.1" /> {#getDiskPartitions}

获取设备挂在的磁盘分区信息

| 参数  | 类型      | 说明                       |
|:----|:--------|:-------------------------|
| all | boolean | 是否列出所有磁盘信息，可忽略，默认为 false |   

| 返回值          | 说明                |
|:-------------|:------------------|
| list[object] | 列表，每个元素为一个磁盘分区的信息 |

获取设备挂在的磁盘分区信息，包括设备、挂载点和文件系统类型，类似于 UNIX 上的“df”命令。
如果 all 参数为 False，它会尝试仅区分和返回物理设备（例如硬盘、CD-ROM 驱动器、USB 密钥）并忽略所有其他设备（例如伪(pseudo)
、内存、重复、无法访问的文件系统）。

请注意，all 参数并非在所有系统上都完全可靠（例如，在 BSD 上，此参数被忽略）。

列表中的每个元素说明一个磁盘分区的详细信息，包括以下属性：

- device: 设备路径（例如“/dev/hda1”）。在 Windows 上，这是驱动器号（例如“C:\\”）。
- mountpoint: 挂载点路径（例如“/”）。在 Windows 上，这是驱动器号（例如“C:\\”）。
- fstype: 分区文件系统（例如 UNIX 上的“ext3”或 Windows 上的“NTFS”）。
- opts: 一个逗号分隔的字符串，指示驱动器/分区的不同挂载选项。平台相关。
- maxfile: 文件名可以具有的最大长度。平台相关。
- maxpath: 路径名（目录名 + 基本文件名）的最大长度。平台相关。

```javascript
await __A.device.getDiskPartitions();
```

```javascript
await __A.device.getDiskPartitions(true);
```

## getDiskUsage(path) <Badge type="tip" text="Since 25.3.5.1" /> {#getDiskUsage}

获取指定路径的磁盘使用统计信息

| 参数   | 类型     | 说明                        |
|:-----|:-------|:--------------------------|
| path | string | 路径，可忽略，默认为 PYCHARIOT_HOME |   

| 返回值    | 说明     |
|:-------|:-------|
| object | 使用统计信息 |

使用统计信息包括以下属性：

- total: 以字节表示的总空间；
- used: 以字节表示的已用空间
- free: 以字节表示的可用空间；
- percent: 使用百分比；

*这些值和 “df” 命令行程序是一致的。*

```javascript
await __A.device.getDiskUsage();
```

```javascript
await __A.device.getDiskUsage('C:\\');
```

## getDiskIOCounters(perdisk, nowrap) <Badge type="tip" text="Since 25.3.5.1" /> {#getDiskIOCounters}

获取磁盘 IO 统计信息

| 参数      | 类型      | 说明        |
|:--------|:--------|:----------|
| perdisk | boolean | 默认为 false |   
| nowrap  | boolean | 默认为 false |   

| 返回值    | 说明         |
|:-------|:-----------|
| object | 磁盘 IO 统计信息 |

返回系统范围的磁盘 I/O 统计信息，包括以下属性：

- read_count: 读取次数
- write_count: 写入次数
- read_bytes: 读取的字节数
- write_bytes: 写入的字节数

特定于平台的属性:

- read_time(除了 NetBSD 和 OpenBSD): 从磁盘读取所花费的时间（以毫秒为单位）
- write_time(除了 NetBSD 和 OpenBSD): 写入磁盘所花费的时间（以毫秒为单位）
- busy_time(Linux, FreeBSD): 花费在实际 I/O 上的时间（以毫秒为单位）
- read_merged_count (Linux): 合并读取的数量（参见 iostats 文档）
- write_merged_count (Linux): 合并写入的数量（请参阅 iostats 文档）

如果 perdisk 为 True ，则返回系统上安装的每个物理磁盘的相同信息，分区名称作为键。

在某些系统（例如Linux）上，在非常繁忙或寿命很长的系统上，内核返回的数字可能会溢出并换行（从零开始）。

如果 nowrap 为 True，函数调用中检测并调整这些数字，并将“旧值”添加到“新值”，以便返回的数字始终增加或保持不变，但永远不会减少。
disk_io_counters.cache_clear() 可用于使 nowrap 缓存无效。 在 Windows 上，可能需要首先从 cmd.exe 发出 diskperf -y 命令以启用
IO 计数器。
在无盘机器上，如果 perdisk 为 True，此函数将返回 null 或 {}。

```javascript
await __A.device.getDiskIOCounters();
```

## getNetIOCounters(pernic, nowrap) <Badge type="tip" text="Since 25.3.5.1" /> {#getNetIOCounters}

获取网络 IO 统计信息

| 参数     | 类型      | 说明        |
|:-------|:--------|:----------|
| pernic | boolean | 默认为 false |   
| nowrap | boolean | 默认为 false |   

| 返回值    | 说明         |
|:-------|:-----------|
| object | 网络 IO 统计信息 |

返回系统范围的网络 I/O 统计信息，包括以下属性：

- bytes_sent: 发送的字节数
- bytes_recv: 接收的字节数
- packets_sent: 发送的数据包数
- packets_recv: 收到的数据包数
- errin: 接收时的错误总数
- errout: 发送时的错误总数
- dropin: 丢弃的传入数据包总数
- dropout: 丢弃的传出数据包总数（在 macOS 和 BSD 上始终为 0）

如果 pernic 为 True，则返回系统上安装的每个网络接口的相同信息，其中网络接口名称作为键。

在某些系统（例如 Linux）上，在非常繁忙或寿命很长的系统上，内核返回的数字可能会溢出并换行（从 0 开始）。

如果 nowrap 为 True ，将在函数调用中检测并调整这些数字，并将“旧值”添加到“新值”，以便返回的数字始终增加或保持不变，但永远不会减少。
net_io_counters.cache_clear() 可用于使 nowrap 缓存无效。 在没有网络接口的机器上，如果 pernic 为 True ，此函数将返回 null
或 {}。

```javascript
await __A.device.getDiskIOCounters();
```

## getNetConnections(kind) <Badge type="tip" text="Since 25.3.5.1" /> {#getNetConnections}

获取系统网络连接信息

| 参数   | 类型     | 说明                    |
|:-----|:-------|:----------------------|
| kind | string | 网卡设备类型，默认为 inet （以太网） |   

| 返回值          | 说明     |
|:-------------|:-------|
| list[object] | 网络连接信息 |

返回系统网络连接信息列表，每个元素具体说明一个连接的信息，包含的属性视操作系统有差异。
Windows 下包括以下属性：

- family: 地址族；
- laddr: 本地地址；
- raddr: 远程地址；
- status: 连接的状态
- pid: 相关 pid

```javascript
await __A.device.getNetConnections();
```

## getNetIFAddrs() <Badge type="tip" text="Since 25.3.5.1" /> {#getNetIFAddrs}

获取系统网络接口信息

| 返回值          | 说明     |
|:-------------|:-------|
| list[object] | 网络接口列表 |

返回系统网络接口信息列表，元素为网络接口信息，包括以下属性：

- family: 地址族；
- address: 主 NIC 地址（始终设置）；
- netmask: 网络掩码地址（可能是 null ）；
- broadcast: 广播地址（可能是 null ）；
- ptp: 代表“点对点”(point to point)； 它是点对点接口（通常是 VPN）上的目标地址。 广播和 ptp 是互斥的。 可能为 null；

```javascript
await __A.device.getNetIFAddrs();
```

## getNetIFStats() <Badge type="tip" text="Since 25.3.5.1" /> {#getNetIFStats}

获取系统网络接口状态信息

| 返回值          | 说明     |
|:-------------|:-------|
| list[object] | 网络接口列表 |

网络接口当前状态信息列表，元素包括以下属性：

- isup: 是否已启用；
- duplex: 双工通信类型；
- speed: 以兆位 (MB) 表示的 NIC 速度，如果无法确定（例如“本地主机”），则为 0；
- mtu: NIC 的最大传输单位，以字节为单位；

```javascript
await __A.device.getNetIFStats();
```

# getSensorsTemperatures(fahrenheit) <Badge type="tip" text="Since 25.3.5.1" /> {#getSensorsTemperatures}

获取温度传感器数据

| 参数         | 类型      | 说明                |
|:-----------|:--------|:------------------|
| fahrenheit | boolean | 是否使用华氏度，默认为 false |   

| 返回值          | 说明 |
|:-------------|:---|
| list[object] |    |

返回温度传感器数据列表，如果硬件或操作系统不支持，则返回空列表。当前仅支持 Linux, FreeBSD。
元素包含以下属性：

- label: 传感器名称
- current: 当前温度
- high: 最高温度
- critical: 警告温度

```javascript
await __A.device.getSensorsTemperatures();
```

# getSensorsFans() <Badge type="tip" text="Since 25.3.5.1" /> {#getSensorsFans}

获取风扇转速数据

| 返回值          | 说明 |
|:-------------|:---|
| list[object] |    |

返回风扇转速数据列表，如果硬件或操作系统不支持，则返回空列表（当前支持 Linux, FreeBSD）。
元素包含以下属性：

- label: 风扇名称
- current: 当前转速（RPM，即 每分钟转数）；

```javascript
await __A.device.getSensorsFans();
```

# getSensorsBattery() <Badge type="tip" text="Since 25.3.5.1" /> {#getSensorsBattery}

获取电池信息

| 返回值    | 说明 |
|:-------|:---|
| object |    |

返回获取电池信息数据，如果硬件或操作系统不支持，则返回空数据，（当前支持 Linux, FreeBSD，Windows， MacOS）包含以下属性：

- percent: 电池电量剩余百分比；
- secsleft: 电池电量耗尽前还剩多少秒的粗略近似值；
- power_plugged: 是否连接了交流电源线，无法确定则为 null；

```javascript
await __A.device.getSensorsBattery();
```

# getBootTime() <Badge type="tip" text="Since 25.3.5.1" /> {#getBootTime}

获取系统已启动时间

| 返回值    | 说明 |
|:-------|:---|
| number |    |

返回自纪元(epoch)以来以秒表示的系统启动时间，在 Windows 上，如果它在不同的进程中使用，这个函数可能会返回一个减少(off by) 1
秒的时间。

```javascript
await __A.device.getBootTime();
```

## getUsers() <Badge type="tip" text="Since 25.3.5.1" /> {#getUsers}

获取已连接到系统的用户信息

| 返回值          | 说明     |
|:-------------|:-------|
| list[object] | 用户信息列表 |

返回当前已连接到系统的用户信息，包括以下字段：
- name: 用户名.
- terminal: 与用户关联的 tty 或 伪tty ，如果有，否则为 None 。
- host: 与条目关联的主机名（如果有）。
- started: 创建时间作为一个浮点数，以自纪元（epoch）以来的秒数表示。
- pid: 登录进程的 pid（如 sshd、tmux、gdm-session-worker 等）。 在 Windows 和 OpenBSD 上，pid 始终为 null 。

```javascript
await __A.device.getUsers();
```