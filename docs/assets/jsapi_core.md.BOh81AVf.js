import{_ as n,C as p,c as h,o as k,j as i,a0 as l,a as t,G as e}from"./chunks/framework.6RT3NpRm.js";const C=JSON.parse('{"title":"pyChariot.api.core","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"jsapi_core.md","filePath":"jsapi_core.md","lastUpdated":1741929652000}'),d={name:"jsapi_core.md"},r={id:"pychariot-api-core",tabindex:"-1"},g={id:"null",tabindex:"-1"},o={id:"exit",tabindex:"-1"},E={id:"getargv",tabindex:"-1"};function y(c,s,v,b,x,u){const a=p("Badge");return k(),h("div",null,[i("h1",r,[s[0]||(s[0]=t("pyChariot.api.core ")),e(a,{type:"tip",text:"Since 25.3.5.1"}),s[1]||(s[1]=t()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#pychariot-api-core","aria-label":'Permalink to "pyChariot.api.core <Badge type="tip" text="Since 25.3.5.1" />"'},"​",-1))]),s[12]||(s[12]=i("p",null,"基础功能，对 pyChariot 最基本的管理与操作",-1)),i("h2",g,[s[3]||(s[3]=t("noop() ")),e(a,{type:"tip",text:"Since 25.3.1.1"}),s[4]||(s[4]=t()),s[5]||(s[5]=i("a",{class:"header-anchor",href:"#null","aria-label":'Permalink to "noop() <Badge type="tip" text="Since 25.3.1.1" /> {#null}"'},"​",-1))]),s[13]||(s[13]=l(`<p>返回 null</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">noop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>单纯的返回 null，除了调用和通讯再无其他消耗。可作为通讯调试和性能测试的工具。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tsStart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">noop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tsStart);</span></span></code></pre></div>`,4)),i("h2",o,[s[6]||(s[6]=t("exit() ")),e(a,{type:"tip",text:"Since 25.3.1.1"}),s[7]||(s[7]=t()),s[8]||(s[8]=i("a",{class:"header-anchor",href:"#exit","aria-label":'Permalink to "exit() <Badge type="tip" text="Since 25.3.1.1" /> {#exit}"'},"​",-1))]),s[14]||(s[14]=l('<p>退出运行，返回指定值。</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">retcode</td><td style="text-align:left;">number</td><td style="text-align:left;">返回值，可忽略，默认为 0</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',4)),i("h2",E,[s[9]||(s[9]=t("getArgv(para) ")),e(a,{type:"tip",text:"Since 25.3.5.1"}),s[10]||(s[10]=t()),s[11]||(s[11]=i("a",{class:"header-anchor",href:"#getargv","aria-label":'Permalink to "getArgv(para) <Badge type="tip" text="Since 25.3.5.1" /> {#getargv}"'},"​",-1))]),s[15]||(s[15]=l('<p>获取执行 pyChariot 时使用的命令行参数。</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">para</td><td style="text-align:left;">忽略</td><td style="text-align:left;">返回所有的命令行参数；</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">number</td><td style="text-align:left;">返回对应索引位置的命令行参数，若无则返回 null；</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">string</td><td style="text-align:left;">返回指定参数名对应的值，若无则返回 null；</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Array[string]</td><td style="text-align:left;">字符串数组，其中的每个元素是对应的命令行参数值</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getArgv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取所有命令行参数</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getArgv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取第 0 个命令行参数</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __A.core.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getArgv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;appchip&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取标志为 appchip 的命令行参数</span></span></code></pre></div>',6))])}const _=n(d,[["render",y]]);export{C as __pageData,_ as default};
