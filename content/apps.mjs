export const apps = [
  {
    slug: "primeplayer",
    name: "PrimePlayer",
    monogram: "P",
    platform: "iPhone · iPad",
    status: { zh: "持续开发中", en: "In active development" },
    kind: { zh: "视频播放器", en: "Video player" },
    tagline: {
      zh: "播放、整理与传输视频。",
      en: "Play, organize, and transfer video.",
    },
    description: {
      zh: "面向 iPhone 和 iPad 的视频播放器，支持从相册、本地文件、同一 Wi-Fi 下的浏览器和网络地址导入或播放视频，并提供媒体库、播放列表、字幕、画中画等功能。",
      en: "A video player for iPhone and iPad. Import or play video from Photos, local files, a browser on the same Wi-Fi network, and network URLs, with a media library, playlists, subtitles, Picture in Picture, and more.",
    },
    accent: "lime",
    version: "Preview",
    system: "iOS / iPadOS 18+",
    appStore: {
      id: "6799107071",
      url: "https://apps.apple.com/app/id6799107071",
      label: { zh: "前往 App Store", en: "View on the App Store" },
    },
    features: [
      { zh: "本地与网络视频播放", en: "Local and network playback" },
      { zh: "媒体库、文件夹与播放列表", en: "Library, folders, and playlists" },
      { zh: "字幕、画中画与倍速", en: "Subtitles, Picture in Picture, and speed" },
      { zh: "相册、文件与浏览器导入", en: "Photos, Files, and browser import" },
    ],
  },
  {
    slug: "magicdesk",
    name: "MagicDesk",
    monogram: "M",
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
    accent: "blue",
    version: "Preview",
    system: "macOS 14+",
    download: "#download-coming-soon",
    features: [
      { zh: "图片、GIF、视频与网页壁纸", en: "Image, GIF, video, and webpage wallpapers" },
      { zh: "搜索、标签、收藏与自定义列表", en: "Search, tags, favorites, and custom lists" },
      { zh: "多显示器独立设置", en: "Independent multi-display setup" },
      { zh: "全局快捷键与智能省电", en: "Global shortcuts and smart power saving" },
    ],
  },
];
