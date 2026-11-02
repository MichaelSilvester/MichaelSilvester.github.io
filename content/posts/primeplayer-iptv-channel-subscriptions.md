---
date: 2026-11-02
app: primeplayer
category: product
featured: true
titleZh: PrimePlayer 新增 IPTV 频道订阅
titleEn: PrimePlayer now supports IPTV channel subscriptions
excerptZh: 导入 M3U 订阅，在独立播放列表中浏览频道、按分组筛选、刷新订阅，并将频道列表迁移到另一台设备。
excerptEn: Import M3U subscriptions, browse channels in dedicated playlists, filter by group, refresh subscriptions, and transfer channel lists to another device.
---
<!-- zh -->
在[投屏、内容保护与媒体库迁移](/journal/primeplayer-casting-protection-migration-and-themes/)之后，PrimePlayer 新增了 IPTV 频道订阅。除了逐个添加网络视频，现在也能把订阅里的频道集中整理，在一个列表中浏览和播放。

## 从一个订阅地址开始

在“视频传输—网络视频”中粘贴 M3U 订阅地址，点击“解析视频”。识别为频道订阅后，可以查看导入信息、设置列表名称，再将频道导入播放列表。

同一个入口也可以继续添加普通视频或 HLS/M3U8 视频流。应用会区分单个视频与频道列表，让两类内容进入各自适合的位置。

## 频道集中在自己的列表里

导入后，在“播放列表”中打开订阅，即可查看频道名称、台标与分组。频道较多时，可以通过搜索和分组筛选缩小范围，再点击想看的频道播放。

IPTV 频道保存在独立的订阅列表中，不会混入本地媒体库。电影、短片和电视直播可以分别整理，查找时更清楚。

## 刷新订阅，整理常看的频道

订阅内容有变化时，可以使用“刷新订阅”更新频道信息。列表支持调整顺序，也可以移出暂时不看的频道；以后需要找回时，使用“恢复已移出频道”即可。

订阅中带有分组、台标和必要播放请求信息时，PrimePlayer 会随频道一起读取。部分条目格式有误或使用了不支持的协议时，会跳过相应频道并提示数量，让其余可用内容继续导入。

## 换设备时，订阅列表也能一起迁移

“数据迁移”现在也可以选择 IPTV 订阅。列表信息、频道顺序、分组和已移出的频道状态，都能传到附近的另一台 PrimePlayer 设备，无需重新逐个整理。

接收设备已经有同一订阅时，会跳过该订阅，保留原有列表。迁移在设备间直接进行，不经过开发者服务器；传输完成前，请保持两台设备上的 PrimePlayer 都在前台。

## 用自己的内容，按自己的方式观看

PrimePlayer 提供播放与整理工具，频道来自你添加的订阅，并不内置电视台或视频内容。请使用有权访问的订阅；频道是否可用、能否投屏以及播放是否流畅，取决于内容来源、视频格式、接收设备和网络连接。

应用现已支持 32 种界面语言。从本地收藏到网络视频，再到 IPTV 频道，可以在同一个播放器中找到合适的观看方式。

<!-- en -->
Following [casting, content protection, and library migration](/journal/primeplayer-casting-protection-migration-and-themes/?lang=en), PrimePlayer now supports IPTV channel subscriptions. Alongside individual online videos, you can bring a subscription’s channels together and browse and play them from one list.

## Start with a subscription URL

Paste an M3U subscription URL into Video Transfer > Online Video and tap “Parse Video.” When PrimePlayer identifies a channel subscription, review the import information, name the list, and import its channels into Playlists.

The same entry point still accepts individual videos and HLS/M3U8 streams. PrimePlayer distinguishes a single video from a channel list and organizes each accordingly.

## Keep channels in their own list

Open the subscription in Playlists to browse channel names, logos, and groups. For longer lists, narrow the selection with search and group filters, then tap a channel to play it.

IPTV channels stay in dedicated subscription lists, separate from the local library. Films, clips, and live television remain easier to organize and find.

## Refresh subscriptions and organize your channels

Use “Refresh Subscription” when the source changes to update channel information. Reorder the list or remove channels you do not currently watch. “Restore Removed Channels” brings them back when you need them again.

PrimePlayer reads groups, logos, and required playback request information supplied by the subscription. Entries with certain formatting problems or unsupported protocols are skipped with a count, allowing the remaining supported channels to import.

## Take your subscriptions to another device

Data Migration now includes IPTV subscriptions. Transfer list information, channel order, groups, and removed-channel states to another nearby PrimePlayer device without organizing everything again.

If the receiving device already has the same subscription, it is skipped and the existing list is preserved. Transfers happen directly between devices, without passing through developer-operated servers. Keep PrimePlayer in the foreground on both devices until the transfer finishes.

## Watch your own content your way

PrimePlayer provides playback and organization tools. Channels come from subscriptions you add; the app does not include television channels or video content. Use subscriptions you have permission to access. Channel availability, casting support, and playback quality depend on the source, video format, receiving device, and network connection.

The app now supports 32 interface languages. From local collections to online videos and IPTV channels, you can choose how to watch within one player.
