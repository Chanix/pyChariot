import{_ as n,C as d,c as p,o as h,j as i,ae as l,a as e,G as a}from"./chunks/framework.BLKehFbR.js";const v=JSON.parse('{"title":"pyChariot.dialog","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"jsapi_dialog.md","filePath":"jsapi_dialog.md","lastUpdated":1741056614000}'),r={name:"jsapi_dialog.md"},g={id:"confirm",tabindex:"-1"},o={id:"openDir",tabindex:"-1"},k={id:"openFile",tabindex:"-1"},y={id:"saveFile",tabindex:"-1"};function E(x,t,f,b,c,u){const s=d("Badge");return h(),p("div",null,[t[12]||(t[12]=i("h1",{id:"pychariot-dialog",tabindex:"-1"},[e("pyChariot.dialog "),i("a",{class:"header-anchor",href:"#pychariot-dialog","aria-label":'Permalink to "pyChariot.dialog"'},"​")],-1)),t[13]||(t[13]=i("p",null,"对话框管理与操作",-1)),i("h2",g,[t[0]||(t[0]=e("confirm(title, message) ")),a(s,{type:"tip",text:"Since 25.3.5.1"}),t[1]||(t[1]=e()),t[2]||(t[2]=i("a",{class:"header-anchor",href:"#confirm","aria-label":'Permalink to "confirm(title, message) <Badge type="tip" text="Since 25.3.5.1" /> {#confirm}"'},"​",-1))]),t[14]||(t[14]=l('<p>打开确认对话框</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">对话框窗口标题，默认为 &#39;&#39;。</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">对话框窗口信息，默认为 &#39;&#39;。</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">boolean</td><td style="text-align:left;"></td></tr></tbody></table><p>打开确认对话框，并等待用户选择后返回。如果用户点击了确认，返回 true，其他返回 false。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请确认&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;您真的确认要执行吗？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',5)),i("h2",o,[t[3]||(t[3]=e("openDir(directory, allow_multiple) ")),a(s,{type:"tip",text:"Since 25.3.5.1"}),t[4]||(t[4]=e()),t[5]||(t[5]=i("a",{class:"header-anchor",href:"#openDir","aria-label":'Permalink to "openDir(directory, allow_multiple) <Badge type="tip" text="Since 25.3.5.1" /> {#openDir}"'},"​",-1))]),t[15]||(t[15]=l('<p>打开确认对话框</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">directory</td><td style="text-align:left;">string</td><td style="text-align:left;">默认打开的目录，默认为 null。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 null，默认打开正在运行的小应用的 data 目录；</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 &#39;&#39;，默认打开上次调用时打开的目录；</td></tr><tr><td style="text-align:left;">allow_multiple</td><td style="text-align:left;">boolean</td><td style="text-align:left;">是否允许多选，默认为 false。</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">list[string]</td><td style="text-align:left;"></td></tr></tbody></table><p>打开对话框，并等待用户选择目录后返回。返回列表，其中的元素为用户选择的目录路径。</p><ul><li>多选，列表中为多个元素；</li><li>单选为，列表中仅 1 个元素；</li><li>取消或其他返回空列表；</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openDir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openDir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openDir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',8)),i("h2",k,[t[6]||(t[6]=e("openFile(directory, file_types, allow_multiple) ")),a(s,{type:"tip",text:"Since 25.3.5.1"}),t[7]||(t[7]=e()),t[8]||(t[8]=i("a",{class:"header-anchor",href:"#openFile","aria-label":'Permalink to "openFile(directory, file_types, allow_multiple) <Badge type="tip" text="Since 25.3.5.1" /> {#openFile}"'},"​",-1))]),t[16]||(t[16]=l('<p>打开确认对话框</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">directory</td><td style="text-align:left;">string</td><td style="text-align:left;">默认打开的目录，默认为 null。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 null，默认打开正在运行的小应用的 data 目录；</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 &#39;&#39;，默认打开上次调用时打开的目录；</td></tr><tr><td style="text-align:left;">file_types</td><td style="text-align:left;">string</td><td style="text-align:left;">文件类型选择，默认为 &#39; (*.*)&#39;。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">格式 <code>说明 (*.ext1;*.ext2;*.ext3...)</code>，多个之间用 <code>|</code>分隔。</td></tr><tr><td style="text-align:left;">allow_multiple</td><td style="text-align:left;">boolean</td><td style="text-align:left;">是否允许多选，默认为 false。</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">list[string]</td><td style="text-align:left;"></td></tr></tbody></table><p>打开对话框，并等待用户选择文件后返回。返回列表，其中的元素为用户选择的文件路径。</p><ul><li>多选，列表中为多个元素；</li><li>单选为，列表中仅 1 个元素；</li><li>取消或其他返回空列表；</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;所有文件 (*.*) | 文档文件 (*.doc;*.md)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7)),i("h2",y,[t[9]||(t[9]=e("saveFile(directory, file_types) ")),a(s,{type:"tip",text:"Since 25.3.5.1"}),t[10]||(t[10]=e()),t[11]||(t[11]=i("a",{class:"header-anchor",href:"#saveFile","aria-label":'Permalink to "saveFile(directory, file_types) <Badge type="tip" text="Since 25.3.5.1" /> {#saveFile}"'},"​",-1))]),t[17]||(t[17]=l('<p>打开确认对话框</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">directory</td><td style="text-align:left;">string</td><td style="text-align:left;">默认打开的目录，默认为 null。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 null，默认打开正在运行的小应用的 data 目录；</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">如果该参数值为 &#39;&#39;，默认打开上次调用时打开的目录；</td></tr><tr><td style="text-align:left;">file_types</td><td style="text-align:left;">string</td><td style="text-align:left;">文件类型选择，默认为 &#39; (*.*)&#39;。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">格式 <code>说明 (*.ext1;*.ext2;*.ext3...)</code>，多个之间用 <code>|</code>分隔。</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr></tbody></table><p>打开对话框，并等待用户选择文件后返回。</p><p>返回用户选择要保存的文件名，如果取消则返回 null。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">saveFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">saveFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;所有文件 (*.*) | 文档文件 (*.doc;*.md)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7))])}const _=n(r,[["render",E]]);export{v as __pageData,_ as default};
