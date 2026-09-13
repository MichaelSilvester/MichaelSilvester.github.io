/**
 * ms-blog-views-counter — 博客的浏览量 + 点赞计数 Worker。
 *
 * 路由：
 *   GET  /?slug=xxx      浏览量 +1（同 IP 同文章 1 小时内只计一次），
 *                        返回 { slug, views, likes, liked }
 *   POST /like?slug=xxx  点赞 +1（同 IP 同文章只计一次，不可取消），
 *                        返回 { slug, likes, liked }
 *
 * KV（VIEWS_KV）里的键：
 *   views:<slug>              浏览总数
 *   ratelimit:<slug>:<ip>     浏览防刷标记，1 小时过期
 *   likes:<slug>              点赞总数
 *   liked:<slug>:<ip>         点赞去重标记，永久
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS 处理
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });

    const slug = url.searchParams.get("slug");
    if (!slug) {
      return json({ error: "missing slug" }, 400);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const likeCountKey = `likes:${slug}`;
    const likedKey = `liked:${slug}:${ip}`;

    // 点赞：只增不减，同一 IP 对同一篇只计一次。重复请求不报错，
    // 直接把当前总数回给前端，让按钮保持“已赞”。
    if (url.pathname === "/like") {
      if (request.method !== "POST") {
        return json({ error: "method not allowed" }, 405);
      }

      const alreadyLiked = await env.VIEWS_KV.get(likedKey);
      let likes = parseInt((await env.VIEWS_KV.get(likeCountKey)) || "0", 10);

      if (!alreadyLiked) {
        likes += 1;
        await env.VIEWS_KV.put(likeCountKey, likes.toString());
        await env.VIEWS_KV.put(likedKey, "1");
      }

      return json({ slug, likes, liked: true });
    }

    // 简单防刷：同一 IP 同一文章 1 小时内只计一次
    const rateLimitKey = `ratelimit:${slug}:${ip}`;
    const alreadyCounted = await env.VIEWS_KV.get(rateLimitKey);

    const countKey = `views:${slug}`;
    let current = parseInt((await env.VIEWS_KV.get(countKey)) || "0", 10);

    if (!alreadyCounted) {
      current += 1;
      await env.VIEWS_KV.put(countKey, current.toString());
      await env.VIEWS_KV.put(rateLimitKey, "1", { expirationTtl: 3600 });
    }

    // 点赞数和“这个 IP 是否点过”一并返回，前端一次请求就能把
    // 阅读数和点赞按钮一起显示出来，不必再发一次。
    const [likesRaw, likedRaw] = await Promise.all([
      env.VIEWS_KV.get(likeCountKey),
      env.VIEWS_KV.get(likedKey),
    ]);

    return json({
      slug,
      views: current,
      likes: parseInt(likesRaw || "0", 10),
      liked: likedRaw !== null,
    });
  },
};
