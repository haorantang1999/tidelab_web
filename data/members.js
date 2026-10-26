/* TiDE Lab 网站数据 · 成员
 * 字段结构依据《TiDE_Lab_成员信息收集表_v3.0_中英双语.docx》。
 * 新增成员：在对应分组（phd/master/engineer/alumni）追加对象；
 *   照片放入 assets/img/members/，photo 字段填文件名。
 * 未填写的字段保持 "" 或 []，页面显示"待补充"占位。
 */
/* 实验室负责人（LEADERSHIP）：两位负责人同等级并列展示 */
window.TIDE_LEADERS = [
{
  nameZh: "高岩", nameEn: "GAO Yan",
  role: "教师", roleEn: "Faculty",
  roleLabelZh: "实验室负责人", roleLabelEn: "Head of Laboratory",
  titleZh: "副教授 · 博士生导师", titleEn: "Associate Professor, Doctoral Supervisor",
  affiliationZh: "清华大学深圳国际研究生院 未来人居研究院",
  affiliationEn: "Institute of Future Human Habitats, Tsinghua SIGS",
  email: "gaoruiyan@sz.tsinghua.edu.cn",
  homepage: "https://www.sigs.tsinghua.edu.cn/gy1/main.psp",
  office: "H314",
  photo: "assets/img/members/gao-yan.jpg",
  keywords: ["计算性建筑设计", "深度设计", "DfMA装配式建筑", "智能制造", "数字引擎平台"],
  focusZh: "建筑（数字）设计与智造工程信息平台",
  focusEn: "Architectural (Digital) Design & Intelligent Construction Engineering Information Platform",
  bioZh: [
    "高岩教授是一位横跨学术界与专业实践领域的学者和建筑师。作为中国计算性建筑设计研究领域的开拓者，他已成为该领域的主要领军学者之一。他的专业特长在于将数据驱动的数字化设计与材料导向的实体建造相融合，推动建筑解决方案在超高密度城市环境中兼顾可量化的性能与非物质的社会文化价值。",
    "他的研究与设计实践聚焦于高度复杂的城市项目，致力于实现社会经济与环境可持续性的平衡。他的工作以\"深度设计，同理建筑\"的理论发展为根基——这一博士论文成果深深植根于东方哲学传统。他的学术领导力还体现在重要的策展贡献中，包括2012年伦敦\"当代中国建筑展\"、2014年威尼斯双年展中国馆\"相生共生\"主题展陈设计，以及2021年深港城市\\建筑双城双年展（坪山）分展场\"不插电\"的联合策展。",
    "他担任中国数字建筑设计专业委员会创会理事，并自2010年起担任英国建筑联盟学院（AA）中国访校项目主任。"
  ],
  bioEn: [
    "Prof. Gao Yan is a scholar and architect spanning academia and professional practice. As a pioneer of computational architectural design research in China, he has become one of the leading scholars in the field. His expertise lies in integrating data-driven digital design with material-oriented physical construction, advancing architectural solutions that balance quantifiable performance with intangible socio-cultural values in hyper-dense urban environments.",
    "His work is grounded in the theory of \"Deep Design, Empathetic Architecture\" — a doctoral research outcome deeply rooted in Eastern philosophical traditions. He is a founding council member of the China Digital Architectural Design Professional Committee, and has served as Director of the AA China Visiting School since 2010."
  ],
  recruiting: ""
},
{
  nameZh: "姜玉熙", nameEn: "JIANG Yuxi",
  role: "教师", roleEn: "Faculty",
  roleLabelZh: "实验室创始人", roleLabelEn: "Founder, TiDE Lab",
  titleZh: "", titleEn: "",
  affiliationZh: "", affiliationEn: "",
  email: "",
  homepage: "",
  office: "",
  /* 照片来源：成员信息/姜玉熙/姜玉熙个人照片.png（正式肖像，正方形，居中裁 3:4） */
  photo: "assets/img/members/jiang-yuxi.jpg",
  keywords: [],
  focusZh: "",
  focusEn: "",
  bioZh: [
    "姜玉熙是 TIDE Lab 创始人兼副主任、AA 清华访校副主任、NEXUS 创始人。"
  ],
  bioEn: [
    "Jade Jiang is Co-Founder and Deputy Director of TiDE Lab, Deputy Director of the AA China Visiting School, and Founder of NEXUS."
  ],
  researchAreas: [],
  education: [],
  positions: [],
  appointments: [],
  courses: [],
  honors: [],
  patents: [],
  recruiting: ""
}
];

/* 高岩的别名引用：保持既有页面（people/index 等）对 TIDE_ADVISOR 的引用不破坏 */
window.TIDE_ADVISOR = window.TIDE_LEADERS[0];

/* 学生与工程师。role: phd / master / engineer */
window.TIDE_MEMBERS = [
  /* ===== 博士生 ===== */
  {
    id: "lei-weining", group: "phd",
    nameZh: "雷卫宁", nameEn: "William LEI",
    titleZh: "", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "高岩",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    /* 伊朗籍成员：nameEn 采用本名语序（Given + Father-initial + Family，即 SAMA S. NASIRI），
     * 不套用中文成员的「姓全大写 + 名」倒装；nameZh 为其自填中文名「萨玛」。 */
    id: "sama-nasiri", group: "phd",
    nameZh: "萨玛", nameEn: "SAMA S. NASIRI",
    titleZh: "未来人居研究院博士研究生", titleEn: "PhD Student (Year 1), Institute for Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院未来人居研究院", affiliationEn: "Institute for Future Human Habitats, Tsinghua SIGS",
    email: "sa-m26@mails.tsinghua.edu.cn", homepage: "", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "2030", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/sama-nasiri.jpg",
    keywords: ["参数化与生成式设计", "计算性设计与仿真", "材料与结构创新", "数字建造", "拉胀超材料"],
    focusZh: "基于穆卡纳斯几何的三维拉胀超材料计算设计与性能研究。",
    focusEn: "Computational design of 3D auxetic metamaterials derived from Islamic muqarnas geometry for impact energy absorption.",
    bioZh: "萨玛，清华大学深圳国际研究生院未来人居研究院博士研究生，师从高岩教授。硕士毕业于西南大学风景园林专业，学位论文聚焦萨法维时期波斯水景园林，运用几何光学、热湿环境分析与分形维数等方法，解析传统景观的空间与环境机制。博士阶段致力于将伊斯兰建筑中穆卡纳斯（钟乳拱）的三维几何转化为具有负泊松比特性的拉胀超材料，结合 Grasshopper/Python 参数化生成、有限元分析与金属增材制造，探索其在抗冲击与能量吸收领域的应用。长期使用 Rhino/Grasshopper 进行计算性设计，并参与深圳高密度产业空间更新相关科研项目。通晓波斯语、中文与英文。",
    bioEn: "SAMA is a PhD student at the Institute for Future Human Habitats, Tsinghua Shenzhen International Graduate School, supervised by Prof. Gao Yan. She holds an MA in Landscape Architecture from Southwest University, where her thesis examined Safavid-era Persian water landscapes through geometric-optical, psychrometric, and fractal analysis. Her doctoral research translates the three-dimensional geometry of muqarnas, the tiered vaulting of Islamic architecture, into auxetic metamaterials with a negative Poisson's ratio. It combines parametric generation in Grasshopper/Python, finite element analysis, and metal additive manufacturing to explore applications in impact protection and energy absorption. She also contributes to a research project on high-density industrial space renewal in Shenzhen. She works fluently in Persian, Chinese, and English.",
    education: [
      "博士（在读）｜建筑学｜清华大学深圳国际研究生院｜2026–至今",
      "硕士｜风景园林学｜西南大学｜2023–2026"
    ],
    honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "tang-haoran", group: "phd",
    nameZh: "唐浩然", nameEn: "TANG Haoran",
    titleZh: "未来人居学院博士生", titleEn: "PhD Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "", homepage: "", github: "https://github.com/haorantang1999", scholar: "", orcid: "",
    joined: "2025", expected: "", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/tang-haoran.jpg",
    keywords: ["城市热环境", "城市绿地与健康", "机器学习与大语言模型", "空间数据分析", "数字孪生"],
    focusZh: "城市热环境与绿地健康的非线性机制，机器学习与大语言模型驱动的空间分析。",
    focusEn: "Nonlinear mechanisms of urban thermal environments and green-space health, with machine-learning and LLM-driven spatial analysis.",
    bioZh: "研究技能涵盖大语言模型、机器学习、中大尺度空间数据分析、深度学习、数据挖掘与环境心理学实验。工具链：Python、R、GEE、QGIS、ArcGIS Pro、Unity、ENVI-met、Grasshopper 等。雅思 7.0。",
    bioEn: "His research spans large language models, machine learning, meso- and large-scale spatial data analysis, deep learning, data mining and environmental psychology experiments. Toolchain: Python, R, GEE, QGIS, ArcGIS Pro, Unity, ENVI-met, Grasshopper. IELTS 7.0.",
    education: [
      "园境建筑硕士（MLA）｜园境建筑｜香港大学（中国香港）｜2022.09–2024.12",
      "建筑学学士｜建筑学｜中国矿业大学｜2017.09–2022.06"
    ],
    honors: ["毕业论文 A 级并收录于 2024 MLA 年度文集", "2020 发展中国家建筑设计展览铜奖/卓越奖"],
    appointments: [],
    papers: [
      "**TANG Haoran**（第一作者）等｜粤港澳大湾区11个城市热环境差异：非线性关系与基于城市绿化的解决方案｜Sustainable Cities and Society（JCR Q1, IF 12.0，已发表）｜2024.10–2025.10",
      "**TANG Haoran**（共同第一作者）等｜城市绿地对半干旱地区不同肥胖状态老年人体力活动促进的非线性影响：中国兰州案例研究｜GeoHealth（JCR Q1, IF 4.5，已发表）｜2024.10–2025.05",
      "**TANG Haoran**（第一作者）等｜空间配置对中大型城市公园降温能力的阈值效应：以深圳为例｜Trees, Forests and People（JCR Q2, IF 2.1，大修）｜2024.12–至今（另于香港第一届国际遥感智能制图 RSIM 研讨会作海报汇报）",
      "**TANG Haoran**（第一作者）等｜迈向更绿色、更凉爽的社区：结合当地气候区域和堆叠机器学习方法的室外热暴露评估｜Building Simulation（JCR Q1, IF 5.9，审稿中）｜2024.09–至今",
      "**TANG Haoran**（第四作者）等｜崇高与普通自然对心理和精神健康的多层次视觉影响：使用 SAM 大模型的研究｜Computers in Human Behavior（JCR Q1, IF 9.0，审稿中）｜2023.10–至今",
      "**TANG Haoran**（第五作者）等｜产业政策对新能源汽车企业技术创新的影响：基于政策文本的 LDA 模型分析及技术进步对策｜中文核心期刊（C 类）｜2024.05"
    ],
    projects: [
      "高密度城市下蓝绿空间对居民健康影响（深圳高等教育稳定支持计划）｜研究助理（全职）· 哈尔滨工业大学（深圳）未来栖息地实验室｜主导全过程：方法设计、实验、数据收集与可视化、初稿撰写｜2024.07–至今",
      "建筑设计专题 I（高岩教授）· 清华深圳国际研究生院｜研究助理：地理空间数据、三维重建与数字孪生技术支持；城市多源数据分析与 LLM 在智能建造中的探索｜2025.10–至今",
      "城市环境与人类健康实验室（姜斌教授）· 香港大学｜研究助理（兼职）：研究提案、实地数据采集与预实验、VR 实验设计与实施、街景与心理生理数据采集｜2022.10–2023.09",
      "太阳能十项全能竞赛（CUMT & AGH & HSP 团队）｜核心成员：方案设计、标识与旗帜设计、中期路演与宣传运营｜2020.12–2021.10",
      "徐州奎东村城中村改造（主导）｜现场调研、方案与图纸设计（获 2020 年发展中国家建筑设计展览卓越奖）｜2021.03"
    ],
    patents: [], portfolio: "",
    awards: [
      "金熊猫天府创意设计新人奖｜第八届成都创意设计周（国家级）｜2021.11",
      "银奖｜环保艺术创作大赛（国家级）｜2021.08",
      "特别奖｜第二届全国大学生知识竞赛（国家级）｜2021.02",
      "优秀奖｜第二届全国大学生创新英语综合能力竞赛预赛（公开组，国家级）｜2020.10"
    ]
  },
{
    id: "cao-siqi", group: "master",
    nameZh: "曹思琪", nameEn: "CAO Siqi",
    titleZh: "未来人居学院硕士生", titleEn: "Master's Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "", homepage: "", scholar: "", orcid: "",
    joined: "2026", expected: "2028", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/cao-siqi.jpg",
    keywords: ["空间原型", "知识图谱", "生成式设计"],
    focusZh: "基于知识图谱与空间句法的建筑平面生成方法研究",
    focusEn: "Research on Architectural Floor Plan Generation Based on Knowledge Graphs and Space Syntax",
    bioZh: "曹思琪，清华大学深圳国际研究生院未来人居硕士研究生，研究聚焦建筑空间原型、知识图谱与生成式设计。主要探索传统建筑空间规律的计算化表达与当代转译，运用空间句法提取空间基因与生成规则，结合知识图谱、GraphRAG 与大语言模型开展空间知识检索与推理，并借助 Grasshopper 实现参数化生成。",
    bioEn: "Cao Siqi is a master's student in Future Human Habitat at Tsinghua University, Shenzhen International Graduate School. Her research focuses on architectural spatial prototypes, knowledge graphs, and generative design. She explores the computational representation and contemporary translation of traditional architectural patterns, using Space Syntax to extract spatial genotypes and generative rules. She integrates knowledge graphs, GraphRAG, and LLMs for spatial knowledge retrieval and reasoning, and uses Grasshopper for parametric generation.",
    education: ["硕士（在读）｜未来人居｜清华大学深圳国际研究生院｜2026–2028"],
    honors: ["国家奖学金（2023）", "中国人居环境设计学年奖 建筑设计类 银奖（2024）"],
    appointments: [], papers: [], projects: [], patents: [], portfolio: "",
    awards: [
      "中国人居环境设计学年奖 建筑设计类 银奖｜2024",
      "YAC VOLCANO HORSEMEN RETREAT Finalist｜YAC – Young Architects Competitions｜2025"
    ]
  },
{
    id: "chen-xuanxiang", group: "master",
    nameZh: "陈宣湘", nameEn: "CHEN Xuanxiang",
    titleZh: "", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "高岩",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "chen-shilin", group: "master",
    nameZh: "陈诗霖", nameEn: "CHEN Shilin",
    titleZh: "未来人居学院硕士生", titleEn: "Master's Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "1176881463@qq.com", homepage: "", scholar: "", orcid: "",
    joined: "2026", expected: "2028", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/chen-shilin.jpg",
    keywords: ["数字建造", "机器人建造", "参数化与生成式设计"],
    focusZh: "聚焦参数化与生成式设计，探索机器人驱动的数字建造方法与应用",
    focusEn: "Exploring parametric and generative design through robotic fabrication and digital construction technologies",
    bioZh: "我是陈诗霖，对建筑设计怀有浓厚的热情。在建筑学学习的历程中，我始终关注设计、技术与城市生活之间的交汇，并对如何通过设计创造更加包容、环保且宜居的生活空间充满兴趣。我的学习与实践主要围绕绿色建筑、城市更新与数字化设计展开，并尝试运用 Rhino、AI 辅助设计软件以及数据分析平台等工具，将设计构想转化为具体、可落地的解决方案。我相信，建筑不仅仅是关于建筑物本身，更重要的是建立并滋养人与环境之间的联系。",
    bioEn: "I'm Chen Shilin, deeply passionate about architecture. Drawn to the intersection of design, technology, and urban life, I've long been fascinated by how we can shape more inclusive, eco-friendly living spaces. My work explores green building, urban regeneration, and digital design—using tools like Rhino, AI-assisted design software, and data analysis platforms to translate ideas into tangible solutions. I believe architecture is not just about buildings, but about nurturing connections between people and their environments.",
    education: ["建筑学学士｜建筑学｜北京交通大学｜2021–2026"],
    honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "",
    awards: [
      "全国绿色建筑设计竞赛三等奖｜全国绿色建筑设计竞赛委员会｜2025",
      "第七届高等院校绿色建筑技能大赛复赛优秀作品奖｜中国城市科学研究会绿色建筑与节能专业委员会｜2025"
    ]
  },
{
    id: "chen-xiling", group: "master",
    nameZh: "陈犀灵", nameEn: "CHEN Xiling",
    titleZh: "建筑专业硕士研究生（在读）", titleEn: "Master's Student in Architecture",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua Shenzhen International Graduate School",
    email: "chenxl26@mails.tsinghua.edu.cn", homepage: "", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "2029", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/chen-xiling.jpg",
    keywords: ["人工智能辅助建筑设计", "建筑规范智能审查", "参数化与生成式设计", "城市大数据与人工智能", "沉浸式媒介与交互"],
    focusZh: "面向建筑设计与施工图审查的大模型智能体及其可验证评测。",
    focusEn: "LLM agents for architectural design and code-compliance checking, with verifiable evaluation and human–AI collaboration.",
    bioZh: "陈犀灵，清华大学深圳国际研究生院建筑专业硕士研究生（2026 年入学，导师高岩），本科毕业于重庆交通大学建筑学专业。研究兴趣为大模型与智能体在建筑设计和施工图审查中的应用，关注如何让 AI 的判断可溯源、可验证并与人协同。曾独立主导 ArchCheck 建筑施工图 AI 审查系统：把 1099 页规范扫描件结构化为 3073 条可判定规则，规则引擎硬算数值、大模型只做定性推理，并以多模型交叉标注与仲裁建立共识金标；主导 AI Graphic 设计出图智能体与素材库，用真实甲方指令回放做机器指标与多评委双轨评测。本科期间参与“戏影”乡村戏曲数字人项目，获“互联网+”大赛重庆赛区铜奖。",
    bioEn: "CHEN Xiling is a master's student in Architecture at Tsinghua Shenzhen International Graduate School (entering 2026), supervised by GAO Yan. She holds a Bachelor of Architecture from Chongqing Jiaotong University. Her research applies large language models and agents to architectural design and construction-drawing review, focusing on making AI judgments traceable, verifiable and human-collaborative. She led ArchCheck, an AI system that checks construction drawings against building codes: it structured 1,099 pages of scanned regulations into 3,073 computable rules, paired a rule engine for numeric checks with LLM-based qualitative reasoning, and built consensus gold labels through multi-model annotation and arbitration. She also led AI Graphic, a design-generation agent with a reusable asset library, evaluated by replaying real client briefs under machine metrics and multiple AI judges. As an undergraduate she co-developed Xiying, a rural-opera digital-human project.",
    education: [
      "硕士（在读）｜建筑｜清华大学深圳国际研究生院｜2026–2028",
      "学士｜建筑学｜重庆交通大学｜2021–2026"
    ],
    honors: [
      "中国国际大学生创新大赛（“互联网+”），重庆赛区铜奖（“戏影”乡村戏曲数字人项目）",
      "校级三好学生、校级优秀学生干部｜重庆交通大学"
    ],
    appointments: [],
    papers: [],
    projects: [
      "ArchCheck —— AI 建筑施工图审查系统｜自主研究项目｜项目负责人（独立主导，0→1）｜2026",
      "AI Graphic 设计出图 Agent 与 design-assets 素材库｜自主研究项目｜项目负责人（独立主导，0→1）｜2026",
      "数字灵山 —— 以数字技术赋能乡村治理现代化｜中国国际大学生创新大赛（“互联网+”）校赛 · 一等奖｜项目负责人｜2023",
      "戏影 —— 虚拟数字人影响下的乡村戏曲发展新模式｜中国国际大学生创新大赛（“互联网+”）重庆赛区 · 铜奖｜核心成员：用户调研与产品设计｜2022",
      "IP 形象“戏曲小粉龙”文创摆件｜大学生创新创业训练计划｜团队成员（5 人合作）｜2024"
    ],
    patents: ["外观设计｜IP 形象“戏曲小粉龙”摆件｜ZL 2023 3 0825957.X｜2024.07.05"],
    portfolio: "",
    awards: [
      "中国国际大学生创新大赛（“互联网+”）重庆赛区铜奖｜大赛重庆赛区组委会｜2023",
      "中国国际大学生创新大赛（“互联网+”）校赛一等奖｜重庆交通大学｜2024",
      "校级三好学生｜重庆交通大学｜2022",
      "校级优秀学生干部｜重庆交通大学｜2024",
      "优秀奖学金（二等 / 三等）｜重庆交通大学｜2022–2025"
    ]
  },
{
    /* 俄罗斯籍成员：nameEn 按本人语序原样录入（Given "Anna" + Family "DOVGALIUK"），不倒装；
     * AIID = 清华SIGS「AI+ 创新设计」硕士项目（2 年制、全英文授课）。 */
    id: "anna-dovgaliuk", group: "master",
    nameZh: "安娜", nameEn: "Anna DOVGALIUK",
    titleZh: "AI+ 创新设计（AIID）硕士生", titleEn: "Master's Student, AI+ Innovation Design (AIID)",
    affiliationZh: "清华大学深圳国际研究生院 · AI+ 创新设计（AIID）硕士项目", affiliationEn: "Tsinghua Shenzhen International Graduate School (SIGS) · AI+ Innovation Design (AIID)",
    email: "anliona.6325@gmail.com", homepage: "https://anliona.com", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "2028", status: "在组", supervisor: "高岩",
    /* 照片来源：成员信息/Anne/Anne个人照片.jpg（正式证件照，3:4，已裁切至 900×1200） */
    photo: "assets/img/members/anna-dovgaliuk.jpg",
    keywords: ["计算机视觉", "自主无人机", "交互设计", "媒体艺术"],
    focusZh: "将前沿技术融入当代艺术实践。",
    focusEn: "Integrating emerging technologies into contemporary artistic practice.",
    bioZh: "Anna Dovgaliuk 来自俄罗斯，现为清华大学深圳国际研究生院（SIGS）AIID 项目的硕士研究生。她于 2020 至 2024 年在 MISIS 攻读设计应用信息学本科课程，并于 2024 至 2026 年学习技术艺术硕士课程。她的研究兴趣包括计算机视觉、自主无人机、交互设计和媒体艺术。目前，她致力于探索如何将自主无人机与计算机视觉融入当代艺术实践，创造连接人与数字系统及周围环境的交互体验。",
    bioEn: "Anna Dovgaliuk is originally from Russia and is currently a master's student in AIID at Tsinghua Shenzhen International Graduate School (SIGS). She studied Applied Informatics in Design at MISIS at the bachelor's level from 2020 to 2024 and Technological Art at the master's level from 2024 to 2026. Her research interests include computer vision, autonomous drones, interaction design, and media art. Her current work explores how autonomous drones and computer vision can be integrated into contemporary artistic practice to create interactive experiences connecting people, digital systems, and the surrounding environment.",
    education: [
      "硕士（在读）｜应用信息学 · 人工智能与交互设计（AIID）｜清华大学深圳国际研究生院｜2026–2028",
      "硕士｜应用信息学 · 技术艺术（Technological Art）｜俄罗斯国立研究型技术大学 MISIS｜2024–2026",
      "学士｜应用信息学（设计方向）｜俄罗斯国立研究型技术大学 MISIS｜2020–2024"
    ],
    honors: [
      "参展「In-Between Generations」展览（中国西安）｜2025",
      "获奖「Design Workshop」竞赛（DAMN MISIS 团队，「Lomonosov Cluster」赛道）｜2023"
    ],
    appointments: [],
    papers: [],
    projects: [
      "5th Young Scientists Congress｜Roscongress Foundation｜平面设计（活动物料）｜2025",
      "Forum Time of Digital｜SP Group｜艺术家｜2025",
      "Eastern Economic Forum (EEF)｜Roscongress Foundation｜程序开发｜2025"
    ],
    patents: [], portfolio: "", awards: []
  },
{
    id: "hao-renhan", group: "master",
    nameZh: "郝任涵", nameEn: "HAO Renhan",
    titleZh: "未来人居学院硕士生", titleEn: "Master's Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院未来人居研究院", affiliationEn: "Institute of Future Human Habitats, Tsinghua SIGS",
    email: "", homepage: "", scholar: "", orcid: "",
    joined: "2026", expected: "", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/hao-renhan.jpg",
    keywords: ["数字孪生", "BIM", "AI Agent", "建筑数字化"],
    focusZh: "面向建筑数字化，利用 AI Agent 完成 BIM 与工程施工图的智能转化",
    focusEn: "Towards building digitalization, leveraging AI agents to achieve intelligent conversion between BIM and construction drawings",
    bioZh: "建筑学硕士，主攻建筑数字化、BIM 与数字孪生方向。研究建筑图纸智能解析、AI 辅助生成与自动化工作流，探索 AI 在建筑工程场景的落地应用。熟练使用 Revit、Rhino 等建模软件，掌握 Python、MySQL，可完成图纸数据处理、模型信息提取与数字化原型开发。研究立足工程实际，面向建筑设计、施工、造价业务，依托数字化工具降低行业重复劳动，提升工程交付效率。",
    bioEn: "Specializing in architectural digitalization, BIM, and digital twins, his research focuses on intelligent parsing of architectural drawings, AI-assisted generation, and automated workflows, exploring practical applications of AI in construction engineering scenarios. Proficient in Revit and Rhino, and skilled in Python and MySQL. Grounded in real-world engineering practices, his work targets architectural design, construction, and cost estimation, leveraging digital tools to reduce repetitive tasks and enhance project delivery efficiency.",
    education: ["风景园林工学学士｜风景园林梁希实验班｜北京林业大学园林学院｜2020.09–2026.06"],
    honors: [], appointments: [],
    papers: [],
    projects: ["北京市昌平区水屯公园总体设计（方案三）｜本科毕业设计｜作者｜2025.10–2026.06"],
    patents: [], portfolio: "",
    awards: ["北京林业大学二等奖学金｜2022"]
  },
{
    id: "liang-lie", group: "master",
    nameZh: "梁烈", nameEn: "LEUNG Lit (Felix)",
    titleZh: "未来人居学院硕士生", titleEn: "Master's Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院未来人居研究院", affiliationEn: "Institute of Future Human Habitats, Tsinghua SIGS",
    email: "", homepage: "", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "2027", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/liang-lie.jpg",
    keywords: ["建筑学"], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "wen-yan", group: "master",
    nameZh: "文燕", nameEn: "Parastoo",
    titleZh: "", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "高岩",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "ren-yuxin", group: "master",
    nameZh: "任宇新", nameEn: "REN Yuxin",
    titleZh: "未来人居学院硕士生（在读）", titleEn: "Master's Student in Architecture (in progress)",
    affiliationZh: "清华大学深圳国际研究生院未来人居研究院", affiliationEn: "Institute of Future Human Habitats, Tsinghua SIGS",
    email: "", homepage: "https://yuxinren.com", github: "https://github.com/renyuxin6666-tech", scholar: "", orcid: "",
    joined: "", expected: "2027", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/ren-yuxin.jpg",
    keywords: ["AI辅助设计与智能体", "计算性设计与仿真", "机器人建造", "可逆模块化建造", "创作过程知识组织"],
    focusZh: "探索 AI 辅助设计、创作过程知识组织与机器人建造。",
    focusEn: "Exploring AI-assisted design, creative process knowledge organization and robotic fabrication.",
    bioZh: "任宇新，清华大学深圳国际研究生院未来人居研究院建筑学硕士在读，TiDE Lab 成员，本科毕业于太原理工大学。研究与实践聚焦 AI 辅助设计、创作过程知识组织、机器人建造及可逆模块化系统。开发数字引擎创程图核心原型，主导 AMAS 可逆模块化建造系统，开展机器人装配与多智能体仿真实践，结合交互原型、计算仿真和实体样机进行验证。具有工业工程 BIM 建模、喷涂机器人设计与仿真实践经验。",
    bioEn: "REN Yuxin is a master's student in architecture at the Institute of Future Human Habitats, Tsinghua Shenzhen International Graduate School, and a TiDE Lab member. He holds a Bachelor of Architecture from Taiyuan University of Technology. His research and practice focus on AI-assisted design, creative process knowledge organization, robotic fabrication, and reversible modular systems. His projects include the Digital Engine Creation Graph prototype, the AMAS system led by him, robotic assembly, and multi-agent simulation, combining interactive prototypes, computational simulations, and physical validation. His experience also includes industrial BIM modeling and coating robot design and simulation.",
    education: [
      "建筑学硕士（在读）｜建筑学｜清华大学｜2025–2027（预计）",
      "建筑学学士｜建筑学｜太原理工大学｜2019–2024"
    ],
    honors: ["全国绿色建筑设计竞赛三等奖"],
    appointments: [],
    papers: [
      /* 第一作者论文（CDRF 2026，已录用待发表）题目尚未定稿，2026-09-30 按负责人指示暂不上站，拿到题目后补入此处并同步 outputs.js */
      "Arts Cheung、**REN Yuxin**、ZHAO Liuxin 等｜LLM-Driven Generative Design for Climate-Adaptive Net-Zero Buildings｜BAS 2026 · The International Conference of Building and Simulation（第二作者，会议海报已展示）｜2026"
    ],
    projects: [
      "数字引擎 · 创程图 Codex 插件与开放创作社区｜核心原型开发；图谱查看与 MCP 检索｜2026–至今",
      "Mechanical Lattice｜机器人模块装配｜模块设计与机械臂控制程序开发｜2026",
      "AMAS｜可逆模块化建造系统｜项目主导：构件与接口设计、仿真及原型验证｜2025–2026",
      "TOIO Agents｜多智能体仿真与实体控制｜多智能体训练与实体控制系统搭建｜2025–2026"
    ],
    patents: ["实用新型｜（名称待补充）｜ZL202421851520.9｜（授权年份待补充）"],
    awards: ["全国绿色建筑设计竞赛三等奖｜全国绿色建筑设计竞赛委员会｜（年份待补充）"],
    /* 个人网站精选视觉成果：图片已本地化（离线可用），每项均可回源至个人网站对应页面 */
    portfolio: {
      siteUrl: "https://yuxinren.com",
      siteLabelZh: "任宇新个人网站",
      siteLabelEn: "PERSONAL SITE",
      introZh: "以下为任宇新个人网站（yuxinren.com）的精选视觉成果节选，图片经授权镜像至本地；完整项目请访问其个人网站。",
      introEn: "Selected visual works from REN Yuxin's personal site (yuxinren.com), mirrored locally. Full projects are available on the site.",
      /* 预留：如需直嵌对方站点，把 embed 置为 true 并确认站点负责人书面同意（详见 README 维护说明） */
      embed: false,
      embedUrl: "https://yuxinren.com/work/",
      gallery: [
        { src: "assets/img/members/ren-yuxin/amas-cover.webp",
          captionZh: "AMAS：由 Hat 单胞体导出的干式自锁建造系统，经多尺度实体样机验证（图源：任宇新个人网站 yuxinren.com）",
          href: "https://yuxinren.com/work/" },
        { src: "assets/img/members/ren-yuxin/mechanical-lattice.webp",
          captionZh: "Mechanical Lattice：可逆体素模块系统，把计算目标接到约束感知的机器人装配（图源：任宇新个人网站 yuxinren.com）",
          href: "https://yuxinren.com/work/" },
        { src: "assets/img/members/ren-yuxin/toio-agents.webp",
          captionZh: "TOIO Agents：Unity 多智能体训练、俯视定位、BLE 控制与桌面实体机器人的闭环（图源：任宇新个人网站 yuxinren.com）",
          href: "https://yuxinren.com/work/" },
        { src: "assets/img/members/ren-yuxin/context-handoff-manager.png",
          captionZh: "Context Handoff Manager：隐私保护的上下文监控与可审计任务交接（开源技能，图源：任宇新个人网站 yuxinren.com）",
          href: "https://github.com/renyuxin6666-tech/context-handoff-manager" },
        { src: "assets/img/members/ren-yuxin/huaqiangbei-dfma.webp",
          captionZh: "华强北 DfMA：面向高密度电子街区的装配式设计（DfMA）研究（图源：任宇新个人网站 yuxinren.com）",
          href: "https://yuxinren.com/work/" },
        { src: "assets/img/members/ren-yuxin/portfolio-spread-04.webp",
          captionZh: "建筑作品集选页：历史街区的几何与氛围向当代空间序列的转译（图源：任宇新个人网站 yuxinren.com）",
          href: "https://yuxinren.com/work/" }
      ]
    }
  },
{
    id: "zhang-chuyi", group: "master",
    nameZh: "张础艺", nameEn: "Art ZHANG",
    titleZh: "", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "高岩",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "he-ziyi", group: "engineer",
    nameZh: "何梓艺", nameEn: "HE Ziyi",
    titleZh: "研究工程师", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "zhao-tianle", group: "engineer",
    nameZh: "赵天乐", nameEn: "ZHAO Tianle",
    titleZh: "研究工程师", titleEn: "Research Engineer",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "ztonyl2003@gmail.com", homepage: "", scholar: "", orcid: "",
    joined: "2026", expected: "", status: "在组", supervisor: "",
    photo: "assets/img/members/zhao-tianle.jpg",
    keywords: ["机器人建造", "材料与结构创新", "沉浸式媒介与交互"],
    focusZh: "聚焦材料智能、计算设计与机器人建造，探索面向非标准与循环材料的自适应建造方法。",
    focusEn: "Research on material intelligence, computational design, and robotic fabrication, with a focus on adaptive construction using non-standard and circular materials.",
    bioZh: "赵天乐的研究围绕材料、机器、环境与人的关系展开，关注现实世界中不规则、动态且难以被标准化的对象与过程。通过数字制造与原型实践，探索复杂的物理条件如何被转化为新的制造与交互系统。他的实践从非标准材料的数字化研究与机器人加工，延伸到可持续材料3D打印、人机交互与复杂行为模拟，也涉及智能座舱等跨领域项目。长期在不同国家城市的学习，也让他不断从不同文化、技术与环境中重新理解设计问题。相比聚焦于某一种固定技术，他更关心材料、机器与人如何相互作用、彼此反馈，并在这种关系中共同塑造新的可能性。对他而言，研究不仅是解决问题，也是一种持续观察世界、建立联系的方式。",
    bioEn: "Tianle Zhao's research explores the relationships between materials, machines, environments, and people, with a focus on irregular, dynamic, and non-standardized conditions in the physical world. Through digital fabrication and prototyping, he investigates how complex physical conditions can be translated into new systems of making and interaction. His work spans the digital study and robotic fabrication of non-standard materials, sustainable-material 3D printing, human–machine interaction, behavioral simulation, and intelligent cockpit design. Experiences studying across different countries and cities have also shaped the way he approaches design through diverse cultural, technological, and environmental contexts. Rather than focusing on a single technology, he is interested in how materials, machines, and people interact, respond to one another, and collectively shape new possibilities.",
    education: [
      "本科｜环境设计｜江南大学｜2021–2023",
      "本科｜前瞻计划实验班｜江南大学｜2023–2025",
      "研究生｜建筑设计｜香港大学｜2025–2026"
    ],
    honors: [
      "金奖｜国际遗传工程机器大赛（iGEM）｜美国麻省理工学院",
      "最佳实践奖｜BMW & 同济联合创新挑战赛｜同济大学、宝马亚洲技术中心"
    ],
    appointments: [],
    papers: [
      "**ZHAO Tianle**, YU Kaiho｜面向非标准木结构的数据驱动机器人建造框架：融合材料生态与计算装配｜数字设计与机器人建造国际会议（CDRF）｜2026"
    ],
    projects: [],
    patents: [], portfolio: "",
    awards: [
      "金奖｜国际遗传工程机器大赛（iGEM）｜美国麻省理工学院｜2023.12",
      "最佳实践奖｜BMW & 同济联合创新挑战赛（AIGC In-car Competition）｜同济大学、宝马亚洲技术中心｜2023.11",
      "二等奖｜未来设计师·全国高校数字艺术设计大赛（NCDA）｜工业和信息化部人才交流中心｜2024.05"
    ]
  },
{
    id: "zhao-liuxin", group: "engineer",
    nameZh: "赵柳鑫", nameEn: "ZHAO Liuxin",
    titleZh: "研究工程师", affiliationZh: "清华大学深圳国际研究生院", email: "",
    joined: "", expected: "", status: "在组", supervisor: "",
    photo: "", keywords: [], focusZh: "", focusEn: "", bioZh: "", bioEn: "",
    education: [], honors: [], appointments: [], papers: [], projects: [], patents: [], portfolio: "", awards: []
  },
{
    id: "ng-cheuk-hei", group: "collaborator", collab: true,
    nameZh: "吴卓熹", nameEn: "NG Cheuk Hei (Alfred)",
    titleZh: "设计学学术型硕士研究生（在读）", titleEn: "Academic Master's Student in Design",
    affiliationZh: "清华大学美术学院 · 信息艺术设计研究方向", affiliationEn: "Academy of Arts & Design, Tsinghua University — Information Art and Design",
    email: "", homepage: "", github: "", scholar: "", orcid: "",
    joined: "", expected: "2028", status: "编外合作 · 在读", supervisor: "徐迎庆",
    photo: "assets/img/members/ng-cheuk-hei.jpg",
    keywords: ["人工智能辅助设计", "人机交互", "具身智能", "情感计算", "多模态交互", "美学计算"],
    focusZh: "面向设计与创作的可控人机协作及具身交互研究。",
    focusEn: "Controllable human-AI collaboration and embodied interaction for design and creative practice.",
    noteZh: "编外合作伙伴：与 TiDE Lab 在 AI 辅助设计、人机交互与具身智能方向开展合作研究。",
    noteEn: "External collaborator: collaborating with TiDE Lab on AI-assisted design, human-computer interaction and embodied intelligence.",
    bioZh: "吴卓熹来自中国香港，现为清华大学美术学院设计学硕士研究生，研究方向为信息艺术与设计，导师为徐迎庆教授，本科毕业于华侨大学产品设计专业。研究兴趣涵盖人工智能辅助设计、人机交互、具身智能、情感计算与智能创作工具，关注人工智能如何支持可解释、可控的人机协作。他参与绘世（PaintPilot）过程感知数字绘画助手、人居数据采集、“知识森林”设计知识平台、可持续交互及机器人舞麒麟等研究与实践。作为绘世联合创始人兼架构工程师，负责技术架构与研发工作；曾在智谱AI总裁办参与战略及“Z计划”孵化工作。他亦参与清华FuRoc THMOS机器人足球团队，关注设计研究、工程实现与文化科技创新之间的联系。",
    bioEn: "NG Cheuk Hei (Alfred), from Hong Kong, China, is a master's student in Design at the Academy of Arts & Design, Tsinghua University, supervised by Professor Yingqing Xu. He holds a bachelor's degree in Product Design from Huaqiao University. His interests include AI-assisted design, human-computer interaction, embodied intelligence, affective computing, and creativity-support tools, with a focus on interpretable and controllable human-AI collaboration. His projects span PaintPilot, a process-aware digital painting copilot; human-habitat data collection; the Knowledge Forest platform; sustainable interaction; and robotic interpretations of the Hakka unicorn dance. As co-founder and architecture engineer of PaintPilot, he works on technical architecture and development. He previously contributed to strategy and the Z-Plan incubation program in Zhipu AI's President's Office. He also participates in Tsinghua's FuRoc THMOS robot soccer team, connecting design research, engineering practice, and cultural technology.",
    education: [
      "硕士（在读）｜设计学 · 信息艺术设计｜清华大学｜2025–2028（预计）",
      "艺术学学士｜产品设计｜华侨大学｜2021–2025"
    ],
    honors: [
      "2026 HICOOL 全球创业大赛二等奖（绘世项目）",
      "2026 RoboCup 中国赛类人组 Small 一等奖 / 季军（THMOS 队）",
      "2026 第六届 RoboCup 亚太天津邀请赛 Middle 组亚军（550W 队）",
      "第十三届清华大学「校长杯」挑战奖、文创专项奖（绘世项目，2026）"
    ],
    appointments: [
      "绘世（PaintPilot）联合创始人兼架构工程师（2026.04 起）",
      "智界融合联合创始人 / Co-founder, Zhijie Fusion",
      "中国香港（地区）商会（HKCCC）会员",
      "清华大学《计算思维与数字媒体》课程助教（2026 春季）"
    ],
    papers: [
      "Arts Cheung、YuXin Ren、LiuXin Zhao、Qi Wang、**NG Cheuk Hei (Alfred)** 等｜LLM-Driven Generative Design for Climate-Adaptive Net-Zero Buildings｜BAS 2026 · The International Conference of Building and Simulation（会议海报，已展示）｜2026"
    ],
    projects: [
      "绘世 PaintPilot：过程感知的专业数字绘画多模态 AI Copilot｜联合创始人兼架构工程师（技术架构与研发）｜2026.04–至今",
      "人居数据采集与机器共情引导的设计迭代｜付心仪团队｜毫米波雷达数据板块：传感器布置、同步与数据采集",
      "「知识森林」设计知识平台与 AI 协同学习界面｜徐迎庆教授团队相关课题｜知识可视化、导航机制与多模态学习交互探索",
      "Carbon Cruise：家庭垃圾处理的环境叙事反馈系统｜系统设计：结合传感、视觉语言模型与投影叙事反馈",
      "科技守护香港非遗：人形机器人舞麒麟｜研发与仿真探索，连接传统技艺、机器人控制与交互",
      "清华 FuRoc THMOS 机器人足球与具身智能竞赛实践｜团队成员：人形机器人足球与赛事验证"
    ],
    patents: [], portfolio: "",
    awards: [
      "HICOOL 全球创业大赛二等奖（绘世项目）｜北京海外高层次人才协会｜2026",
      "中国机器人大赛暨 RoboCup 机器人世界杯中国赛 类人组 Small 一等奖（季军）｜中国自动化学会、RoboCup 中国委员会｜2026",
      "第六届 RoboCup 亚太天津邀请赛 类人足球 Middle 组第二名（550W 队）｜天津市工信局、津南区人民政府、RCAP｜2026",
      "第十三届清华大学「校长杯」创新挑战赛 挑战奖、文创专项奖（绘世项目）｜清华大学｜2026",
      "石景山第七届创业大赛 青年创意赛道二等奖（绘世项目）｜北京市石景山区人力资源和社会保障局｜2026",
      "Architecture MasterPrize 学生建筑设计奖｜AMP Farmani Group｜2024",
      "Architecture MasterPrize 学生室内设计奖｜AMP Farmani Group｜2024",
      "FA 国际前沿设计大赛（中国赛区）铜奖｜法国设计业联合会｜2024",
      "第五届香港当代设计奖（HKCDA）铜奖｜香港美术设计协会、香港美术设计研究院｜2023",
      "GCROSS Creative Award 决赛铜奖｜英国工业设计委员会（IDC）｜2023",
      "北美应用艺术设计大赛银奖｜加拿大应用艺术与技术协会（SFAAAT）｜2022",
      "CodeQuest International Hackathon 全球二等奖｜CodeCombat｜2020"
    ]
  }
];

/* 分组元信息（渲染顺序与标题）
 * 2026-09-30 新增 collaborator（编外合作）分组。
 * descZh 留空 = 不在页面上显示分组说明行，四个分组当前均为空。 */
window.TIDE_MEMBER_GROUPS = [
  { key: "phd",          zh: "博士生",     en: "PhD Students",          descZh: "" },
  { key: "master",       zh: "硕士生",     en: "Master's Students",     descZh: "" },
  { key: "engineer",     zh: "研究工程师", en: "Research Engineers",    descZh: "" },
  { key: "collaborator", zh: "编外合作",   en: "External Collaborators", descZh: "" }
];
