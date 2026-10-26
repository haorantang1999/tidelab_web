/* 要闻轮播组件（首页与 AAVS 副站共用）
 * 用法：
 *   <link rel="stylesheet" href="assets/css/news-carousel.css?v=...">
 *   <script src="assets/js/news-carousel.js?v=..."></script>
 *   TIDE_NEWS_CAROUSEL.mount(document.getElementById("news-carousel-root"), items, TIDE_UI, {
 *     detailBase: "news.html",   // 详情页（默认 news.html）
 *     siteParam: ""              // 追加到详情链接的 site 参数（如 "aavs"），用于面包屑与上下条范围
 *   });
 * 特性：自动播放(5.5s) · 首尾克隆无缝循环 · 悬停/聚焦暂停 · 触摸滑动 · 页面隐藏暂停
 */
window.TIDE_NEWS_CAROUSEL = (function () {
  "use strict";

  function mount(rootEl, items, U, opts) {
    opts = opts || {};
    var detailBase = opts.detailBase || "news.html";
    var siteSuffix = opts.siteParam ? "&site=" + opts.siteParam : "";
    if (!items || !items.length) { rootEl.innerHTML = U.placeholder("要闻筹备中"); return; }

    function slideHtml(n) {
      return '<div class="news-slide">' +
        '<a class="news-slide-inner" href="' + detailBase + '?id=' + n.id + siteSuffix + '" title="' + n.title + '">' +
        '<div class="news-thumb">' + U.img(n.cover, n.title) +
        (n.tag ? '<span class="news-tag">' + n.tag + '</span>' : '') + '</div>' +
        '<div class="news-body">' +
        '<div class="news-date">' + n.date + (n.source ? ' · ' + n.source : '') + '</div>' +
        '<div class="news-title">' + n.title + '</div>' +
        '<div class="news-summary">' + (n.summary || '') + '</div>' +
        '<div class="news-more">阅读全文 READ MORE &rarr;</div>' +
        '</div></a></div>';
    }

    var N = items.length;
    var loop = N > 1;
    var slides = loop
      ? slideHtml(items[N - 1]) + items.map(slideHtml).join("") + slideHtml(items[0])
      : slideHtml(items[0]);

    rootEl.innerHTML =
      '<div class="news-carousel">' +
      '<div class="news-viewport"><div class="news-track">' + slides + '</div></div>' +
      (loop ? '<button class="news-arrow prev" aria-label="上一条">&larr;</button>' +
        '<button class="news-arrow next" aria-label="下一条">&rarr;</button>' +
        '<div class="news-dots">' + items.map(function (_, i) {
          return '<button class="news-dot' + (i === 0 ? ' on' : '') + '" data-i="' + i + '" aria-label="第' + (i + 1) + '条要闻"></button>';
        }).join('') + '</div>' : '') +
      '</div>';
    if (!loop) return;

    var track = rootEl.querySelector(".news-track");
    var dots = rootEl.querySelectorAll(".news-dot");
    var idx = 1, timer = null, dragging = false, startX = 0, dx = 0;

    function go(i, anim) {
      idx = i;
      track.classList.toggle("no-anim", anim === false);
      track.style.transform = "translateX(" + (-idx * 100) + "%)";
      var real = (((idx - 1) % N) + N) % N;
      dots.forEach(function (d, j) { d.classList.toggle("on", j === real); });
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function play() { stop(); timer = setInterval(function () { go(idx + 1); }, 5500); }

    track.addEventListener("transitionend", function () {
      if (idx === 0) go(N, false);
      else if (idx === N + 1) go(1, false);
    });
    rootEl.querySelector(".news-arrow.prev").addEventListener("click", function () { go(idx - 1); play(); });
    rootEl.querySelector(".news-arrow.next").addEventListener("click", function () { go(idx + 1); play(); });
    dots.forEach(function (d) {
      d.addEventListener("click", function () { go(parseInt(d.getAttribute("data-i"), 10) + 1); play(); });
    });

    var box = rootEl.querySelector(".news-carousel");
    box.addEventListener("mouseenter", stop);
    box.addEventListener("mouseleave", function () { if (!dragging) play(); });
    box.addEventListener("focusin", stop);
    box.addEventListener("focusout", function () { if (!dragging) play(); });

    /* 触摸滑动（移动端） */
    box.addEventListener("touchstart", function (e) {
      dragging = true; dx = 0; startX = e.touches[0].clientX;
      stop(); track.classList.add("no-anim");
    }, { passive: true });
    box.addEventListener("touchmove", function (e) {
      if (!dragging) return;
      dx = e.touches[0].clientX - startX;
      track.style.transform = "translateX(calc(" + (-idx * 100) + "% + " + dx + "px))";
    }, { passive: true });
    box.addEventListener("touchend", function () {
      if (!dragging) return;
      dragging = false;
      track.classList.remove("no-anim");
      var th = Math.max(60, box.clientWidth * 0.12);
      if (dx <= -th) go(idx + 1);
      else if (dx >= th) go(idx - 1);
      else go(idx);
      play();
    });

    /* 页面不可见时暂停，节省资源 */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else if (!dragging) play();
    });

    go(1, false);
    play();
  }

  return { mount: mount };
})();
