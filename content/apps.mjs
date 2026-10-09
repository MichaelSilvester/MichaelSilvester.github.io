// Production builds replace this shared fallback with each App's current
// App Store version whenever public Apple metadata is available.
const appStoreVersionFallback = "1.0.0";

export const apps = [
  {
    slug: "primeplayer",
    name: "PrimePlayer",
    monogram: "P",
    icon: "/assets/icons/primeplayer.png",
    platform: "iPhone · iPad",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "视频播放器", en: "Video player" },
    tagline: {
      zh: "播放、整理与传输视频。",
      en: "Play, organize, and transfer video.",
    },
    description: {
      zh: "面向 iPhone 和 iPad 的多格式视频播放器，集播放、媒体库整理与浏览器传输于一体，支持文件夹加密、GIF 录制与编辑，并提供多款专属主题。",
      en: "A multi-format video player for iPhone and iPad, with library organization, browser transfers, folder protection, GIF recording and editing, and exclusive themes.",
    },
    story: {
      zh: "PrimePlayer 将本地与网络视频集中到同一个媒体库，支持文件夹、收藏和播放列表整理，以及同一 Wi-Fi 下的浏览器传输。播放时可切换字幕与音轨、使用画中画和倍速，也能将精彩片段录制为 GIF 并编辑保存；支持下载的视频还可离线观看。文件夹、播放列表和收藏可通过密码、面容或指纹保护，多款专属主题让观影界面更合心意。",
      en: "PrimePlayer brings local and online video into one library, with folders, Favorites, playlists, and browser transfers over the same Wi-Fi network. Switch subtitles and audio tracks, use Picture in Picture and playback speed controls, or record favorite moments as GIFs to edit and save. Download supported videos for offline viewing, protect folders, playlists, and Favorites with a password, Face ID, or Touch ID, and personalize the interface with exclusive themes.",
    },
    accent: "lime",
    version: appStoreVersionFallback,
    system: "iOS / iPadOS 18+",
    appStore: {
      id: "6799107071",
      url: "https://apps.apple.com/app/id6799107071",
      label: { zh: "前往 App Store", en: "View on the App Store" },
    },
    features: [
      { zh: "多格式播放、字幕与画中画", en: "Multi-format playback, subtitles, and Picture in Picture" },
      { zh: "媒体库整理与浏览器传输", en: "Library organization and browser transfers" },
      { zh: "文件夹加密与隐私保护", en: "Folder and privacy protection" },
      { zh: "GIF 录制与编辑", en: "GIF recording and editing" },
      { zh: "多款专属主题", en: "Exclusive themes" },
      { zh: "网络播放与离线观看", en: "Online playback and offline viewing" },
    ],
  },
  {
    slug: "magicdesk",
    name: "MagicDesk",
    monogram: "M",
    icon: "/assets/icons/magicdesk.png",
    platform: "macOS",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "动态壁纸播放器", en: "Live wallpaper player" },
    tagline: {
      zh: "把图片、GIF、视频和网页放到桌面。",
      en: "Put images, GIFs, video, and webpages on your desktop.",
    },
    description: {
      zh: "面向 macOS 的动态壁纸播放器，支持把本地或在线图片、GIF、视频和网页设置为壁纸，并提供素材库、多显示器分配、播放控制和智能省电功能。",
      en: "A live wallpaper player for macOS. Set local or online images, GIFs, videos, and webpages as wallpaper, with a media library, per-display assignment, playback controls, and smart power saving.",
    },
    story: {
      zh: "MagicDesk 可导入本地图片、GIF 和视频，也可通过 URL 添加在线图片、视频或网页。壁纸素材可使用搜索、标签、收藏和自定义列表整理，并能分别设置到不同显示器；菜单栏与全局快捷键用于控制播放，智能省电会在游戏、全屏工作或使用电池时暂停动态内容。",
      en: "MagicDesk imports local images, GIFs, and videos, and adds online images, videos, or webpages by URL. Organize wallpapers with search, tags, favorites, and custom lists, assign them per display, control playback from the menu bar or global shortcuts, and pause motion automatically during games, full-screen work, or battery use.",
    },
    accent: "blue",
    version: appStoreVersionFallback,
    system: "macOS 14+",
    appStore: {
      id: "6799659224",
      url: "https://apps.apple.com/app/id6799659224",
      label: { zh: "前往 App Store", en: "View on the App Store" },
    },
    features: [
      { zh: "图片、GIF、视频与网页壁纸", en: "Image, GIF, video, and webpage wallpapers" },
      { zh: "搜索、标签、收藏与自定义列表", en: "Search, tags, favorites, and custom lists" },
      { zh: "多显示器独立设置", en: "Independent multi-display setup" },
      { zh: "全局快捷键与智能省电", en: "Global shortcuts and smart power saving" },
    ],
  },
  {
    slug: "picturium",
    name: "Picturium",
    monogram: "P",
    icon: "/assets/icons/picturium.png",
    platform: "macOS",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "图片查看与编辑工具", en: "Image viewer and editor" },
    tagline: {
      zh: "批量查看、编辑与叠加图片和 GIF。",
      en: "View, edit, and stack images and GIFs in bulk.",
    },
    description: {
      zh: "面向 macOS 的图片查看与编辑工具，支持浏览和播放常见图片格式、相机 RAW 与 GIF 动图，提供文件夹缩略图批量浏览、裁剪、涂鸦标注、马赛克遮挡等编辑功能，还可以将多张图片或动图叠加合成，包括动图叠动图。",
      en: "An image viewer and editor for macOS. Browse and play common image formats, camera RAW files, and animated GIFs, browse folders in bulk with thumbnails, crop, annotate, and pixelate images, and stack multiple images or GIFs together — including GIF-on-GIF stacking.",
    },
    story: {
      zh: "Picturium 支持拖入、打开面板或在 Finder 中直接打开三种方式导入图片和文件夹，并以缩略图批量浏览整理内容；进入编辑模式后可以裁剪、旋转、涂鸦、添加文字与马赛克遮挡，还能把多张图片或 GIF 叠加合成，做出动图叠动图的效果；完成后可以保存覆盖原文件，或导出为新文件保留原图。",
      en: "Picturium opens images and folders by drag-and-drop, the Open panel, or directly from Finder, then browses them in bulk as thumbnails. In editing mode you can crop, rotate, draw, add text, and pixelate sensitive areas, and stack multiple images or GIFs together — including GIF-on-GIF — then save back to the original file or export a new copy.",
    },
    accent: "orange",
    version: appStoreVersionFallback,
    system: "macOS 15+",
    appStore: {
      id: "6800329040",
      url: "https://apps.apple.com/app/id6800329040",
      label: { zh: "前往 App Store", en: "View on the App Store" },
    },
    features: [
      { zh: "文件夹缩略图批量浏览", en: "Batch browsing with folder thumbnails" },
      { zh: "图片与 GIF 叠加合成，动图可叠动图", en: "Image and GIF stacking, including GIF-on-GIF" },
      { zh: "播放、暂停 GIF 等动态图片", en: "Play and pause GIFs and other animated images" },
      { zh: "裁剪、涂鸦、文字与马赛克编辑", en: "Crop, draw, text, and mosaic editing" },
    ],
  },
  {
    slug: "diple",
    name: "Diple",
    monogram: "D",
    icon: "/assets/icons/diple.png",
    platform: "iPhone · iPad",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "Markdown 笔记", en: "Markdown Note" },
    tagline: {
      zh: "写作、整理，并把文稿编成自己的作品。",
      en: "Write, organize, and bring documents together as your own work.",
    },
    description: {
      zh: "面向 iPhone 和 iPad 的 Markdown 与纯文本写作工具，支持语音转文字、版本历史、合集连续阅读、主题与稿纸，以及 Markdown、TXT、Word 和 PDF 导出。",
      en: "A Markdown and plain-text writing tool for iPhone and iPad, with Speech to Text, Version History, continuous reading in Collections, themes and Writing Paper, plus Markdown, TXT, Word, and PDF export.",
    },
    story: {
      zh: "Diple 将 Markdown 与纯文本写作、本地文稿库和合集阅读放在一起。你可以在四种显示模式间切换，用语音记录灵感，通过版本历史找回修改；再把相关文稿加入或引用到合集，设置封面、章节、编号与阅读顺序。主题、稿纸和 App 图标让写作空间更合心意，内容仍保存在设备本地，并可导出为 Markdown、TXT、Word 或 PDF。",
      en: "Diple brings Markdown and plain-text writing, a local document library, and Collection reading together. Switch among four display modes, capture ideas with Speech to Text, and revisit edits with Version History. Add or reference related documents in Collections with covers, chapters, numbering, and a reading order. Themes, Writing Paper, and app icons personalize the space, while content stays on your device and can be exported as Markdown, TXT, Word, or PDF.",
    },
    accent: "sage",
    version: appStoreVersionFallback,
    system: "iOS / iPadOS 17+",
    appStore: {
      id: "6807040807",
      url: "https://apps.apple.com/app/id6807040807",
      label: { zh: "前往 App Store", en: "View on the App Store" },
    },
    features: [
      { zh: "沉浸式、实时预览、纯预览与源码模式", en: "Immersive, live preview, preview-only, and source modes" },
      { zh: "语音转文字、版本历史与图片插入", en: "Speech to Text, Version History, and image insertion" },
      { zh: "合集、章节编排与连续阅读", en: "Collections, chapter organization, and continuous reading" },
      { zh: "主题、稿纸与多格式导出", en: "Themes, Writing Paper, and multi-format export" },
    ],
  },
  {
    slug: "arcula",
    name: "Arcula",
    monogram: "A",
    icon: "/assets/icons/arcula.png",
    platform: "iPhone · iPad",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "私密相册", en: "Private photo vault" },
    tagline: {
      zh: "把私密照片与视频，加密留在自己手中。",
      en: "Keep private photos and videos encrypted, in your hands.",
    },
    description: {
      zh: "面向 iPhone 和 iPad 的私密相册，在本机加密保存照片、视频、实况照片和 GIF，支持文件夹整理、浏览器传输，以及启动验证、伪装密码、私密相机与加密备份。",
      en: "A private photo vault for iPhone and iPad. Encrypt photos, videos, Live Photos, and GIFs on your device, organize them in folders, and transfer them through a browser, with features including Unlock Method, Decoy Passcode, Private Camera, and Encrypted Backup.",
    },
    story: {
      zh: "从系统相册、“文件”或同一 Wi-Fi 下的浏览器导入内容，在本机加密保存并按文件夹整理。Arcula 提供启动验证、加密文件夹、伪装密码、入侵记录和私密相机，也支持导出到其他设备与加密备份。媒体库不参与 iCloud 同步或设备备份；卸载前或换机前，请导出并妥善保存需要的内容或备份文件。",
      en: "Import from Photos, Files, or a browser on the same Wi-Fi network, then encrypt and organize media locally. Arcula supports app unlocking, encrypted folders, Decoy Passcode, Intruder Log, and Private Camera, plus Export to Other Devices and Encrypted Backup. The library is excluded from iCloud sync and device backups; export and safely store the content or backup files you need before deleting the app or changing devices.",
    },
    accent: "blue",
    version: appStoreVersionFallback,
    system: "iOS / iPadOS 18+",
    // 尚未提供商店 ID；保留本站占位入口，避免生成无效的商店链接。
    download: "#download-coming-soon",
    features: [
      { zh: "照片、视频、实况照片与 GIF 本地加密", en: "Local encryption for photos, videos, Live Photos, and GIFs" },
      { zh: "文件夹整理与浏览器导入", en: "Folder organization and Browser Import" },
      { zh: "伪装密码、入侵记录与私密相机", en: "Decoy Passcode, Intruder Log, and Private Camera" },
      { zh: "导出到其他设备与加密备份", en: "Export to Other Devices and Encrypted Backup" },
    ],
  },
  {
    slug: "sudopalace",
    name: "SudoPalace",
    detailNameZh: "数独闯关 SudoPalace",
    monogram: "S",
    icon: "/assets/icons/sudopalace.png",
    platform: "iPhone · iPad",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "数独游戏", en: "Sudoku game" },
    tagline: {
      zh: "每天一道挑战，从入门到大师。",
      en: "A daily challenge, from Easy to Master.",
    },
    description: {
      zh: "面向 iPhone 和 iPad 的无广告数独游戏，提供五大难度的 500 个关卡、每日挑战和 8 节免费技巧教程，支持笔记、提示、游戏统计与离线解题。",
      en: "An ad-free Sudoku game for iPhone and iPad with 500 levels across five difficulties, Daily Challenge, and eight free Technique Tutorials, plus Notes, Hint, statistics, and offline play.",
    },
    story: {
      zh: "在简单、中等、困难、专家和大师五大难度中按顺序闯关，挑战零错误、无提示或填格、在目标时间内完成的三星成绩。每日挑战与统计记录解题表现，免费技巧教程通过分步演示和互动练习帮助学习。各难度前 10 关免费，后续可用钻石逐关解锁或通过 SudoPalace Pro 免除解锁费用；道具仍按规则消耗金币或钻石。游戏进度与货币保存在本机，不在设备间同步。",
      en: "Progress in order through Easy, Medium, Hard, Expert, and Master. Aim for three stars by finishing with no mistakes, no Hint or Fill Cell use, and within the target time. Track your performance with Daily Challenge and statistics, and learn through free lessons with demonstrations and interactive practice. The first 10 levels in each difficulty are free; unlock later levels with diamonds or remove unlock costs with SudoPalace Pro. Tools still consume coins or diamonds. Progress and currency remain on your device and do not sync across devices.",
    },
    accent: "lavender",
    version: appStoreVersionFallback,
    system: "iOS / iPadOS 17+",
    // 尚未提供商店 ID；使用站内占位入口，获得有效地址后再配置 appStore。
    download: "#download-coming-soon",
    features: [
      { zh: "500 个关卡与五大难度", en: "500 levels across five difficulties" },
      { zh: "每日挑战与三星目标", en: "Daily Challenge and three-star goals" },
      { zh: "8 节免费技巧教程", en: "Eight free Technique Tutorials" },
      { zh: "无广告、离线解题与自动保存", en: "Ad-free play, offline puzzles, and autosave" },
    ],
  },
];
