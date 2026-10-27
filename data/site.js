/* TiDE Lab 网站数据 · 站点级信息
 * 维护说明：本文件是实验室介绍、使命、方向板块、外链资源的唯一数据源。
 * 新增/修改内容只需编辑此文件，页面会自动渲染。
 * 暂无信息的位置保持空字符串 "" 或空数组 []，页面会显示"待补充"占位。
 */
window.TIDE_SITE = {
  labNameZh: "清华SIGS未来人居数字引擎实验室",
  labNameEn: "Tsinghua iFHHs Digital Engine Laboratory",
  labShortZh: "数字引擎实验室",
  labShortEn: "TiDE Lab",
  missionZh: "为变化中的世界设计智能",
  missionEn: "DESIGN INTELLIGENCE FOR A CHANGING WORLD",
  affiliationZh: "清华大学深圳国际研究生院 · 未来人居研究院",
  affiliationEn: "Tsinghua Shenzhen International Graduate School",

  /* 实验室介绍（转录自项目手册草稿2.0 第01页） */
  introZh: [
    "清华SIGS未来人居数字引擎实验室依托清华大学深圳国际研究生院，致力于构建国际领先的数字引擎技术创新与产业融合平台。实验室围绕两大核心板块协同推进：其一，聚焦数字引擎底层技术的自主研发，涵盖智能渲染、物理仿真、AI驱动的生产管线及模块化系统架构，持续突破核心算法与关键工具链，为数字创意生产提供系统化、标准化的技术支撑；其二，深化产业应用，下设两大实践平台——\"iDEA设计工作室\"专注于建筑设计领域，探索数字孪生、沉浸式环境生成与智能营造的前沿路径；\"ZAO Society 营造社\"则在空间尺度探索数字引擎与产业的结合，目前面向\"衣、食、住、行、娱\"五大民生领域，构建开放协同的产学研生态，推动数字引擎技术在智能穿戴、智慧家居、智慧出行、未来社区及数字娱乐等场景中的深度融合与标准化落地。实验室秉持技术赋能与创意平权理念，致力于成为全球数字引擎领域理论研究、关键技术与产业转化的重要策源地，为数字时代的跨学科协同创新提供系统性支撑。"
  ],
  introEn: [
    "The Future Habitat Digital Engine Laboratory of SIGS, Tsinghua University is affiliated with Tsinghua Shenzhen International Graduate School. It is committed to building an internationally leading platform for technological innovation and industrial integration of digital engines.",
    "The laboratory advances synergistically around two core segments. First, it focuses on the independent research and development of underlying technologies for digital engines, covering intelligent rendering, physical simulation, AI-driven production pipelines and modular system architectures. Second, it deepens industrial applications with two practical platforms: the iDEA Design Studio specializing in architectural design, and ZAO Society exploring the integration of digital engine technology with industries across five major livelihood sectors.",
    "Upholding the philosophy of technology empowerment and creative equity, the laboratory strives to become a key cradle for theoretical research, core technology development and industrial transformation in the global digital engine field."
  ],

  /* 理念（转录自手册 iDEA 章节·范式转移） */
  philosophyZh: "创造实践类学科的核心，旨在通过实践服务社会、创造价值。我们超越\"证据为本\"的研究范式，直面建筑设计的复杂性，倡导基于批判诠释主义的设计探索、实践驱动和AI赋能的跨专业研究——这与中国文化根源\"格物致知\"的智慧一脉相承。",
  philosophyEn: "Paradigm Shift: Toward Practice-Driven Transdisciplinary Research — grounded in Critical Hermeneutics, we promote transdisciplinary research characterized by design exploration, practice orientation, and AI empowerment.",

  /* 四大方向板块（PRD S4 P0：数字引擎 / iDEA / ZAO Society / 未来公园）
   * key 与 data/research.js 中研究方向一一对应 */
  directions: [
    { key: "digital-engine", num: "01", zh: "数字引擎", en: "DIGITAL ENGINE", color: "#7118B6", image: "assets/img/research/digital-engine.jpg" },
    { key: "idea-studio",   num: "02", zh: "iDEA设计工作室", en: "iDEA DESIGN STUDIO", color: "#1FA97A", image: "assets/img/research/idea-studio.jpg" },
    { key: "zao-society",   num: "03", zh: "营造社", en: "ZAO SOCIETY", color: "#D8B500", image: "assets/img/research/zao-society.jpg" },
    { key: "future-park",   num: "04", zh: "未来公园企划", en: "FUTURE PARK PROJECT", color: "#E63229", image: "assets/img/research/future-park.jpg" }
  ],

  /* 资源外链区（PRD S4 P0：GitHub/百度网盘/飞书，统一登记；暂无则留空）
   * 2026-09-30：登记实验室成员已公开的 GitHub 主页（其余成员资料中无公开代码仓库）。
   * openProjects 为可检索的开源项目清单，首页「开放资源」区自动渲染为动态轮播。 */
  resources: [
    { name: "GitHub · 任宇新", url: "https://github.com/renyuxin6666-tech", note: "空间智能 · 机器人建造 · Agent 工具链" },
    { name: "GitHub · 唐浩然", url: "https://github.com/haorantang1999?tab=repositories", note: "文献翻译 Agent 技能 · 全球地理数据库检索" },
    { name: "百度网盘", url: "", note: "大型文件与数据集（待开通）" },
    { name: "飞书", url: "", note: "协作文档与知识库（待开通）" }
  ],

  /* 开源项目清单（2026-09-30 依据 GitHub 公开 API 首次登记；stars 为登记日快照，需定期核实更新）
   * 字段：name 仓库名 · url 仓库地址 · descZh/descEn 简介 · author 维护者 ·
   *       lang 主语言 · stars 星标数 · year 创建年份 */
  openProjects: [
    {
      name: "cc-pdf2zh-skill", author: "唐浩然", lang: "Python", stars: 31, year: 2026,
      url: "https://github.com/haorantang1999/cc-pdf2zh-skill",
      descZh: "批量翻译英文文献的 Agent 技能：一条指令把一篇乃至数十篇 PDF 论文译为中文，保留公式与版式。",
      descEn: "An agent skill for batch-translating English papers into Chinese while preserving formulas and layout."
    },
    {
      name: "GeoData_Locater", author: "唐浩然", lang: "JavaScript", stars: 14, year: 2026,
      url: "https://github.com/haorantang1999/GeoData_Locater",
      descZh: "全球地理数据库检索平台：汇总各国开放地理数据源，支持一站检索与社区共建。",
      descEn: "A one-stop search platform indexing open geospatial data sources worldwide."
    },
    {
      name: "Toio-ML-Agents-Bot", author: "任宇新", lang: "C#", stars: 2, year: 2026,
      url: "https://github.com/renyuxin6666-tech/Toio-ML-Agents-Bot",
      descZh: "Unity ML-Agents × Sony toio 桌面对照实验台：训练摄像头追踪的推箱策略并部署到实体机器人。",
      descEn: "A Unity ML-Agents × Sony toio testbed training a camera-tracked box-pushing policy on physical robots."
    },
    {
      name: "context-handoff-manager", author: "任宇新", lang: "Python", stars: 2, year: 2026,
      url: "https://github.com/renyuxin6666-tech/context-handoff-manager",
      descZh: "隐私优先的上下文监控与任务交接技能：把长任务的上下文与决策过程沉淀为可审计的交接记录。",
      descEn: "A privacy-preserving skill for live context monitoring and auditable task handoffs."
    },
    {
      name: "codex-workbuddy-delegate", author: "任宇新", lang: "Python", stars: 0, year: 2026,
      url: "https://github.com/renyuxin6666-tech/codex-workbuddy-delegate",
      descZh: "Windows 优先的 Codex 插件：把任务有界地委派给本地 WorkBuddy 实例，并回传可复核的结果。",
      descEn: "A Windows-first Codex plugin for bounded, reviewed delegation to a local WorkBuddy installation."
    },
    {
      name: "FreeSpace-showcase", author: "任宇新", lang: "TypeScript", stars: 0, year: 2026,
      url: "https://github.com/renyuxin6666-tech/FreeSpace-showcase",
      descZh: "校园公共生活协调研究原型：把活动、共享物料与空间资源接入同一套调度视图。",
      descEn: "A research prototype coordinating campus public life across activities, shared materials and spaces."
    }
  ],
  openProjectsAsOf: "2026-10-27",

  /* 联系与地址（暂无信息留空） */
  contact: {
    email: "",
    addressZh: "清华大学深圳国际研究生院",
    addressEn: "Tsinghua Shenzhen International Graduate School, Shenzhen, China",
    wechat: ""
  },

  /* 首页英雄区配图 */
  heroImage: "assets/img/projects/chengdu-museum-cover.jpg",
  heroImageCaption: "成都自然博物馆（与 Zaha Hadid Architects 联合设计）· Chengdu Natural History Museum"
};
