/* TiDE Lab 网站数据 · 成果（论文 / 专利 / 获奖 / 实验室作品）
 * 新增成果：在对应数组末尾追加。暂无内容的数组保持 []，页面显示"待补充"。
 */

/* 论文（来源：高岩 SIGS 主页代表性论文 + 成员信息收集表）
 * 2026-09-30 维护：并入赵天乐 / 唐浩然 提交的论文成果，全表按 year 降序重排。
 * 收录口径：已发表 + 已录用（含会议海报已展示）；「审稿中 / 大修」条目仅保留在成员详情页，不计入本表。
 * 任宇新的第一作者 CDRF 2026 论文因题目未定稿，按负责人指示暂不上站（见 members.js 注释）。
 */
window.TIDE_PUBLICATIONS = [
  { year: 2026, authors: "Arts Cheung、REN Yuxin、ZHAO Liuxin、Qi Wang、NG Cheuk Hei (Alfred)、Jun Yin、TANG Haoran、Xiang Deng、Jing Zhong、Wai Ning Louie、Jade Jiang、GAO Yan", title: "LLM-Driven Generative Design for Climate-Adaptive Net-Zero Buildings（面向气候适应性净零建筑的大语言模型驱动生成式设计）", venue: "BAS 2026 · The International Conference of Building and Simulation（会议海报，已展示）", tags: ["生成式设计", "净零建筑", "跨方向合作"] },
  { year: 2026, authors: "ZHAO Tianle, YU Kaiho", title: "面向非标准木结构的数据驱动机器人建造框架：融合材料生态与计算装配", venue: "CDRF · 数字设计与机器人建造国际会议（已录用，待发表）", tags: ["机器人建造", "木结构"] },
  { year: 2025, authors: "TANG Haoran 等", title: "粤港澳大湾区11个城市热环境差异：非线性关系与基于城市绿化的解决方案", venue: "Sustainable Cities and Society（JCR Q1, IF 12.0）", tags: ["城市热环境", "机器学习"] },
  { year: 2025, authors: "TANG Haoran（共同一作）等", title: "城市绿地对半干旱地区不同肥胖状态老年人体力活动促进的非线性影响：中国兰州案例研究", venue: "GeoHealth（JCR Q1, IF 4.5）", tags: ["城市绿地", "健康"] },
  { year: 2024, authors: "TANG Haoran（第五作者）等", title: "产业政策对新能源汽车企业技术创新的影响：基于政策文本的LDA模型分析及技术进步对策", venue: "《中文核心期刊（C 类）》", tags: ["产业政策", "LDA 主题模型"] },
  { year: 2023, authors: "常镪、高岩、王哲", title: "西安国际足球中心的设计概念与设计定型——大跨体育建筑的建筑结构协同创新设计", venue: "《世界建筑》202303期, 46-51", tags: ["体育建筑", "结构协同"] },
  { year: 2019, authors: "高岩", title: "从数字化能力到设计智慧", venue: "《DOMUS China》141期, 120-123", tags: ["设计理论"] },
  { year: 2019, authors: "高岩、陈淑芬、肖诚、牟中辉", title: "TOD 慢行交通和公共空间设计", venue: "《大湾区城市与建筑设计技术手册》, 中国建筑工业出版社, 24-43", tags: ["TOD", "公共空间"] },
  { year: 2017, authors: "郭馨、高岩", title: "数技智造——天颐湖儿童体验馆设计与数字技术的运用", venue: "《建筑学报》2017年05期, 30-35", tags: ["数字建造"] },
  { year: 2017, authors: "郭馨、高岩、吴彬", title: "简杂计艺——天颐湖儿童职业体验馆的材料与构造", venue: "《建筑技艺》2017年05期, 76-85", tags: ["材料构造"] },
  { year: 2016, authors: "Gao Yan, Guo Xin", title: "Intelligent Making and Robotic Structure", venue: "Periodica Polytechnica Architecture, Budapest", tags: ["机器人建造"] },
  { year: 2015, authors: "郭馨、高岩", title: "技上计——2014威尼斯双年展中国馆大型特展「共谋•共生」展览空间设计", venue: "《建筑技艺》2015年5月, 12-17", tags: ["展览设计"] },
  { year: 2015, authors: "Gao Yan, Chang Qiang, Lo Tiantian", title: "Integrated Open Source Design for Architecture in High Density Housing Practice", venue: "Journal of Civil Engineering and Architecture, 2015.9", tags: ["开源设计", "高密度住宅"] },
  { year: 2014, authors: "高岩", title: "基于设计实践的参数化与BIM", venue: "《南方建筑》2014年8月, 4-14", tags: ["参数化", "BIM"] },
  { year: 2014, authors: "高岩", title: "质疑数字化(建筑)设计——浅谈数字化「与」(建筑)设计", venue: "《建筑技艺》2014年第04期, 40-43", tags: ["设计理论"] },
  { year: 2012, authors: "高岩", title: "后理论时代实用主义的中国当代建筑设计", venue: "《城市环境设计》2012年第8期, 151-153", tags: ["设计理论"] },
  { year: 2012, authors: "苏运升、高岩、常镪", title: "大规模定制的保障房住区系统设计——深圳2011「一·百·万」保障房设计竞赛综合类金奖方案：易·度", venue: "《建筑学报》2012年第5期, 13-19", tags: ["大规模定制", "保障房"] },
  { year: 2012, authors: "Gao Yan, Su Yunsheng", title: "Computational Design Research for High Density Social Housing in China", venue: "Journal Of Engineering Technology (JET), Vol.2, Singapore", tags: ["计算性设计"] },
  { year: 2012, authors: "Gao Yan", title: "Scripted Vernacular Architecture - Invisible Computation", venue: "Scripting The Future《建築數字化編程》, 113-120", tags: ["计算性设计"] },
  { year: 2012, authors: "Gao Yan", title: "Synthetic Computational Design", venue: "New Computational Paradigms, 164-173", tags: ["计算性设计"] },
  { year: 2008, authors: "高岩", title: "参数化设计——一种更高效的设计技法", venue: "《世界建筑》第215期, 28-33", tags: ["参数化"] }
];

/* 专利（来源：高岩 SIGS 主页） */
window.TIDE_PATENTS = [
  { year: 2024, type: "实用新型", title: "一种家具单体和拼装式组合家具", number: "202420054803.4" },
  { year: 2018, type: "外观设计", title: "装配式可移动客栈", number: "ZL 2018 3 0740136.5" },
  { year: 2011, type: "实用新型", title: "螺旋升降观光塔", number: "ZL 2011 2 0081285.8" }
];

/* 实验室作品与设备（转录自手册第16–17页） */
window.TIDE_WORKS = [
  { titleZh: "「AR引导施工」项目", titleEn: "\"AR-Guided Construction\" Project", note: "两人佩戴 AR 头显进行木构斗拱吊装", page: "assets/img/handbook/page-20.jpg" },
  { titleZh: "《重新构想住宅》Zao House 2.0", titleEn: "RE-INVENTING THE HOUSE / Zao House 2.0", note: "车间内白色框架式居住模块", page: "assets/img/handbook/page-20.jpg" },
  { titleZh: "2022年深圳双年展 Zao House 1.0", titleEn: "2022 Shenzhen Biennale / Zao House 1.0", note: "白墙黛瓦村落中的现代坡顶小屋", page: "assets/img/handbook/page-20.jpg" }
];

window.TIDE_EQUIPMENT = [
  { zh: "台锯", en: "Table Saw" },
  { zh: "三轴数控机床", en: "Three-Axis CNC Machine Tool" },
  { zh: "五轴数控机床", en: "Five-Axis CNC Machine Tool" },
  { zh: "工作空间", en: "Working Space" }
];

/* 获奖精选（全量见成员页高岩栏目；此处为成果页精选展示，暂无更多则保持现状） */
window.TIDE_AWARDS_HIGHLIGHT = [
  { year: 2025, text: "WAF Completed Buildings – School Finalist｜和平实验中学" },
  { year: 2023, text: "CRED AWARD 金奖（未来项目）｜西安国际足球中心（与 ZHA 联合设计）" },
  { year: 2023, text: "亚洲教育环境设计奖 学习空间设计金奖｜深圳龙华和平实验小学" },
  { year: 2022, text: "A&D China Awards 最佳办公场所金奖｜凯博易控高科技产业园" }
];

/* AAVS 活动（PRD S5：独立品牌站）
 * 内容来源：AAVS资料/STUDENT GUIDE BOOK【GY】.pdf（AAVS 2026 学生手册，22页）
 * 提取存档：_extracted/aavs-guidebook.md。暂无信息留空/[]，页面显示占位。
 */
window.TIDE_AAVS = {
  name: "AAVS",
  fullNameZh: "2026 AA-清华 夏季访校营 · 清华深圳设计营创论坛",
  fullNameEn: "AA-THU Visiting School · Tsinghua Shenzhen Design Praxis Forum",
  themeZh: "数字引擎 · 超级智造",
  themeEn: "Digital Engine · Super Making",
  edition: "AAVS 2026",
  datesZh: "2026年6月27日 – 7月19日（线上研习 + 线下工作坊 + 设计营创论坛）",
  datesEn: "27 June – 19 July 2026 · Shenzhen, China",
  locationZh: "中国 · 深圳（清华大学深圳国际研究生院）",
  organizersZh: "主办：英国AA建筑联盟学院 ｜ 清华大学深圳国际研究生院未来人居研究院（iFHHs）",
  organizersEn: "Organised by Architectural Association School of Architecture & iFHHs, Tsinghua SIGS",
  operatorZh: "承办：清华SIGS未来人居数字引擎实验室（TiDE Lab）",
  directorZh: "项目主任：高岩（清华SIGS未来人居研究院副教授、TiDE Lab 主任、AA清华访校主任）｜ 副主任：姜玉熙（TiDE Lab 创始人兼副主任、NEXUS 创始人）",
  directorQuoteZh: "未来人居，始于匠艺，终于哲思。人居之问，即存在之问，我们设计的不仅是空间，更是人与世界相互关联的尺度。",
  directorQuoteBy: "—— 高岩 Dr. Yan Gao",
  descZh: "AAVS（AA Visiting School）是全球性的建筑教育项目和网络，2008年于迪拜启动，已在五大洲100多个城市举办访校项目。AA-清华夏季访校营始于2010年，本届落户粤港澳大湾区，以\"数字引擎·超级智造\"为主题，提出\"未来营造\"概念，跨越人性智慧与机器智能的鸿沟，围绕\"娱、衣、食、住、行\"五个日常生活维度展开课程、工作坊与设计实践。",
  descEn: "The Architectural Association Visiting School (AAVS) is a global architecture education program launched in Dubai in 2008, with 100+ Visiting Schools across five continents. Established in 2010, the AA-THU Visiting School 2026 lands in the Greater Bay Area under the theme \"Digital Engine · Super Making\", unfolding around five dimensions of everyday life: entertainment, clothing, food, living and mobility.",
  stats: [
    { num: "5", labelZh: "大洲", labelEn: "Continents" },
    { num: "31", labelZh: "国家", labelEn: "Countries" },
    { num: "100+", labelZh: "访校项目", labelEn: "Programs" },
    { num: "10000+", labelZh: "学生", labelEn: "Students" }
  ],
  /* 三阶段（2026-09-30 弱化：只保留阶段性质与规模，删除技术教程主题、参访单位、讲座场次等实施细节） */
  phases: [
    { key: "online", num: "01", zh: "线上研习（可选）", en: "Online Learning (optional)",
      datesZh: "2026年6月27日 – 7月5日", datesEn: "27 JUNE – 5 JULY 2026",
      descZh: "为期 9 天的线上研习阶段：技术研习、Studio 讨论与评图、系列讲座，并以线上汇报结业。" },
    { key: "offline", num: "02", zh: "线下工作坊", en: "In-person Workshop",
      datesZh: "2026年7月11日 – 7月18日", datesEn: "11 – 18 JULY 2026",
      descZh: "为期 8 天的深圳线下设计营：设计 Studio、中期与终期评图、企业参访、实体制作与装配、嘉宾讲座与交流。" },
    { key: "forum", num: "03", zh: "清华深圳设计营创论坛", en: "Tsinghua Shenzhen Design Praxis Forum",
      datesZh: "2026年7月19日", datesEn: "19 JULY 2026",
      descZh: "在学思楼（C2）举办的设计营创论坛：成果展示、主旨演讲与交流活动。" }
  ],
  /* 线上 / 线下逐日日程：2026-09-30 起整块下线（属具体教学内容，不便公开外传）
   * 置空即可——页面渲染器对空数组自动跳过，不再输出该板块。 */
  scheduleOnline: [],
  scheduleOffline: [],
  /* 学术召集人 */
  convenors: {
    keynotes: [
      { nameZh: "庄惟敏", nameEn: "Weimin Zhuang", titleZh: "中国工程院院士；清华大学建筑学院教授、博导" },
      { nameZh: "Brett Steele", nameEn: "", titleZh: "南加州大学建筑学院院长；英国皇家艺术学会院士" },
      { nameZh: "娄永琪", nameEn: "Yongqi Lou", titleZh: "上海工程技术大学校长；瑞典皇家工程科学院院士" }
    ],
    instituteDirectors: [
      { nameZh: "徐卫国", nameEn: "Weiguo Xu", titleZh: "DA & IC 实验室主任；清华SIGS未来人居研究院教授、博导" },
      { nameZh: "Christopher Pierce", nameEn: "", titleZh: "AAVS 全球访校主任；国际发展部主任；CaP 创意实践总监" }
    ],
    guestLecturers: [
      { nameZh: "徐宗汉", nameEn: "Richard Hsu", titleZh: "上海工程技术大学教授；中国TEDx策划人" },
      { nameZh: "闻斌", nameEn: "Bin Wen", titleZh: "亚洲数据集团产业育成中心主任；华彩盛世(深圳)文化科技有限公司CEO；深圳湾·公园BOX总规划师" },
      { nameZh: "Tom Verebes", nameEn: "", titleZh: "纽约理工大学建筑与设计学院教授；OCEAN CN 创始人兼总监" },
      { nameZh: "李晟罡", nameEn: "Peter Li", titleZh: "字节跳动游戏战略与投资负责人；字节跳动VR游戏负责人" },
      { nameZh: "江轲", nameEn: "Jacky Ke Jiang", titleZh: "TGC游戏艺术总监；代表作《风之旅人》《光·遇》《冰雪奇缘》《无敌破坏王》" },
      { nameZh: "慕艳茹", nameEn: "Yanru Mu", titleZh: "腾讯光子艺术部技术美术Pipeline专家；曾参与《和平精英》《PUBGM》《英雄联盟手游》" },
      { nameZh: "陈传", nameEn: "Chuan Chen", titleZh: "华润置地深圳公司城市建设事业部 建筑设计总监" },
      { nameZh: "任浩林", nameEn: "Haolin Ren", titleZh: "环球数科股份有限公司 联席CTO" },
      { nameZh: "唐浩然", nameEn: "Haoran Tang", titleZh: "数字引擎实验室研究员；AA清华访校 学术组长" }
    ]
  },
  /* 课题单元（娱/衣/食/住/行） */
  units: [
    { glyph: "娱", keyZh: "娱乐", keyEn: "Entertainment", code: "Unit E", title: "Create the world",
      tutors: [{ nameZh: "孙兴", nameEn: "Dr. Xing Sun", titleZh: "清华SIGS互动媒体设计与技术 讲师（前网易Galaxy工作室总监）" }],
      briefZh: "从零体验完整的游戏开发流程，亲手设计一款独立游戏原型。通过案例教学与实战指导理解游戏创意、玩法机制、交互设计与落地实现，将个人灵感提炼为规范的游戏策划单页（One-Page），并探讨运用 AI 工具全流程协同提升研发效率。",
      outcomeZh: "可实际运行的独立游戏原型 + 游戏策划单页（One-Page）" },
    { glyph: "衣", keyZh: "服装", keyEn: "Clothing", code: "Unit C", title: "Hybrid Co-Intelligence",
      tutors: [{ nameZh: "Peter Bűs", nameEn: "Assoc. Prof. Dr. Peter Bűs", titleZh: "清华SIGS未来人居研究院 副教授" }],
      briefZh: "面向未来时尚与响应式建筑环境的自适应模块化构件系统，探索协同智能机器人装配。使用 UR10 机械臂与中尺度龙门机器人系统开发智能装配工作流程，整合机器人序列规划、混合现实协同控制与参数化设计方法，接入秀场、零售与体验空间等场景测试。",
      outcomeZh: "智能装配工作流程与动态装配场景测试（方法可迁移至建筑、基础设施与城市应用）" },
    { glyph: "食", keyZh: "饮食", keyEn: "Food", code: "Unit F", title: "Natural Forces, Super Folding",
      tutors: [
        { nameZh: "Walaiporn Nakapan", nameEn: "Dr. Walaiporn Nakapan", titleZh: "朱拉隆功大学建筑学院 助理教授" },
        { nameZh: "Nitipong Praphaphankul", nameEn: "Dr. Nitipong Praphaphankul", titleZh: "朱拉隆功大学建筑学院 讲师（结构工程师）" }
      ],
      briefZh: "以\"自然力量\"为主题，用 Kangaroo Physics、Karamba 等计算工具模拟折叠行为、结构性能与材料响应，由建筑师兼计算设计师与结构工程师共同指导，把形态生成、结构分析与数字制造整合为一个完整工作流。",
      outcomeZh: "面向餐饮空间（F&B）的热带气候轻量化折纸亭，外部包裹层叠式食物篮系统（支持种植、灌溉与遮阳）" },
    { glyph: "住", keyZh: "居住", keyEn: "Inhabit", code: "Unit H", title: "Bending Rules: Strength from Geometry and AR-Guided Assembly",
      tutors: [
        { nameZh: "高仕棠", nameEn: "Prof. Kristof Crolla", titleZh: "香港大学建筑学院 副主任；BSL / Design+ 负责人" },
        { nameZh: "高嘉文", nameEn: "Dr. Garvin Goepel", titleZh: "香港大学建筑学院 讲师；BSL 联合主任" }
      ],
      briefZh: "探索几何智能如何让平面立面板转化为空间性、结构性与建筑表现力兼具的构件。运用参数化建模、基于规则的细分方法、CNC 加工策略与 AR 辅助装配，将片材转化为全尺度建筑原型，强调资源智能型人机协作建造。",
      outcomeZh: "全尺度建筑原型（片材 → 轻质立面板系统）" },
    { glyph: "行", keyZh: "出行", keyEn: "Mobility", code: "Unit M", title: "Create the world",
      tutors: [{ nameZh: "Jakub Klaska", nameEn: "Dr. Jakub Klaska", titleZh: "伦敦大学学院 高级讲师；KLASKA Ltd. 创始人" }],
      briefZh: "从装配的视角探讨人机共居，涵盖空间、材料与社会层面的关系。不将机器人定义为固定功能的工具，而是探讨人类与非人类行动者如何通过制作、居住与适应，共同分享、协商并转化建筑环境，将机器人装配视为一种生成性的设计条件。",
      outcomeZh: "人机共居的开放性未来环境构想（研究、制图、原型制作与空间设想）" }
  ],
  /* 成果要求 */
  outcomes: [
    "线上阶段末：各组进行最终线上汇报（Final Online Review），展示一周技术研习与分析研究成果。",
    "线下阶段：中期评图（7月14日）→ 终期评图 Final Crit（7月18日14:00，全体导师与学生）→ 论坛布展。",
    "7月19日：成果于清华深圳设计营创论坛（学思楼 C2）展示。"
  ],
  /* 实用信息 */
  practicalInfo: {
    venueZh: "访校营地点：清华大学深圳国际研究生院 圳兴楼（H栋）；论坛地点：学思楼（C2）",
    addressZh: "地址：深圳市南山区丽水路2279号 清华大学深圳国际研究生院（西丽大学城）",
    transport: [
      { k: "机场", v: "宝安机场乘地铁11号线 → 车公庙站换乘7号线 → 西丽湖站 D 出口 → 步行至校园" },
      { k: "高铁", v: "深圳北站 → 地铁5号线至西丽站 → 换乘7号线至西丽湖站 D 出口 → 步行" },
      { k: "打车", v: "导航\"清华大学深圳国际研究生院\"或\"清华大学深圳国际研究生院2号门\"" }
    ],
    campusZh: "校内各教学楼与活动场地步行可达，可使用共享电动车（微信扫码），请按规定停放。",
    appsZh: "常用APP：微信 / 小红书 / 哔哩哔哩（社交）｜ 微信支付 / 支付宝（支付）｜ 滴滴 / 高德地图（出行）｜ 美团 / 饿了么（外卖）",
    contacts: [
      { k: "TiDE Lab 邮箱", v: "tidelab@mail.tsinghua.edu.cn" },
      { k: "咨询与联络", v: "学术组长 唐浩然 ｜ 执行组长 任宇新 ｜ 学生组长 张础艺 ｜ 后勤组长 梁烈（请通过实验室邮箱联系，并在邮件主题注明对接人）" }
    ],
    socialZh: "官方账号：微信 TiDE Lab ｜ 小红书 TiDE_Lab ｜ Instagram tide_lab_thu"
  },
  /* 页面图片（手册页面图，含图注）
   * 2026-09-30：campusMap 因原配图错误（实为手册第12页 Unit M 内页）已下线，
   * 暂不放图；原文件 assets/img/aavs/aavs-campus-map.jpg 保留待替换。
   * scheduleOnline / scheduleOffline 随日程板块一并下线。 */
  images: {
    cover: { src: "assets/img/aavs/aavs-cover.jpg", caption: "AAVS 2026 学生手册封面：AA-THU VISITING SCHOOL 主视觉" }
  },
  siteUrl: "", /* AAVS 独立站上线后填入，如 https://aavs.example.com */
  applyUrl: "", /* 报名入口（PRD：P0 用邮箱/外链兜底） */
  applyEmail: ""
};
