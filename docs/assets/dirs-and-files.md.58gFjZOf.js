import{_ as s,c as p,o as n,ae as e}from"./chunks/framework.BLKehFbR.js";const _=JSON.parse('{"title":"文件目录结构","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"dirs-and-files.md","filePath":"dirs-and-files.md","lastUpdated":1740971633000}'),i={name:"dirs-and-files.md"};function l(t,a,c,o,d,h){return n(),p("div",null,a[0]||(a[0]=[e(`<h1 id="文件目录结构" tabindex="-1">文件目录结构 <a class="header-anchor" href="#文件目录结构" aria-label="Permalink to &quot;文件目录结构&quot;">​</a></h1><p>pyChariot 被设计为方便迁移的绿色软件，所需文件皆保存于 <code>pyChariot 主目录</code> 之下。</p><p>由于这样的设计，迁移、删除或者复制您的 pyChariot 环境，只需对此目录进行文件操作即可：</p><ul><li>使用时，可以保存在移动存储设备（例如移动硬盘）上，即插即用;</li><li>复制时，完整复制目录即可，与原环境完全一致;</li><li>删除时，删除目录即可，不留任何垃圾。</li></ul><h2 id="pychariot-home" tabindex="-1">PYCHARIOT_HOME <a class="header-anchor" href="#pychariot-home" aria-label="Permalink to &quot;PYCHARIOT_HOME&quot;">​</a></h2><p>一般来说，pyChariot 可执行文件的保存位置，即为 <code>pyChariot 主目录</code>，即 <code>PYCHARIOT_HOME</code>。</p><p>以 Windows 为例：pyChariot 可执行文件解压保存在 <code>D:\\pyChariot</code> 下，则 <code>PYCHARIOT_HOME</code> 为 <code>D:\\pyChariot</code> ，所需文件都保存在这个目录之下。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    PYCHARIOT_HOME              # D:\\pyChariot</span></span>
<span class="line"><span>        |   pyChariot.exe       # 文件：可执行文件，运行环境</span></span>
<span class="line"><span>        |   pyChariotKit.exe    # 文件：可执行文件，开发调试环境</span></span>
<span class="line"><span>        +---packages            # 目录：外部工具目录</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        +---temp                # 目录：临时文件目录</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        +---data                # 目录：应用数据目录</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        +---wvdata              # 目录：浏览器组件数据目录</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        \\---appchips            # 目录：应用目录</span></span></code></pre></div><p>在这些目录下，再按照应用标识建立子目录，存放相应文件。</p><p>例如，有个项目，项目标识为 <code>{appchip_id}</code>，则：</p><ul><li>应用的程序文件目录： <code>PYCHARIOT_HOME/appchips/{appchip_id}</code>；</li><li>应用的临时文件目录： <code>PYCHARIOT_HOME/temp/{appchip_id}</code>；</li><li>应用的数据文件目录： <code>PYCHARIOT_HOME/data/{appchip_id}</code>；</li><li>应用的浏览器组件数据目录： <code>PYCHARIOT_HOME/data/{appchip_id}</code>；</li></ul><p>这样约定的是目的是为了更便捷和统一的管理应用的各种文件。使用中，请按照这个约定来存储对应的文件。</p><h2 id="pychariot-home-appchips" tabindex="-1">PYCHARIOT_HOME/appchips <a class="header-anchor" href="#pychariot-home-appchips" aria-label="Permalink to &quot;PYCHARIOT_HOME/appchips&quot;">​</a></h2><p>运行于 pyChariot 上的应用，称为小应用 <code>appchip</code>。 所有小应用的程序文件皆存放在 appchips 下，以小应用的标识作为其存放目录名称，其结构如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    appchip_id                  # 目录名即小应用的标识，请尽量使用 ANSI 字符（英语+数字）。</span></span>
<span class="line"><span>        |   appchip.json        # 小应用的描述文件</span></span>
<span class="line"><span>        |                       #   详细记录了小应用的详细信息，必须存在。</span></span>
<span class="line"><span>        |                       #   当 pyChariot 装载启动小应用时会读取该文件。</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        |   appchip.ico         # Windows 操作系统下，小应用的窗口图标（可选）。</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        +---js                  # 小应用使用的脚本文件。</span></span>
<span class="line"><span>        |   |    inject.js      # 小应用的自定义主窗口注入脚本。</span></span>
<span class="line"><span>        |   \\--- hotkeys        # 系统级热键脚本目录：</span></span>
<span class="line"><span>        |           f1.js       #    热键 f1 对应的脚本；</span></span>
<span class="line"><span>        |           ctrl+f1.js  #    热键 ctrl+f1 对应的脚本；</span></span>
<span class="line"><span>        |           ... ...</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        \\---webroot             # 应用 httpd 使用的文件</span></span>
<span class="line"><span>                                #   本地 httpd 服务器将以本目录作为 / 。</span></span></code></pre></div><ul><li>js/inject.js 主窗口打开后执行该脚本文件，运行此脚本时，扩展功能模块和常用变量已就绪，可以正常使用；</li><li>hotkeys 目录下存放系统级热键定义，以热键的按键为文件名，当热键被按下时，在主窗口内执行其中的脚本代码；</li></ul><p><em><br>嗯……本来想叫 “appclip”的，打错了……不过无论是 “薯片”还是 “芯片”，我都喜欢，就叫 <code>appchip</code> 吧 😃</em></p><h2 id="pychariot-home-wvdata" tabindex="-1">PYCHARIOT_HOME/wvdata <a class="header-anchor" href="#pychariot-home-wvdata" aria-label="Permalink to &quot;PYCHARIOT_HOME/wvdata&quot;">​</a></h2><p>浏览器组件数据存放目录。</p><p>浏览器组件数据和系统浏览器数据是隔离的，因此应用的数据不会和系统浏览器中的数据相互影响（例如登录数据，Cookie数据）。 这样可以尽最大可能的保证独立性。</p><p>因此，应用第一次运行时会略微慢一些（需要重新生成和保存这些数据）。同样基于此，不建议将 pyChariot 保存在劣质 U 盘中，因其读写可靠性甚至差于移动机械硬盘。</p>`,21)]))}const C=s(i,[["render",l]]);export{_ as __pageData,C as default};
