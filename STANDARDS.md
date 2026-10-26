# TiDE Lab 网站 · 开发标准（冻结共享层契约）

> 本文件是所有页面开发的硬约束。视觉基准：`../网站UI参考_by陈诗霖/01-tide-homepage.png`、`02-tide-project-detail.png`。设计基准页：`index.html`（已实现，作为风格锚点）。

## 目录结构（vibecoding 维护约定）

```
site/
  index.html / research.html / projects.html / project.html
  people.html / member.html / outputs.html / aavs.html / about.html
  data/            # 唯一数据源（SSOT）。改内容只改这里，页面自动渲染
    site.js        # window.TIDE_SITE      实验室信息/使命/方向/外链/联系
    research.js    # window.TIDE_RESEARCH  四大方向（含营造社衣食住行娱）
    projects.js    # window.TIDE_PROJECTS  项目列表与详情
    members.js     # window.TIDE_ADVISOR / TIDE_MEMBERS / TIDE_MEMBER_GROUPS
    outputs.js     # 论文/专利/作品/设备/获奖/AAVS
    news.js        # window.TIDE_NEWS    要闻（轮播+详情，含正文块与本地图路径）
  assets/
    css/tokens.css # 设计令牌（颜色/字号/间距只允许改这里）
    css/base.css   # 组件库（只增不改）
    js/ui.js       # window.TIDE_UI：PAGES 注册表 + 组件助手（只增不改）
    img/{projects,research,members,handbook}/   # 图片资产
  STANDARDS.md / README.md
```

## 硬约束

1. **数据**：页面内容必须来自 `window.TIDE_*`，禁止在 HTML 里硬编码正文。暂无信息用 `TIDE_UI.placeholder()`。
2. **样式**：只允许使用 `var(--*)` 令牌与 base.css 组件类；页面级特殊布局可写在各自 HTML 的 `<style>` 块中，但**禁止出现裸色值**（#xxx 只能出现在 tokens.css 和 data 文件的方向色配置里）。
3. **离线**：禁止任何网络资源（CDN/字体/图片 URL）。`file://` 双击必须可运行（数据用 `<script src>` 注入，禁用 fetch）。
4. **导航/页脚**：只放 `<div id="tide-nav"></div>` 与 `<div id="tide-footer"></div>`，由 ui.js 渲染；`<body data-page="key">` 声明页面 key（须在 `TIDE_UI.PAGES` 中）。
5. **双语**：中文为主、英文为辅（参考图风格：中文大字 + 灰色英文小字）。正文段落中英对照排列。
6. **深链**：`project.html?id=<id>`、`member.html?id=<id>` 必须可直接打开；参数缺失/实体不存在要显示占位而非报错。
7. **图片**：一律用 `TIDE_UI.img()`（自带失败回退）。真实项目/成员照片，禁用 AI 素材。
8. **克制原则**（PRD C-10）：禁渐变、禁霓虹、禁粒子特效、直角卡片、图片必须有图注。
9. **响应式**：复用 base.css 的断点（1080px / 640px）。

## 页面清单与职责

| 页面 | 内容来源 | 要点 |
|---|---|---|
| index.html ✅ | 全部 | 已实现，作风格锚点。区块顺序：英雄区 → 要闻轮播 → 研究 → 项目 → 成果 → **创始人**（`TIDE_LEADERS`，位于成果与成员之间，两位负责人单拎出来）→ 成员（`TIDE_MEMBERS` 精选 4 张，不含负责人与编外合作）→ 开放资源 → 开源项目分页轮播 |
| research.html | TIDE_RESEARCH | 四大方向详情；营造社含衣食住行娱子方向 |
| projects.html | TIDE_PROJECTS | 项目列表 + 类别筛选 |
| project.html?id= | TIDE_PROJECTS | 参考图02版式：左竖栏+面包屑+元信息表+画廊+相关+下一项目 |
| people.html | TIDE_LEADERS/TIDE_MEMBERS | 负责人特卡 + 博士生/硕士生/研究工程师/编外合作 分组（分组由 `TIDE_MEMBER_GROUPS` 驱动，`descZh` 非空则渲染说明行） |
| member.html?id= | TIDE_MEMBERS | 成员详情：按收集表字段结构呈现；支持 `noteZh/noteEn` 备注条、`github` 行、`portfolio` 个人网站作品集（本地镜像画廊 + 醒目外链，`embed` 为可选 iframe 直嵌开关，默认关闭） |
| outputs.html | outputs.js 各数组 | 论文/专利/获奖/实验室作品与设备。论文数组须按 `year` 降序 |
| aavs.html | TIDE_AAVS | AAVS 橙品牌入口页，报名留空占位。**逐日日程板块已下线**；实用信息缺校园地图图时自动收为单列；页脚仅保留一个醒目的 `Powered by TiDE Lab` 横幅外链 |
| about.html | TIDE_SITE | 实验室介绍、理念、联系方式 |
| news.html?id= | TIDE_NEWS | 要闻详情：面包屑+元信息表+封面图+正文块+上一条/下一条；首页 index 含要闻轮播（首屏后、研究前） |
