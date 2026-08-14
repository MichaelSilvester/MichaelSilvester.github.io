---
date: 2026-08-05 11:55:00
app: magicdesk
category: legal
featured: false
titleZh: MagicDesk 隐私政策
titleEn: MagicDesk Privacy Policy
excerptZh: 说明 MagicDesk 如何在 Mac 本地处理壁纸素材、设置与权限，以及远程内容、诊断日志、App Store 购买、数据保留和用户选择。
excerptEn: How MagicDesk handles wallpaper media, settings, and permissions locally on your Mac, together with remote content, diagnostic logs, App Store purchases, retention, and user choices.
---
<!-- zh -->
**最后更新：2026 年 8 月 5 日**

**生效日期：2026 年 8 月 5 日**

MagicDesk（以下简称“本 App”）是一款适用于 macOS 的动态壁纸播放器和管理工具。本隐私政策说明本 App 如何处理与你有关的信息。

如果你对本隐私政策有任何疑问，请发送邮件至 [MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com) 联系我们。

## 1. 政策摘要

当前版本的 MagicDesk：

- 不要求注册开发者账号；
- 不包含开发者集成的广告或第三方行为分析 SDK；
- 不会将你的本地壁纸库、列表或显示器分配上传到开发者服务器；
- 主要在你的 Mac 本地处理素材、缩略图、网页缓存、设置和购买权益状态；
- 只有在你主动添加或播放远程内容、打开第三方网站、购买或恢复购买等功能时，才会连接相应的网络服务。

## 2. 本 App 在本地处理的信息

为了提供壁纸管理和播放功能，本 App 可能在你的 Mac 上处理并保存：

- 你主动导入的图片、GIF 和视频文件；
- 你添加的远程图片、视频或网页 URL；
- 文件名、网页标题、素材类型、标签、收藏状态、排序和最近使用时间；
- 素材缩略图、下载文件、网页封面和网页缓存；
- 自定义壁纸列表及其中包含的素材；
- 每块显示器的壁纸分配、适配方式和启用状态；
- 语言、静音、快捷键、省电、登录启动、程序坞图标和窗口关闭方式等设置；
- “永久移除水印”的本地权益状态和商品显示价格缓存。

这些数据用于在你的设备上展示媒体库、恢复壁纸和保留你的偏好。开发者不会通过自有服务器自动接收这些内容。

## 3. 文件访问与本地缓存

当你点击“添加文件”或将文件拖入本 App 时，macOS 会让你选择要使用的文件。本 App 的沙盒权限仅允许读取你主动选择的文件，并可能创建安全范围书签，以便之后继续访问该文件。

为了稳定播放、生成缩略图或保留远程内容，本 App 可能会把文件副本、下载内容、缩略图或网页归档保存在其应用支持目录中。删除素材时，本 App 会在不再被其他素材使用的情况下清理对应缓存。

本 App 不会扫描或上传你未主动选择的其他个人文件。

## 4. 网络连接与远程内容

当你主动添加 HTTP 或 HTTPS URL 时，本 App 可能会：

- 请求该地址以识别内容类型和可用性；
- 下载远程图片或视频并保存到本地缓存；
- 在网页视图中加载网页，读取网页标题并生成封面和网页缓存；
- 在网络可用时重新加载网页壁纸或远程内容。

相关请求会向你指定的网站或内容服务器传输正常建立网络连接所需的信息，例如 IP 地址、请求时间、URL、HTTP 标头以及该服务设置的 Cookie 或其他网页存储。具体处理方式由对应网站或服务器决定，开发者无法控制。

本 App 允许使用 HTTP 链接。HTTP 不提供传输加密，数据可能被网络中的其他方截获或修改。请优先使用 HTTPS，并只添加你信任的来源。

## 5. 网页壁纸

网页壁纸使用 macOS WebKit 加载。网页可能运行脚本、播放媒体、使用 Cookie 或本地网页存储，并向其自身或第三方域名发送请求，就像在浏览器中访问该网页一样。

添加网页前，本 App 会加载页面以生成标题、封面和网页归档。网络可用时，网页壁纸优先显示远程页面；网络不可用时，可能使用已保存的网页缓存。

请查看相关网站的隐私政策和使用条款。本 App 不对第三方网页的数据处理、安全性或持续可用性负责。

## 6. 第三方壁纸网站

本 App 的“壁纸网站”设置页可能提供第三方网站链接，仅供查找素材时参考。点击链接后，网站会在浏览器中打开，并按其自身政策处理信息。

这些网站与开发者不存在因列出链接而产生的合作、推荐或背书关系。你应自行判断内容来源是否合法可信，并遵守相应网站的隐私政策、使用条款和版权规则。

## 7. App Store 购买

MagicDesk 当前可能提供“永久移除水印”的一次性非消耗型 App 内购买。商品信息、购买、付款、交易验证和恢复购买由 Apple 通过 StoreKit 和 App Store 处理。

本 App 会从 Apple 请求商品信息和当前购买权益，并在本地记录水印是否已移除以及商品的本地化显示价格。开发者无法访问你的支付卡号、支付密码或完整支付凭据。Apple 会依据其 [App Store 与隐私说明](https://www.apple.com/legal/privacy/data/zh-cn/appstore/) 和适用政策处理相关信息。

## 8. 设备状态与智能省电

如果你启用相关省电选项，本 App 会在本地检查：

- Mac 是否正在使用电池供电；
- 当前前台 App 是否存在接近全屏的窗口；
- App 激活、空间切换和设备唤醒等系统状态变化。

这些信息仅用于决定是否暂停或恢复动态壁纸。当前版本不会把前台 App 或电源状态发送到开发者服务器。

## 9. 诊断日志

发生媒体播放失败、卡顿或无法播放到结尾时，本 App 可能写入 macOS 统一日志，内容可能包括播放场景、文件名或 URL 的最后一部分以及系统返回的错误信息。

这些日志保留在系统管理的本地诊断环境中，不会由本 App 自动上传给开发者。只有在你主动联系支持并自行提供日志、截图或问题描述时，开发者才会收到你选择发送的内容。

## 10. 联系支持时提供的信息

当你通过邮件联系开发者时，我们会收到你主动提供的信息，例如：

- 邮箱地址和邮件内容；
- MagicDesk 与 macOS 版本；
- 设备型号、显示器连接情况和复现步骤；
- 你选择附带的截图、日志、文件名或 URL。

这些信息仅用于回复咨询、排查问题、处理侵权通知或履行适用法律要求。请不要发送不必要的敏感信息，也不要发送你无权分享的媒体文件。

## 11. 数据共享

开发者不会出售你的个人信息。除以下情形外，我们不会向第三方披露你通过支持渠道提供的信息：

- 你明确同意或要求；
- 为遵守法律义务、法院命令或有权机关的合法要求；
- 为保护用户、开发者或他人的合法权利、安全与财产；
- 在业务转让等情况下依法进行，并提供必要通知。

你主动访问的网站、远程内容服务器和 Apple 服务属于独立第三方，其数据处理受各自政策约束。

## 12. 数据保留与删除

本地壁纸数据、缓存和设置通常会保留到你在 App 中删除相应素材、清除相关数据或卸载本 App。macOS 或 App Store 仍可能按照系统备份、交易记录和法定义务保留部分信息。

支持邮件会在处理咨询、维护必要记录、解决争议或履行法律义务所需的合理期限内保留，之后删除或匿名化。

你可以：

- 在壁纸库中删除素材、列表和相应缓存；
- 在设置中更改语言、声音、省电、快捷键、登录启动和其他偏好；
- 在 macOS 系统设置中管理登录项或本 App 的相关权限；
- 停止使用并卸载本 App，以删除由系统随 App 移除的本地数据；
- 联系我们，请求访问、更正、删除、限制处理或其他隐私相关协助。

## 13. 数据安全

本 App 使用 macOS App Sandbox、用户选择文件权限、安全范围书签以及系统提供的 StoreKit 验证机制，降低未经授权访问的风险。

但任何设备、存储或网络传输都无法保证绝对安全。请保护你的 Mac 登录凭据，谨慎添加远程 URL，并为重要素材自行保留备份。

## 14. 儿童隐私

本 App 面向普通用户，不以收集儿童个人信息为目的，也不提供开发者账号注册功能。

如果父母或监护人认为儿童通过支持邮件向我们提供了个人信息，请发送邮件至 [MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com) 联系我们。我们会依据适用法律审查并处理该请求。

## 15. 跨境处理

开发者不运营收集 MagicDesk 壁纸库数据的服务器，因此不会自行将你本地保存的素材、列表或显示器分配传输到其他国家或地区。

当你访问位于其他国家或地区的远程网站或媒体服务器，或使用 Apple 提供的服务时，相关信息可能在服务提供者运营所在地处理。此类处理受相应提供者的隐私政策约束。

## 16. 本政策的更新

我们可能更新本隐私政策，以反映 App 功能、适用法律或平台要求的变化。

如果某项变更对信息处理方式产生重大影响，我们会通过 App 内消息、版本说明、本隐私政策页面或其他适当方式发出通知。更新后的政策会标明新的“最后更新”和“生效日期”。

## 17. 联系我们

开发者：Michael Silvester

联系邮箱：[MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com)

关联文档：[MagicDesk 用户协议](/journal/magicdesk-terms-of-use/)

<!-- en -->
**Last Updated: August 5, 2026**

**Effective Date: August 5, 2026**

MagicDesk (the “App”) is a live-wallpaper player and management tool for macOS. This Privacy Policy explains how the App handles information relating to you.

If you have questions about this Privacy Policy, contact us at [MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com).

## 1. Summary

The current version of MagicDesk:

- Does not require a developer-operated account;
- Does not include developer-integrated advertising or third-party behavioral analytics SDKs;
- Does not upload your local wallpaper library, lists, or display assignments to a developer server;
- Primarily processes media, thumbnails, webpage caches, settings, and purchase-entitlement state locally on your Mac; and
- Connects to relevant network services only when you choose to add or play remote content, open a third-party website, make a purchase, or restore a purchase.

## 2. Information Processed Locally

To provide wallpaper management and playback, the App may process and store the following on your Mac:

- Image, GIF, and video files you choose to import;
- Remote image, video, or webpage URLs you add;
- File names, webpage titles, media types, tags, favorite status, ordering, and last-used times;
- Media thumbnails, downloaded files, webpage cover images, and webpage caches;
- Custom wallpaper lists and their included items;
- Wallpaper assignments, fit modes, and enabled state for each display;
- Language, mute, shortcut, power-saving, launch-at-login, Dock icon, and window-closing preferences; and
- The local entitlement state for “Permanently Remove Watermark” and a cached localized product price.

This data is used to display your library, restore wallpapers, and preserve your preferences on your device. The Developer does not automatically receive this content through a developer-operated server.

## 3. File Access and Local Caches

When you choose “Add Files” or drag files into the App, macOS lets you select the files you want to use. The App’s sandbox permission allows read-only access to files you select and may create security-scoped bookmarks so it can access them again later.

For reliable playback, thumbnail generation, or remote-content retention, the App may save file copies, downloads, thumbnails, or webpage archives in its Application Support directory. When you delete an item, the App removes its cache when that cache is no longer used by another item.

The App does not scan or upload other personal files that you have not selected.

## 4. Network Connections and Remote Content

When you choose to add an HTTP or HTTPS URL, the App may:

- Request the address to identify its content type and availability;
- Download a remote image or video to a local cache;
- Load a webpage in a web view, read its title, and generate a cover image and webpage cache; and
- Reload a webpage wallpaper or remote content while a network connection is available.

These requests transmit information normally required to establish a network connection to the website or content server you specified, such as your IP address, request time, URL, HTTP headers, and any cookies or other web storage set by that service. The relevant website or server determines how it processes this information, and the Developer does not control it.

The App permits HTTP links. HTTP does not encrypt transmission, so other parties on the network may intercept or modify the data. Prefer HTTPS and add content only from sources you trust.

## 5. Webpage Wallpapers

Webpage wallpapers are loaded with macOS WebKit. A webpage may run scripts, play media, use cookies or local web storage, and send requests to its own or third-party domains, as it would when visited in a browser.

Before adding a webpage, the App loads it to generate a title, cover image, and web archive. When the network is available, a webpage wallpaper prefers the remote page; when offline, it may use the saved webpage cache.

Review the relevant website’s privacy policy and terms. The App is not responsible for a third-party webpage’s data practices, security, or continued availability.

## 6. Third-Party Wallpaper Websites

The “Wallpaper Websites” section in Settings may provide links to third-party sites solely as references for finding media. When you follow a link, it opens in your browser and the website processes information under its own policies.

Listing a website does not create a partnership, recommendation, or endorsement by the Developer. You are responsible for deciding whether a source is lawful and trustworthy and for complying with its privacy policy, terms, and copyright rules.

## 7. App Store Purchases

MagicDesk may currently offer “Permanently Remove Watermark” as a one-time, non-consumable in-app purchase. Product information, purchases, payment, transaction verification, and purchase restoration are handled by Apple through StoreKit and the App Store.

The App requests product information and current entitlements from Apple and locally records whether the watermark has been removed together with a cached localized product price. The Developer cannot access your payment-card number, payment password, or complete payment credentials. Apple processes relevant information under its [App Store & Privacy notice](https://www.apple.com/legal/privacy/data/en/appstore/) and applicable policies.

## 8. Device State and Smart Power Saving

If you enable the relevant power-saving options, the App locally checks:

- Whether the Mac is running on battery power;
- Whether the frontmost app has a window that is approximately full screen; and
- System-state changes such as app activation, Space changes, and device wake events.

This information is used only to decide whether to pause or resume live wallpapers. The current version does not send the frontmost app or power state to a developer server.

## 9. Diagnostic Logs

When media playback fails, stalls, or cannot reach the end, the App may write to the macOS unified log. Entries may include the playback context, a file name or the last portion of a URL, and an error returned by the system.

These logs remain in the diagnostic environment managed by the operating system and are not automatically uploaded to the Developer by the App. The Developer receives only logs, screenshots, or problem descriptions that you choose to send when contacting support.

## 10. Information You Provide to Support

If you email the Developer, we receive the information you choose to provide, such as:

- Your email address and message;
- Your MagicDesk and macOS versions;
- Device model, display setup, and steps to reproduce a problem; and
- Screenshots, logs, file names, or URLs you choose to attach.

This information is used only to answer your request, troubleshoot the issue, process an infringement notice, or comply with applicable law. Do not send unnecessary sensitive information or media that you are not authorized to share.

## 11. Data Sharing

The Developer does not sell your personal information. Except in the following circumstances, we do not disclose information you provide through support channels:

- At your direction or with your consent;
- To comply with legal obligations, court orders, or lawful requests from competent authorities;
- To protect the lawful rights, safety, or property of users, the Developer, or others; or
- In connection with a lawful business transfer, with notice where required.

Websites, remote-content servers, and Apple services that you choose to use are independent third parties and process data under their own policies.

## 12. Retention and Deletion

Local wallpaper data, caches, and settings generally remain until you delete the relevant item in the App, remove related data, or uninstall the App. macOS or the App Store may retain certain information under system backups, transaction-record requirements, or legal obligations.

Support email is retained for a reasonable period needed to handle the inquiry, maintain necessary records, resolve disputes, or comply with law, and is then deleted or anonymized.

You can:

- Delete media, lists, and related caches in the wallpaper library;
- Change language, sound, power-saving, shortcut, launch-at-login, and other preferences in Settings;
- Manage login items or relevant App permissions in macOS System Settings;
- Stop using and uninstall the App to remove local data that the operating system removes with the App; and
- Contact us to request access, correction, deletion, restriction, or other privacy-related assistance.

## 13. Data Security

The App uses macOS App Sandbox, user-selected file permissions, security-scoped bookmarks, and StoreKit verification mechanisms to reduce the risk of unauthorized access.

No device, storage system, or network transmission can be guaranteed completely secure. Protect your Mac credentials, add remote URLs carefully, and keep your own backup of important media.

## 14. Children’s Privacy

The App is intended for a general audience, does not seek to collect children’s personal information, and does not provide developer-operated account registration.

If a parent or guardian believes that a child provided personal information through a support email, contact us at [MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com). We will review and address the request in accordance with applicable law.

## 15. International Processing

The Developer does not operate servers that collect the MagicDesk wallpaper library and therefore does not independently transfer your locally stored media, lists, or display assignments across national borders.

When you access a remote website or media server located in another country or region, or use services provided by Apple, relevant information may be processed where those providers operate. Such processing is governed by the applicable provider’s privacy policy.

## 16. Changes to This Policy

We may update this Privacy Policy to reflect changes in App functionality, applicable law, or platform requirements.

If a change materially affects how information is processed, we will provide notice through an in-app message, release notes, this Privacy Policy page, or another appropriate method. The revised policy will identify its updated “Last Updated” and “Effective Date.”

## 17. Contact Us

Developer: Michael Silvester

Contact Email: [MichaeLLynxCN@gmail.com](mailto:MichaeLLynxCN@gmail.com)

Related Document: [MagicDesk Terms of Use](/journal/magicdesk-terms-of-use/)
