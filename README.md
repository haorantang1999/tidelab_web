# TiDE Lab 官网 · 维护手册

纯静态、数据驱动、零构建、离线可运行。双击 `index.html` 即可打开；
推荐本地预览（避免个别浏览器限制）：

```bash
cd site && python -m http.server 8899 --bind 127.0.0.1
# 浏览器打开 http://127.0.0.1:8899/
```

## 日常维护（vibecoding 约定）

**改内容 → 只改 `data/` 下的数据文件，页面自动渲染，不需要碰 HTML。**

| 需求 | 操作 |
|---|---|
| 新增/更新成员 | 编辑 `data/members.js`：在对应分组（phd/master/engineer/collaborator）追加或补全对象；照片放入 `assets/img/members/` 并在 `photo` 字段填路径。字段结构对齐《成员信息收集表 v3.0》，暂无的字段留 `""` 或 `[]` |
| 登记编外合作成员 | 编辑 `data/members.js`：`group: "collaborator"` + `collab: true` + `noteZh/noteEn` 说明合作身份；**其成果不要抄进 `outputs.js`**（不计入实验室成果统计） |
| 维护成员个人网站作品集 | 编辑 `data/members.js` 的 `portfolio`：图片先下载到 `assets/img/members/<id>/`（严禁外链），每张图注以「（图源：…）」结尾；`siteUrl` 渲染为醒目横幅外链。`portfolio.embed` 默认 `false`（iframe 直嵌为可选增强，需负责人确认） |
| 更新负责人信息 | 编辑 `data/members.js` 的 `TIDE_LEADERS`（高岩=实验室负责人，姜玉熙=实验室创始人）；只保留最基础信息（高岩：照片/姓名/职称/单位/邮箱/主页/办公室/focus/keywords/个人简介；姜玉熙：姓名/个人简介），空字段页面自动跳过不渲染。首页「**创始人 FOUNDERS**」栏与 people.html 的负责人双卡**共用这一份数据**，改一处两处同步 |
| 调整首页精选成员 | `index.html` 内 `featuredIds`（默认 唐浩然 / 赵天乐）＋ 自动补齐逻辑：从「有照片且非编外合作」的成员里，**优先挑有 `focusZh` 的**补到 4 张，避免首页出现「简介待补充」空卡 |
| 新增项目 | 编辑 `data/projects.js` 追加对象（id 用英文短横线命名）；图片放入 `assets/img/projects/` |
| 更新论文/专利/获奖 | 编辑 `data/outputs.js` 对应数组追加。论文（`TIDE_PUBLICATIONS`）**按 `year` 降序排列**，只收「已发表 + 已录用」；「审稿中/大修」写在成员详情页即可。**题目尚未定稿的论文不要上站**（宁可暂缺，也不要挂「题目待公布」占位） |
| 新增要闻 | 编辑 `data/news.js` 追加对象（字段约定见文件头注释：id/date/tag/title/summary/cover/source/body 正文块）；配图放 `assets/img/news/<id>/`；首页轮播与 `news.html?id=` 详情页自动渲染 |
| 更新 AAVS 板块 | 编辑 `data/outputs.js` 的 `TIDE_AAVS`（phases/units/convenors/practicalInfo/images，内容源自 AAVS 学生手册）；配图放 `assets/img/aavs/`。⚠️ **`scheduleOnline`/`scheduleOffline` 恒为空且不可回填**（逐日日程属教学内容，2026-09-30 整块下线）；`phases` 只保留阶段性质与规模，不得写入技术教程主题、参访单位、讲座场次等实施细节 |
| 更新实验室介绍/联系方式/外链 | 编辑 `data/site.js`：`resources[]`（GitHub/百度网盘/飞书，空 `url` 显示占位卡）；`openProjects[]` 为首页「开源项目」轮播数据源，改动后**必须同步刷新 `openProjectsAsOf`** 为当天日期。⚠️ `TIDE_AAVS.practicalInfo.contacts` **只放实验室公共邮箱**，学生个人手机号/邮箱一律不上站 |
| 新增页面 | 新建 `<name>.html`（复制任一现有页面骨架）→ 在 `assets/js/ui.js` 的 `TIDE_UI.PAGES` 追加 `{key, file, zh, en, dot}` → `<body data-page="key">` |
| 改颜色/字号/间距 | 只改 `assets/css/tokens.css`（全站唯一色板；2026-09-18 已全站上调一至两号，保持层级比例） |
| 内容更新后防缓存 | 递增 `assets/js/ui.js` 顶部的 `window.TIDE_VER`（如 `20260930a`→`20260930b`），并批量替换各 HTML 中的 `?v=旧版本` 为新值——所有数据/图片/样式引用会自动强制刷新，避免浏览器展示旧版 |

## 硬约束（修改时请保持）

1. 内容必须来自 `data/*.js`（`window.TIDE_*`），HTML 不硬编码正文；
2. 颜色只用 `var(--*)` 令牌；裸色值只允许出现在 tokens.css 与数据文件的方向色配置；
3. 禁止网络资源（CDN/网络字体/图片 URL），全站离线可运行；
4. 图片必须有图注；直角卡片；禁渐变/粒子特效（团队 PRD C-10 克制原则）；
5. 新增手册扫描图放入 `assets/img/handbook/`，注意原图无需旋转。

## 页面清单

`index` 首页 · `research` 研究（四大方向+衣食住行娱）· `projects` 项目列表 · `project?id=` 项目详情 · `people` 成员 · `member?id=` 成员详情 · `outputs` 成果 · `aavs` AAVS 入口 · `about` 关于

## 内容来源

- 项目图文：转录自 `../Tide资料/手册 草稿2.0_01~24.png`（提取记录见 `../_extracted/projects_from_handbook.md`）
- 老师信息：抓取自 https://www.sigs.tsinghua.edu.cn/gy1/main.psp（见 `../_extracted/teacher_sigs.md`）
- 成员信息：`../成员信息/` 各成员收集表与简历（见 `../_extracted/members_extracted.md`）
- 设计基准：`../网站UI参考_by陈诗霖/` 两张参考图 + 团队整合 PRD V1.0（S4 成果展示站）
