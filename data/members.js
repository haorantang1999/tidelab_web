/* TiDE Lab 网站数据 · 成员
 * 字段结构依据《TiDE_Lab_成员信息收集表_v3.0_中英双语.docx》。
 * 新增成员：在对应分组（phd/master/engineer/alumni）追加对象；
 *   照片放入 assets/img/members/，photo 字段填文件名。
 * 未填写的字段保持 "" 或 []，页面显示"待补充"占位。
 */
/* 实验室负责人（LEADERSHIP）：两位负责人同等级并列展示（2026-10-26 起 title 定为实验室主任/副主任） */
window.TIDE_LEADERS = [
{
  nameZh: "高岩", nameEn: "GAO Yan",
  role: "教师", roleEn: "Faculty",
  roleLabelZh: "实验室主任", roleLabelEn: "Director, TiDE Lab",
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
  roleLabelZh: "实验室副主任", roleLabelEn: "Deputy Director, TiDE Lab",
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
    "姜玉熙是 TIDE Lab 实验室副主任、AA 清华访校副主任、NEXUS 创始人。"
  ],
  bioEn: [
    "Jade Jiang is Deputy Director of TiDE Lab, Deputy Director of the AA China Visiting School, and Founder of NEXUS."
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
    /* 中国香港成员（2026-10-29 录入）：英文名按本人填表用粤拼「LOUIE William」（雷=LOUIE，非普通话拼音 LEI），
     * 论文署名 Wai Ning Louie；中文名用繁体「雷衛寧」，个人字段保留繁体（繁体字专项处理，勿转简体）。
     * id 保持 lei-weining 不改（链接稳定）；姓氏排序键 = LOUIE，phd 组序 LOUIE < NASIRI < TANG 不变。 */
    id: "lei-weining", group: "phd",
    nameZh: "雷衛寧", nameEn: "LOUIE William",
    titleZh: "建築學博士生（在讀）", titleEn: "Ph.D. Candidate in Architecture",
    affiliationZh: "清華大學深圳國際研究生院 · 建築", affiliationEn: "Tsinghua SIGS · Architecture",
    /* 邮箱未标「可公开」，按隐私铁律留空（2026-10-29） */
    email: "", homepage: "", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "", status: "在組", supervisor: "高岩",
    /* 照片来源：成员信息/LOUIE_William/William个人信息.png（本人提交，裁 3:4 至 900×1200） */
    photo: "assets/img/members/lei-weining.jpg",
    keywords: ["災後重建", "代謝派建築", "文化遺產保育", "Robotic 3D", "2D to 3D"],
    focusZh: "人為或自然災害後之重建及保育與代謝派共生主義之重生關係。",
    focusEn: "The relationship between post-disaster (human-made or natural) reconstruction and conservation, and the resurgence of Metabolism symbolism.",
    bioZh: "雷衛寧（William Louie）現為清華大學深圳國際研究生院建築學博士生（2026 年入組，導師高岩），擁有香港大學建築學碩士（2015）與英國哈德斯菲爾德大學室內建築一級榮譽學士（2013）學位。曾於聖方濟各大學、香港大學專業進修學院與密德薩斯大學合辦課程、香港大學建築系及香港懲教署任教室內設計與多媒體課程。他致力於提供既充滿激情又細膩精巧的設計，涵蓋建築、室內設計、家具設計等領域，旨在滿足並超越客戶的期望。研究關注人為或自然災害後的重建與保育，以及代謝派建築共生主義的重生關係。",
    bioEn: "William Louie is a Ph.D. candidate in Architecture at Tsinghua Shenzhen International Graduate School (supervisor: Yan Gao). He holds a Master of Architecture from the University of Hong Kong (2015) and a BA (First-Class Honours) in Interior Architecture from the University of Huddersfield, UK (2013). He has taught interior design and multimedia programmes at St. Francis University, HKU SPACE with Middlesex University, the Department of Architecture at HKU, and the HK Correctional Services Department. He strives to provide passionate yet delicate designs covering architecture, interior design and furniture design, to meet and beyond clients' expectations. His research concerns the relationship between post-disaster (human-made or natural) reconstruction and conservation, and the resurgence of Metabolism symbolism.",
    education: [
      "博士（在讀）｜建築｜清華大學深圳國際研究生院｜2026–至今",
      "建築學碩士｜建築｜香港大學｜2015",
      "文學學士（一級榮譽）｜室內建築｜英國哈德斯菲爾德大學｜2013"
    ],
    honors: [
      "Architecture Association Asia Workshop Scholarship",
      "RIBA Sir Norman Foster Traveling Scholarship（提名 Nominated）"
    ],
    appointments: [
      "室內設計講師｜聖方濟各大學 St. Francis University",
      "室內設計講師｜香港大學專業進修學院 HKU SPACE × 密德薩斯大學 Middlesex University",
      "導師｜香港大學建築系",
      "多媒體課程講師｜香港懲教署 HK Correctional Services Dept."
    ],
    papers: [], projects: [], patents: [], portfolio: "",
    awards: [
      "Finalist – Best Student Interior Design｜Perspective｜2012",
      "2nd Runner Up – Cart Design｜West Kowloon Center｜2010",
      "Outstanding Achievement – Tsim Sha Tsui East Lighting｜2010",
      "1st Runner Up – Central Market Activation｜Perspective｜2010",
      "1st Runner Up – Bamboo Pavilion｜World Expo｜2010",
      "1st Runner Up – Best Architecture Student｜Perspective｜2010",
      "1st Runner Up – Street Furniture Design｜Eastern Harbor Front｜2010",
      "Outstanding Achievement – Mid Autumn Lantern Design｜HK Government｜2009",
      "Champion – North Point Harbour Conceptual Design｜North Point District｜2009",
      "Finalist – Best Student Interior Design｜Perspective｜2008"
    ]
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
    /* 2026-10-26 重构：依据 成员信息/唐浩然/唐浩然_实习简历.pdf（多模态大模型与空间智能方向）
     * 更新研究方向、简介、论文与项目；头像与 GitHub 保留。 */
    id: "tang-haoran", group: "phd",
    nameZh: "唐浩然", nameEn: "TANG Haoran",
    titleZh: "未来人居学院博士生", titleEn: "PhD Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "", homepage: "", github: "https://github.com/haorantang1999", scholar: "", orcid: "",
    joined: "2026", expected: "", status: "在组", supervisor: "高岩",
    photo: "assets/img/members/tang-haoran.jpg",
    keywords: ["多模态大模型与城市感知", "空间智能", "机器学习与深度学习", "数字孪生", "Agent 与 LLM 应用"],
    focusZh: "多模态大模型与城市感知、空间智能；垂类数据端到端迁移与可解释归因。",
    focusEn: "Multimodal LLMs for urban perception and spatial intelligence, with end-to-end domain adaptation and interpretable attribution.",
    bioZh: "唐浩然，清华大学深圳国际研究生院未来人居研究院博士研究生（多模态大模型与空间智能方向），师从高岩教授。研究聚焦多模态大模型在城市感知与空间智能中的应用：将众包感知指标经 LoRA 迁移至 Qwen3-VL-8B，对约 48.3 万张方向视图完成批量评分，形成 Data for AI → 微调 → 推理 → 评测闭环；构建 1,325 维景观格局指数矩阵与双视角 LightGBM 分类器，结合 SHAP 可解释归因，发现两视角 top-10 驱动因素零重叠。工程实践覆盖街区级热预警系统（Flutter + FastAPI + PostgreSQL/PostGIS，6 步无人值守管线）、AI 文旅合影一体机全栈系统、田野调查多源采集 App 与多智能体工作流编排，具备模型训练（SFT/LoRA）、服务端工程（FastAPI/Redis/Docker）与 AI Infra（vLLM）经验。雅思 7.0。",
    bioEn: "TANG Haoran is a PhD student at the Institute of Future Human Habitats, Tsinghua Shenzhen International Graduate School, supervised by Prof. Gao Yan, focusing on multimodal LLMs and spatial intelligence. His research transfers crowd-sensed perception metrics to Qwen3-VL-8B via LoRA and completes batch scoring of roughly 483,000 directional views, closing a Data-for-AI → fine-tuning → inference → evaluation loop. He builds a 1,325-dim landscape pattern matrix with dual-view LightGBM classifiers and SHAP attribution, finding zero overlap between the two views' top-10 driving factors. Engineering practice spans a block-level heat warning system (Flutter + FastAPI + PostgreSQL/PostGIS with a 6-step unattended pipeline), an AI tourism photo kiosk, a multi-source field collection app, and multi-agent workflow orchestration, with skills in model training (SFT/LoRA), backend engineering (FastAPI/Redis/Docker) and AI infra (vLLM). IELTS 7.0.",
    education: [
      "博士（在读）｜未来人居研究院（多模态大模型与城市感知、空间智能）｜清华大学深圳国际研究生院｜2026.08–至今",
      "园境建筑硕士（MLA）｜园境建筑｜香港大学（中国香港）｜2022.09–2024.12",
      "建筑学学士｜建筑学｜中国矿业大学｜2017.09–2022.06"
    ],
    honors: ["毕业论文 A 级并收录于 2024 MLA 年度文集", "2020 发展中国家建筑设计展览铜奖/卓越奖"],
    appointments: [],
    papers: [
      "**TANG Haoran**（第一作者）等｜粤港澳大湾区11个城市热环境差异：非线性关系与基于城市绿化的解决方案｜Sustainable Cities and Society（JCR Q1, IF 12.0，已发表）｜2024.10–2025.10",
      "**TANG Haoran**（共同第一作者）等｜城市绿地对半干旱地区不同肥胖状态老年人体力活动促进的非线性影响：中国兰州案例研究｜GeoHealth（JCR Q1, IF 4.5，已发表）｜2024.10–2025.05",
      "**TANG Haoran**（第一作者）等｜空间配置对中大型城市公园降温能力的阈值效应：以深圳为例｜Trees, Forests and People（JCR Q2, IF 2.1，已发表）｜2024.12–至今（另于香港第一届国际遥感智能制图 RSIM 研讨会作海报汇报）",
      "**TANG Haoran**（第一作者）等｜迈向更绿色、更凉爽的社区：结合当地气候区域和堆叠机器学习方法的室外热暴露评估｜Building Simulation（JCR Q1, IF 5.9，审稿中）｜2024.09–至今",
      "**TANG Haoran**（第五作者）等｜产业政策对新能源汽车企业技术创新的影响：基于政策文本的 LDA 模型分析及技术进步对策｜中文核心期刊（C 类）｜2024.05"
    ],
    projects: [
      "SZ-Cycle：Qwen3-VL-8B 垂类微调与城市级批量推理（SCI 共同一作 · R2 小修）｜负责数据管线/微调/推理/评测｜2025.12–至今",
      "RELOAD FOREST：街区级热预警系统（毕业论文产品化，论文 A 级 · MLA 文集收录）｜全栈 MVP 端到端跑通｜2026.10",
      "ML-Analyst：桌面 ML 工具的多租户生产化｜FastAPI + Redis/RQ + Docker Compose，38 个 API 端点，最佳 R²=0.8727｜2026",
      "AI 文旅合影一体机：景区打卡合影全栈系统｜PRD → FastAPI 全栈 → 55 条主链路 E2E 断言 → 部署脚本｜2026",
      "Reverse_Skill：三波 6 阶段多智能体（Multi-Agent）工作流｜自研 Agent 编排，上下文隔离 + JSON 传递 + 冗余容错｜2026",
      "看见与假设：街景视觉语言模型内部状态痕迹的空间化｜三模型跨架构对照（Qwen3-VL-8B / LLaVA-1.6-Mistral-7B / InternVL2-8B）｜2026",
      "高密度城市下蓝绿空间对居民健康影响（深圳高等教育稳定支持计划）｜研究助理（全职）· 哈尔滨工业大学（深圳）未来栖息地实验室｜2024.07–2026.09",
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
    /* 2026-10-26 更新：收集表补全研究方向/简介/教育/任职/获奖；头像取自 docx 内嵌图；
     * 个人作品集（陈宣湘_个人作品集.pdf，37 页）渲染封面与内页预览图至 assets/img/members/chen-xuanxiang/。 */
    id: "chen-xuanxiang", group: "master",
    nameZh: "陈宣湘", nameEn: "CHEN Xuanxiang",
    titleZh: "未来人居学院硕士生", titleEn: "Master's Student, Institute of Future Human Habitats",
    affiliationZh: "清华大学深圳国际研究生院未来人居", affiliationEn: "Institute of Future Human Habitats, Tsinghua SIGS",
    email: "", homepage: "", scholar: "", orcid: "",
    joined: "2026", expected: "2028", status: "在组", supervisor: "高岩",
    /* 照片来源：成员信息/陈宣湘/陈宣湘_TiDE_Lab_成员信息收集表_v3.0_中英双语(9).docx 内嵌 word/media/image1.jpeg */
    photo: "assets/img/members/chen-xuanxiang.jpg",
    keywords: ["AI辅助建筑生成设计", "机器人建造", "参数化与生成式设计"],
    focusZh: "研究 AI 辅助建筑生成设计，构建适配机器人建造的设计与校验工作流。",
    focusEn: "AI-assisted architectural generative design; building a design and verification workflow adapted for robotic construction.",
    bioZh: "拥有近六年建筑一线实践经验，曾任职于上海山水秀与 Playze 建筑事务所，深度参与近三十项建筑项目，涵盖文化公共建筑、教育建筑与城市更新等类型，覆盖从概念方案到施工配合的完整流程。长期关注参数化与算法在场地分析、空间推演与形体生成中的应用，并探索生成式 AI 介入设计流程的有效路径。当前研究兴趣集中于 AI 辅助建筑生成设计与机器人建造，希望构建从生成设计到建造校验的完整工作流，让数字技术真正服务于设计与建造本身。",
    bioEn: "With nearly six years of frontline architectural practice at Scenic Architecture Office and Playze in Shanghai, he has contributed to nearly thirty architectural projects spanning cultural and public buildings, educational buildings, and urban regeneration, covering the full process from concept design to construction documentation. He has long focused on the application of parametric and algorithmic methods in site analysis, spatial reasoning, and form generation, while exploring effective pathways for generative AI to enter the design process. His current research interests center on AI-assisted architectural generative design and robotic construction, aiming to build a complete workflow from generative design to construction verification, so that digital technology truly serves design and construction itself.",
    education: [
      "建筑学学士学位｜建筑学｜浙江工业大学｜2015–2020"
    ],
    honors: [],
    appointments: [
      "建筑师｜上海山水秀建筑设计顾问有限公司｜2020–2023",
      "建筑师｜Playze 建筑事务所（上海）｜2024–2026"
    ],
    papers: [], projects: [], patents: [],
    /* 个人作品集预览：源文件为 37 页 PDF（成员信息/陈宣湘/陈宣湘_个人作品集.pdf）。
     * 2026-10-28 起首图改为作品集首个效果图页（p04 左页「01 空中庙宇」主效果图），不再用封面展示 */
    portfolio: {
      siteUrl: "",
      siteLabelZh: "陈宣湘个人作品集",
      siteLabelEn: "PORTFOLIO",
      introZh: "以下为陈宣湘个人作品集（建筑设计 PORTFOLIO）的效果图页预览，作品集共 37 页，涵盖课程设计、工作阶段作品与其他作品。",
      introEn: "Rendering spreads from CHEN Xuanxiang's architectural design portfolio (37 pages), covering course designs, professional work and other works.",
      embed: false,
      embedUrl: "",
      gallery: [
        { src: "assets/img/members/chen-xuanxiang/portfolio-render-01.jpg",
          captionZh: "作品集首个效果图：01 空中庙宇 Sky Temple——类型学转译 · 城市垂直山径主效果图（图源：陈宣湘个人作品集）",
          href: "" },
        { src: "assets/img/members/chen-xuanxiang/portfolio-render-02.jpg",
          captionZh: "作品集效果图页：空中庙宇外观与藏书阁、法堂室内效果图（图源：陈宣湘个人作品集）",
          href: "" }
      ]
    },
    awards: [
      "一等奖、三等奖｜上海基础设施设计竞赛｜2024",
      "最佳人气奖｜南京立体环境社区单元设计竞赛｜2022",
      "二等奖｜「楠溪民居」建筑方案设计竞赛｜2021",
      "铜奖｜「筑·健未来」全国大学生建筑设计竞赛｜2020",
      "优秀作品奖｜全国高校「绿色建筑设计」技能大赛｜2019"
    ]
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
    /* 中国香港成员：本人填表英文名为粤拼「CHEUNG Arts」（姓 CHEUNG 全大写 + 名 Arts），
     * 论文署名 Arts Cheung；勿改成 ZHANG。CHEUNG 按姓氏字母序插在 CHEN×3 之后。 */
    id: "zhang-chuyi", group: "master",
    nameZh: "张础艺", nameEn: "CHEUNG Arts",
    titleZh: "硕士研究生（在读）", titleEn: "Master's Student",
    affiliationZh: "清华大学深圳国际研究生院 · 未来人居研究院", affiliationEn: "Institute for Future Human Habitats, Tsinghua SIGS",
    /* 邮箱公开意向待确认（收集表未标「可公开」），按隐私铁律留空（2026-10-28） */
    email: "", homepage: "", github: "", scholar: "", orcid: "0009-0009-6325-989X",
    joined: "2026", expected: "2027", status: "在组", supervisor: "高岩",
    /* 照片来源：成员信息/张础艺/TiDE成员信息_张础艺_20261027.docx 内嵌 word/media/arts_portrait.jpg（取自所附 CV） */
    photo: "assets/img/members/zhang-chuyi.jpg",
    keywords: ["参数化与生成式设计", "数字建造", "机器人建造", "循环与可逆建造", "人工智能辅助设计", "非遗数字化"],
    focusZh: "面向可逆建造与非遗传承的智能设计研究。",
    focusEn: "Intelligent design for reversible construction and cultural heritage preservation.",
    bioZh: "张础艺（Arts Cheung）来自中国香港，现为清华大学深圳国际研究生院未来人居研究院硕士研究生，导师为高岩老师，2026年加入TiDE Lab，预计2027年毕业。本科毕业于华侨大学产品设计专业，曾赴英国剑桥交流。研究兴趣涵盖生成式设计、数字建造、可逆装配与人工智能辅助设计，参与非周期单元循环建造、气候适应性净零建筑设计及人形机器人舞麒麟等研究实践。作品HOUSE A获2024年Architecture MasterPrize学生组建筑与室内设计奖。他也参与香港社区服务与非遗传承，关注设计、技术和社会实践之间的联系。",
    bioEn: "CHEUNG Arts is a master's student at the Institute for Future Human Habitats, Tsinghua Shenzhen International Graduate School, supervised by Yan Gao. From Hong Kong, China, he joined TiDE Lab in 2026 and expects to graduate in 2027. He holds a bachelor's degree in Product Design from Huaqiao University and attended an exchange programme in Cambridge. His interests include generative design, digital fabrication, reversible assembly, and AI-assisted design. His research and practice involve aperiodic modular construction, climate-adaptive net-zero buildings, and humanoid robot interpretations of the Hakka unicorn dance. His HOUSE A project received 2024 Architecture MasterPrize student awards in architecture and interior design. He also participates in community service and heritage preservation in Hong Kong, exploring connections among design, technology, and social practice.",
    education: [
      "硕士（在读）｜未来人居设计｜清华大学｜2025–2027（预计）",
      "学士｜产品设计｜华侨大学｜2021–2025",
      "交流课程｜大数据与金融科技｜英国剑桥｜2023.08"
    ],
    honors: [
      "2024 Architecture MasterPrize 学生建筑设计奖、学生室内设计奖（HOUSE A）",
      "2024 米兰设计大赛省级二等奖"
    ],
    appointments: [
      "西贡区胡雪莲议员助理（现任）",
      "叶傲冬立法会议员办事处助理（拟于 2026-11-05 起任职）",
      "东江纵队老战士联谊会会员",
      "青年民建联成员",
      "香港侨界社团联会青年委员会成员"
    ],
    papers: [
      "**Arts Cheung**, Shengyou Liu, Tianyi Sang, Junwei Gu, Jingmei Ma, Yuxin Jiang｜Potential of the Crypto Market in China（中国加密货币市场的潜力）｜Cambridge Explorations in Arts and Sciences 1(2)（已发表）｜2023",
      "**Arts Cheung**, YuXin Ren, LiuXin Zhao, Qi Wang, Cheuk Hei Alfred NG, Jun Yin, Haoran Tang, Xiang Deng, Jing Zhong, Wai Ning Louie, Jade Jiang, Yan Gao｜LLM-Driven Generative Design for Climate-Adaptive Net-Zero Buildings（面向气候适应性净零建筑的大语言模型驱动生成式设计）｜BAS 2026（海报已展示；会议论文已录取、待出版）｜2026",
      "Yuxin Ren, **Arts Cheung**, Yusong Hu, Qi Wang, Peter Búš, Yuxi Jiang, Jing Zhong, Xiang Deng, Wai Ning LOUIE, Yan Gao｜An Aperiodic Monotile Assembly System for Reversible and Open-Ended Circular Construction（面向可逆与开放式循环建造的非周期单元装配系统）｜CDRF 2026（已录取）｜2026"
    ],
    projects: [
      "非周期单元循环建造装配系统（AMAS）｜清华大学未来人居研究院｜研究团队成员；论文第二作者｜2026",
      "大语言模型驱动的气候适应性净零建筑生成式设计｜BAS 2026 研究成果｜论文第一作者｜2026",
      "人形机器人舞麒麟｜香港非遗与跨学科研发实践｜项目发起与团队研发实践｜2026",
      "HOUSE A 住宅建筑与室内设计｜学生设计项目｜主创设计师（作品页署名）｜2024",
      "Caterpillar Cabin 户外模块化智能旅行舱｜华侨大学本科毕业设计（指导：崔洪亮）｜设计者｜2025",
      "自然居室内设计与 AA28 翻新相关实践｜企业设计实践｜设计助理（测量、图纸与报价）"
    ],
    patents: [
      "发明专利申请（已公布）｜基于非周期几何单元的模块化构筑物组装控制方法及系统（申请人：清华大学深圳国际研究生院）｜202611021002.8｜2026（2026-10-16 公布，尚未授权）"
    ],
    /* 作品公开页图集：HOUSE A（Architecture MasterPrize 获奖页）+ Caterpillar Cabin（华侨大学毕业展页） */
    portfolio: {
      siteUrl: "https://architectureprize.com/winners/winner.php?id=7993",
      siteLabelZh: "张础艺作品公开页",
      siteLabelEn: "SELECTED WORKS",
      introZh: "以下为张础艺两项公开作品的展示图：HOUSE A（2024 Architecture MasterPrize 学生建筑设计奖、学生室内设计奖）与 Caterpillar Cabin 户外模块化智能旅行舱（华侨大学 2025 届本科毕业设计）。",
      introEn: "Publicly shown works by CHEUNG Arts: HOUSE A (2024 Architecture MasterPrize student awards) and Caterpillar Cabin, a modular outdoor travel pod (graduation design, Huaqiao University, 2025).",
      embed: false,
      embedUrl: "",
      gallery: [
        { src: "assets/img/members/zhang-chuyi/house-1.jpg",
          captionZh: "HOUSE A：住宅建筑外观与项目标题页（图源：Architecture MasterPrize 获奖页）",
          href: "https://architectureprize.com/winners/winner.php?id=7993" },
        { src: "assets/img/members/zhang-chuyi/house-2.jpg",
          captionZh: "HOUSE A：设计愿景与立面构想（图源：Architecture MasterPrize 获奖页）",
          href: "https://architectureprize.com/winners/winner.php?id=7993" },
        { src: "assets/img/members/zhang-chuyi/house-3.jpg",
          captionZh: "HOUSE A：法式窗与室内效果（图源：Architecture MasterPrize 获奖页）",
          href: "https://architectureprize.com/winners/winner.php?id=7993" },
        { src: "assets/img/members/zhang-chuyi/house-4.jpg",
          captionZh: "HOUSE A：起居室设计（图源：Architecture MasterPrize 获奖页）",
          href: "https://architectureprize.com/winners/winner.php?id=7993" },
        { src: "assets/img/members/zhang-chuyi/house-5.jpg",
          captionZh: "HOUSE A：建造进度记录（图源：Architecture MasterPrize 获奖页）",
          href: "https://architectureprize.com/winners/winner.php?id=7993" },
        { src: "assets/img/members/zhang-chuyi/cabin-2.jpg",
          captionZh: "Caterpillar Cabin：概念草图、舱体布局与剖视（图源：华侨大学 2025 届毕业作品展）",
          href: "https://www.shejijingsai.com/2025/06/1355302.html" },
        { src: "assets/img/members/zhang-chuyi/cabin-3.jpg",
          captionZh: "Caterpillar Cabin：履带式可调模块舱体设计展示板（图源：华侨大学 2025 届毕业作品展）",
          href: "https://www.shejijingsai.com/2025/06/1355302.html" }
      ]
    },
    awards: [
      "Architecture MasterPrize 学生建筑设计奖（HOUSE A）｜Architecture MasterPrize (AMP)｜2024",
      "Architecture MasterPrize 学生室内设计奖（HOUSE A）｜Architecture MasterPrize (AMP)｜2024",
      "米兰设计大赛省级二等奖｜2024",
      "第五届香港当代设计奖铜奖｜香港当代设计奖（HKCDA）｜2023",
      "G-Cross Award 铜奖｜G-Cross Award｜2023",
      "桃里坪山项目百校大街入围奖｜2024",
      "TRAE 年度优秀校园伙伴｜TRAE｜2025"
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
    bioZh: "Anna Dovgaliuk 2004 年出生于俄罗斯沃罗涅日，现居莫斯科，为清华大学深圳国际研究生院（SIGS）AIID 项目的硕士研究生。她于 2020 至 2024 年在 MISIS 攻读设计应用信息学本科课程，2024 至 2026 年学习技术艺术硕士课程。她的艺术实践以装置与影像为媒介，结合金属加工（铸造、变形、装配）与电气工程，把数字技术、视听装置与交互形式编织在一起，重新思考过去与现在的复杂叙事。代表系列自述《Chronicles of Future Ethics》关注社会与经济结构对人的行为方式的影响。作品曾展出于中国西安「In-Between Generations」（2025）、俄罗斯圣彼得堡、沃罗涅日、莫斯科与杜布纳等地。研究兴趣包括计算机视觉、自主无人机、交互设计和媒体艺术。",
    bioEn: "Anna Dovgaliuk (born 2004 in Voronezh, Russia; lives and works in Moscow) is a master's student in AIID at Tsinghua Shenzhen International Graduate School (SIGS). She studied Applied Informatics in Design at MISIS from 2020 to 2024 and Technological Art from 2024 to 2026. Working with installation and video art, metal (casting, deformation, assembly) and electrical engineering, she brings together digital technologies, audiovisual installations and interactive formats to rethink complex narratives of the past and the present. Her statement series “Chronicles of Future Ethics” examines how social and economic structures shape human behaviour. Her work has been shown at “In-Between Generations” in Xi'an, China (2025) and in St. Petersburg, Voronezh, Moscow and Dubna, Russia. Her research interests include computer vision, autonomous drones, interaction design and media art.",
    education: [
      "硕士（在读）｜应用信息学 · 人工智能与交互设计（AIID）｜清华大学深圳国际研究生院｜2026–2028",
      "硕士｜应用信息学 · 技术艺术（Technological Art）｜俄罗斯国立研究型技术大学 MISIS｜2024–2026",
      "学士｜应用信息学（设计方向）｜俄罗斯国立研究型技术大学 MISIS｜2020–2024"
    ],
    honors: [
      "参展「In-Between Generations」展览（中国西安）｜2025",
      "获奖「Design Workshop」竞赛（DAMN MISIS 团队，「Lomonosov Cluster」赛道）｜2023",
      "驻留｜International Summer Camp on Digital Arts and Future Creativity（沈阳师范大学）",
      "2025 年参展：Chasing the Future（圣彼得堡）· Soil Composition（沃罗涅日州立艺术博物馆）· POTOK（杜布纳）· I Would Write You a Letter…（沃罗涅日）· Student May. Spaces of the Lost（莫斯科 GROUND Solyanka）· Time of Digits Forum（莫斯科）· Symbiosis. Vol 1（莫斯科 VS Gallery）· ArtTech 25（莫斯科 Krasnokholmskaya 画廊）"
    ],
    appointments: [],
    papers: [],
    projects: [
      "5th Young Scientists Congress｜Roscongress Foundation｜平面设计（活动物料）｜2025",
      "Forum Time of Digital｜SP Group｜艺术家｜2025",
      "Eastern Economic Forum (EEF)｜Roscongress Foundation｜程序开发｜2025",
      "个人艺术项目（装置 / 影像 / 金属 / 电气）：Transformer · Paradox · Anatomy of Air · Archive of Stars · Domeandia · Technical Blindness · Dislocation of Life · Slice 1696 · Web-tower · 90x60x90 · V-M-K"
    ],
    patents: [],
    /* 个人网站精选视觉成果：图片已本地化（离线可用），项目名按 anliona.com 页面顺序对应 */
    portfolio: {
      siteUrl: "https://anliona.com",
      siteLabelZh: "安娜个人网站 Anliona",
      siteLabelEn: "PERSONAL SITE",
      introZh: "以下为安娜个人网站（anliona.com）的精选视觉成果节选，涵盖其装置、影像与金属工艺方向的 11 个艺术项目；图片经本地化镜像，完整作品与创作陈述请访问其个人网站。",
      introEn: "Selected visual works from Anna's personal site (anliona.com), covering 11 art projects in installation, video art and metalwork; images mirrored locally. Full works and statement are available on the site.",
      embed: false,
      embedUrl: "https://anliona.com",
      gallery: [
        { src: "assets/img/members/anna-dovgaliuk/transformer.jpg",
          captionZh: "Transformer：彩色透光圆盘装置（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/paradox.jpg",
          captionZh: "Paradox：宽幅混合媒介装置场景（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/anatomy-of-air.jpg",
          captionZh: "Anatomy of Air：墙面金色光点投影（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/archive-of-stars.jpg",
          captionZh: "Archive of Stars：展厅多屏影像装置现场（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/domeandia.jpg",
          captionZh: "Domeandia：冰川湖泊景观影像（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/technical-blindness.jpg",
          captionZh: "Technical Blindness：黑白颗粒影像（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/dislocation-of-life.jpg",
          captionZh: "Dislocation of Life：混凝土砌块与光源构成的装置（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/slice-1696.jpg",
          captionZh: "Slice 1696：暗场放射状发光装置（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/web-tower.jpg",
          captionZh: "Web-tower：彩色拼接圆盘近景（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/90x60x90.jpg",
          captionZh: "90x60x90：绿色线框扫描体（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/v-m-k.jpg",
          captionZh: "V-M-K：现场表演与蓝色发光体交互（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" },
        { src: "assets/img/members/anna-dovgaliuk/projects-cover.jpg",
          captionZh: "个人网站 Projects 版块主图：阴极射线管显示器堆叠装置（图源：安娜个人网站 anliona.com）",
          href: "https://anliona.com" }
      ]
    },
    awards: []
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
    /* 波斯籍成员：nameEn 采用本名语序（Given + Family，Parastoo MOEINI），
     * 不套用中文成员的「姓全大写 + 名」倒装；nameZh 为其自填中文名「文燕」。
     * 2026-10-26 更新：收集表补全研究方向/简介/教育/荣誉/兼职；头像取自 docx 内嵌图。 */
    id: "wen-yan", group: "master",
    nameZh: "文燕", nameEn: "Parastoo MOEINI",
    titleZh: "互联网+创新设计硕士生", titleEn: "Master's Student, Internet+ Innovation Design",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    email: "", homepage: "", github: "", scholar: "", orcid: "",
    joined: "2026", expected: "2027", status: "在组", supervisor: "高岩",
    /* 照片来源：成员信息/文燕/TiDE_Lab_成员信息收集表_v3.0_中英双语.docx 内嵌 word/media/image1.jpg */
    photo: "assets/img/members/wen-yan.jpg",
    keywords: ["人工智能", "参数化人体建模", "三维人体建模", "数字服装", "大码体型分析", "虚拟试衣"],
    focusZh: "大码体型参数化建模与人工智能驱动的数字服装映射研究。",
    focusEn: "AI-driven parametric modeling of plus-size body shapes and their mapping to 3D digital garments.",
    bioZh: "文燕，清华大学深圳国际研究生院互联网+创新设计专业硕士研究生，研究兴趣包括人工智能、参数化人体建模、三维数字人体与数字服装设计。目前主要关注大码体型特征的参数化表达及其与三维人体模型的映射方法，探索人工智能在人体形态分析、数字服装适配与虚拟试衣中的应用。具有汉语言与跨文化交流背景，致力于融合语言文化、数字技术与创新设计，探索人工智能赋能服装设计的跨学科研究路径。",
    bioEn: "Parastoo is a master's student in Internet+ Innovation Design at Tsinghua Shenzhen International Graduate School. With an academic background in Chinese Language and Culture, she is interested in interdisciplinary research connecting artificial intelligence, digital technologies, and innovative design. Her current research focuses on parametric representation of plus-size body shapes and their mapping to three-dimensional human models. She explores the potential of AI-assisted body-shape analysis, 3D digital garment design, and virtual try-on applications. Through this research, she aims to investigate how computational modeling can better represent diverse body shapes and support more inclusive and personalized digital clothing experiences. She is also interested in cross-cultural communication and collaboration between technology and design.",
    education: [
      "硕士｜互联网+创新设计｜清华大学深圳国际研究生院｜2025–至今",
      "本科｜汉语言（Chinese Language and Culture）｜德黑兰大学孔子学院｜2021–2025"
    ],
    honors: [
      "清华大学深圳国际研究生院奖学金获得者",
      "伊朗赛区「汉语桥」中文比赛全国第三名"
    ],
    appointments: ["实习生｜深圳广电谷得传媒有限公司"],
    papers: [], projects: [], patents: [], portfolio: "", awards: []
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
    /* awards 栏已按负责人要求整体移除（2026-10-26），个人页不再渲染「获奖 AWARDS」区块 */
    awards: [],
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
    titleZh: "研究工程师", titleEn: "Research Engineer",
    affiliationZh: "清华大学深圳国际研究生院", affiliationEn: "Tsinghua SIGS",
    /* 邮箱未标注「可公开」，按隐私铁律留空（2026-10-26） */
    email: "", homepage: "", scholar: "", orcid: "",
    joined: "2025", expected: "", status: "在组", supervisor: "",
    photo: "assets/img/members/zhao-liuxin.jpg",
    keywords: ["计算性设计", "数字引擎", "数控制造", "机器人建造", "沉浸式媒介与交互"],
    focusZh: "计算性设计与数字引擎驱动的机器人建造及空间交互。",
    focusEn: "Computational design and digital engines for robotic fabrication and spatial interaction.",
    bioZh: "赵柳鑫现任清华大学深圳国际研究生院未来人居研究院设计与科研助理，拥有建筑联盟学院新兴技术与设计硕士、谢菲尔德大学城市设计与规划硕士学位。研究与实践聚焦计算性设计、数字引擎、数控制造、机器人建造及沉浸式交互，涵盖参数化建模、建筑性能仿真、数字化生产与现场实施。曾参与模块化快装建筑、展厅互动装置及设计交流活动，具备三轴与五轴数控加工、六轴工业机器人编程和增减材制造经验，致力于衔接设计、制造与建造流程。",
    bioEn: "ZHAO Liuxin is a Design and Research Assistant at the Institute for Future Human Habitats, Tsinghua Shenzhen International Graduate School. ZHAO holds master's degrees in Emergent Technologies and Design from the Architectural Association and in Urban Design and Planning from the University of Sheffield, and a bachelor's degree in Urban and Rural Planning from Henan University. The work focuses on computational design, digital engines, CNC fabrication, robotic fabrication, and immersive interaction. This experience spans parametric modelling, building performance simulation, modular buildings, and interactive installations. ZHAO works with three- and five-axis CNC machining, six-axis industrial robots, and additive manufacturing to connect design, fabrication, and construction.",
    education: [
      "硕士｜新兴技术与设计｜建筑联盟学院｜2022.09–2023.10",
      "硕士｜城市设计与规划｜谢菲尔德大学｜2021.09–2022.09",
      "学士｜城乡规划｜河南大学｜2016.09–2021.06"
    ],
    honors: [
      "2022 威卢克斯国际设计竞赛（IVA）西欧赛区区域优胜者（Daylight in Buildings 类别）",
      "2022 International VELUX Award: Regional Winner, Western Europe (Daylight in Buildings)"
    ],
    appointments: [],
    papers: [],
    projects: [
      "深圳湾公园 CARI+ 模块化快装建筑｜深圳湾公园配套建筑项目｜主创、驻场设计师｜2025.07–2025.12",
      "上海万科理想之地·新新所展厅空间与装置设计｜万科「理想之地」展厅项目｜交互设计与现场技术负责人｜2024.02–2024.05"
    ],
    patents: [
      "实用新型｜一种便于运输的可折叠房屋建筑｜ZL202520437587.6｜2026"
    ],
    portfolio: "",
    awards: []
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
