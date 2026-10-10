import{_ as s,o as e,c as n,al as p}from"./chunks/framework.7vp1BMOE.js";const u=JSON.parse('{"title":"모듈 참고: 템플릿","description":"","frontmatter":{},"headers":[],"relativePath":"ko/modules/modules_template.md","filePath":"ko/modules/modules_template.md"}'),t={name:"ko/modules/modules_template.md"};function l(i,a,o,r,c,m){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="모듈-참고-템플릿" tabindex="-1">모듈 참고: 템플릿 <a class="header-anchor" href="#모듈-참고-템플릿" aria-label="Permalink to &quot;모듈 참고: 템플릿&quot;">​</a></h1><h2 id="mc-raptor" tabindex="-1">mc_raptor <a class="header-anchor" href="#mc-raptor" aria-label="Permalink to &quot;mc_raptor&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/mc_raptor" target="_blank" rel="noreferrer">modules/mc_raptor</a></p><h3 id="설명" tabindex="-1">설명 <a class="header-anchor" href="#설명" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>RAPTOR Policy Flight Mode</p><h3 id="mc_raptor_usage" tabindex="-1">Usage <a class="header-anchor" href="#mc_raptor_usage" aria-label="Permalink to &quot;Usage {#mc_raptor_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mc_raptor &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/templates/template_module" target="_blank" rel="noreferrer">templates/template_module</a></p><h3 id="설명-1" tabindex="-1">설명 <a class="header-anchor" href="#설명-1" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>제공된 모듈 기능을 설명하는 섹션입니다.</p><p>시작/중지/상태 기능이 있는 백그라운드에서 작업으로 실행되는 모듈의 템플릿입니다.</p><h3 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>이 모듈의 상위 수준 구현을 설명하는 섹션입니다.</p><h3 id="예" tabindex="-1">예 <a class="header-anchor" href="#예" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module start -f -p 42</span></span></code></pre></div><h3 id="module_usage" tabindex="-1">Usage <a class="header-anchor" href="#module_usage" aria-label="Permalink to &quot;Usage {#module_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-f]        Optional example flag</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  Optional example parameter</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="work-item-example" tabindex="-1">work_item_example <a class="header-anchor" href="#work-item-example" aria-label="Permalink to &quot;work_item_example&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/work_item" target="_blank" rel="noreferrer">examples/work_item</a></p><h3 id="설명-2" tabindex="-1">설명 <a class="header-anchor" href="#설명-2" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>작업 대기열에서 실행되는 간단한 모듈의 예입니다.</p><h3 id="work_item_example_usage" tabindex="-1">Usage <a class="header-anchor" href="#work_item_example_usage" aria-label="Permalink to &quot;Usage {#work_item_example_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>work_item_example &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,25)])])}const h=s(t,[["render",l]]);export{u as __pageData,h as default};
