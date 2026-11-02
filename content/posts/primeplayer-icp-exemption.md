---
date: 2026-10-25
app: primeplayer
category: reflection
featured: false
titleZh: 这次轮到 PrimePlayer 申请 ICP 豁免了
titleEn: Now It’s PrimePlayer’s Turn to Apply for an ICP Exemption
excerptZh: Diple 花了好多天才走完 ICP 豁免流程，现在 PrimePlayer 因为网络视频和 IPTV 功能，也在等待豁免申请的结果。
excerptEn: Diple’s ICP exemption process took quite a few days. Now PrimePlayer has run into the same issue with online video and IPTV, and I’m waiting for a response to its exemption request.
---
<!-- zh -->
**10 月 30 日更新：** PrimePlayer 的 ICP 豁免申请已获得苹果批准，详见[申请通过后的记录](/journal/primeplayer-icp-exemption-approved/)。

在国区 App Store 上架，有时还得过 ICP 备案这一关。中国大陆对提供互联网信息服务的 App 有备案要求，苹果在处理国区上架时，也会关注应用中的网络请求。只要检测到可能的网络请求，就可能先把应用排除出中国大陆地区，甚至只是向苹果自己的服务器查询版本号，也可能遇到这种情况。

苹果的处理方式比较简单粗暴：先排除，再由开发者自己联系苹果、提交豁免申请。具体是什么请求、内容从哪里来、为什么不需要备案，都要在申请时由开发者解释清楚，再等苹果核实。

Diple 之前就碰到了。因为网络图片展示功能，它被排除在中国大陆的上架范围之外。后来申请了豁免，花了好多天才把整个流程走完。

申请的时候，需要把这些网络功能解释清楚：图片、视频从哪里来，应用怎么读取，中间有没有经过开发者的服务器。对我的应用来说，内容由设备直接从来源读取，应用负责展示和播放，不需要先传到我的服务器再转发。这也是申请豁免时想说明的重点。

现在轮到 PrimePlayer 了。因为网络视频和 IPTV 功能，它也卡在了 ICP 这一关。我已经申请豁免，接下来继续等苹果回复。

有了 Diple 那次经历，这次算是熟悉流程了，但能不能顺利通过、还要等多久，目前都说不准。做应用除了写代码，还得花时间处理这些上架过程中的事情。希望 PrimePlayer 这次能顺利一些。

<!-- en -->
**October 30 update:** Apple has approved PrimePlayer’s ICP exemption. Read the [follow-up on its approval](/journal/primeplayer-icp-exemption-approved/?lang=en).

Releasing an app on the App Store in mainland China sometimes means dealing with ICP filing requirements too. Mainland China requires filings for apps that provide internet information services, so Apple also looks at network requests when handling availability there. Detecting a potential network request can lead to an app being excluded from the mainland China storefront first. Even a request to Apple’s own servers just to check a version number can run into this issue.

Apple’s approach is fairly blunt: exclude first, then leave it to the developer to contact Apple and apply for an exemption. The developer has to explain what the requests do, where the content comes from, and why the app should not require an ICP filing, then wait for Apple to review those details.

Diple ran into this before. Its ability to display online images led to it being excluded from the mainland China storefront. I applied for an exemption, and it took quite a few days to get through the whole process.

When applying, I need to explain how these online features work: where the images and videos come from, how the app loads them, and whether they pass through a server run by the developer. In my apps, the device reads the content directly from its source, and the app displays or plays it. There’s no need to send it to my server first and relay it back. That’s the main point I want to make in the exemption request.

Now it’s PrimePlayer’s turn. Its online video and IPTV features have brought it up against the same ICP requirements. I’ve applied for an exemption, and I’m waiting to hear back from Apple.

After going through this with Diple, I know the process this time, but I still can’t say whether it will go smoothly or how long it will take. Building apps involves more than writing code; things like this also take time during the release process. Hopefully, it goes more smoothly for PrimePlayer this time.
