# Michael Silvester — Blog & Apps

一个零依赖的双语静态博客，用于文章分享，以及 PrimePlayer、MagicDesk 的产品介绍与开发记录。

## 本地预览

需要 Node.js 14.18 或更高版本。项目没有第三方依赖，无需先执行 `npm install`。

```bash
npm run dev
```

然后访问终端中显示的本地地址。保存 `content/`、`public/` 或页面生成器中的改动后，站点会自动重新构建，已打开的浏览器也会自动刷新；不需要先提交 Git。

正式构建使用：

```bash
npm run check
```

`npm run check` 会先重新构建，再检查双语结构和全部站内链接。构建产物位于 `dist/`。仓库中的 GitHub Actions 会自动构建并发布到 GitHub Pages。

## 写一篇新文章

1. 复制 `content/posts/` 中任意一个 `.md` 文件，并直接用文件名确定网址。例如 `my-new-post.md` 会生成 `/journal/my-new-post/`，不需要填写 `slug`。
2. 修改顶部元数据。`date` 可写 `2026-08-05`，也可写 `2026-08-05 14:30:25`；未写时间时按 `00:00:00` 排序，网页仍只展示年月日。
3. `app` 可填 `primeplayer`、`magicdesk` 或 `general`；`category` 可填 `product`、`design`、`thought`、`legal` 或 `support`。
4. 标题和摘要可直接填写 `title`、`excerpt`，这种内容始终显示一次。需要双语切换时填写 `titleZh`、`titleEn`、`excerptZh`、`excerptEn`；只有一个本地化字段时会直接显示已有文本。
5. 在同一个文件的 `<!-- zh -->` 和 `<!-- en -->` 区域分别写中文和英文，确保两种语言内容同步。阅读时间会根据正文自动计算，不要填写 `readTime`。
6. 运行 `npm run check`。文章页、文章列表、分类入口和对应 App 页会自动更新并接受排序与链接检查。

## 发布前需要确认

- `content/site.mjs`：确认个人简介、支持邮箱与 GitHub 链接。
- `content/apps.mjs`：App 上架后，把 `Preview` 和 `#download-coming-soon` 换成正式版本号与下载地址。
- `content/posts/primeplayer-terms-of-use.md` 与 `content/posts/primeplayer-privacy-policy.md`：发布前确认生效日期，并按实际发布地区完成必要的法律审阅。
- `public/og.png`：如需自定义社交平台分享封面，可替换此图片。

## 发布到 GitHub Pages

首次发布需要在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中，将 Source 选择为 **GitHub Actions**。之后推送到 `main` 分支即可自动发布。
