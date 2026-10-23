import{_ as e,o as s,c as n,al as t}from"./chunks/framework.7vp1BMOE.js";const u=JSON.parse('{"title":"Modules Reference: Template","description":"","frontmatter":{},"headers":[],"relativePath":"en/modules/modules_template.md","filePath":"en/modules/modules_template.md"}'),p={name:"en/modules/modules_template.md"};function l(i,a,o,r,c,m){return s(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="modules-reference-template" tabindex="-1">Modules Reference: Template <a class="header-anchor" href="#modules-reference-template" aria-label="Permalink to &quot;Modules Reference: Template&quot;">​</a></h1><h2 id="mc-raptor" tabindex="-1">mc_raptor <a class="header-anchor" href="#mc-raptor" aria-label="Permalink to &quot;mc_raptor&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/mc_raptor" target="_blank" rel="noreferrer">modules/mc_raptor</a></p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>RAPTOR Policy Flight Mode</p><h3 id="mc_raptor_usage" tabindex="-1">Usage <a class="header-anchor" href="#mc_raptor_usage" aria-label="Permalink to &quot;Usage {#mc_raptor_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mc_raptor &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/templates/template_module" target="_blank" rel="noreferrer">templates/template_module</a></p><h3 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Section that describes the provided module functionality.</p><p>This is a template for a module running as a task in the background with start/stop/status functionality.</p><h3 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>Section describing the high-level implementation of this module.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module start -f -p 42</span></span></code></pre></div><h3 id="module_usage" tabindex="-1">Usage <a class="header-anchor" href="#module_usage" aria-label="Permalink to &quot;Usage {#module_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-f]        Optional example flag</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  Optional example parameter</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="work-item-example" tabindex="-1">work_item_example <a class="header-anchor" href="#work-item-example" aria-label="Permalink to &quot;work_item_example&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/work_item" target="_blank" rel="noreferrer">examples/work_item</a></p><h3 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Example of a simple module running out of a work queue.</p><h3 id="work_item_example_usage" tabindex="-1">Usage <a class="header-anchor" href="#work_item_example_usage" aria-label="Permalink to &quot;Usage {#work_item_example_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>work_item_example &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,25)])])}const h=e(p,[["render",l]]);export{u as __pageData,h as default};
