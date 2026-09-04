# Michael Silvester — Blog & Apps

一个零依赖的双语静态博客，用于文章分享，以及 PrimePlayer、MagicDesk、Picturium 与 Texturo 的产品介绍与开发记录。

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

## 链接指定语言

页面链接可以使用 `lang=zh` 或 `lang=en` 明确指定中文或英文，例如：

```text
/journal/primeplayer-technical-support/?lang=zh
/journal/primeplayer-technical-support/?lang=en
/journal/?filter=primeplayer&lang=en
```

链接指定的语言优先于浏览器中保存的语言选择。进入页面后，站内导航会自动保留当前语言；点击页面右上角的语言切换按钮，也会同步更新当前网址。

## 写一篇新文章

1. 复制 `content/posts/` 中任意一个 `.md` 文件，并直接用文件名确定网址。例如 `my-new-post.md` 会生成 `/journal/my-new-post/`，不需要填写 `slug`。
2. 修改顶部元数据。`date` 可写 `2026-08-05`，也可写 `2026-08-05 14:30:25`；未写时间时按 `00:00:00` 排序，网页仍只展示年月日。
3. `app` 可填 `primeplayer`、`magicdesk`、`picturium`、`texturo` 或 `general`；`category` 可填 `product`、`design`、`reflection`、`legal` 或 `support`。
4. 标题和摘要可直接填写 `title`、`excerpt`，这种内容始终显示一次。需要双语切换时填写 `titleZh`、`titleEn`、`excerptZh`、`excerptEn`；只有一个本地化字段时会直接显示已有文本。
5. 在同一个文件的 `<!-- zh -->` 和 `<!-- en -->` 区域分别写中文和英文，确保两种语言内容同步。阅读时间会根据正文自动计算，不要填写 `readTime`。
6. 运行 `npm run check`。文章页、文章列表、分类入口和对应 App 页会自动更新并接受排序与链接检查。

## 发布前需要确认

- `content/site.mjs`：确认个人简介、支持邮箱与 GitHub 链接。
- `content/apps.mjs`：PrimePlayer、MagicDesk、Picturium 与 Texturo 均已配置 App Store 地址；其中的版本号是 Apple 元数据不可用时的构建兜底值。
- `content/posts/primeplayer-terms-of-use.md` 与 `content/posts/primeplayer-privacy-policy.md`：发布前确认生效日期，并按实际发布地区完成必要的法律审阅。
- `public/og.png`：如需自定义社交平台分享封面，可替换此图片。

## 发布到 GitHub Pages

首次发布需要在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中，将 Source 选择为 **GitHub Actions**。之后推送到 `main` 分支即可自动发布。

部署构建会通过 Apple 官方 Lookup API 读取 App Store 当前版本；工作流也会每天定时重新部署，因此商店版本更新后不需要手动修改网站。若 App 尚未公开、Apple 接口超时或返回异常，构建会继续使用 `content/apps.mjs` 中的兜底版本，不会中断发布。本地构建默认不联网；如需手动验证同步，可运行 `FETCH_APP_STORE_METADATA=1 npm run build`。
