import{_ as a,c as t,o as e,a0 as s}from"./chunks/framework.6RT3NpRm.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md","lastUpdated":1741753045000}'),l={name:"getting-started.md"};function p(r,i,h,n,o,d){return e(),t("div",null,i[0]||(i[0]=[s(`<h1 id="getting-started" tabindex="-1">快速开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;快速开始 {#getting-started}&quot;">​</a></h1><p>pyChariot 是个跨平台的绿色软件，无需安装即可使用。</p><h2 id="下载与安装" tabindex="-1">下载与安装 <a class="header-anchor" href="#下载与安装" aria-label="Permalink to &quot;下载与安装&quot;">​</a></h2><p>pyChariot 支持两种打包形式：<em><strong>单文件方式</strong></em> 和 <em><strong>多文件方式</strong></em>。</p><ul><li>多文件方式是最常见的发布形式，所有的文件，包括可执行文件、支持库、资源文件等都在一个目录下。由于文件数量比较多，会显得有点杂乱。</li><li>单文件方式将运行需要的所有文件压缩打包进了单个的可执行文件，运行时会自动解压到系统临时文件夹，并运行对应的可执行文件。 虽然多了一个解压的步骤，但在当前 CPU 和 SSD 的加持下，几乎无感。</li></ul><p>单文件方式相对更为简洁，本手册将以单文件方式为主来介绍，多文件方式是类似的做法。</p><ul><li><p><a href="http://localhost:5173/pyChariot/changelog.html" target="_blank" rel="noreferrer">点这里下载对应版本</a>，下载前请先确认 <em><strong>操作系统</strong></em> 和 <em><strong>硬件架构</strong></em> ，确保下载了适用的版本。</p><ul><li>下载包中带有 onefile 字样的为单文件方式；</li><li>对于使用 Intel 或 AMD 处理器芯片的的 Windows 来说，请下载 win-amd64 版；</li><li>ARM 架构通过转译可使用 amd64 架构的版本（需操作系统支持）；</li></ul></li><li><p>下载完成后将文件解压到您希望存放的地方（例如 <code>C:\\pyChariot</code>）即可。 <em>存放的文件夹名称请使用 ANSI 字符（英文字母+数字），以免带来不必要的问题。</em></p></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MynYd" id="tab-xfF0ZHq" checked><label data-title="Windows" for="tab-xfF0ZHq">Windows</label><input type="radio" name="group-MynYd" id="tab-6rnri_b"><label data-title="Linux" for="tab-6rnri_b">Linux</label></div><div class="blocks"><div class="language-powershell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">md C:\\pyChariot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd C:\\pyChariot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move C:\\download\\pyChariot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.exe </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pyChariot.exe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move C:\\download\\pyChariotKit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.exe </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pyChariotKit.exe</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/pyChariot</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/pyChariot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvfz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pyChariot.tgz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div></div></div><h2 id="开发与调试" tabindex="-1">开发与调试 <a class="header-anchor" href="#开发与调试" aria-label="Permalink to &quot;开发与调试&quot;">​</a></h2><p>pyChariot 共有两个可执行文件：Chariot.exe 和 ChariotKit.exe 。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>pyChariot.exe</td><td>运行环境，供生产环境使用，需分发给最终用户。</td></tr><tr><td>pyChariotKit.exe</td><td>开发环境，供开发调试使用，具调试工具。</td></tr></tbody></table><p>鼠标双击 .exe 即可运行，最低支持 Win7，建议 Win10 及更高。 注：运行后将自动创建相关文件和目录结构，点击查看详细的 <a href="./dirs-and-files.html">文件与目录结构</a> 说明 。</p><p>pyChariot.exe 和 pyChariotKit.exe 提供同样的功能，差别在于 pyChariotKit.exe 还内置了一些开发调试工具，同时在运行中会打开终端窗口和浏览器组件调试窗口。 一般来说，先用 pyChariotKit 开发和调试，然后通过 pyChariot 确认，最后进行分发。</p><p>应用的开发支持主流的前端开发框架，例如：React、Vue、Angular、JQuery ... 应用和 WebApp 的开发调试并无太大差异。具体请参阅对应开发框架的相关文档。</p><p>开发和调试中请使用 pyChariotKit。</p><p>pyChariotKit 包含了一些基础的调试功能，其运行时：</p><ul><li>打开终端窗口显示运行日志、错误信息等底层代码信息，关闭终端窗口即可关闭整个程序；</li><li>在独立窗口中打开浏览器组件的开发者工具（DevTools），可通过 F12 等快捷键进行切换；</li><li>在主窗口点击右键，会打开上下文关联菜单；</li></ul><p>pyChariot 的小应用运行于系统浏览器控件之上，支持前端开发框架，可按 WebApp 同样的方式来进行调试。 其中最常用的就是开发者工具（DevTools），也可以使用您惯用的其他工具。 若需进一步自动化调试流程，建议结合浏览器开发工具的自定义配置或专用测试工具（如 Puppeteer、Selenium）。</p><p>调试完成后，可以用 pyChariot 进行最后的测试，pyChariot 不会打开终端和开发者工具窗口，同时屏蔽右键上下文关联菜单。</p><p>更多使用开发者工具（DevTools）进行调试的方法和技巧，请参阅 <a href="https://developer.chrome.com/docs/devtools?hl=zh-cn" target="_blank" rel="noreferrer">DevTools</a>。</p><p>在使用 edgechromium 时可以启用远程调试，编写 Playwright 测试，更多请参阅 <a href="https://playwright.dev/" target="_blank" rel="noreferrer">Playwright</a>。</p><h2 id="分发给最终用户" tabindex="-1">分发给最终用户 <a class="header-anchor" href="#分发给最终用户" aria-label="Permalink to &quot;分发给最终用户&quot;">​</a></h2><p>将必须的文件和目录分发给最终用户即可，即：</p><ol><li>pyChariot.exe；</li><li>appchips 目录，其中包含您的应用子文件夹；</li><li>其他项目需要的文件和目录；</li></ol><p>简单的将上述文件分发给最终用户，然后让最终用户双击 pyChariot.exe 即可。</p><p>更进一步，可以考虑用安装制作工具（例如 NSIS）提供可安装版本。</p>`,26)]))}const c=a(l,[["render",p]]);export{g as __pageData,c as default};
