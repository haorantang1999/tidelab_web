/* TiDE Lab 共享 UI 层 —— 冻结共享层
 * 页面注册表 + 导航/页脚渲染 + 通用组件助手。
 * 新增页面：在 TIDE_UI.PAGES 末尾追加 {key, file, zh, en, dot}，
 *   并在新页面 <body data-page="key"> 声明，导航自动出现并高亮。
 */
window.TIDE_UI = (function () {
  "use strict";

  /* 缓存破除：内容更新时递增此版本号，所有图片/资源自动强制刷新 */
  window.TIDE_VER = "20261027a";

  /* 页面注册表（顺序即导航顺序） */
  var PAGES = [
    { key: "home",     file: "index.html",    zh: "首页", en: "HOME",     dot: "" },
    { key: "research", file: "research.html", zh: "研究", en: "RESEARCH", dot: "purple" },
    { key: "projects", file: "projects.html", zh: "项目", en: "PROJECTS", dot: "teal" },
    { key: "outputs",  file: "outputs.html",  zh: "成果", en: "OUTPUTS",  dot: "yellow" },
    { key: "people",   file: "people.html",   zh: "成员", en: "PEOPLE",   dot: "green" },
    { key: "aavs",     file: "aavs.html",     zh: "AAVS", en: "AAVS",     dot: "orange" },
    { key: "about",    file: "about.html",    zh: "关于", en: "ABOUT",    dot: "" }
  ];

  function page(key) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].key === key) return PAGES[i];
    return null;
  }

  /* 顶部导航：activeKey 来自 <body data-page>；project 详情页高亮 projects */
  function renderNav(activeKey) {
    if (activeKey === "project") activeKey = "projects";
    var items = PAGES.filter(function (p) { return p.key !== "home"; }).map(function (p) {
      var dot = p.dot ? '<span class="dot ' + p.dot + '"></span>' : "";
      var cls = p.key === activeKey ? ' class="active"' : "";
      var label = p.zh === p.en ? p.zh : p.zh + " <span class='en'>" + p.en + "</span>";
      return '<li><a href="' + p.file + '"' + cls + ">" + dot + label + "</a></li>";
    }).join("");
    return '' +
      '<nav class="topnav">' +
      '  <a class="brand" href="index.html">TiDE <em>LAB</em></a>' +
      '  <ul id="nav-list">' + items + "</ul>" +
      '  <button class="menu-btn" aria-label="菜单" onclick="document.getElementById(\'nav-list\').classList.toggle(\'open\')">≡</button>' +
      "</nav>";
  }

  /* 页脚（紫底，参考首页图） */
  function renderFooter() {
    var links = PAGES.filter(function (p) { return p.key !== "home"; }).map(function (p) {
      return '<a href="' + p.file + '">' + p.zh + " " + p.en + "</a>";
    }).join("");
    return '' +
      '<footer class="footer"><div class="inner">' +
      '  <div class="f-grid">' +
      '    <div>' +
      '      <div class="f-brand">TiDE LAB</div>' +
      '      <div class="f-mission">Design Intelligence<br/>for a Changing World</div>' +
      '    </div>' +
      '    <div class="f-links">' + links + "</div>" +
      '  </div>' +
      '  <div class="f-bottom">' +
      '    <span>清华SIGS未来人居数字引擎实验室 · Tsinghua iFHHs Digital Engine Laboratory</span>' +
      '    <span><span class="dot purple"></span> <span class="dot teal"></span> <span class="dot yellow"></span> <span class="dot lime"></span> <span class="dot red"></span>&nbsp; MORE ADAPTIVE · MORE LIVABLE · TOGETHER</span>' +
      "  </div>" +
      "</div></footer>";
  }

  /* 挂载导航与页脚：页面只需放 <div id="tide-nav"></div> 与 <div id="tide-footer"></div> */
  function mount() {
    var nav = document.getElementById("tide-nav");
    if (nav) nav.innerHTML = renderNav(document.body.getAttribute("data-page") || "");
    var ft = document.getElementById("tide-footer");
    if (ft) ft.innerHTML = renderFooter();
  }

  /* ===== 组件助手 ===== */

  /* 章节标题：研究 RESEARCH ———— tagline● */
  function secHead(zh, en, tagline, dotColor) {
    return '<div class="sec-head"><h2>' + zh + ' <span class="en">' + en + '</span></h2>' +
      '<div class="rule"></div>' +
      (tagline ? '<span class="tagline">' + tagline +
        (dotColor ? ' <span class="dot ' + dotColor + '"></span>' : "") + "</span>" : "") +
      "</div>";
  }

  /* 占位块（暂无信息） */
  function placeholder(text) {
    return '<div class="placeholder">' + (text || "待补充") +
      '<div class="en">To Be Announced</div></div>';
  }

  /* 图片（带加载失败回退为占位；本地图自动附加版本参数防缓存） */
  function img(src, alt, cls) {
    if (!src) return '<div class="photo-empty">TiDE</div>';
    var v = /^https?:\/\//.test(src) ? src : src + (src.indexOf("?") < 0 ? "?v=" + window.TIDE_VER : "&v=" + window.TIDE_VER);
    return '<img src="' + v + '" alt="' + (alt || "") + '"' + (cls ? ' class="' + cls + '"' : "") +
      ' onerror="this.outerHTML=\'<div class=&quot;photo-empty&quot;>TiDE</div>\'">';
  }

  /* 项目卡片 */
  function projectCard(p) {
    return '<a class="card" href="project.html?id=' + p.id + '">' +
      '<div class="thumb"><span class="num">' + p.num + '</span>' + img(p.cover, p.titleZh) + "</div>" +
      '<div class="body"><div class="title">' + p.titleZh + "</div>" +
      '<div class="title-en">' + p.titleEn + "</div>" +
      '<div class="desc">' + (p.categoryZh + " · " + (p.area || "") + (p.statusZh ? " · " + p.statusZh : "")) + "</div>" +
      '<div class="under"></div></div></a>';
  }

  /* 面包屑 */
  function crumbs(items) {
    var html = items.map(function (it, i) {
      var last = i === items.length - 1;
      var inner = last ? '<span class="cur">' + it.label + "</span>" : '<a href="' + it.href + '">' + it.label + "</a>";
      return inner + (last ? "" : '<span class="sep">&rsaquo;</span>');
    }).join("");
    return '<div class="crumbs">' + html + "</div>";
  }

  /* 成员卡片（有简介给全字段，无简介自动收敛为占位样式） */
  function personCard(m) {
    var photo = m.photo
      ? '<div class="photo">' + img(m.photo, m.nameZh) + "</div>"
      : '<div class="photo"><div class="photo-empty">' + (m.nameZh || "TiDE").charAt(0) + "</div></div>";
    var focus = m.focusZh || m.bioZh || "";
    var tags = (m.keywords || []).slice(0, 3).map(function (k) { return '<span class="tag">' + k + "</span>"; }).join("");
    var honors = (m.honors || []).length ? '<div class="s" style="font-size:var(--fs-tiny);color:var(--gray);margin-top:6px">' + m.honors[0] + "</div>" : "";
    return '<a class="person" href="member.html?id=' + m.id + '">' + photo +
      '<div class="body"><div class="name">' + m.nameZh + '</div>' +
      '<div class="name-en">' + (m.nameEn || "") + "</div>" +
      (focus ? '<div class="focus">' + focus + "</div>" : '<div class="focus" style="color:var(--gray-2)">简介待补充</div>') +
      (tags ? '<div class="tags">' + tags + "</div>" : "") + honors +
      "</div></a>";
  }

  /* URL 参数 */
  function query(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search);
    return m ? decodeURIComponent(m[1]) : "";
  }

  return {
    PAGES: PAGES, page: page, mount: mount,
    secHead: secHead, placeholder: placeholder, img: img,
    projectCard: projectCard, personCard: personCard, crumbs: crumbs, query: query
  };
})();

document.addEventListener("DOMContentLoaded", window.TIDE_UI.mount);
