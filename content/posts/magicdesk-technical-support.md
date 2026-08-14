---
date: 2026-08-05 11:57:00
app: magicdesk
category: support
featured: false
titleZh: MagicDesk 开发者技术支持
titleEn: MagicDesk Technical Support
excerptZh: MagicDesk 常见问题、购买帮助与故障排查，包括素材导入、URL 与网页壁纸、多显示器、播放、省电、快捷键和恢复购买。
excerptEn: MagicDesk FAQs, purchase assistance, and troubleshooting for imports, URL and webpage wallpapers, multiple displays, playback, power saving, shortcuts, and purchase restoration.
---
<!-- zh -->
使用 MagicDesk 时遇到问题？你可以在下面查看常见问题、购买帮助和故障排查步骤，也可以联系我们获取进一步支持。

**适用版本：MagicDesk 1.0.0**

**系统要求：macOS 14.0 或更高版本**

## 快速开始

### 如何添加壁纸？

MagicDesk 支持两种添加方式：

- **“添加文件”：** 选择本地图片、GIF 或视频，也可以直接把文件拖入壁纸库。
- **“添加 URL”：** 输入 HTTP 或 HTTPS 图片、视频或网页地址。远程媒体会下载到本地缓存；网页会先生成封面和网页缓存，再添加到壁纸库。

添加后选中素材，在右侧预览中选择“填充”“适应”或“拉伸”，然后设置到全部屏幕或指定屏幕。

### 支持哪些文件格式？

当前版本支持：

- **视频：** MP4、MOV、M4V、AVI；
- **图片：** JPG/JPEG、PNG、WebP、HEIC/HEIF、BMP、TIFF、AVIF；
- **动态图片：** GIF；
- **远程内容：** HTTP 或 HTTPS 图片、视频和网页 URL。

实际显示和播放还取决于文件编码、文件完整性、服务器响应、macOS 解码能力与 Mac 性能。受支持的扩展名不代表该扩展名下的所有文件都一定兼容。

## 导入与媒体库

### 为什么本地文件无法导入？

请依次检查：

- 文件扩展名是否在当前支持列表中；
- 文件是否完整，并能在 macOS 自带应用中正常打开；
- 文件是否位于当前账户可以读取的位置；
- 外置磁盘、网络磁盘或云盘中的文件是否已实际下载并保持连接；
- 磁盘是否有足够空间用于缩略图或必要缓存。

MagicDesk 导入时会在 App 的缓存目录中保存副本，因此原始文件移动后通常仍可播放。如果缓存同时丢失，而原文件又被移动、重命名或删除，安全访问授权可能失效；此时请删除无法访问的素材，然后重新导入。

### 为什么导入后显示“找不到本地文件访问授权”？

MagicDesk 会优先使用导入时创建的本地缓存；缓存不可用时，可以通过 macOS 沙盒和安全范围书签再次访问你选择的原文件。以下情况可能使后备授权失效：

- 原文件已被移动、重命名或删除；
- 外置磁盘尚未连接；
- 云端文件尚未下载到本机；
- 系统迁移、恢复或权限变化后书签无法继续使用。

请确认文件可用，再重新执行“添加文件”。

### 如何整理或删除素材？

壁纸库支持搜索、标签、收藏、自定义列表、拖动排序和多选操作。删除素材前，请确认它是否仍在其他列表或显示器上使用。

删除素材会移除其媒体库记录；当对应缓存不再被其他素材使用时，MagicDesk 也会清理缓存。该操作可能无法撤销，原始文件不会因删除媒体库记录而被修改。

## URL 与网页壁纸

### 为什么 URL 无法添加？

MagicDesk 只支持 HTTP 或 HTTPS 地址；如果只输入域名，App 会自动按 HTTPS 处理。请检查：

- 显式填写协议时，地址是否以 **http://** 或 **https://** 开头；
- 链接是否仍然有效，并能在浏览器中打开；
- 服务器是否需要登录、特殊请求标头、地区权限或防盗链验证；
- 网络、代理、防火墙或 DNS 是否阻止访问；
- 链接是否直接返回受支持的图片或视频，或可正常加载的网页。

短期签名链接、需要 DRM 的内容、受登录保护的页面或拒绝自动访问的服务器可能无法使用。

### 为什么远程图片或视频下载失败？

请确认网络连接稳定，并检查服务器是否返回错误状态。你也可以：

- 在浏览器中重新打开同一 URL；
- 优先使用 HTTPS 地址；
- 等待一段时间后重试；
- 确认磁盘有足够空间；
- 从可信来源下载文件后，再通过“添加文件”导入。

HTTP 链接没有传输加密，建议使用 HTTPS。

### 为什么网页壁纸没有封面或无法添加？

添加网页时，MagicDesk 必须等待页面加载完成，并生成网页封面和网页归档。以下情况可能导致失败：

- 页面加载时间过长或网络中断；
- 网站证书、重定向或脚本发生错误；
- 页面要求登录、验证码或用户交互；
- 网站阻止 WebKit 加载或离线归档；
- 网页持续加载实时内容，无法及时完成缓存。

请先确认该页面可在 Safari 中正常打开，然后返回 MagicDesk 重试。对于需要账号或敏感信息的页面，请先评估隐私和安全风险。

### 网页壁纸离线时如何工作？

网络可用时，MagicDesk 优先加载远程网页；离线时会尝试使用添加网页时保存的缓存。如果网页依赖实时接口、登录状态或未包含在归档中的资源，离线显示可能不完整。

## 显示器与播放

### 如何为不同显示器设置不同壁纸？

连接多台显示器后：

- 在壁纸库中选择一个素材；
- 在预览区域选择目标显示器；
- 将素材设置到该显示器；
- 对其他显示器重复操作。

如果选择设置到全部屏幕，同一素材会应用到当前检测到的所有显示器。显示器断开、重新连接或系统显示器编号变化后，可能需要重新分配。

### 壁纸为什么没有铺满屏幕？

在主窗口或“设置”>“播放”中切换适配方式：

- **填充：** 保持比例并铺满，边缘可能被裁切；
- **适应：** 保持比例并完整显示，可能出现留边；
- **拉伸：** 铺满画面，但可能改变原始比例。

更改适配方式会同步到当前启用的显示器分配。

### 为什么视频、GIF 或网页壁纸不动？

请检查：

- 动态壁纸是否已停止或暂停；
- 菜单栏中的播放状态是否为继续；
- “游戏或全屏工作时自动暂停播放”是否已触发；
- “断开外接电源时自动暂停播放”是否已触发；
- 原文件、缓存或远程 URL 是否仍然可用；
- 当前 Mac 的资源使用是否过高。

你可以先从菜单栏继续播放，或在设置中暂时关闭对应省电选项进行排查。

### 为什么没有声音？

MagicDesk 默认可能以静音状态播放。请检查：

- 菜单栏或主窗口中的声音开关；
- “设置”>“播放”中的“默认静音播放”；
- Mac 系统音量和输出设备；
- 原视频是否包含可播放音轨。

连接多个显示器时，MagicDesk 只让当前选定的一个显示器输出声音，以避免多路音频同时播放。

### 智能省电如何判断暂停？

开启“游戏或全屏工作时自动暂停播放”后，MagicDesk 会在本地检查当前前台 App 是否存在接近全屏的窗口，并在条件解除后尝试恢复。

开启“断开外接电源时自动暂停播放”后，Mac 使用电池供电时会暂停动态壁纸，重新接入外部电源后恢复。特殊窗口布局、多个空间或部分游戏可能影响判断结果。

## 菜单栏、快捷键与启动

### 关闭主窗口后 MagicDesk 还在运行吗？

MagicDesk 可以驻留在菜单栏并继续显示动态壁纸。你可以在“设置”>“通用”中选择程序坞图标的显示状态，以及关闭主窗口时最小化、隐藏窗口或退出 App。

如果只关闭或隐藏窗口，请通过菜单栏图标重新打开主窗口。选择“关闭软件”才会退出 App。

### 全局快捷键不工作怎么办？

请打开“设置”>“快捷键”并确认：

- “启用快捷键”已开启；
- 对应操作本身已启用；
- 快捷键没有与 macOS 或其他 App 冲突；
- 修改组合键后已保存成功。

你可以点击“全部恢复默认”重新注册默认组合。恢复默认会覆盖当前自定义快捷键。

### 登录后没有自动启动怎么办？

先在“设置”>“通用”中开启“登录后自动打开 MagicDesk”。如果状态仍未生效：

- 点击“打开系统登录项设置”；
- 在 macOS 系统设置中确认 MagicDesk 允许登录时打开；
- 关闭后重新开启该选项；
- 退出并重新打开 MagicDesk，再检查状态。

## 购买与恢复购买

### “永久移除水印”是什么？

它是一次性非消耗型 App 内购买，不是自动续期订阅。购买成功并通过 Apple 验证后，MagicDesk 会永久移除其桌面水印；权益与完成购买的 Apple 账户关联。

### 购买失败怎么办？

请确认：

- Mac 已连接网络；
- App Store 已登录有效的 Apple 账户；
- 付款方式和购买限制允许完成 App 内购买；
- App Store 服务当前可用；
- 商品价格已成功加载。

如果已经扣款但水印仍在，请不要重复购买，先尝试“恢复购买”。

### 如何恢复购买？

请使用购买时的同一 Apple 账户，然后：

- 打开 MagicDesk“设置”；
- 进入“订阅”页面；
- 点击“恢复购买”；
- 等待 Apple 完成同步和交易验证。

如果提示没有可恢复的购买，请核对 Apple 账户、网络和购买记录。退款、撤销或未验证的交易不会恢复为有效权益。

## 联系支持

如果以上步骤没有解决问题，请发送邮件至：

[MichaelSilvesterCN+MagicDesk@gmail.com](mailto:MichaelSilvesterCN+MagicDesk@gmail.com)

为了更快定位问题，建议附上：

- MagicDesk 版本；
- macOS 版本和 Mac 型号；
- 显示器数量、连接方式和排列情况；
- 素材类型及是否来自本地文件或 URL；
- 完整的操作步骤和错误提示；
- 必要的截图或录屏。

如问题涉及私人或受版权保护的内容，请不要直接发送媒体文件。你可以提供经过遮挡的截图、文件扩展名、可公开访问的测试 URL，或描述能够复现问题的最小步骤。

## 相关文档

- [隐私政策](/journal/magicdesk-privacy-policy/)
- [用户协议](/journal/magicdesk-terms-of-use/)

© 2026 MagicDesk。保留所有权利。

<!-- en -->
Having trouble using MagicDesk? Find answers to common questions, purchase assistance, and troubleshooting steps below, or contact us for further support.

**Applies to: MagicDesk 1.0.0**

**System Requirement: macOS 14.0 or later**

## Quick Start

### How do I add a wallpaper?

MagicDesk supports two methods:

- **“Add Files”:** Choose local images, GIFs, or videos, or drag files directly into the wallpaper library.
- **“Add URL”:** Enter an HTTP or HTTPS image, video, or webpage address. Remote media is downloaded to a local cache. A webpage is added after the App creates a cover image and webpage cache.

After adding an item, select it, choose Fill, Fit, or Stretch in the preview, and assign it to every display or a specific display.

### Which file formats are supported?

The current version supports:

- **Video:** MP4, MOV, M4V, and AVI;
- **Images:** JPG/JPEG, PNG, WebP, HEIC/HEIF, BMP, TIFF, and AVIF;
- **Animated images:** GIF; and
- **Remote content:** HTTP or HTTPS image, video, and webpage URLs.

Actual display and playback also depend on encoding, file integrity, server responses, macOS decoding support, and Mac performance. A supported extension does not guarantee compatibility with every file that uses it.

## Import and Library

### Why can’t I import a local file?

Check the following:

- The file extension is in the current supported list;
- The file is complete and opens in a built-in macOS app;
- The current account can read its location;
- A file on external, network, or cloud storage is downloaded and the storage remains connected; and
- The disk has enough room for thumbnails or necessary caches.

MagicDesk saves a copy in the App’s cache directory during import, so playback normally continues after the original file moves. If the cache is also missing and the source file was moved, renamed, or deleted, secure access may no longer work. Remove the inaccessible item and import it again.

### Why do I see “Local file access authorization could not be found”?

MagicDesk prefers the local copy created during import. If that cache is unavailable, the macOS sandbox and a security-scoped bookmark can access the original file again. This fallback authorization may become invalid when:

- The source file is moved, renamed, or deleted;
- An external disk is not connected;
- A cloud file has not been downloaded to the Mac; or
- A system migration, restore, or permission change invalidates the bookmark.

Confirm that the file is available, then use “Add Files” again.

### How do I organize or delete items?

The wallpaper library supports search, tags, favorites, custom lists, drag reordering, and multi-selection. Before deleting an item, confirm whether it is still used by another list or display.

Deleting an item removes its library record. When no other item uses the related cache, MagicDesk also removes that cache. The operation may be irreversible, but removing a library record does not modify the original source file.

## URLs and Webpage Wallpapers

### Why can’t I add a URL?

MagicDesk accepts only HTTP or HTTPS addresses. If you enter only a domain, the App automatically uses HTTPS. Check that:

- When a scheme is explicitly included, the address begins with **http://** or **https://**;
- The link is still valid and opens in a browser;
- The server does not require a login, special request header, regional permission, or hotlink authorization;
- A network, proxy, firewall, or DNS setting is not blocking access; and
- The link directly returns a supported image or video, or a webpage that can load normally.

Short-lived signed links, DRM-protected content, login-protected pages, or servers that reject automated access may not work.

### Why did a remote image or video download fail?

Confirm that the network is stable and check whether the server returns an error status. You can also:

- Open the same URL again in a browser;
- Prefer an HTTPS address;
- Wait and retry;
- Confirm that the disk has enough free space; or
- Download the file from a trusted source and import it with “Add Files.”

HTTP does not encrypt transmission, so HTTPS is recommended.

### Why does a webpage have no cover image or fail to add?

When adding a webpage, MagicDesk must wait for the page to load and then create a cover image and web archive. It may fail when:

- Loading is slow or the network disconnects;
- A certificate, redirect, or script fails;
- The page requires a login, CAPTCHA, or interaction;
- The website blocks WebKit loading or offline archiving; or
- The webpage continuously loads live content and cannot finish caching promptly.

Confirm that the page opens in Safari, then return to MagicDesk and retry. For pages that request accounts or sensitive information, evaluate the privacy and security risks first.

### How does a webpage wallpaper work offline?

When the network is available, MagicDesk prefers the remote webpage. When offline, it attempts to use the cache saved when you added the page. A webpage that depends on live APIs, a login session, or resources omitted from the archive may be incomplete offline.

## Displays and Playback

### How do I use a different wallpaper on each display?

After connecting multiple displays:

- Select an item in the wallpaper library;
- Choose the target display in the preview area;
- Assign the item to that display; and
- Repeat for the other displays.

Assigning to every display applies the same item to all displays currently detected. If a display is disconnected, reconnected, or its system identifier changes, you may need to assign it again.

### Why doesn’t the wallpaper fill the screen?

Change the fit mode in the main window or under Settings > Playback:

- **Fill:** Preserves the aspect ratio and fills the display, possibly cropping edges;
- **Fit:** Preserves the aspect ratio and shows the complete image, possibly leaving borders; or
- **Stretch:** Fills the display but may change the original aspect ratio.

Changing the fit mode updates currently enabled display assignments.

### Why is a video, GIF, or webpage wallpaper not moving?

Check whether:

- Live wallpapers were stopped or paused;
- The menu-bar playback state is set to resume;
- “Automatically pause while gaming or working full screen” has been triggered;
- “Automatically pause when disconnected from external power” has been triggered;
- The original file, cache, or remote URL is still available; and
- Mac resource usage is unusually high.

Try resuming from the menu bar or temporarily disabling the corresponding power-saving option.

### Why is there no sound?

MagicDesk may play muted by default. Check:

- The sound control in the menu bar or main window;
- “Mute by Default” under Settings > Playback;
- The macOS system volume and output device; and
- Whether the source video has a playable audio track.

With multiple displays, MagicDesk allows only one selected display to produce sound, preventing several audio tracks from playing simultaneously.

### How does smart power saving decide when to pause?

When “Automatically pause while gaming or working full screen” is enabled, MagicDesk locally checks whether the frontmost app has an approximately full-screen window and attempts to resume after that condition ends.

When “Automatically pause when disconnected from external power” is enabled, live wallpapers pause while the Mac uses battery power and resume after external power reconnects. Unusual window layouts, multiple Spaces, or some games may affect detection.

## Menu Bar, Shortcuts, and Launch

### Does MagicDesk keep running after I close the main window?

MagicDesk can remain in the menu bar and continue displaying live wallpapers. Under Settings > General, choose whether to show the Dock icon and whether closing the main window minimizes it, hides it, or quits the App.

If you only close or hide the window, reopen the main window from the menu-bar icon. The App exits only when you choose “Quit Application.”

### What should I do if global shortcuts do not work?

Open Settings > Shortcuts and confirm that:

- “Enable Shortcuts” is on;
- The relevant action is enabled;
- The shortcut does not conflict with macOS or another app; and
- A changed combination was saved successfully.

Use “Restore All Defaults” to register the default combinations again. This replaces your current custom shortcuts.

### What should I do if MagicDesk does not launch at login?

First enable “Open MagicDesk after login” under Settings > General. If it still does not work:

- Choose “Open System Login Items Settings”;
- Confirm in macOS System Settings that MagicDesk may open at login;
- Turn the option off and on again; and
- Quit and reopen MagicDesk, then check the status.

## Purchase and Restoration

### What is “Permanently Remove Watermark”?

It is a one-time, non-consumable in-app purchase, not an auto-renewable subscription. After Apple verifies the purchase, MagicDesk permanently removes its desktop watermark. The entitlement is associated with the Apple Account used to purchase it.

### What should I do if a purchase fails?

Confirm that:

- The Mac is connected to the internet;
- The App Store is signed in to a valid Apple Account;
- Your payment method and purchase restrictions allow in-app purchases;
- App Store services are available; and
- The product price loaded successfully.

If you were charged but the watermark remains, do not purchase again. Try “Restore Purchases” first.

### How do I restore a purchase?

Use the same Apple Account that made the purchase, then:

- Open MagicDesk Settings;
- Go to the Subscription section;
- Choose “Restore Purchases”; and
- Wait for Apple to synchronize and verify the transaction.

If no restorable purchase is found, check the Apple Account, network, and purchase history. A refunded, revoked, or unverified transaction does not restore an active entitlement.

## Contact Support

If these steps do not resolve the issue, email:

[MichaelSilvesterCN+MagicDesk@gmail.com](mailto:MichaelSilvesterCN+MagicDesk@gmail.com)

To help us investigate, include:

- MagicDesk version;
- macOS version and Mac model;
- Number, connection type, and arrangement of displays;
- Media type and whether it came from a local file or URL;
- Exact steps and error messages; and
- Relevant screenshots or a screen recording.

If the issue involves private or copyrighted content, do not send the media file itself. You can provide a redacted screenshot, file extension, publicly accessible test URL, or minimal steps that reproduce the problem.

## Related Documents

- [Privacy Policy](/journal/magicdesk-privacy-policy/)
- [Terms of Use](/journal/magicdesk-terms-of-use/)

© 2026 MagicDesk. All rights reserved.
