---
date: 2026-10-04 12:00:00
app: arcula
pin: -1
category: legal
featured: false
titleZh: Arcula 隐私政策
titleEn: Arcula Privacy Policy
excerptZh: 了解本地加密、系统权限、入侵记录、浏览器传输与加密备份如何处理你的信息。
excerptEn: How local encryption, permissions, Intruder Log, browser transfers, and Encrypted Backup handle your information.
---
<!-- zh -->
**最后更新及生效日期：2026 年 10 月 4 日**

本政策说明 Michael Silvester（下称“我们”）提供的 Arcula 如何处理信息。隐私问题请联系 [MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com)。

## 1. 概述

Arcula 是在设备本地加密保存照片与视频的私密相册，不要求注册账户，不提供开发者运营的云存储，不集成广告、用户跟踪或行为分析服务，也不出售个人信息。媒体库不参与 iCloud 同步或设备备份。

你主动导出、通过浏览器传输、选择云端文件或使用 Apple 购买服务时，相关内容会按你的操作传递给接收设备或服务。主动发送支持邮件时，我们会收到邮件中的信息。

## 2. 本地处理的信息

- **媒体与整理信息：** 导入或拍摄的照片、视频、实况照片、GIF、缩略图，以及文件名、格式、大小、拍摄时间、媒体自带的元数据、文件夹、收藏和删除状态。
- **设置与安全信息：** 语言、外观、导入偏好、启动验证与伪装密码设置、文件夹保护信息、密码提示和用于加解密的密钥或验证材料。密钥与相关凭据通过系统钥匙串等本地机制管理；请勿在密码提示中填写敏感信息。
- **入侵记录：** 错误解锁或使用伪装密码进入等事件的时间、类型、次数，以及启用“入侵拍照”并授权相机后拍摄的照片。照片加密保存在本机，不自动发送给开发者，也不用于人脸识别。
- **购买状态：** App 通过 StoreKit 读取产品、交易验证结果、订阅有效期和权益状态，以解锁 Arcula Pro。付款由 Apple 处理，我们无法访问银行卡号或完整付款凭据。

为显示、播放或导出内容，App 会按需解密，并可能生成临时文件。进入后台或锁定时会清理相关明文缓存；已经保存到其他 App、系统相册或接收设备的副本不由 Arcula 管理。

## 3. 系统权限

- **照片：** 导入选中的媒体、读取实况照片资源及拍摄时间，以及在你确认后删除已导入的系统相册原件；添加权限用于把主动导出的内容保存到系统相册。
- **相机：** 用于“私密相机”及你启用的“入侵拍照”。拍照时机受功能设置、权限和设备状态影响。
- **麦克风：** 用于私密相机录制视频的声音。
- **本地网络：** 用于同一 Wi-Fi 下的“浏览器导入”和“导出到其他设备”。
- **Face ID / Touch ID：** 由系统验证身份，以解锁 App 或加密文件夹。Arcula 只接收验证结果，无法获取面部或指纹模板；这与相机拍摄的入侵照片是不同的功能。

你可以在系统“设置”中管理权限。拒绝权限会影响对应功能。如果选中的照片或文件由 iCloud 或其他文件提供者保存，系统可能通过相应服务下载。

## 4. 浏览器传输与导出

打开传输功能后，Arcula 在本地网络提供 HTTP 页面，通过页面显示的地址与认证信息连接其他设备。媒体直接在设备之间传输，不经过开发者服务器；连接中会处理文件内容、文件名、请求及网络地址等必要信息。

**HTTP 不提供传输加密，本地存储加密不等于网络传输加密。** 请仅在可信网络使用，妥善保管访问凭据，并在完成后关闭传输页面。导出到系统相册、其他 App 或浏览器的普通媒体文件不再受 Arcula 的保险箱加密保护。

## 5. 加密备份与数据保留

Arcula Pro 的“加密备份”按你的操作生成备份文件，并保存到你选择的位置。你选择 iCloud 云盘或其他云服务时，备份会由该服务保存，受其隐私政策约束；这不属于 Arcula 自动云同步。

**备份密码允许留空。留空时，持有备份文件的人可在无需密码的情况下恢复内容。** 请设置妥善保管的密码。App 不保存备份密码，我们也无法找回。未解锁的加密文件夹及其内容不会纳入备份，“最近删除”内容也不包含在媒体备份中；请检查备份提示与结果。

本地媒体通常保留至你删除。启用“最近删除”时，删除内容保留 30 天后可由 App 清理；你也可提前永久删除。关闭该功能时，删除会直接永久移除内容。入侵记录可在 App 中删除，设置和缓存按功能需要保存或清理。

卸载 App 会删除其本地私有空间；由于媒体库及密钥不参与设备备份，不能依赖系统备份找回。请在卸载或换机前保存有效的备份或导出所需媒体。外部副本、系统钥匙串项目和 Apple 购买记录由对应系统或服务管理。

## 6. 信息共享与支持邮件

我们不为广告或营销目的共享你的相册信息。Apple 会处理购买、系统权限和相关平台服务；你选择的接收设备、文件提供者、云存储或分享目标会处理你主动交给它们的内容。

联系支持时，我们及邮件服务提供者会处理你的邮箱地址、邮件内容和附件，仅用于答复、排查及必要的服务记录，保留时间以解决问题和适用法律要求所必需为限。请勿发送密码、密钥、私密媒体或完整备份。

我们可能依法披露实际持有的信息，但无法访问仅存于你设备中的加密媒体。第三方服务可能在你所在地区以外处理信息，请查看其政策。

## 7. 你的选择与安全

你可以在 App 内查看、导出或删除媒体和入侵记录，调整安全设置，在系统中撤回权限，并通过 Apple 账户管理订阅。Arcula 没有开发者账户，因此没有账户注销流程。对于你通过邮件提供的信息，可联系我们请求访问、更正或删除，以及适用法律赋予的其他权利。

本地加密、系统钥匙串和系统身份验证用于降低未授权访问风险，但不能保证绝对安全。请保护设备、密码与备份，谨慎管理导出副本。我们无法远程恢复已永久删除的内容或遗失的密码。

## 8. 未成年人及政策更新

Arcula 并非专门面向儿童设计。未成年人应在监护人指导下使用；如认为儿童通过支持邮件提供了个人信息，请联系我们处理。

功能或信息处理方式变化时，我们会更新本页日期；重大变化会通过适当方式告知，并在法律要求时取得同意。

## 9. 联系与相关链接

联系：[MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com)

- [用户协议](/journal/arcula-terms-of-use/)
- [技术支持](/journal/arcula-technical-support/)

<!-- en -->
**Last updated and effective: October 4, 2026**

This policy explains how Arcula, provided by Michael Silvester (“we”), handles information. For privacy questions, contact [MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com).

## 1. Overview

Arcula is a private photo vault that encrypts photos and videos on your device. It requires no account, provides no developer-operated cloud storage, integrates no advertising, tracking, or behavioral analytics services, and does not sell personal information. The library is excluded from iCloud sync and device backups.

When you export, transfer through a browser, select cloud files, or use Apple purchases, the relevant content passes to the recipient device or service according to your actions. If you send a support email, we receive the information in that email.

## 2. Information processed locally

- **Media and organization:** Imported or captured photos, videos, Live Photos, GIFs, thumbnails, filenames, formats, sizes, capture dates, embedded metadata, folders, favorites, and deletion status.
- **Settings and security:** Language, appearance, import preferences, Unlock Method and Decoy Passcode settings, folder protection information, password hints, and encryption keys or verification material. Keys and related credentials are managed through local mechanisms including the system Keychain. Do not put sensitive information in password hints.
- **Intruder Log:** Times, types, and counts of events such as failed unlocks or entry using a decoy passcode, plus photos captured when Intruder Photos is enabled and camera access is granted. Photos are encrypted locally, are not automatically sent to the developer, and are not used for facial recognition.
- **Purchase status:** StoreKit provides product information, transaction verification results, subscription expiration, and entitlement status to unlock Arcula Pro. Apple processes payments; we cannot access card numbers or complete payment credentials.

To display, play, or export content, the app decrypts it as needed and may create temporary files. Related plaintext caches are cleaned up when the app locks or enters the background. Copies already saved to other apps, Photos, or recipient devices are outside Arcula’s control.

## 3. System permissions

- **Photos:** Import selected media, read Live Photo resources and capture dates, and delete imported originals from Photos after your confirmation. Add access saves media you choose to export to Photos.
- **Camera:** Used for Private Camera and Intruder Photos when enabled. Capture timing depends on feature settings, permission, and device state.
- **Microphone:** Records audio for videos taken with Private Camera.
- **Local Network:** Enables Browser Import and Export to Other Devices on the same Wi-Fi network.
- **Face ID / Touch ID:** The system authenticates you to unlock the app or encrypted folders. Arcula receives the result and cannot access face or fingerprint templates. This is separate from taking intruder photos with the camera.

Manage permissions in system Settings. Refusing permission affects the corresponding feature. If selected photos or files are stored in iCloud or another file provider, the system may download them through that service.

## 4. Browser transfers and exports

While a transfer feature is open, Arcula serves a local HTTP page. Other devices connect using the displayed address and credentials. Media travels directly between devices without a developer server; file contents, filenames, requests, and network addresses are processed as needed for the connection.

**HTTP does not encrypt the connection. Encryption at rest does not mean transfers are encrypted.** Use a trusted network, protect access credentials, and close the transfer screen when finished. Ordinary media exported to Photos, another app, or a browser is no longer protected by Arcula’s vault encryption.

## 5. Encrypted Backup and retention

Arcula Pro’s Encrypted Backup creates a backup file at your request, saved to a location you choose. If you choose iCloud Drive or another cloud service, that service stores the file under its own privacy policy. This is not automatic cloud sync by Arcula.

**The backup password may be empty. With an empty password, anyone holding the file can restore its contents without a password.** Set a password and keep it safe. The app does not save backup passwords, and we cannot recover them. Locked encrypted folders and their contents are omitted from backups, as are items in Recently Deleted. Check the backup notices and results.

Local media normally remains until you delete it. With Recently Deleted enabled, deleted items are retained for 30 days before the app can purge them; you can permanently delete them earlier. With this feature disabled, deletion immediately removes items permanently. Intruder Log entries can be deleted in the app. Settings and caches are retained or cleared as needed for their functions.

Deleting the app removes its local private space. Because the library and keys are excluded from device backups, you cannot rely on system backups to recover them. Save a valid backup or export the media you need before deleting the app or switching devices. External copies, system Keychain items, and Apple purchase records are managed by the respective systems or services.

## 6. Sharing and support email

We do not share your library information for advertising or marketing. Apple handles purchases, system permissions, and related platform services. Recipient devices, file providers, cloud storage, or sharing destinations you choose process content you explicitly send to them.

When you contact support, we and the email provider process your email address, message, and attachments to reply, troubleshoot, and maintain necessary service records. We retain them only as needed to resolve the issue and meet applicable legal obligations. Do not send passwords, keys, private media, or complete backups.

We may disclose information we actually hold when legally required, but cannot access encrypted media stored only on your device. Third-party services may process information outside your region; consult their policies.

## 7. Your choices and security

You can view, export, or delete media and Intruder Log entries, change security settings, revoke system permissions, and manage subscriptions through your Apple Account. Arcula has no developer account to delete. For information you send by email, contact us to request access, correction, deletion, or other rights available under applicable law.

Local encryption, the system Keychain, and system authentication reduce unauthorized access risks but cannot guarantee absolute security. Protect your device, passwords, and backups, and manage exported copies carefully. We cannot remotely recover permanently deleted content or lost passwords.

## 8. Minors and policy updates

Arcula is not specifically designed for children. Minors should use it with a guardian’s guidance. If you believe a child has provided personal information through support email, contact us.

We will update the date on this page when features or information practices change. Material changes will be communicated appropriately, with consent obtained where required by law.

## 9. Contact and related links

Contact: [MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com)

- [Terms of Use](/journal/arcula-terms-of-use/)
- [Technical Support](/journal/arcula-technical-support/)
