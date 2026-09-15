import{_ as s,o as n,c as e,al as p}from"./chunks/framework.7vp1BMOE.js";const h=JSON.parse('{"title":"Modules Reference: Adc (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"en/modules/modules_driver_adc.md","filePath":"en/modules/modules_driver_adc.md"}'),l={name:"en/modules/modules_driver_adc.md"};function t(i,a,r,c,d,o){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="modules-reference-adc-driver" tabindex="-1">Modules Reference: Adc (Driver) <a class="header-anchor" href="#modules-reference-adc-driver" aria-label="Permalink to &quot;Modules Reference: Adc (Driver)&quot;">​</a></h1><h2 id="ads7128" tabindex="-1">ADS7128 <a class="header-anchor" href="#ads7128" aria-label="Permalink to &quot;ADS7128&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/adc/ads7128" target="_blank" rel="noreferrer">drivers/adc/ads7128</a></p><h3 id="ADS7128_usage" tabindex="-1">Usage <a class="header-anchor" href="#ADS7128_usage" aria-label="Permalink to &quot;Usage {#ADS7128_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ADS7128 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es) (onboard sensors; shared bus only if -b is</span></span>
<span class="line"><span>                 given)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es) (connector sensors, including shared</span></span>
<span class="line"><span>                 buses)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tla2528" tabindex="-1">TLA2528 <a class="header-anchor" href="#tla2528" aria-label="Permalink to &quot;TLA2528&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/adc/tla2528" target="_blank" rel="noreferrer">drivers/adc/tla2528</a></p><h3 id="TLA2528_usage" tabindex="-1">Usage <a class="header-anchor" href="#TLA2528_usage" aria-label="Permalink to &quot;Usage {#TLA2528_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TLA2528 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es) (onboard sensors; shared bus only if -b is</span></span>
<span class="line"><span>                 given)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es) (connector sensors, including shared</span></span>
<span class="line"><span>                 buses)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="adc" tabindex="-1">adc <a class="header-anchor" href="#adc" aria-label="Permalink to &quot;adc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/adc/board_adc" target="_blank" rel="noreferrer">drivers/adc/board_adc</a></p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>ADC driver.</p><h3 id="adc_usage" tabindex="-1">Usage <a class="header-anchor" href="#adc_usage" aria-label="Permalink to &quot;Usage {#adc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>adc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test</span></span>
<span class="line"><span>     [-n]        Do not publish ADC report, only system power</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ads1115" tabindex="-1">ads1115 <a class="header-anchor" href="#ads1115" aria-label="Permalink to &quot;ads1115&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/adc/ads1115" target="_blank" rel="noreferrer">drivers/adc/ads1115</a></p><h3 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver to enable an external <a href="https://www.adafruit.com/product/1085" target="_blank" rel="noreferrer">ADS1115</a> ADC connected via I2C.</p><p>The driver is included by default in firmware for boards that do not have an internal analog to digital converter, such as <a href="./../flight_controller/raspberry_pi_pilotpi">PilotPi</a> or <a href="./../flight_controller/cuav_nora">CUAV Nora</a> (search for <code>CONFIG_DRIVERS_ADC_ADS1115</code> in board configuration files).</p><p>It is enabled/disabled using the <a href="./../advanced_config/parameter_reference#ADC_ADS1115_EN">ADC_ADS1115_EN</a> parameter, and is disabled by default. If enabled, internal ADCs are not used.</p><h3 id="ads1115_usage" tabindex="-1">Usage <a class="header-anchor" href="#ads1115_usage" aria-label="Permalink to &quot;Usage {#ads1115_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ads1115 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es) (onboard sensors; shared bus only if -b is</span></span>
<span class="line"><span>                 given)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es) (connector sensors, including shared</span></span>
<span class="line"><span>                 buses)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 72</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ads7953" tabindex="-1">ads7953 <a class="header-anchor" href="#ads7953" aria-label="Permalink to &quot;ads7953&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/adc/ads7953" target="_blank" rel="noreferrer">drivers/adc/ads7953</a></p><h3 id="ads7953_usage" tabindex="-1">Usage <a class="header-anchor" href="#ads7953_usage" aria-label="Permalink to &quot;Usage {#ads7953_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ads7953 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es) (onboard sensors; shared bus only if -b is</span></span>
<span class="line"><span>                 given)</span></span>
<span class="line"><span>     [-S]        External SPI bus (connector sensors, including shared buses)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,27)])])}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
