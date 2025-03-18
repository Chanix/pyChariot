import{_ as l,c as a,o as i,a0 as t}from"./chunks/framework.6RT3NpRm.js";const _=JSON.parse('{"title":"更新日志","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"changelog.md","filePath":"changelog.md","lastUpdated":1741929652000}'),o={name:"changelog.md"};function r(p,e,n,c,d,h){return i(),a("div",null,e[0]||(e[0]=[t('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><h2 id="路线图" tabindex="-1">路线图 <a class="header-anchor" href="#路线图" aria-label="Permalink to &quot;路线图&quot;">​</a></h2><p><em>计划时间： 2025/04/01</em></p><p>🚀 功能与优化</p><ul><li>扩展对象增加 mainwin 模块，提供主窗口操作；</li><li>扩展对象增加 hotkey 模块，提供系统热键支持；</li><li>扩展对象增加 python 模块，提供 python 支持；</li><li>便于开发者使用的小应用独立编译打包功能；</li><li>编译器优化升级；</li><li>跨操作平台</li></ul><p>🐞修补与更正</p><ul><li>调整目录结构，对可能带来的困扰深表歉意： <ul><li>新增目录 <code>pyChariot.files</code>，</li><li>将 <code>wvdata</code>、<code>data</code>、<code>temp</code> 等目录移动到该目录下；</li><li>取消原文件模式的系统热键功能，修改为通过扩展对象 hotkey；</li></ul></li></ul><h2 id="_25-3-5-100" tabindex="-1">25.3.5.100 <a class="header-anchor" href="#_25-3-5-100" aria-label="Permalink to &quot;25.3.5.100&quot;">​</a></h2><p><em>2025/03/05</em></p><p>🚀 功能与优化</p><ul><li>扩展对象增加 clipboard 模块，提供剪贴板操作；</li><li>扩展对象增加 device 模块，提供设备信息；</li><li>扩展对象增加 dialog 模块，提供对话框操作；</li><li>扩展对象增加 env 模块，提供环境变量操作；</li><li>扩展对象增加 memdb 模块，提供开箱即用的简单内存数据库；</li><li>扩展对象增加 process 模块，提供系统进程操作；</li><li>扩展对象的 core 模块新增 getArgv；</li><li>应用退出运行后，删除其临时目录中的所有文件（不保证一定被删除）；</li><li>允许通过环境变量 <code>PYCHARIOT_ADDITIONAL_BROWSER_ARGUMENTS</code> 向 Edge 传递更多参数；</li><li>新增主窗口自定义注入脚本，当主窗口装载完成后执行自定义代码；</li><li>增加系统级热键功能，当按下热键时，在主窗口执行自定义代码；</li><li>优化运行方式的判断逻辑；</li></ul><p>🐞修补与更正</p><ul><li>pyChariot 不再打开终端窗口；</li><li>从本版起，只提供单可执行文件的下载；</li></ul><p><a href="https://github.com/Chanix/pyChariot/releases/tag/v25.3.5.100" target="_blank" rel="noreferrer">GitHub 下载</a></p><h2 id="_25-3-1-83" tabindex="-1">25.3.1.83 <a class="header-anchor" href="#_25-3-1-83" aria-label="Permalink to &quot;25.3.1.83&quot;">​</a></h2><p><em>2025/03/01</em></p><p>pyChariot 的第一个初始版本。</p><p>以 WebApp 技术为基础生成桌面应用做小工具，已经有段很长的时间了。之前偷懒，都是将代码复制粘贴完事。 为了方便后期复用，趁着最近有空，将前期的代码整理和抽象了一下，做了这个基础版本。</p><p>初始版本确定了基础的架构和模式，仅提供 core 模块（仅包括 noop, exit）。</p><p><a href="https://github.com/Chanix/pyChariot/releases/tag/v25.3.1.83" target="_blank" rel="noreferrer">GitHub 下载</a></p>',20)]))}const u=l(o,[["render",r]]);export{_ as __pageData,u as default};
