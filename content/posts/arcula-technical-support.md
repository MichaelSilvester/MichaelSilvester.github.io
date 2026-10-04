---
date: 2026-10-04 12:02:00
app: arcula
pin: -1
category: support
featured: false
titleZh: Arcula 技术支持
titleEn: Arcula Technical Support
excerptZh: 查找导入导出、密码保护、加密备份、最近删除与恢复购买的常见问题解答。
excerptEn: Help with importing, exporting, password protection, Encrypted Backup, Recently Deleted, and Restore Purchases.
---
<!-- zh -->
使用 Arcula 遇到问题？可以先查看以下说明，或联系支持邮箱。

**系统要求：iOS / iPadOS 18.0 或更高版本。**

## 导入与导出

### 如何导入照片和视频？

- **从照片导入：** 选择系统相册中的照片、视频、实况照片或 GIF，并选择目标文件夹。
- **从文件导入：** 从“文件”及其中的文件提供者选择媒体。
- **浏览器导入：** 在同一 Wi-Fi 下，通过另一台设备的浏览器上传媒体。
- **私密相机（Pro）：** 直接拍摄并保存到加密相册；录制带声音的视频还需要麦克风权限。

导入失败时，请检查媒体是否已从 iCloud 或文件提供者下载完成、文件是否完整、设备剩余空间是否充足，以及相关权限。可先用一个较小的文件重试。

### 导入后，系统相册原件会自动消失吗？

导入与删除原件是不同操作。启用导入后删除原件的选项后，仍需确认系统删除提示。请先检查 Arcula 中的内容能否正常打开。系统相册的“最近删除”可能仍保留原件，它与 Arcula 的“最近删除”独立管理。

### 浏览器导入或导出无法连接怎么办？

- 两台设备连接同一 Wi-Fi，允许 Arcula 访问本地网络。
- 保持“浏览器导入”或“导出到其他设备”页面在前台。
- 使用页面当前显示的完整 HTTP 地址和认证信息。
- 检查 VPN、访客网络或路由器隔离设置是否阻止设备互相访问。
- 在可信的家庭网络重试，传输完成后关闭页面。

“导出到其他设备”需要 Pro。本地 HTTP 传输没有传输加密，请勿在不可信网络分享私密内容。

### 导出的文件为什么无法继续分享？

Arcula 锁定或进入后台时会清理导出的临时文件。请重新导出，并在离开 App 前完成保存或分享。导出后的普通媒体文件不再受保险箱加密保护。

## 密码与隐私保护

### 如何开启启动验证和伪装密码？

在设置中配置“启动验证”（Pro），使用启动密码或设备支持的 Face ID / Touch ID。伪装密码需与启动密码不同，使用它会进入独立的伪装空间。它不会删除真实相册，也不是密码找回方式。

### 忘记密码怎么办？

如果此前已配置且仍可用的生物识别方式允许解锁，请先尝试该方式。开发者无法查看、重置或远程找回你的启动密码、文件夹密码或备份密码。不要通过卸载 App 尝试重置，卸载会删除本地私有空间。已有备份也需要正确的备份密码才能恢复；空密码备份除外。

### 为什么入侵记录没有照片？

“入侵记录”和“入侵拍照”不是同一个开关。请检查 Pro 权益、是否开启入侵拍照、相机权限、设置的错误次数阈值和是否仅拍摄一次。相机不可用或设备状态受限时，记录可能没有照片。该功能不保证每次尝试都能拍到照片。

## 备份与恢复

### 换手机或卸载前应该做什么？

媒体库和密钥不参与 iCloud 同步或设备备份。请先导出需要的媒体，或使用 Pro 的“加密备份”创建备份并保存到 App 之外，例如“文件”、电脑或外接存储。确认文件保存成功，妥善保管密码，再进行换机或卸载。

备份时应先解锁需要包含的加密文件夹，并检查被跳过的内容；“最近删除”中的项目不包含在备份中。备份针对当前空间的媒体和文件夹，不应把它当作设备及全部 App 设置的完整副本。

### 加密备份可以不设密码吗？

可以，但**留空时，任何拿到备份文件的人都能恢复内容**。建议设置密码并与备份文件分开保管。Arcula 不保存该密码，忘记后无法由开发者恢复。

### 如何从备份恢复？

打开“加密备份”中的“从备份恢复”，选择完整备份文件并输入创建时使用的密码。如果原来留空，恢复时也留空。检查恢复结果与跳过项目。失败时先确认备份已下载完整、密码准确、设备存储空间足够，并使用最新可用的 Arcula 版本。

恢复 Pro 购买不会找回媒体；媒体需要单独从备份恢复。

### 删除的内容还能恢复吗？

启用“最近删除”时，可以在其中恢复尚未永久删除的项目，保留期为 30 天。超过保留期的内容可被清理。关闭“最近删除”、手动永久删除或卸载 App 后，无法从 App 找回；若有包含对应内容的有效备份，可尝试从备份恢复。

## Pro 与购买

### 如何恢复购买？

使用原购买时的 Apple 账户，在设置中打开 Arcula Pro 页面，点击“恢复购买”。恢复不会再次收费。如果仍未显示权益，请检查网络、Apple 账户和订阅是否有效。

### 如何取消订阅？

前往系统“设置”> Apple 账户 >“订阅”> Arcula，按页面提示取消。请在当前周期或试用结束前至少 24 小时操作。终身一次性购买不自动续费。具体步骤见 [Apple 订阅取消说明](https://support.apple.com/en-us/118428)。卸载 App 不会自动取消订阅。

## 联系支持

[MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com)

邮件中请注明 Arcula，并提供 App 版本、设备型号、系统版本、复现步骤及不含隐私的错误截图。涉及导入或恢复时，可说明文件类型和报错文字。

**请勿发送密码、密钥、私人照片或视频、入侵照片或完整备份文件。** 如需示例，请使用不含个人内容的测试文件。

- [隐私政策](/journal/arcula-privacy-policy/)
- [用户协议](/journal/arcula-terms-of-use/)
- [Arcula 产品介绍](/apps/arcula/)

<!-- en -->
Having trouble with Arcula? Start with the guidance below or contact support.

**Requires iOS / iPadOS 18.0 or later.**

## Import and export

### How do I import photos and videos?

- **Import from Photos:** Select photos, videos, Live Photos, or GIFs and choose a destination folder.
- **Import from Files:** Select media from Files or its file providers.
- **Browser Import:** Upload media from another device’s browser on the same Wi-Fi network.
- **Private Camera (Pro):** Capture directly into the encrypted library. Recording video with sound also requires microphone permission.

If importing fails, check that media has fully downloaded from iCloud or its file provider, the file is intact, storage is available, and permissions are granted. Try a small file first.

### Do originals disappear from Photos after import?

Importing and deleting originals are separate actions. Even with the option to delete originals enabled, you must confirm the system deletion prompt. First check that content opens correctly in Arcula. Photos may still retain originals in its own Recently Deleted album, which is managed separately from Arcula’s Recently Deleted.

### Why can’t Browser Import or export connect?

- Connect both devices to the same Wi-Fi network and allow Arcula Local Network access.
- Keep Browser Import or Export to Other Devices open in the foreground.
- Use the complete current HTTP address and credentials displayed on that screen.
- Check whether a VPN, guest network, or router isolation is blocking device communication.
- Retry on a trusted home network and close the transfer screen when finished.

Export to Other Devices requires Pro. Local HTTP transfers are not encrypted in transit; do not share private content over an untrusted network.

### Why can’t I continue sharing an exported file?

Arcula cleans up temporary exported files when it locks or enters the background. Export again and finish saving or sharing before leaving the app. Ordinary exported media files are outside vault encryption.

## Passwords and privacy

### How do I enable app unlocking and a decoy passcode?

Configure Unlock Method (Pro) in settings using an app passcode or supported Face ID / Touch ID. Decoy Passcode must differ from your app passcode and opens a separate decoy space. It does not delete your real library and is not a password recovery method.

### What if I forget a password?

If a previously configured biometric method remains available and permits unlocking, try that first. The Developer cannot view, reset, or remotely recover your app passcode, folder password, or backup password. Do not try deleting the app to reset it: this removes the local private space. Existing backups also require their correct password to restore, except backups created with an empty password.

### Why does an Intruder Log entry have no photo?

Intruder Log and Intruder Photos are separate controls. Check your Pro entitlement, whether Intruder Photos is enabled, camera permission, the failed-attempt threshold, and the setting to capture only once. Camera unavailability or device restrictions can result in entries without photos. A photo is not guaranteed for every attempt.

## Backup and recovery

### What should I do before changing devices or deleting the app?

The library and keys are excluded from iCloud sync and device backups. Export the media you need, or use Pro’s Encrypted Backup and save the file outside the app, such as in Files, on a computer, or on external storage. Confirm that it saved successfully and keep the password safe before switching devices or deleting the app.

Unlock encrypted folders you want to include before backing up, and review skipped content. Recently Deleted items are excluded. Backups cover media and folders in the current space; they are not a complete copy of your device or all app settings.

### Can I leave the backup password empty?

Yes, but **anyone holding that backup file can restore its contents without a password**. Set a password and keep it separately from the file. Arcula does not save the password, and the Developer cannot recover it if forgotten.

### How do I restore a backup?

Open Restore from Backup in Encrypted Backup, select the complete backup file, and enter the password used to create it. If it was empty, leave it empty when restoring. Review the results and skipped items. If restoration fails, check the download is complete, the password is correct, and enough storage is available, and use the latest available Arcula version.

Restoring Pro purchases does not retrieve media. Restore media separately from a backup.

### Can I recover deleted content?

With Recently Deleted enabled, you can restore items that have not been permanently deleted during the 30-day retention period. Expired content may be purged. With Recently Deleted disabled, after manual permanent deletion, or after deleting the app, content cannot be recovered from the app. If a valid backup includes it, you can try restoring that backup.

## Pro and purchases

### How do I restore purchases?

Sign in with the original purchasing Apple Account, open the Arcula Pro page in settings, and tap Restore Purchases. This does not charge you again. If entitlements remain unavailable, check your connection, Apple Account, and subscription status.

### How do I cancel a subscription?

Go to system Settings > Apple Account > Subscriptions > Arcula and follow the cancellation steps at least 24 hours before the current period or trial ends. A one-time lifetime purchase does not renew. See [Apple’s cancellation instructions](https://support.apple.com/en-us/118428). Deleting the app does not automatically cancel a subscription.

## Contact support

[MichaelSilvesterCN+Arcula@gmail.com](mailto:MichaelSilvesterCN+Arcula@gmail.com)

Mention Arcula and include the app version, device model, system version, reproduction steps, and error screenshots without private information. For import or restore issues, include the file type and error message.

**Do not send passwords, keys, private photos or videos, intruder photos, or complete backup files.** Use test files without personal content if examples are needed.

- [Privacy Policy](/journal/arcula-privacy-policy/)
- [Terms of Use](/journal/arcula-terms-of-use/)
- [About Arcula](/apps/arcula/)
