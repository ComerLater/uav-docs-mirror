import{_ as s,o as n,c as e,al as p}from"./chunks/framework.7vp1BMOE.js";const h=JSON.parse('{"title":"모듈 참조: 드라이버","description":"","frontmatter":{},"headers":[],"relativePath":"ko/modules/modules_driver.md","filePath":"ko/modules/modules_driver.md"}'),t={name:"ko/modules/modules_driver.md"};function l(i,a,r,o,c,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="모듈-참조-드라이버" tabindex="-1">모듈 참조: 드라이버 <a class="header-anchor" href="#모듈-참조-드라이버" aria-label="Permalink to &quot;모듈 참조: 드라이버&quot;">​</a></h1><p>하위 카테고리:</p><ul><li><a href="./modules_driver_adc">Adc</a></li><li><a href="./modules_driver_airspeed_sensor">Airspeed Sensor</a></li><li><a href="./modules_driver_baro">Baro</a></li><li><a href="./modules_driver_camera">Camera</a></li><li><a href="./modules_driver_distance_sensor">Distance Sensor</a></li><li><a href="./modules_driver_imu">Imu</a></li><li><a href="./modules_driver_ins">Ins</a></li><li><a href="./modules_driver_magnetometer">Magnetometer</a></li><li><a href="./modules_driver_optical_flow">Optical Flow</a></li><li><a href="./modules_driver_radio_control">Radio Control</a></li><li><a href="./modules_driver_rpm_sensor">Rpm Sensor</a></li><li><a href="./modules_driver_transponder">Transponder</a></li></ul><h2 id="atxxxx" tabindex="-1">atxxxx <a class="header-anchor" href="#atxxxx" aria-label="Permalink to &quot;atxxxx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/osd/atxxxx" target="_blank" rel="noreferrer">drivers/osd/atxxxx</a></p><h3 id="설명" tabindex="-1">설명 <a class="header-anchor" href="#설명" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>OSD driver for the ATXXXX chip that is mounted on the OmnibusF4SD board for example.</p><p>It can be enabled with the OSD_ATXXXX_CFG parameter.</p><h3 id="atxxxx_usage" tabindex="-1">Usage <a class="header-anchor" href="#atxxxx_usage" aria-label="Permalink to &quot;Usage {#atxxxx_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>atxxxx &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="auterion-autostarter" tabindex="-1">auterion_autostarter <a class="header-anchor" href="#auterion-autostarter" aria-label="Permalink to &quot;auterion_autostarter&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/auterion_autostarter" target="_blank" rel="noreferrer">drivers/auterion_autostarter</a></p><h3 id="설명-1" tabindex="-1">설명 <a class="header-anchor" href="#설명-1" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for starting and auto-detecting different power monitors.</p><h3 id="auterion_autostarter_usage" tabindex="-1">Usage <a class="header-anchor" href="#auterion_autostarter_usage" aria-label="Permalink to &quot;Usage {#auterion_autostarter_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>auterion_autostarter &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batmon" tabindex="-1">batmon <a class="header-anchor" href="#batmon" aria-label="Permalink to &quot;batmon&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/smart_battery/batmon" target="_blank" rel="noreferrer">drivers/smart_battery/batmon</a></p><h3 id="설명-2" tabindex="-1">설명 <a class="header-anchor" href="#설명-2" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for SMBUS Communication with BatMon enabled smart-battery Setup/usage information: <a href="https://rotoye.com/batmon-tutorial/" target="_blank" rel="noreferrer">https://rotoye.com/batmon-tutorial/</a></p><h3 id="예" tabindex="-1">예 <a class="header-anchor" href="#예" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>To start at address 0x0B, on bus 4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>batmon start -X -a 11 -b 4</span></span></code></pre></div><h3 id="batmon_usage" tabindex="-1">Usage <a class="header-anchor" href="#batmon_usage" aria-label="Permalink to &quot;Usage {#batmon_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>batmon &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   man_info      Prints manufacturer info.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   suspend       Suspends the driver from rescheduling the cycle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   resume        Resumes the driver from suspension.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batt-smbus" tabindex="-1">batt_smbus <a class="header-anchor" href="#batt-smbus" aria-label="Permalink to &quot;batt_smbus&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/batt_smbus" target="_blank" rel="noreferrer">drivers/batt_smbus</a></p><h3 id="설명-3" tabindex="-1">설명 <a class="header-anchor" href="#설명-3" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Smart battery driver for the BQ40Z50 fuel gauge IC.</p><h3 id="예-1" tabindex="-1">예 <a class="header-anchor" href="#예-1" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>To write to flash to set parameters. address, number_of_bytes, byte0, ... , byteN</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>batt_smbus -X write_flash 19069 2 27 0</span></span></code></pre></div><h3 id="batt_smbus_usage" tabindex="-1">Usage <a class="header-anchor" href="#batt_smbus_usage" aria-label="Permalink to &quot;Usage {#batt_smbus_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>batt_smbus &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   man_info      Prints manufacturer info.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   unseal        Unseals the devices flash memory to enable write_flash</span></span>
<span class="line"><span>                 commands.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   seal          Seals the devices flash memory to disable write_flash commands.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   suspend       Suspends the driver from rescheduling the cycle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   resume        Resumes the driver from suspension.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   write_flash   Writes to flash. The device must first be unsealed with the</span></span>
<span class="line"><span>                 unseal command.</span></span>
<span class="line"><span>     [address]   The address to start writing.</span></span>
<span class="line"><span>     [number of bytes] Number of bytes to send.</span></span>
<span class="line"><span>     [data[0]...data[n]] One byte of data at a time separated by spaces.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bst" tabindex="-1">bst <a class="header-anchor" href="#bst" aria-label="Permalink to &quot;bst&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/telemetry/bst" target="_blank" rel="noreferrer">drivers/telemetry/bst</a></p><h3 id="bst_usage" tabindex="-1">Usage <a class="header-anchor" href="#bst_usage" aria-label="Permalink to &quot;Usage {#bst_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bst &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="dshot" tabindex="-1">dshot <a class="header-anchor" href="#dshot" aria-label="Permalink to &quot;dshot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/dshot" target="_blank" rel="noreferrer">drivers/dshot</a></p><h3 id="설명-4" tabindex="-1">설명 <a class="header-anchor" href="#설명-4" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This is the DShot output driver. It can be used as drop-in replacement to use DShot as ESC communication protocol instead of PWM.</p><p>It supports:</p><ul><li>DShot150, DShot300, DShot600</li><li>telemetry via separate UART and publishing as esc_status message</li></ul><h3 id="dshot_usage" tabindex="-1">Usage <a class="header-anchor" href="#dshot_usage" aria-label="Permalink to &quot;Usage {#dshot_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dshot &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   telemetry     Enable Telemetry on a UART</span></span>
<span class="line"><span>     -d &lt;val&gt;    UART device</span></span>
<span class="line"><span>                 values: &lt;device&gt;</span></span>
<span class="line"><span>     [-x]        Swap RX/TX pins</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-gps" tabindex="-1">fake_gps <a class="header-anchor" href="#fake-gps" aria-label="Permalink to &quot;fake_gps&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/fake_gps" target="_blank" rel="noreferrer">examples/fake_gps</a></p><h3 id="설명-5" tabindex="-1">설명 <a class="header-anchor" href="#설명-5" aria-label="Permalink to &quot;설명&quot;">​</a></h3><h3 id="fake_gps_usage" tabindex="-1">Usage <a class="header-anchor" href="#fake_gps_usage" aria-label="Permalink to &quot;Usage {#fake_gps_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fake_gps &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-imu" tabindex="-1">fake_imu <a class="header-anchor" href="#fake-imu" aria-label="Permalink to &quot;fake_imu&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/fake_imu" target="_blank" rel="noreferrer">examples/fake_imu</a></p><h3 id="설명-6" tabindex="-1">설명 <a class="header-anchor" href="#설명-6" aria-label="Permalink to &quot;설명&quot;">​</a></h3><h3 id="fake_imu_usage" tabindex="-1">Usage <a class="header-anchor" href="#fake_imu_usage" aria-label="Permalink to &quot;Usage {#fake_imu_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fake_imu &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-magnetometer" tabindex="-1">fake_magnetometer <a class="header-anchor" href="#fake-magnetometer" aria-label="Permalink to &quot;fake_magnetometer&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/examples/fake_magnetometer" target="_blank" rel="noreferrer">examples/fake_magnetometer</a></p><h3 id="설명-7" tabindex="-1">설명 <a class="header-anchor" href="#설명-7" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Publish the earth magnetic field as a fake magnetometer (sensor_mag). Requires vehicle_attitude and vehicle_gps_position.</p><h3 id="fake_magnetometer_usage" tabindex="-1">Usage <a class="header-anchor" href="#fake_magnetometer_usage" aria-label="Permalink to &quot;Usage {#fake_magnetometer_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fake_magnetometer &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ft-technologies-serial" tabindex="-1">ft_technologies_serial <a class="header-anchor" href="#ft-technologies-serial" aria-label="Permalink to &quot;ft_technologies_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/wind_sensor/ft_technologies" target="_blank" rel="noreferrer">drivers/wind_sensor/ft_technologies</a></p><h3 id="설명-8" tabindex="-1">설명 <a class="header-anchor" href="#설명-8" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Serial bus driver for the FT Technologies Digital Wind Sensor FT742. This driver is required to operate alongside a RS485 to UART signal transfer module.</p><p>Most boards are configured to enable/start the driver on a specified UART using the SENS_FTX_CFG parameter.</p><h3 id="예-2" tabindex="-1">예 <a class="header-anchor" href="#예-2" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ft_technologies_serial start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ft_technologies_serial stop</span></span></code></pre></div><h3 id="ft_technologies_serial_usage" tabindex="-1">Usage <a class="header-anchor" href="#ft_technologies_serial_usage" aria-label="Permalink to &quot;Usage {#ft_technologies_serial_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ft_technologies_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="gimbal" tabindex="-1">gimbal <a class="header-anchor" href="#gimbal" aria-label="Permalink to &quot;gimbal&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/gimbal" target="_blank" rel="noreferrer">modules/gimbal</a></p><h3 id="설명-9" tabindex="-1">설명 <a class="header-anchor" href="#설명-9" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Mount/gimbal Gimbal control driver. It maps several different input methods (eg. RC or MAVLink) to a configured output (eg. AUX channels or MAVLink).</p><p>Documentation how to use it is on the <a href="./../advanced/gimbal_control">gimbal_control</a> page.</p><h3 id="예-3" tabindex="-1">예 <a class="header-anchor" href="#예-3" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>Test the output by setting a angles (all omitted axes are set to 0):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gimbal test pitch -45 yaw 30</span></span></code></pre></div><h3 id="gimbal_usage" tabindex="-1">Usage <a class="header-anchor" href="#gimbal_usage" aria-label="Permalink to &quot;Usage {#gimbal_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gimbal &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   primary-control Set who is in control of gimbal</span></span>
<span class="line"><span>     &lt;sysid&gt; &lt;compid&gt; MAVLink system ID and MAVLink component ID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test          Test the output: set a fixed angle for one or multiple axes</span></span>
<span class="line"><span>                 (gimbal must be running)</span></span>
<span class="line"><span>     roll|pitch|yaw &lt;angle&gt; Specify an axis and an angle in degrees</span></span>
<span class="line"><span>     rollrate|pitchrate|yawrate &lt;angle rate&gt; Specify an axis and an angle rate</span></span>
<span class="line"><span>                 in degrees / second</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="gps" tabindex="-1">gps <a class="header-anchor" href="#gps" aria-label="Permalink to &quot;gps&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/gps" target="_blank" rel="noreferrer">drivers/gps</a></p><h3 id="설명-10" tabindex="-1">설명 <a class="header-anchor" href="#설명-10" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>GPS driver module that handles the communication with the device and publishes the position via uORB. The available device protocols are selected at build time.</p><p>The module supports a secondary GPS device, specified via <code>-e</code> parameter. The position will be published on the second uORB topic instance, but it&#39;s currently not used by the rest of the system (however the data will be logged, so that it can be used for comparisons).</p><h3 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>There is a thread for each device polling for data. The GPS protocol classes are implemented with callbacks so that they can be used in other projects as well (eg. QGroundControl uses them too).</p><h3 id="예-4" tabindex="-1">예 <a class="header-anchor" href="#예-4" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>Starting 2 GPS devices (the main GPS on /dev/ttyS3 and the secondary on /dev/ttyS4):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gps start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Initiate warm restart of GPS device</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><h3 id="gps_usage" tabindex="-1">Usage <a class="header-anchor" href="#gps_usage" aria-label="Permalink to &quot;Usage {#gps_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gps &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  GPS device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Baudrate (can also be p:&lt;param_name&gt;)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  Optional secondary GPS device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-g &lt;val&gt;]  Baudrate (secondary GPS, can also be p:&lt;param_name&gt;)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  GPS interface</span></span>
<span class="line"><span>                 values: spi|uart, default: uart</span></span>
<span class="line"><span>     [-j &lt;val&gt;]  secondary GPS interface</span></span>
<span class="line"><span>                 values: spi|uart, default: uart</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  GPS protocol (availability depends on build; default from</span></span>
<span class="line"><span>                 GPS_x_PROTOCOL)</span></span>
<span class="line"><span>                 values: ubx|mtk|ash|eml|fem|nmea</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset GPS device</span></span>
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="gz-bridge" tabindex="-1">gz_bridge <a class="header-anchor" href="#gz-bridge" aria-label="Permalink to &quot;gz_bridge&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/simulation/gz_bridge" target="_blank" rel="noreferrer">modules/simulation/gz_bridge</a></p><h3 id="설명-11" tabindex="-1">설명 <a class="header-anchor" href="#설명-11" aria-label="Permalink to &quot;설명&quot;">​</a></h3><h3 id="gz_bridge_usage" tabindex="-1">Usage <a class="header-anchor" href="#gz_bridge_usage" aria-label="Permalink to &quot;Usage {#gz_bridge_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gz_bridge &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-w &lt;val&gt;]  World name</span></span>
<span class="line"><span>     -n &lt;val&gt;    Model name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="hiwonder-emm" tabindex="-1">hiwonder_emm <a class="header-anchor" href="#hiwonder-emm" aria-label="Permalink to &quot;hiwonder_emm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/hiwonder_emm" target="_blank" rel="noreferrer">drivers/hiwonder_emm</a></p><h3 id="설명-12" tabindex="-1">설명 <a class="header-anchor" href="#설명-12" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>I2C driver for the Hiwonder 4-Channel Encoder Motor Module (EMM), a small motor controller that drives up to four brushed DC motors with on-board encoder feedback. Communicates with the EMM on the first external I2C bus at address 0x34.</p><p>To use this driver, the board configuration must include <code>CONFIG_DRIVERS_HIWONDER_EMM=y</code> so the driver is compiled into the firmware. At runtime, the driver is enabled by setting the <code>HIWONDER_EMM_EN</code> parameter to <code>1</code> and reboot. It is then started automatically by the rover startup script (<code>rc.rover</code>) for ackermann, differential, and mecanum rover airframes.</p><p>The command to start this driver manually is: <code>$ hiwonder_emm start</code></p><h3 id="hiwonder_emm_usage" tabindex="-1">Usage <a class="header-anchor" href="#hiwonder_emm_usage" aria-label="Permalink to &quot;Usage {#hiwonder_emm_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hiwonder_emm &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina220" tabindex="-1">ina220 <a class="header-anchor" href="#ina220" aria-label="Permalink to &quot;ina220&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/power_monitor/ina220" target="_blank" rel="noreferrer">drivers/power_monitor/ina220</a></p><h3 id="설명-13" tabindex="-1">설명 <a class="header-anchor" href="#설명-13" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for the INA220 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x41, and one can run on Bus 2, address 0x43.</p><p>If the INA220 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><h3 id="ina220_usage" tabindex="-1">Usage <a class="header-anchor" href="#ina220_usage" aria-label="Permalink to &quot;Usage {#ina220_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ina220 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 65</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1 or 3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span>     [-T &lt;val&gt;]  Type</span></span>
<span class="line"><span>                 values: VBATT|VREG, default: VBATT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina226" tabindex="-1">ina226 <a class="header-anchor" href="#ina226" aria-label="Permalink to &quot;ina226&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/power_monitor/ina226" target="_blank" rel="noreferrer">drivers/power_monitor/ina226</a></p><h3 id="설명-14" tabindex="-1">설명 <a class="header-anchor" href="#설명-14" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for the Texas Instruments INA226 power monitor.</p><p>Multiple instances can run simultaneously on separate buses or different I2C addresses.</p><p>If the device is not powered at startup, pass <code>-k</code> (keep_running) and the driver will retry initialization every 500 ms so the battery can be plugged in later.</p><h3 id="ina226_usage" tabindex="-1">Usage <a class="header-anchor" href="#ina226_usage" aria-label="Permalink to &quot;Usage {#ina226_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ina226 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 65</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1-3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina228" tabindex="-1">ina228 <a class="header-anchor" href="#ina228" aria-label="Permalink to &quot;ina228&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/power_monitor/ina228" target="_blank" rel="noreferrer">drivers/power_monitor/ina228</a></p><h3 id="설명-15" tabindex="-1">설명 <a class="header-anchor" href="#설명-15" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for the INA228 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x45, and one can run on Bus 2, address 0x45.</p><p>If the INA228 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><h3 id="ina228_usage" tabindex="-1">Usage <a class="header-anchor" href="#ina228_usage" aria-label="Permalink to &quot;Usage {#ina228_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ina228 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 69</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1-3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina238" tabindex="-1">ina238 <a class="header-anchor" href="#ina238" aria-label="Permalink to &quot;ina238&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/power_monitor/ina238" target="_blank" rel="noreferrer">drivers/power_monitor/ina238</a></p><h3 id="설명-16" tabindex="-1">설명 <a class="header-anchor" href="#설명-16" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for the Texas Instruments INA237 / INA238 power monitor.</p><p>Multiple instances can run simultaneously on separate buses or different I2C addresses.</p><p>If the device is not powered at startup, pass <code>-k</code> (keep_running) and the driver will retry initialization every 500 ms so the battery can be plugged in later.</p><h3 id="ina238_usage" tabindex="-1">Usage <a class="header-anchor" href="#ina238_usage" aria-label="Permalink to &quot;Usage {#ina238_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ina238 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 69</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1-3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="iridiumsbd" tabindex="-1">iridiumsbd <a class="header-anchor" href="#iridiumsbd" aria-label="Permalink to &quot;iridiumsbd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/telemetry/iridiumsbd" target="_blank" rel="noreferrer">drivers/telemetry/iridiumsbd</a></p><h3 id="설명-17" tabindex="-1">설명 <a class="header-anchor" href="#설명-17" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>IridiumSBD driver.</p><p>Creates a virtual serial port that another module can use for communication (e.g. mavlink).</p><h3 id="iridiumsbd_usage" tabindex="-1">Usage <a class="header-anchor" href="#iridiumsbd_usage" aria-label="Permalink to &quot;Usage {#iridiumsbd_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>iridiumsbd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-v]        Enable verbose output</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test</span></span>
<span class="line"><span>     [s|read|AT &lt;cmd&gt;] Test command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="irlock" tabindex="-1">irlock <a class="header-anchor" href="#irlock" aria-label="Permalink to &quot;irlock&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/irlock" target="_blank" rel="noreferrer">drivers/irlock</a></p><h3 id="irlock_usage" tabindex="-1">Usage <a class="header-anchor" href="#irlock_usage" aria-label="Permalink to &quot;Usage {#irlock_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>irlock &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 84</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="linux-pwm-out" tabindex="-1">linux_pwm_out <a class="header-anchor" href="#linux-pwm-out" aria-label="Permalink to &quot;linux_pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/linux_pwm_out" target="_blank" rel="noreferrer">drivers/linux_pwm_out</a></p><h3 id="설명-18" tabindex="-1">설명 <a class="header-anchor" href="#설명-18" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Linux PWM output driver with board-specific backend implementation.</p><h3 id="linux_pwm_out_usage" tabindex="-1">Usage <a class="header-anchor" href="#linux_pwm_out_usage" aria-label="Permalink to &quot;Usage {#linux_pwm_out_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>linux_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lsm303agr" tabindex="-1">lsm303agr <a class="header-anchor" href="#lsm303agr" aria-label="Permalink to &quot;lsm303agr&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lsm303agr" target="_blank" rel="noreferrer">drivers/magnetometer/lsm303agr</a></p><h3 id="lsm303agr_usage" tabindex="-1">Usage <a class="header-anchor" href="#lsm303agr_usage" aria-label="Permalink to &quot;Usage {#lsm303agr_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lsm303agr &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mcp230xx" tabindex="-1">mcp230xx <a class="header-anchor" href="#mcp230xx" aria-label="Permalink to &quot;mcp230xx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/lib/drivers/mcp_common" target="_blank" rel="noreferrer">lib/drivers/mcp_common</a></p><h3 id="mcp230xx_usage" tabindex="-1">Usage <a class="header-anchor" href="#mcp230xx_usage" aria-label="Permalink to &quot;Usage {#mcp230xx_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mcp230xx &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 39</span></span>
<span class="line"><span>     [-D &lt;val&gt;]  Direction (1=Input, 0=Output)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-O &lt;val&gt;]  Output</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-P &lt;val&gt;]  Pullups</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-U &lt;val&gt;]  Update Interval [ms]</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-M &lt;val&gt;]  First minor number</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mcp9808" tabindex="-1">mcp9808 <a class="header-anchor" href="#mcp9808" aria-label="Permalink to &quot;mcp9808&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/temperature_sensor/mcp9808" target="_blank" rel="noreferrer">drivers/temperature_sensor/mcp9808</a></p><h3 id="mcp9808_usage" tabindex="-1">Usage <a class="header-anchor" href="#mcp9808_usage" aria-label="Permalink to &quot;Usage {#mcp9808_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mcp9808 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="msp-osd" tabindex="-1">msp_osd <a class="header-anchor" href="#msp-osd" aria-label="Permalink to &quot;msp_osd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/osd/msp_osd" target="_blank" rel="noreferrer">drivers/osd/msp_osd</a></p><h3 id="설명-19" tabindex="-1">설명 <a class="header-anchor" href="#설명-19" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>MSP telemetry streamer</p><h3 id="구현-1" tabindex="-1">구현 <a class="header-anchor" href="#구현-1" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>Converts uORB messages to MSP telemetry packets</p><h3 id="예-5" tabindex="-1">예 <a class="header-anchor" href="#예-5" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>msp_osd</span></span></code></pre></div><h3 id="msp_osd_usage" tabindex="-1">Usage <a class="header-anchor" href="#msp_osd_usage" aria-label="Permalink to &quot;Usage {#msp_osd_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>msp_osd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   channel       Change VTX channel</span></span></code></pre></div><h2 id="neopixel" tabindex="-1">neopixel <a class="header-anchor" href="#neopixel" aria-label="Permalink to &quot;neopixel&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/neopixel" target="_blank" rel="noreferrer">drivers/lights/neopixel</a></p><h3 id="설명-20" tabindex="-1">설명 <a class="header-anchor" href="#설명-20" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for driving interfasing to the Neopixel Serial LED</p><h3 id="예-6" tabindex="-1">예 <a class="header-anchor" href="#예-6" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>neopixel -n 8</span></span></code></pre></div><p>To drive all available leds.</p><h3 id="neopixel_usage" tabindex="-1">Usage <a class="header-anchor" href="#neopixel_usage" aria-label="Permalink to &quot;Usage {#neopixel_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>neopixel &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paa3905" tabindex="-1">paa3905 <a class="header-anchor" href="#paa3905" aria-label="Permalink to &quot;paa3905&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/optical_flow/paa3905" target="_blank" rel="noreferrer">drivers/optical_flow/paa3905</a></p><h3 id="paa3905_usage" tabindex="-1">Usage <a class="header-anchor" href="#paa3905_usage" aria-label="Permalink to &quot;Usage {#paa3905_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>paa3905 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-Y &lt;val&gt;]  custom yaw rotation (degrees)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paw3902" tabindex="-1">paw3902 <a class="header-anchor" href="#paw3902" aria-label="Permalink to &quot;paw3902&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/optical_flow/paw3902" target="_blank" rel="noreferrer">drivers/optical_flow/paw3902</a></p><h3 id="paw3902_usage" tabindex="-1">Usage <a class="header-anchor" href="#paw3902_usage" aria-label="Permalink to &quot;Usage {#paw3902_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>paw3902 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-Y &lt;val&gt;]  custom yaw rotation (degrees)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pca9685-pwm-out" tabindex="-1">pca9685_pwm_out <a class="header-anchor" href="#pca9685-pwm-out" aria-label="Permalink to &quot;pca9685_pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/pca9685_pwm_out" target="_blank" rel="noreferrer">drivers/pca9685_pwm_out</a></p><h3 id="설명-21" tabindex="-1">설명 <a class="header-anchor" href="#설명-21" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This is a PCA9685 PWM output driver.</p><p>It runs on I2C workqueue which is asynchronous with FC control loop, fetching the latest mixing result and write them to PCA9685 at its scheduling ticks.</p><p>It can do full 12bits output as duty-cycle mode, while also able to output precious pulse width that can be accepted by most ESCs and servos.</p><h3 id="예-7" tabindex="-1">예 <a class="header-anchor" href="#예-7" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pca9685_pwm_out start -X -a 0x40 -b 1</span></span></code></pre></div><h3 id="pca9685_pwm_out_usage" tabindex="-1">Usage <a class="header-anchor" href="#pca9685_pwm_out_usage" aria-label="Permalink to &quot;Usage {#pca9685_pwm_out_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pca9685_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  7-bits I2C address of PCA9685</span></span>
<span class="line"><span>                 values: &lt;addr&gt;, default: 0x40</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  bus that pca9685 is connected to</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pmw3901" tabindex="-1">pmw3901 <a class="header-anchor" href="#pmw3901" aria-label="Permalink to &quot;pmw3901&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/optical_flow/pmw3901" target="_blank" rel="noreferrer">drivers/optical_flow/pmw3901</a></p><h3 id="pmw3901_usage" tabindex="-1">Usage <a class="header-anchor" href="#pmw3901_usage" aria-label="Permalink to &quot;Usage {#pmw3901_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pmw3901 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pps-capture" tabindex="-1">pps_capture <a class="header-anchor" href="#pps-capture" aria-label="Permalink to &quot;pps_capture&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/pps_capture" target="_blank" rel="noreferrer">drivers/pps_capture</a></p><h3 id="설명-22" tabindex="-1">설명 <a class="header-anchor" href="#설명-22" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This implements capturing PPS information from the GNSS module and calculates the drift between PPS and Real-time clock.</p><h3 id="pps_capture_usage" tabindex="-1">Usage <a class="header-anchor" href="#pps_capture_usage" aria-label="Permalink to &quot;Usage {#pps_capture_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pps_capture &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out" tabindex="-1">pwm_out <a class="header-anchor" href="#pwm-out" aria-label="Permalink to &quot;pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/pwm_out" target="_blank" rel="noreferrer">drivers/pwm_out</a></p><h3 id="설명-23" tabindex="-1">설명 <a class="header-anchor" href="#설명-23" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for driving the output pins. For boards without a separate IO chip (eg. Pixracer), it uses the main channels. On boards with an IO chip (eg. Pixhawk), it uses the AUX channels, and the px4io driver is used for main ones.</p><h3 id="pwm_out_usage" tabindex="-1">Usage <a class="header-anchor" href="#pwm_out_usage" aria-label="Permalink to &quot;Usage {#pwm_out_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out-sim" tabindex="-1">pwm_out_sim <a class="header-anchor" href="#pwm-out-sim" aria-label="Permalink to &quot;pwm_out_sim&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/simulation/pwm_out_sim" target="_blank" rel="noreferrer">modules/simulation/pwm_out_sim</a></p><h3 id="설명-24" tabindex="-1">설명 <a class="header-anchor" href="#설명-24" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for simulated PWM outputs.</p><p>Its only function is to take <code>actuator_control</code> uORB messages, mix them with any loaded mixer and output the result to the <code>actuator_output</code> uORB topic.</p><p>It is used in SITL and HITL.</p><h3 id="pwm_out_sim_usage" tabindex="-1">Usage <a class="header-anchor" href="#pwm_out_sim_usage" aria-label="Permalink to &quot;Usage {#pwm_out_sim_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pwm_out_sim &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the module</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Mode</span></span>
<span class="line"><span>                 values: hil|sim, default: sim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4flow" tabindex="-1">px4flow <a class="header-anchor" href="#px4flow" aria-label="Permalink to &quot;px4flow&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/optical_flow/px4flow" target="_blank" rel="noreferrer">drivers/optical_flow/px4flow</a></p><h3 id="px4flow_usage" tabindex="-1">Usage <a class="header-anchor" href="#px4flow_usage" aria-label="Permalink to &quot;Usage {#px4flow_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>px4flow &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 66</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4io" tabindex="-1">px4io <a class="header-anchor" href="#px4io" aria-label="Permalink to &quot;px4io&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/px4io" target="_blank" rel="noreferrer">drivers/px4io</a></p><h3 id="설명-25" tabindex="-1">설명 <a class="header-anchor" href="#설명-25" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Output driver communicating with the IO co-processor.</p><h3 id="px4io_usage" tabindex="-1">Usage <a class="header-anchor" href="#px4io_usage" aria-label="Permalink to &quot;Usage {#px4io_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>px4io &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   checkcrc      Check CRC for a firmware file against current code on IO</span></span>
<span class="line"><span>     &lt;filename&gt;  Firmware file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   update        Update IO firmware</span></span>
<span class="line"><span>     [&lt;filename&gt;] Firmware file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   debug         set IO debug level</span></span>
<span class="line"><span>     &lt;debug_level&gt; 0=disabled, 9=max verbosity</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          DSM bind</span></span>
<span class="line"><span>     dsm2|dsmx|dsmx8 protocol</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   sbus1_out     enable sbus1 out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   sbus2_out     enable sbus2 out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   supported     Returns 0 if px4io is supported</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test_fmu_fail test: turn off IO updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test_fmu_ok   re-enable IO updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled" tabindex="-1">rgbled <a class="header-anchor" href="#rgbled" aria-label="Permalink to &quot;rgbled&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/rgbled_ncp5623c" target="_blank" rel="noreferrer">drivers/lights/rgbled_ncp5623c</a></p><h3 id="rgbled_usage" tabindex="-1">Usage <a class="header-anchor" href="#rgbled_usage" aria-label="Permalink to &quot;Usage {#rgbled_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgbled &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 57</span></span>
<span class="line"><span>     [-o &lt;val&gt;]  RGB PWM Assignment</span></span>
<span class="line"><span>                 default: 123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-apa102" tabindex="-1">rgbled_apa102 <a class="header-anchor" href="#rgbled-apa102" aria-label="Permalink to &quot;rgbled_apa102&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/rgbled_apa102" target="_blank" rel="noreferrer">drivers/lights/rgbled_apa102</a></p><h3 id="rgbled_apa102_usage" tabindex="-1">Usage <a class="header-anchor" href="#rgbled_apa102_usage" aria-label="Permalink to &quot;Usage {#rgbled_apa102_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgbled_apa102 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-aw2023" tabindex="-1">rgbled_aw2023 <a class="header-anchor" href="#rgbled-aw2023" aria-label="Permalink to &quot;rgbled_aw2023&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/rgbled_aw2023" target="_blank" rel="noreferrer">drivers/lights/rgbled_aw2023</a></p><h3 id="rgbled_aw2023_usage" tabindex="-1">Usage <a class="header-anchor" href="#rgbled_aw2023_usage" aria-label="Permalink to &quot;Usage {#rgbled_aw2023_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgbled_aw2023 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 69</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-is31fl3195" tabindex="-1">rgbled_is31fl3195 <a class="header-anchor" href="#rgbled-is31fl3195" aria-label="Permalink to &quot;rgbled_is31fl3195&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/rgbled_is31fl3195" target="_blank" rel="noreferrer">drivers/lights/rgbled_is31fl3195</a></p><h3 id="rgbled_is31fl3195_usage" tabindex="-1">Usage <a class="header-anchor" href="#rgbled_is31fl3195_usage" aria-label="Permalink to &quot;Usage {#rgbled_is31fl3195_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgbled_is31fl3195 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 84</span></span>
<span class="line"><span>     [-o &lt;val&gt;]  RGB PWM Assignment</span></span>
<span class="line"><span>                 default: 123</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  Current Band</span></span>
<span class="line"><span>                 default: 0.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-lp5562" tabindex="-1">rgbled_lp5562 <a class="header-anchor" href="#rgbled-lp5562" aria-label="Permalink to &quot;rgbled_lp5562&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/lights/rgbled_lp5562" target="_blank" rel="noreferrer">drivers/lights/rgbled_lp5562</a></p><h3 id="설명-26" tabindex="-1">설명 <a class="header-anchor" href="#설명-26" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for <a href="https://www.ti.com/product/LP5562" target="_blank" rel="noreferrer">LP5562</a> LED driver connected via I2C.</p><p>This used in some GPS modules by Holybro for <a href="./../getting_started/led_meanings">PX4 status notification</a></p><p>The driver is included by default in firmware (KConfig key DRIVERS_LIGHTS_RGBLED_LP5562) and is always enabled.</p><h3 id="rgbled_lp5562_usage" tabindex="-1">Usage <a class="header-anchor" href="#rgbled_lp5562_usage" aria-label="Permalink to &quot;Usage {#rgbled_lp5562_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgbled_lp5562 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 48</span></span>
<span class="line"><span>     [-u &lt;val&gt;]  Current in mA</span></span>
<span class="line"><span>                 default: 17.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="roboclaw" tabindex="-1">roboclaw <a class="header-anchor" href="#roboclaw" aria-label="Permalink to &quot;roboclaw&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/roboclaw" target="_blank" rel="noreferrer">drivers/roboclaw</a></p><h3 id="설명-27" tabindex="-1">설명 <a class="header-anchor" href="#설명-27" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This driver communicates over UART with the <a href="https://www.basicmicro.com/motor-controller" target="_blank" rel="noreferrer">Roboclaw motor driver</a>. It performs two tasks:</p><ul><li>Control the motors based on the OutputModuleInterface.</li><li>Read the wheel encoders and publish the raw data in the <code>wheel_encoders</code> uORB topic</li></ul><p>In order to use this driver, the Roboclaw should be put into Packet Serial mode (see the linked documentation), and your flight controller&#39;s UART port should be connected to the Roboclaw as shown in the documentation. The driver needs to be enabled using the parameter <code>RBCLW_SER_CFG</code>, the baudrate needs to be set correctly and the address <code>RBCLW_ADDRESS</code> needs to match the ESC configuration.</p><p>The command to start this driver is: <code>$ roboclaw start &lt;UART device&gt; &lt;baud rate&gt;</code></p><h3 id="roboclaw_usage" tabindex="-1">Usage <a class="header-anchor" href="#roboclaw_usage" aria-label="Permalink to &quot;Usage {#roboclaw_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>roboclaw &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rpm-capture" tabindex="-1">rpm_capture <a class="header-anchor" href="#rpm-capture" aria-label="Permalink to &quot;rpm_capture&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rpm_capture" target="_blank" rel="noreferrer">drivers/rpm_capture</a></p><h3 id="rpm_capture_usage" tabindex="-1">Usage <a class="header-anchor" href="#rpm_capture_usage" aria-label="Permalink to &quot;Usage {#rpm_capture_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rpm_capture &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="safety-button" tabindex="-1">safety_button <a class="header-anchor" href="#safety-button" aria-label="Permalink to &quot;safety_button&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/safety_button" target="_blank" rel="noreferrer">drivers/safety_button</a></p><h3 id="설명-28" tabindex="-1">설명 <a class="header-anchor" href="#설명-28" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for the safety button. Pressing the safety button 3 times quickly will trigger a GCS pairing request.</p><h3 id="safety_button_usage" tabindex="-1">Usage <a class="header-anchor" href="#safety_button_usage" aria-label="Permalink to &quot;Usage {#safety_button_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>safety_button &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="septentrio" tabindex="-1">septentrio <a class="header-anchor" href="#septentrio" aria-label="Permalink to &quot;septentrio&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/gnss/septentrio" target="_blank" rel="noreferrer">drivers/gnss/septentrio</a></p><h3 id="설명-29" tabindex="-1">설명 <a class="header-anchor" href="#설명-29" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for Septentrio GNSS receivers. It can automatically configure them and make their output available for the rest of the system. A secondary receiver is supported for redundancy, logging and dual-receiver heading. Septentrio receiver baud rates from 57600 to 1500000 are supported. If others are used, the driver will use 230400 and give a warning.</p><h3 id="예-8" tabindex="-1">예 <a class="header-anchor" href="#예-8" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>Use one receiver on port <code>/dev/ttyS0</code> and automatically configure it to use baud rate 230400:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>septentrio start -d /dev/ttyS0 -b 230400</span></span></code></pre></div><p>Use two receivers, the primary on port <code>/dev/ttyS3</code> and the secondary on <code>/dev/ttyS4</code>, detect baud rate automatically and preserve them:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>septentrio start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Perform warm reset of the receivers:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><h3 id="septentrio_usage" tabindex="-1">Usage <a class="header-anchor" href="#septentrio_usage" aria-label="Permalink to &quot;Usage {#septentrio_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>septentrio &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Primary receiver port</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Primary receiver baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  Secondary receiver port</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-g &lt;val&gt;]  Secondary receiver baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset connected receiver</span></span>
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="serialpassthrough" tabindex="-1">serialpassthrough <a class="header-anchor" href="#serialpassthrough" aria-label="Permalink to &quot;serialpassthrough&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/serialpassthrough" target="_blank" rel="noreferrer">drivers/serialpassthrough</a></p><h3 id="설명-30" tabindex="-1">설명 <a class="header-anchor" href="#설명-30" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Serial passthrough driver driven by MAVLink SERIAL_CONTROL messages. Bridges a MAVLink stream to a hardware UART or an ESC signal pin (bitbang).</p><p>Only a single sender is supported at a time. Simultaneous SERIAL_CONTROL messages from multiple senders produce undefined behaviour.</p><p>Up to 8 instances can run simultaneously, one per device.</p><h3 id="serialpassthrough_usage" tabindex="-1">Usage <a class="header-anchor" href="#serialpassthrough_usage" aria-label="Permalink to &quot;Usage {#serialpassthrough_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>serialpassthrough &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  Serial device path</span></span>
<span class="line"><span>                 values: &lt;dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Baudrate</span></span>
<span class="line"><span>                 default: 115200</span></span>
<span class="line"><span>     [-x]        Swap RX/TX pins</span></span>
<span class="line"><span>     [-s]        Single-wire (half-duplex) mode</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  ESC bitbang channel (0-7), instead of -d</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  Internal: instance registry key (injected by startForDevice())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span></code></pre></div><h2 id="sht3x" tabindex="-1">sht3x <a class="header-anchor" href="#sht3x" aria-label="Permalink to &quot;sht3x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/hygrometer/sht3x" target="_blank" rel="noreferrer">drivers/hygrometer/sht3x</a></p><h3 id="설명-31" tabindex="-1">설명 <a class="header-anchor" href="#설명-31" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>SHT3x Temperature and Humidity Sensor Driver by Senserion.</p><h3 id="예-9" tabindex="-1">예 <a class="header-anchor" href="#예-9" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sht3x start -X</span></span></code></pre></div><p>Start the sensor driver on the external bus</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sht3x status</span></span></code></pre></div><p>Print driver status</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sht3x values</span></span></code></pre></div><p>Print last measured values</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sht3x reset</span></span></code></pre></div><p>Reinitialize senzor, reset flags</p><h3 id="sht3x_usage" tabindex="-1">Usage <a class="header-anchor" href="#sht3x_usage" aria-label="Permalink to &quot;Usage {#sht3x_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sht3x &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 68</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   values        Print actual data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reinitialize sensor</span></span></code></pre></div><h2 id="tap-esc" tabindex="-1">tap_esc <a class="header-anchor" href="#tap-esc" aria-label="Permalink to &quot;tap_esc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/tap_esc" target="_blank" rel="noreferrer">drivers/tap_esc</a></p><h3 id="설명-32" tabindex="-1">설명 <a class="header-anchor" href="#설명-32" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module controls the TAP_ESC hardware via UART. It listens on the actuator_controls topics, does the mixing and writes the PWM outputs.</p><h3 id="구현-2" tabindex="-1">구현 <a class="header-anchor" href="#구현-2" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>Currently the module is implemented as a threaded version only, meaning that it runs in its own thread instead of on the work queue.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>The module is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tap_esc start -d /dev/ttyS2 -n &lt;1-8&gt;</span></span></code></pre></div><h3 id="tap_esc_usage" tabindex="-1">Usage <a class="header-anchor" href="#tap_esc_usage" aria-label="Permalink to &quot;Usage {#tap_esc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tap_esc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  Device used to talk to ESCs</span></span>
<span class="line"><span>                 values: &lt;device&gt;</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  Number of ESCs</span></span>
<span class="line"><span>                 default: 4</span></span></code></pre></div><h2 id="tmp102" tabindex="-1">tmp102 <a class="header-anchor" href="#tmp102" aria-label="Permalink to &quot;tmp102&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/temperature_sensor/tmp102" target="_blank" rel="noreferrer">drivers/temperature_sensor/tmp102</a></p><h3 id="tmp102_usage" tabindex="-1">Usage <a class="header-anchor" href="#tmp102_usage" aria-label="Permalink to &quot;Usage {#tmp102_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tmp102 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tone-alarm" tabindex="-1">tone_alarm <a class="header-anchor" href="#tone-alarm" aria-label="Permalink to &quot;tone_alarm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/tone_alarm" target="_blank" rel="noreferrer">drivers/tone_alarm</a></p><h3 id="설명-33" tabindex="-1">설명 <a class="header-anchor" href="#설명-33" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for the tone alarm.</p><h3 id="tone_alarm_usage" tabindex="-1">Usage <a class="header-anchor" href="#tone_alarm_usage" aria-label="Permalink to &quot;Usage {#tone_alarm_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tone_alarm &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="uwb" tabindex="-1">uwb <a class="header-anchor" href="#uwb" aria-label="Permalink to &quot;uwb&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/uwb/uwb_sr150" target="_blank" rel="noreferrer">drivers/uwb/uwb_sr150</a></p><h3 id="설명-34" tabindex="-1">설명 <a class="header-anchor" href="#설명-34" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Driver for NXP UWB_SR150 UWB positioning system. This driver publishes a <code>uwb_distance</code> message whenever the UWB_SR150 has a position measurement available.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Start the driver with a given device:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>uwb start -d /dev/ttyS2</span></span></code></pre></div><h3 id="uwb_usage" tabindex="-1">Usage <a class="header-anchor" href="#uwb_usage" aria-label="Permalink to &quot;Usage {#uwb_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>uwb &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Name of device for serial communication with UWB</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     -b &lt;val&gt;    Baudrate for serial communication</span></span>
<span class="line"><span>                 values: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span></code></pre></div><h2 id="vertiq-io" tabindex="-1">vertiq_io <a class="header-anchor" href="#vertiq-io" aria-label="Permalink to &quot;vertiq_io&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/actuators/vertiq_io" target="_blank" rel="noreferrer">drivers/actuators/vertiq_io</a></p><h3 id="vertiq_io_usage" tabindex="-1">Usage <a class="header-anchor" href="#vertiq_io_usage" aria-label="Permalink to &quot;Usage {#vertiq_io_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vertiq_io &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     &lt;device&gt;    UART device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxl2-io" tabindex="-1">voxl2_io <a class="header-anchor" href="#voxl2-io" aria-label="Permalink to &quot;voxl2_io&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/voxl2_io" target="_blank" rel="noreferrer">drivers/voxl2_io</a></p><h3 id="설명-35" tabindex="-1">설명 <a class="header-anchor" href="#설명-35" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for driving the output pins. For boards without a separate IO chip (eg. Pixracer), it uses the main channels. On boards with an IO chip (eg. Pixhawk), it uses the AUX channels, and the px4io driver is used for main ones.</p><h3 id="voxl2_io_usage" tabindex="-1">Usage <a class="header-anchor" href="#voxl2_io_usage" aria-label="Permalink to &quot;Usage {#voxl2_io_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>voxl2_io &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     -v          Verbose messages</span></span>
<span class="line"><span>     -d          Disable PWM</span></span>
<span class="line"><span>     -e          Disable RC</span></span>
<span class="line"><span>     -p &lt;val&gt;    UART port</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   calibrate_escs Calibrate ESCs min/max range</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   enable_debug  Enables driver debugging</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxl-esc" tabindex="-1">voxl_esc <a class="header-anchor" href="#voxl-esc" aria-label="Permalink to &quot;voxl_esc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/actuators/voxl_esc" target="_blank" rel="noreferrer">drivers/actuators/voxl_esc</a></p><h3 id="설명-36" tabindex="-1">설명 <a class="header-anchor" href="#설명-36" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module is responsible for...</p><h3 id="구현-3" tabindex="-1">구현 <a class="header-anchor" href="#구현-3" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>By default the module runs on a work queue with a callback on the uORB actuator_controls topic.</p><h3 id="예-10" tabindex="-1">예 <a class="header-anchor" href="#예-10" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>todo</span></span></code></pre></div><h3 id="voxl_esc_usage" tabindex="-1">Usage <a class="header-anchor" href="#voxl_esc_usage" aria-label="Permalink to &quot;Usage {#voxl_esc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>voxl_esc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Send reset request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   version       Send version request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   version-ext   Send extended version request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rpm           Closed-Loop RPM test control request</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -r &lt;val&gt;    RPM, -32,768 to 32,768</span></span>
<span class="line"><span>     -n &lt;val&gt;    Command repeat count, 0 to INT_MAX</span></span>
<span class="line"><span>     -t &lt;val&gt;    Delay between repeated commands (microseconds), 0 to INT_MAX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   pwm           Open-Loop PWM test control request</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -r &lt;val&gt;    Duty Cycle value, 0 to 800</span></span>
<span class="line"><span>     -n &lt;val&gt;    Command repeat count, 0 to INT_MAX</span></span>
<span class="line"><span>     -t &lt;val&gt;    Delay between repeated commands (microseconds), 0 to INT_MAX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   tone          Send tone generation request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -p &lt;val&gt;    Period of sound, inverse frequency, 0-255</span></span>
<span class="line"><span>     -d &lt;val&gt;    Duration of the sound, 0-255, 1LSB = 13ms</span></span>
<span class="line"><span>     -v &lt;val&gt;    Power (volume) of sound, 0-100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   led           Send LED control request</span></span>
<span class="line"><span>     -l &lt;val&gt;    Bitmask 0x0FFF (12 bits) - ESC0 (RGB) ESC1 (RGB) ESC2 (RGB)</span></span>
<span class="line"><span>                 ESC3 (RGB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxlpm" tabindex="-1">voxlpm <a class="header-anchor" href="#voxlpm" aria-label="Permalink to &quot;voxlpm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/power_monitor/voxlpm" target="_blank" rel="noreferrer">drivers/power_monitor/voxlpm</a></p><h3 id="voxlpm_usage" tabindex="-1">Usage <a class="header-anchor" href="#voxlpm_usage" aria-label="Permalink to &quot;Usage {#voxlpm_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>voxlpm [arguments...]</span></span>
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
<span class="line"><span>                 default: 68</span></span>
<span class="line"><span>     [-T &lt;val&gt;]  Type</span></span>
<span class="line"><span>                 values: VBATT|P5VDC|P12VDC, default: VBATT</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vtx" tabindex="-1">vtx <a class="header-anchor" href="#vtx" aria-label="Permalink to &quot;vtx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/vtx" target="_blank" rel="noreferrer">drivers/vtx</a></p><h3 id="설명-37" tabindex="-1">설명 <a class="header-anchor" href="#설명-37" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>This module communicates with a VTX camera via serial port. It can be used to configure the camera settings and to control the camera&#39;s video transmission. Supported protocols are:</p><ul><li>SmartAudio v1, v2.0, v2.1</li><li>Tramp</li></ul><h3 id="vtx_usage" tabindex="-1">Usage <a class="header-anchor" href="#vtx_usage" aria-label="Permalink to &quot;Usage {#vtx_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vtx &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    VTX device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;int&gt;         Sets an entry in the mapping table: &lt;index&gt; &lt;aux channel&gt;</span></span>
<span class="line"><span>                 &lt;band&gt; &lt;channel&gt; &lt;power level&gt; &lt;start range&gt; &lt;end range&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vtxtable" tabindex="-1">vtxtable <a class="header-anchor" href="#vtxtable" aria-label="Permalink to &quot;vtxtable&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/vtxtable" target="_blank" rel="noreferrer">drivers/vtxtable</a></p><h3 id="설명-38" tabindex="-1">설명 <a class="header-anchor" href="#설명-38" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Manages the VTX frequency, power level and RC mapping table for VTX configuration.</p><h3 id="vtxtable_usage" tabindex="-1">Usage <a class="header-anchor" href="#vtxtable_usage" aria-label="Permalink to &quot;Usage {#vtxtable_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vtxtable &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   status        Shows the current VTX table configuration.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   name          Sets the VTX table name: &lt;string&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bands         Sets the number of bands: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   band          Sets the band frequencies: &lt;1-index&gt; &lt;name&gt; &lt;letter&gt;</span></span>
<span class="line"><span>                 &lt;attribute&gt; &lt;frequencies...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   channels      Sets the number of channels: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   powerlevels   Sets number of power levels: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   powervalues   Sets the power level values: &lt;int...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   powerlabels   Sets the power level labels: &lt;3 chars...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;int&gt;         Sets an entry in the mapping table: &lt;0-index&gt; &lt;aux channel&gt;</span></span>
<span class="line"><span>                 &lt;band&gt; &lt;channel&gt; &lt;power level&gt; &lt;start range&gt; &lt;end range&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   clear         Clears the VTX table configuration.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   save          Saves the VTX config to a file: &lt;file&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   load          Loads the VTX config from a file: &lt;file&gt;</span></span></code></pre></div><h2 id="zenoh" tabindex="-1">zenoh <a class="header-anchor" href="#zenoh" aria-label="Permalink to &quot;zenoh&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/zenoh" target="_blank" rel="noreferrer">modules/zenoh</a></p><h3 id="설명-39" tabindex="-1">설명 <a class="header-anchor" href="#설명-39" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Zenoh demo bridge</p><h3 id="zenoh_usage" tabindex="-1">Usage <a class="header-anchor" href="#zenoh_usage" aria-label="Permalink to &quot;Usage {#zenoh_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>zenoh &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   config</span></span></code></pre></div>`,402)])])}const g=s(t,[["render",l]]);export{h as __pageData,g as default};
