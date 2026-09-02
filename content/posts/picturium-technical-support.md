---
date: 2026-08-05 11:57:30
app: picturium
pin: -1
category: support
featured: false
titleZh: Picturium 开发者技术支持
titleEn: Picturium Technical Support
excerptZh: Picturium 常见问题、购买帮助与故障排查，包括打开图片、支持格式、裁剪与标注、马赛克遮挡、导出与文件访问权限。
excerptEn: Picturium FAQs, purchase assistance, and troubleshooting for opening images, supported formats, cropping and annotation, mosaic redaction, export, and file-access permissions.
---
<!-- zh -->
使用 Picturium 时遇到问题？你可以在下面查看常见问题、购买帮助和故障排查步骤，也可以联系我们获取进一步支持。

**系统要求：macOS 15.0 或更高版本**

## 快速开始

### 如何打开图片？

Picturium 支持三种打开方式：

- 将图片或文件夹直接拖入 App 窗口；
- 使用“打开”从系统文件面板选择图片或文件夹；
- 在 Finder 中用 Picturium 打开图片文件。

打开一个文件夹会以缩略图形式浏览其中的图片，选中任意一张即可进入查看和编辑。

### 支持哪些文件格式？

Picturium 支持：

- **常见图片：** JPG/JPEG、PNG、GIF、HEIC/HEIF、TIFF、BMP、WebP、ICO、ICNS；
- **相机 RAW 格式：** DNG、RAW、ARW、CR2、CR3、NEF、ORF、RAF、RW2、SRW；
- **动态图片：** GIF，会自动播放并可暂停或继续。

实际显示和编辑效果还取决于文件是否完整、具体编码方式与 macOS 系统的图片解码能力。受支持的扩展名不代表该扩展名下的所有文件都一定能正确显示。

## 查看与浏览

### 如何缩放和平移图片？

可以使用触控板双指缩放、工具栏的放大/缩小按钮，或键盘快捷键调整缩放比例；按住并拖动图片即可平移查看细节。双击可以在适合窗口大小和实际像素大小之间切换。

### 文件夹缩略图加载很慢怎么办？

首次浏览较大的文件夹或包含大量高分辨率 RAW 文件的文件夹时，生成缩略图需要一些时间。请确认磁盘（尤其是外置磁盘或网络磁盘）已连接且读写速度正常。缩略图会被缓存，之后再次打开同一文件夹会明显加快。

## 编辑与标注

### 如何裁剪、旋转图片？

进入编辑模式后，可以使用裁剪工具框选保留区域并确认，或使用旋转工具调整图片方向。确认前可以随时取消或调整选区。

### 如何添加涂鸦或文字标注？

在编辑工具栏中选择画笔或文字工具，即可在图片上绘制线条或添加文字；可以调整颜色和线条粗细，文字标注支持调整字体大小。所有标注在保存前都可以撤销或重做。

### 马赛克/像素化工具如何使用？

选择马赛克工具后，在需要遮挡的区域涂抹即可生成像素化效果，用于遮挡人脸、证件号码等敏感信息。请在保存或导出前确认遮挡范围已完全覆盖需要隐藏的内容，因为像素化处理一旦保存导出，将难以还原被遮挡前的图像。

### 撤销和重做为什么只能回退有限步数？

撤销记录在当前编辑会话内有效。关闭图片或退出 App 后，历史记录会被清空。如果需要保留编辑过程，建议在关键节点先导出一份副本。

## 保存与导出

### “保存”和“导出”有什么区别？

- **保存：** 将编辑结果写回原始文件，会覆盖原文件内容，且此操作通常无法撤销；
- **导出：** 将编辑结果保存为新文件，可以选择与原文件不同的格式，原始文件保持不变。

编辑重要或唯一的图片前，建议先用“导出”生成副本，或自行备份原始文件。

### 保存失败或提示无法访问文件怎么办？

请依次检查：

- 原始文件是否已被移动、重命名或删除；
- 文件所在的外置磁盘、网络磁盘或云盘是否仍然连接；
- 磁盘是否已满或处于只读状态；
- 是否已通过“打开”或拖入方式重新授权访问该文件或所在文件夹。

如果原始访问权限已失效，请重新打开一次该文件或其所在文件夹，让系统重新生成访问授权。

### 分享图片时找不到某些格式怎么办？

分享面板中可用的格式和目标 App 由 macOS 系统决定。如果分享失败，可以先使用“导出”将图片保存为常见格式（如 PNG 或 JPEG），再通过 Finder 或其他 App 分享。

## 权限与自动化

### 为什么“显示简介”按钮没有反应？

该功能通过 Apple 事件请求 Finder 打开系统“显示简介”窗口，需要相应的自动化权限。请打开“系统设置”>“隐私与安全性”>“自动化”，确认 Picturium 已被允许控制 Finder；如未看到该选项，请先在 Picturium 中触发一次该功能，再回到系统设置检查。

### 为什么提示没有文件访问权限？

Picturium 使用 macOS 沙盒机制，只能访问你主动选择过的文件和文件夹。如果重启 Mac、移动文件位置或清除了系统权限记录，可能需要重新通过“打开”或拖放选择一次，才能恢复访问。

## 购买

### Picturium 如何购买？

Picturium 在 App Store 上以一次性付费下载的方式提供，具体价格以 App Store 商品页面显示为准，购买后即可完整使用全部功能，不包含应用内购买或订阅。

### 已经购买过，如何在另一台 Mac 上安装？

请在该 Mac 上使用同一 Apple 账户登录 App Store，然后：

- 打开 App Store，进入“已购项目”；
- 找到 Picturium 并点击“下载”或云朵图标；

无需重复付款。如果找不到已购记录，请确认登录的 Apple 账户与购买时一致。

## 联系支持

如果以上步骤没有解决问题，请发送邮件至：

[MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com)

为了更快定位问题，建议附上：

- Picturium 版本；
- macOS 版本和 Mac 型号；
- 图片格式（例如 JPG、HEIC 或具体 RAW 格式）；
- 完整的操作步骤和错误提示；
- 必要的截图或录屏。

如问题涉及私人或受版权保护的图片，请不要直接发送原始文件。你可以提供经过遮挡的截图、文件扩展名，或描述能够复现问题的最小步骤。

## 相关文档

- [隐私政策](/journal/picturium-privacy-policy/)
- [用户协议](/journal/picturium-terms-of-use/)

© 2026 Picturium。保留所有权利。

<!-- en -->
Having trouble using Picturium? Find answers to common questions, purchase assistance, and troubleshooting steps below, or contact us for further support.

**System Requirement: macOS 15.0 or later**

## Quick Start

### How do I open an image?

Picturium supports three ways to open content:

- Drag an image or folder directly into the App window;
- Choose “Open” to select an image or folder from the system file panel; or
- Open an image file with Picturium from Finder.

Opening a folder shows its images as thumbnails; select one to view and edit it.

### Which file formats are supported?

Picturium supports:

- **Common images:** JPG/JPEG, PNG, GIF, HEIC/HEIF, TIFF, BMP, WebP, ICO, and ICNS;
- **Camera RAW formats:** DNG, RAW, ARW, CR2, CR3, NEF, ORF, RAF, RW2, and SRW; and
- **Animated images:** GIF, which plays automatically and can be paused or resumed.

Actual display and editing also depend on whether the file is complete, its specific encoding, and macOS system image-decoding support. A supported extension does not guarantee that every file using it will display correctly.

## Viewing and Browsing

### How do I zoom and pan an image?

Use a trackpad pinch gesture, the zoom in/out toolbar buttons, or a keyboard shortcut to change the zoom level; click and drag to pan around a zoomed-in image. Double-click to toggle between fit-to-window and actual-pixel size.

### Why are folder thumbnails slow to load?

The first time you browse a large folder or one with many high-resolution RAW files, generating thumbnails takes time. Confirm that the disk — especially an external or network drive — is connected with normal read/write speed. Thumbnails are cached, so reopening the same folder is noticeably faster afterward.

## Editing and Annotation

### How do I crop or rotate an image?

In editing mode, use the crop tool to select the area to keep and confirm it, or use the rotate tool to change the image orientation. You can cancel or adjust the selection at any time before confirming.

### How do I add freehand drawing or text annotations?

Choose the pen or text tool in the editing toolbar to draw lines or add text on the image. You can adjust color and line weight, and text annotations support adjustable font size. Every annotation can be undone or redone before you save.

### How does the mosaic/pixelation tool work?

Select the mosaic tool and paint over the area you want to obscure, such as a face or an ID number, to apply a pixelated effect. Confirm that the redacted area fully covers what you intend to hide before saving or exporting, because once a pixelated result is saved or exported, the original content underneath is difficult to recover.

### Why can I only undo or redo a limited number of steps?

Undo history is valid for the current editing session. It is cleared when you close the image or quit the App. If you want to preserve intermediate steps, export a copy at key points during editing.

## Saving and Exporting

### What is the difference between “Save” and “Export”?

- **Save:** Writes the edit back to the original file, overwriting its content; this is usually irreversible.
- **Export:** Saves the edit as a new file, optionally in a different format, leaving the original file unchanged.

Before editing an important or irreplaceable image, use “Export” to create a copy first, or keep your own backup of the original.

### What should I do if saving fails or the file is inaccessible?

Check the following:

- Whether the original file has been moved, renamed, or deleted;
- Whether the external, network, or cloud drive containing the file is still connected;
- Whether the disk is full or read-only; and
- Whether you have re-granted access to the file or its folder using “Open” or drag-and-drop.

If access has become invalid, open the file or its folder again so the system can restore access.

### Why are some formats missing when I share an image?

The formats and destination apps available in the share sheet are determined by macOS. If sharing fails, use “Export” first to save the image in a common format such as PNG or JPEG, then share it through Finder or another app.

## Permissions and Automation

### Why doesn’t the “Get Info” button do anything?

This feature uses Apple Events to ask Finder to open the system “Get Info” window and requires automation permission. Open System Settings > Privacy & Security > Automation and confirm that Picturium is allowed to control Finder. If you don’t see the option yet, trigger the feature once in Picturium first, then check System Settings again.

### Why does the App say it lacks file access?

Picturium uses the macOS sandbox and can only access files and folders you have chosen. After restarting your Mac, moving a file, or clearing system permission records, you may need to select the file or folder again through “Open” or drag-and-drop to restore access.

## Purchases

### How do I buy Picturium?

Picturium is offered on the App Store as a one-time paid download; the actual price is shown on the App Store product page. After purchase, you get full access to all features, with no in-app purchases or subscriptions.

### I already bought it — how do I install it on another Mac?

Sign in to the App Store with the same Apple Account on that Mac, then:

- Open the App Store and go to “Purchased”;
- Find Picturium and choose “Download” or the cloud icon.

No additional payment is required. If you don’t see your purchase, confirm you are signed in with the same Apple Account used to buy it.

## Contact Support

If these steps do not resolve the issue, email:

[MichaelSilvesterCN+Picturium@gmail.com](mailto:MichaelSilvesterCN+Picturium@gmail.com)

To help us investigate, include:

- Picturium version;
- macOS version and Mac model;
- Image format (for example, JPG, HEIC, or a specific RAW format);
- Exact steps and error messages; and
- Relevant screenshots or a screen recording.

If the issue involves a private or copyrighted image, do not send the original file itself. You can provide a redacted screenshot, the file extension, or a description of the minimal steps that reproduce the problem.

## Related Documents

- [Privacy Policy](/journal/picturium-privacy-policy/)
- [Terms of Use](/journal/picturium-terms-of-use/)

© 2026 Picturium. All rights reserved.
