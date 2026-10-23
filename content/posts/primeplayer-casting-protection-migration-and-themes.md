---
date: 2026-10-23 14:40:00
app: primeplayer
category: product
featured: true
titleZh: PrimePlayer 新增投屏、内容保护、媒体库迁移与个性主题
titleEn: PrimePlayer adds casting, content protection, library migration, and themes
excerptZh: 在导入、整理与播放手势之外，PrimePlayer 新增 DLNA 投屏、GIF 编辑、内容保护、媒体库迁移、个性主题以及 Siri 与 Spotlight 支持，并扩展了格式、字幕、倍速和媒体库管理能力。
excerptEn: Beyond import, organization, and playback gestures, PrimePlayer adds DLNA casting, GIF editing, content protection, library migration, themes, and Siri and Spotlight support, with broader formats, subtitles, speeds, and library tools.
---
<!-- zh -->
在《[PrimePlayer 的视频导入与媒体整理功能](/journal/primeplayer-import-and-library/)》和《[PrimePlayer 的播放手势与快捷操作](/journal/primeplayer-playback-gestures/)》之后，PrimePlayer 又陆续加入了不少新功能。下面按类别介绍。

## 更多格式与字幕

PrimePlayer 支持 MP4、MOV、M4V、MKV、AVI、FLV、WebM、RM/RMVB、WMV、TS/M2TS 等常见格式，以及 AV1、H.264、H.265/HEVC、VP9 等常见编码。也可以导入 ISO/IMG 镜像和 BDMV、VIDEO_TS、DVDMEDIA 目录，播放其中的主视频。

播放时可以切换音轨，添加并切换 SRT、ASS/SSA、VTT、SUB/IDX 等外挂字幕，并调整字幕时间延迟。

## 更顺手的播放

- 在设备支持时使用硬件解码，兼顾流畅度与功耗。
- 0.5x 至 4x 倍速播放；长按倍速可以自定义，最高 8x。
- 一键切换横屏或竖屏播放。
- 自动记住播放进度，并提供单次播放、单循环、顺序播放和循环播放四种模式。
- 分别设置跳过片头与片尾的时长。
- 锁定播放控制层，避免误触。

## DLNA 投屏

除了隔空播放（AirPlay），现在也可以通过 DLNA 把兼容的视频投放到同一 Wi-Fi 下的智能电视、电视盒子或投影仪上观看。连接过的设备会被保存，下次可以快速重新连接。

投屏本地视频时，视频由手机实时传给投屏设备，需要保持 PrimePlayer 处于前台，否则投屏会中断。

## 网络视频离线观看

网络视频除了在线播放，支持下载的内容还可以保存到本地，随时离线观看。设置中可以选择自动下载策略，并管理蜂窝网络下的播放。直播内容也支持在线播放。

## GIF 编辑

播放时长按截图按钮录制 GIF（最长 15 秒，暂停或直播画面无法录制）后，可以选择直接保存，也可以进入编辑器：

- 裁剪画面比例和时间范围。
- 调整分辨率、帧率和画质。
- 选择正常、倒放或倒放回弹三种循环方式，并设置播放速度。
- 按微信、WhatsApp 等目标平台限制文件大小，或沿用之前的配置。
- 兼容的视频来源还可以导出为 MP4。

保存前可以预览真实的生成效果，结果保存到系统相册。在“设置—播放”中关闭“录制 GIF 后确认编辑”后，录制完会按预设的高清、标清或流畅画质直接保存。

## 媒体库管理

在文件夹与播放列表之外，媒体库还支持搜索、排序、重命名、批量操作和自定义封面。常看的内容可以加入收藏，最近播放记录也能随时查看。

多选时可以直接选择文件夹，把其中所有视频（包括子文件夹）一并加入收藏、播放列表，或导出到系统相册和其他设备。导出到相册时，相册无法直接保存的视频会在支持转换时自动转为兼容格式。

## 更多传输方式

- 在相册、“文件”或其他支持系统共享的 App 中，通过共享菜单把视频发送到 PrimePlayer，导入媒体库或指定文件夹。
- 在同一 Wi-Fi 下，通过浏览器把媒体库中的视频传输到其他手机或电脑；也可以通过共享菜单批量发送，或存储到“文件”。
- 浏览器文件传输可以使用临时账号保护访问。

## 内容保护

文件夹、播放列表和收藏可以使用密码、面容或指纹保护。在“设置—播放列表”中开启“自动加密列表”后，包含加密文件夹视频的播放列表和收藏也会自动受到保护。

受保护文件夹中的视频不会出现在播放记录中，也不会出现在主屏幕的“继续播放”入口里。

## 媒体库迁移

在“视频传输—工具—数据迁移”中，通过面容或指纹验证后，可以与附近的 PrimePlayer 设备建立直连，传输全部或选中的视频、文件夹结构及文件夹保护设置，并随时查看传输进度与大小。

数据在设备之间直接加密传输，不经过开发者服务器，也不占用 iCloud 存储空间。双方可以同时互相发送，相同的视频不会被重复添加。传输完成前，需要保持 PrimePlayer 处于前台。

## 个性主题

PrimePlayer 提供多款主题，从保留系统原生外观的经典主题，到四季、自然、东方神话与西方传说等不同风格。选择主题时可以预览动态效果，并在三档效果强度之间调节，打造喜欢的界面风格。

## Siri 与 Spotlight

通过 Siri 和快捷指令可以继续播放、按名称播放视频，或打开文件夹与播放列表。按名称访问需要在设置中开启“Siri 媒体内容访问”，关闭时仍可使用“继续播放”。

开启“在 Spotlight 中显示”后，媒体库中的视频、文件夹和播放列表可以在系统 Spotlight 搜索中找到。加密的文件夹（包括其中的视频）和播放列表不会被 Siri 识别，也不会出现在搜索结果里。

## 28 种界面语言

PrimePlayer 内置 28 种界面语言，可以在 App 中选择使用的语言。

<!-- en -->
Since [Video import and media organization in PrimePlayer](/journal/primeplayer-import-and-library/) and [Playback gestures and quick actions in PrimePlayer](/journal/primeplayer-playback-gestures/), PrimePlayer has gained a number of new features. Here they are by category.

## More formats and subtitles

PrimePlayer plays common formats including MP4, MOV, M4V, MKV, AVI, FLV, WebM, RM/RMVB, WMV, and TS/M2TS, with support for codecs such as AV1, H.264, H.265/HEVC, and VP9. You can also import ISO/IMG images and BDMV, VIDEO_TS, or DVDMEDIA folders to play the main video.

During playback, you can switch audio tracks, add and switch between external subtitles such as SRT, ASS/SSA, VTT, and SUB/IDX, and adjust subtitle timing.

## Smoother playback

- Hardware decoding when available for smooth, power-efficient playback.
- Playback speeds from 0.5x to 4x, with a customizable touch-and-hold speed of up to 8x.
- Switch between landscape and portrait playback with one tap.
- Resume from your saved position and choose from four playback modes: Play Once, Repeat One, Play in Order, and Repeat All.
- Set separate durations for skipping intros and outros.
- Lock the playback controls to prevent accidental touches.

## DLNA casting

Alongside AirPlay, you can now use DLNA to watch compatible videos on smart TVs, TV boxes, and projectors on the same Wi-Fi network. Devices you have connected to are saved, so you can reconnect quickly next time.

When casting a local video, your phone streams it to the receiving device in real time, so keep PrimePlayer in the foreground or casting will stop.

## Offline viewing for online video

In addition to streaming, online videos that support downloading can be saved locally for offline viewing. Settings let you choose an automatic download strategy and manage playback over cellular data. Live streams can also be played online.

## GIF editing

After recording a GIF by touching and holding the capture button during playback (up to 15 seconds; not available while paused or for live streams), you can save it directly or open the editor to:

- Crop the frame and trim the time range.
- Adjust resolution, frame rate, and quality.
- Choose Normal, Reverse, or Boomerang looping and set the playback speed.
- Limit the file size for target platforms such as WeChat and WhatsApp, or reuse your previous settings.
- Export MP4 for compatible video sources.

You can preview the actual result before saving it to Photos. Turn off “Confirm editing after GIF recording” in Settings > Playback to save recordings directly at your preset High, Standard, or Smooth quality.

## Library management

Beyond folders and playlists, the library supports search, sorting, renaming, batch actions, and custom covers. Add frequently watched videos to Favorites and review recently played items at any time.

When selecting multiple items, you can include folders to add all of their videos, including those in subfolders, to Favorites or playlists, or export them to Photos and other devices. When exporting to Photos, videos that Photos cannot save directly are converted to a compatible format when supported.

## More ways to transfer

- Share videos from Photos, Files, or other compatible apps to PrimePlayer through the share sheet, then import them into the library or a chosen folder.
- On the same Wi-Fi network, send videos from your library to another phone or computer through a browser, share them in batches through the share sheet, or save them to Files.
- Browser File Transfer can be protected with a temporary account.

## Content protection

Folders, playlists, and Favorites can be protected with a password, Face ID, or Touch ID. Turn on “Automatically Encrypt Playlists” in Settings > Playlists, and playlists and Favorites containing videos from protected folders are protected automatically.

Videos in protected folders stay out of playback history and the Continue Playing shortcut on the Home Screen.

## Media library migration

In Video Transfer > Tools > Data Migration, verify with Face ID or Touch ID to connect directly to a nearby PrimePlayer device. Transfer all or selected videos, folder structure, and folder protection settings, and view transfer progress and sizes along the way.

Data travels directly between devices over an encrypted connection, without passing through the developer's servers or using iCloud storage. Both devices can send at the same time, and identical videos are not added twice. Keep PrimePlayer in the foreground until the transfer finishes.

## Themes

PrimePlayer offers a range of themes, from a Classic theme that keeps the native system look to styles inspired by the seasons, nature, Eastern mythology, and Western legend. Preview animated effects when choosing a theme, and adjust it across three effect levels to create the look you like.

## Siri and Spotlight

Use Siri and Shortcuts to resume playback, play videos by name, or open folders and playlists. Accessing media by name requires turning on “Siri Media Content Access” in Settings; “Continue Playing” works even when it is off.

Turn on “Show in Spotlight” to find videos, folders, and playlists from your library in Spotlight system search. Encrypted folders, including the videos in them, and encrypted playlists are never recognized by Siri and never appear in search results.

## 28 interface languages

PrimePlayer is available in 28 interface languages, and you can choose the language used in the app.
