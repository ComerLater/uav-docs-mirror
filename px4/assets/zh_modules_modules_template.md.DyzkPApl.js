import{_ as s,o as e,c as n,al as p}from"./chunks/framework.7vp1BMOE.js";const u=JSON.parse('{"title":"模块参考: 模板","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_template.md","filePath":"zh/modules/modules_template.md"}'),t={name:"zh/modules/modules_template.md"};function l(i,a,r,o,c,m){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="模块参考-模板" tabindex="-1">模块参考: 模板 <a class="header-anchor" href="#模块参考-模板" aria-label="Permalink to &quot;模块参考: 模板&quot;">​</a></h1><h2 id="mc-raptor" tabindex="-1">mc_raptor <a class="header-anchor" href="#mc-raptor" aria-label="Permalink to &quot;mc_raptor&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/mc_raptor" target="_blank" rel="noreferrer">modules/mc_raptor</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>RAPTOR Policy Flight Mode</p><h3 id="mc_raptor_usage" tabindex="-1">Usage <a class="header-anchor" href="#mc_raptor_usage" aria-label="Permalink to &quot;Usage {#mc_raptor_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mc_raptor &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   intref        Modify internal reference</span></span>
<span class="line"><span>     lissajous   Set Lissajous trajectory parameters</span></span>
<span class="line"><span>     &lt;A&gt;         Amplitude X [m]</span></span>
<span class="line"><span>     &lt;B&gt;         Amplitude Y [m]</span></span>
<span class="line"><span>     &lt;C&gt;         Amplitude Z [m]</span></span>
<span class="line"><span>     &lt;fa&gt;        Frequency a</span></span>
<span class="line"><span>     &lt;fb&gt;        Frequency b</span></span>
<span class="line"><span>     &lt;fc&gt;        Frequency c</span></span>
<span class="line"><span>     &lt;duration&gt;  Total duration [s]</span></span>
<span class="line"><span>     &lt;ramp&gt;      Ramp duration [s]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/templates/template_module" target="_blank" rel="noreferrer">templates/template_module</a></p><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>该部分描述所提供模块的功能。</p><p>这是一个模块的模版，该模块在后台作为任务（task）运行并且有 start/stop/status 功能。</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>该部分描述模块的高层次实现。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module start -f -p 42</span></span></code></pre></div><h3 id="module_usage" tabindex="-1">Usage <a class="header-anchor" href="#module_usage" aria-label="Permalink to &quot;Usage {#module_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-f]        Optional example flag</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  Optional example parameter</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="work-item-example" tabindex="-1">work_item_example <a class="header-anchor" href="#work-item-example" aria-label="Permalink to &quot;work_item_example&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/work_item" target="_blank" rel="noreferrer">examples/work_item</a></p><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Example of a simple module running out of a work queue.</p><h3 id="work_item_example_usage" tabindex="-1">Usage <a class="header-anchor" href="#work_item_example_usage" aria-label="Permalink to &quot;Usage {#work_item_example_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>work_item_example &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,25)])])}const h=s(t,[["render",l]]);export{u as __pageData,h as default};
