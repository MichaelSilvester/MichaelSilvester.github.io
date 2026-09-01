---
date: 2026-08-05 11:57:10
app: picturium
pin: -1
category: legal
featured: false
titleZh: Picturium 隐私政策
titleEn: Picturium Privacy Policy
excerptZh: 说明 Picturium 如何在 Mac 本地处理你选择的图片、编辑数据与设置，App 不含网络权限，以及 App Store 购买、诊断日志与用户选择。
excerptEn: How Picturium handles images, edits, and settings locally on your Mac. The App has no network entitlement; also covers App Store purchases, diagnostic logs, and your choices.
---
<!-- zh -->
**最后更新：2026 年 8 月 5 日**

**生效日期：2026 年 8 月 5 日**

Picturium（以下简称“本 App”）是一款适用于 macOS 的图片查看与编辑工具。本隐私政策说明本 App 如何处理与你有关的信息。

如果你对本隐私政策有任何疑问，请发送邮件至 [MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com) 联系我们。

## 1. 政策摘要

当前版本的 Picturium：

- 不要求注册账户或登录；
- 不包含广告、第三方行为分析 SDK 或跟踪代码；
- 不申请网络访问权限，App 本身不会向任何服务器发送你的图片或编辑内容；
- 完全在你的 Mac 本地处理图片、编辑数据和设置；
- 你的购买由 Apple App Store 处理，开发者不运营收集你使用数据的服务器。

## 2. 本 App 在本地处理的信息

为了提供图片查看和编辑功能，本 App 可能在你的 Mac 上处理并保存：

- 你主动打开或拖入的图片文件，包括常见图片格式、部分相机 RAW 格式和 GIF 等动态图片；
- 文件名、文件夹结构、文件大小和图片的基本属性；
- 你在编辑器中创建的裁剪、旋转、涂鸦、文字标注和马赛克/像素化处理等编辑操作与历史；
- 缩略图缓存，用于加快浏览器和文件夹预览的显示速度；
- 窗口布局、缩放、语言、外观和其他界面偏好设置。

这些数据用于在你的设备上显示图片、支持编辑和保留你的偏好。开发者不会通过自有服务器接收这些内容，因为本 App 不包含网络访问权限。

## 3. 文件访问、编辑与本地缓存

当你打开文件、将文件拖入本 App，或使用“打开文件夹”浏览图片时，macOS 会让你选择要使用的文件或文件夹。本 App 的沙盒权限仅允许读写你主动选择的文件，并可能创建安全范围书签，以便之后继续访问该文件或文件夹，且不必每次都重新弹出选择面板。

本 App 支持将编辑结果保存回原始文件。保存操作会先写入临时文件，再原子替换原文件，以降低保存过程中数据损坏的风险；但这仍会覆盖原始文件内容。请在编辑重要或唯一的图片前自行保留备份。

为了加快文件夹浏览和缩略图显示，本 App 可能在其应用支持目录中保存缩略图缓存。清理缓存或卸载本 App 会移除这些本地缓存，不会影响你的原始图片文件。

本 App 不会扫描或访问你未主动选择的其他个人文件或文件夹。

## 4. 系统权限

本 App 可能请求以下系统权限：

- **用户选择文件的读写权限：** 用于打开、编辑和保存你选择的图片；
- **Apple 事件（自动化）权限：** 仅用于在你主动操作时，请求 Finder 打开所选图片对应的系统“显示简介”窗口，本 App 不会借助该权限读取或修改其他与图片无关的数据。

你可以在 macOS“系统设置”中查看或撤销这些权限。撤销权限可能导致相关功能无法使用。

## 5. 网络与第三方服务

本 App 未申请网络访问权限，不会主动连接互联网，也不包含广告网络、分析 SDK 或第三方跟踪代码。你在使用本 App 查看、编辑和保存图片的过程中，相关数据不会离开你的 Mac。

唯一涉及网络的环节是通过 Apple App Store 下载、安装和购买本 App，该环节完全由 Apple 处理，详见下一条。

## 6. App Store 购买

Picturium 是一款一次性付费下载的 App，具体价格以 App Store 商品页面显示为准。完成购买后，你可以在拥有同一 Apple 账户的兼容设备上重新下载安装，无需在本 App 内另行购买或恢复购买。

商品信息、定价、付款、税费、促销和交易记录均由 Apple 通过 App Store 处理。开发者不运营收集购买信息的服务器，也无法访问你的支付卡号、支付密码或完整支付凭据。Apple 依据其 [App Store 与隐私说明](https://www.apple.com/legal/privacy/data/zh-cn/appstore/) 和适用政策处理相关信息。

## 7. 诊断日志

本 App 内置的诊断输出默认关闭，仅供开发者本人或收到明确指引的用户在排查图片解码或动图播放问题时临时开启。开启后，相关信息会写入 macOS 统一日志，可能包含播放场景、文件名的一部分和系统返回的错误信息。

这些日志保留在系统管理的本地诊断环境中，不会由本 App 自动上传给开发者。只有在你主动联系支持并自行提供日志、截图或问题描述时，开发者才会收到你选择发送的内容。

## 8. 联系支持时提供的信息

当你通过邮件联系开发者时，我们会收到你主动提供的信息，例如：

- 邮箱地址和邮件内容；
- Picturium 与 macOS 版本；
- 设备型号和复现步骤；
- 你选择附带的截图、日志、文件名或文件格式说明。

这些信息仅用于回复咨询、排查问题、处理侵权通知或履行适用法律要求。请不要发送不必要的敏感信息，也不要发送你无权分享的图片。

## 9. 数据共享

开发者不会出售你的个人信息。除以下情形外，我们不会向第三方披露你通过支持渠道提供的信息：

- 你明确同意或要求；
- 为遵守法律义务、法院命令或有权机关的合法要求；
- 为保护用户、开发者或他人的合法权利、安全与财产；
- 在业务转让等情况下依法进行，并提供必要通知。

Apple App Store 属于独立第三方，其数据处理受 Apple 自身政策约束，开发者无法控制。

## 10. 数据保留与删除

本地图片、编辑历史、缩略图缓存和设置通常会保留到你在系统中删除相应文件、清除应用支持目录中的缓存，或卸载本 App。macOS 或 App Store 仍可能按照系统备份、交易记录和法定义务保留部分信息。

支持邮件会在处理咨询、维护必要记录、解决争议或履行法律义务所需的合理期限内保留，之后删除或匿名化。

你可以：

- 删除本地图片文件及其编辑结果；
- 在 App 支持目录中清理缩略图缓存；
- 在“系统设置”中管理本 App 的文件访问和自动化权限；
- 停止使用并卸载本 App，以删除由系统随 App 移除的本地数据；
- 联系我们，请求访问、更正、删除或其他隐私相关协助。

## 11. 数据安全

本 App 使用 macOS App Sandbox、用户选择文件权限、安全范围书签以及原子文件替换等机制，降低未经授权访问和保存过程中数据损坏的风险。

但任何设备或存储系统都无法保证绝对安全。请保护你的 Mac 登录凭据，并为重要图片自行保留备份。

## 12. 儿童隐私

本 App 面向普通用户，不以收集儿童个人信息为目的，也不提供账户注册功能。

如果父母或监护人认为儿童通过支持邮件向我们提供了个人信息，请发送邮件至 [MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com) 联系我们。我们会依据适用法律审查并处理该请求。

## 13. 跨境处理

由于本 App 不申请网络权限，也不运营收集你图片或使用数据的服务器，开发者不会自行将你本地保存的图片、编辑数据或设置传输到其他国家或地区。

当你通过 Apple App Store 完成下载或购买时，相关信息可能在 Apple 运营所在地处理，具体受 Apple 自身隐私政策约束。

## 14. 本政策的更新

我们可能更新本隐私政策，以反映 App 功能、适用法律或平台要求的变化。

如果某项变更对信息处理方式产生重大影响，我们会通过 App 内消息、版本说明、本隐私政策页面或其他适当方式发出通知。更新后的政策会标明新的“最后更新”和“生效日期”。

## 15. 联系我们

开发者：Michael Silvester

联系邮箱：[MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com)

关联文档：[Picturium 用户协议](/journal/picturium-terms-of-use/)

<!-- en -->
**Last Updated: August 5, 2026**

**Effective Date: August 5, 2026**

Picturium (the “App”) is an image viewing and editing tool for macOS. This Privacy Policy explains how the App handles information relating to you.

If you have questions about this Privacy Policy, contact us at [MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com).

## 1. Summary

The current version of Picturium:

- Does not require account registration or sign-in;
- Does not include advertising, third-party behavioral analytics SDKs, or tracking code;
- Does not request network access; the App itself never sends your images or edits to any server;
- Processes images, edits, and settings entirely on your Mac; and
- Has its purchase handled by the Apple App Store; the Developer does not operate a server that collects your usage data.

## 2. Information Processed Locally

To provide image viewing and editing, the App may process and store the following on your Mac:

- Image files you choose to open or drag in, including common image formats, some camera RAW formats, and animated images such as GIF;
- File names, folder structure, file size, and basic image properties;
- Edit operations and history you create in the editor, such as crop, rotate, freehand drawing, text annotation, and mosaic/pixelation redaction;
- Thumbnail caches used to speed up browsing and folder previews; and
- Window layout, zoom, language, appearance, and other interface preferences.

This data is used to display your images, support editing, and preserve your preferences on your device. The Developer does not receive this content through a developer-operated server, because the App does not include network access.

## 3. File Access, Editing, and Local Caches

When you open a file, drag a file into the App, or use “Open Folder” to browse images, macOS lets you choose the file or folder you want to use. The App’s sandbox permission allows read-write access only to files or folders you select, and it may create security-scoped bookmarks so it can access them again later without prompting you every time.

The App supports saving edits back to the original file. A save first writes to a temporary file and then atomically replaces the original to reduce the risk of corruption during the save, but it still overwrites the original file’s content. Keep your own backup before editing an important or irreplaceable image.

To speed up folder browsing and thumbnail display, the App may store a thumbnail cache in its Application Support directory. Clearing the cache or uninstalling the App removes this local cache without affecting your original image files.

The App does not scan or access other personal files or folders that you have not selected.

## 4. System Permissions

The App may request the following system permissions:

- **Read-write access to user-selected files:** used to open, edit, and save the images you choose; and
- **Apple Events (automation) permission:** used only, when you choose to do so, to ask Finder to open the system “Get Info” window for a selected image. The App does not use this permission to read or modify other data unrelated to that image.

You can review or revoke these permissions in macOS System Settings. Revoking a permission may make the related feature unavailable.

## 5. Network and Third-Party Services

The App does not request network access, does not initiate internet connections on its own, and does not include an ad network, analytics SDK, or third-party tracking code. While you view, edit, and save images with the App, that data does not leave your Mac.

The only network-related step is downloading, installing, and purchasing the App through the Apple App Store, which Apple handles entirely, as described next.

## 6. App Store Purchases

Picturium is a one-time paid download; the actual price is shown on the App Store product page. After purchase, you can redownload and install the App on compatible devices signed in with the same Apple Account, with no separate in-app purchase or restoration required.

Product information, pricing, payment, taxes, promotions, and transaction records are handled by Apple through the App Store. The Developer does not operate a server that collects purchase information and cannot access your payment-card number, payment password, or complete payment credentials. Apple processes relevant information under its [App Store & Privacy notice](https://www.apple.com/legal/privacy/data/en/appstore/) and applicable policies.

## 7. Diagnostic Logs

Built-in diagnostic output is disabled by default and intended only for the Developer, or a user following explicit guidance, to temporarily enable while troubleshooting image decoding or animated-playback issues. When enabled, related information is written to the macOS unified log and may include the playback context, part of a file name, and an error returned by the system.

These logs remain in the diagnostic environment managed by the operating system and are not automatically uploaded to the Developer by the App. The Developer receives only logs, screenshots, or problem descriptions that you choose to send when contacting support.

## 8. Information You Provide to Support

If you email the Developer, we receive the information you choose to provide, such as:

- Your email address and message;
- Your Picturium and macOS versions;
- Device model and steps to reproduce a problem; and
- Screenshots, logs, file names, or a description of the file format you choose to attach.

This information is used only to answer your request, troubleshoot the issue, process an infringement notice, or comply with applicable law. Do not send unnecessary sensitive information or images that you are not authorized to share.

## 9. Data Sharing

The Developer does not sell your personal information. Except in the following circumstances, we do not disclose information you provide through support channels:

- At your direction or with your consent;
- To comply with legal obligations, court orders, or lawful requests from competent authorities;
- To protect the lawful rights, safety, or property of users, the Developer, or others; or
- In connection with a lawful business transfer, with notice where required.

The Apple App Store is an independent third party whose data practices are governed by Apple’s own policies, which the Developer does not control.

## 10. Retention and Deletion

Local images, edit history, thumbnail caches, and settings generally remain until you delete the relevant file in the Finder, clear the cache in the App’s Application Support directory, or uninstall the App. macOS or the App Store may retain certain information under system backups, transaction-record requirements, or legal obligations.

Support email is retained for a reasonable period needed to handle the inquiry, maintain necessary records, resolve disputes, or comply with law, and is then deleted or anonymized.

You can:

- Delete local image files and their edited results;
- Clear the thumbnail cache in the App’s support directory;
- Manage the App’s file-access and automation permissions in System Settings;
- Stop using and uninstall the App to remove local data that the operating system removes with the App; and
- Contact us to request access, correction, deletion, or other privacy-related assistance.

## 11. Data Security

The App uses macOS App Sandbox, user-selected file permissions, security-scoped bookmarks, and atomic file replacement to reduce the risk of unauthorized access and save-time corruption.

No device or storage system can be guaranteed completely secure. Protect your Mac credentials and keep your own backup of important images.

## 12. Children’s Privacy

The App is intended for a general audience, does not seek to collect children’s personal information, and does not provide account registration.

If a parent or guardian believes that a child provided personal information through a support email, contact us at [MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com). We will review and address the request in accordance with applicable law.

## 13. International Processing

Because the App does not request network access and the Developer does not operate a server that collects your images or usage data, the Developer does not independently transfer your locally stored images, edits, or settings across national borders.

When you download or purchase the App through the Apple App Store, relevant information may be processed where Apple operates, subject to Apple’s own privacy policy.

## 14. Changes to This Policy

We may update this Privacy Policy to reflect changes in App functionality, applicable law, or platform requirements.

If a change materially affects how information is processed, we will provide notice through an in-app message, release notes, this Privacy Policy page, or another appropriate method. The revised policy will identify its updated “Last Updated” and “Effective Date.”

## 15. Contact Us

Developer: Michael Silvester

Contact Email: [MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com)

Related Document: [Picturium Terms of Use](/journal/picturium-terms-of-use/)
