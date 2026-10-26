/* TiDE Lab 网站数据 · 项目（横向为主）
 * 内容转录自《TiDE Lab 项目手册 草稿2.0》（F:\Automation\TiDE_Lab_web\Tide资料）。
 * 新增项目：在数组末尾追加对象；id 用英文短横线命名，图片放入 assets/img/projects/。
 * 字段留空("")或空数组([])时页面自动显示"待补充"占位。
 */
window.TIDE_PROJECTS = [
  {
    id: "xian-football",
    num: "01",
    titleZh: "西安国际足球中心",
    titleEn: "Xi'an International Football Center",
    categoryZh: "公共文化", categoryEn: "Public Culture",
    area: "250,000 m²",
    scopeZh: "城市设计、建筑设计、景观设计、施工指导",
    scopeEn: "Urban Design, Architectural Design, Landscape Design, Construction Guidance",
    period: "2023", statusZh: "已建成", statusEn: "Completed",
    themeZh: "体育建筑", themeEn: "Sports Architecture",
    client: "",
    studio: "idea-studio",
    awardsZh: [
      "2022 第九届CREDAWARD地产设计大奖金奖",
      "Dezeen评选2022全球最受期待10大建筑",
      "中国最受期待10大建筑",
      "亚洲杯主赛场之一"
    ],
    awardsEn: [
      "2022 9th CREDAWARD Real Estate Design Award Gold Award",
      "Dezeen's 10 Most Anticipated Buildings Worldwide in 2022",
      "China's 10 Most Anticipated Buildings",
      "One of the Main Venues for the Asian Cup"
    ],
    descZh: [
      "西北地区陕西省重大建筑实施项目，建筑国际设计竞赛中标。投资25亿，中国足协承接亚洲杯和世界杯的专业足球场，按照FIFA标准设计。",
      "高岩教授作为项目中方主创，与国际建筑大师 Zaha Hadid 事务所联合创作，从15家全球顶级建筑设计事务所（包括 OMA、GMP、MAD 等）中摘得桂冠。设计应用\"深度设计\"形成全生命周期的空间设计策略；应用\"运算化\"形成看台基于 C Value 的科学设计，以及全球首创的正交双层索网大跨张拉结构的球场屋盖设计。"
    ],
    descEn: [
      "A major architectural project in Shaanxi Province, won through an international design competition. With an investment of 2.5 billion RMB, it is a professional football stadium designed to FIFA standards, hosting the Asian Cup and World Cup matches.",
      "As the Chinese lead designer, Prof. Gao Yan co-created with Zaha Hadid Architects, winning among 15 world-class firms including OMA, GMP and MAD. The design applies \"Deep Design\" for full-lifecycle spatial strategies and features the world's first orthogonal double-layer cable-net long-span tensile roof structure."
    ],
    collaborators: ["Zaha Hadid Architects"],
    cover: "assets/img/projects/xian-football-cover.jpg",
    gallery: [
      { src: "assets/img/projects/xian-football-cover.jpg", captionZh: "体育场主入口广场人视效果", captionEn: "Main plaza view of the stadium" },
      { src: "assets/img/projects/xian-football-2.jpg", captionZh: "绿化台地上的体育场远景", captionEn: "Distant view on the landscaped terrace" },
      { src: "assets/img/projects/xian-football-3.jpg", captionZh: "屋顶檐口与环形坡道近景", captionEn: "Roof eave and circular ramp detail" }
    ]
  },
  {
    id: "chengdu-museum",
    num: "02",
    titleZh: "成都自然博物馆",
    titleEn: "Chengdu Natural History Museum",
    categoryZh: "公共文化", categoryEn: "Public Culture",
    area: "71,000 m²",
    scopeZh: "国际竞赛第二名",
    scopeEn: "2nd Place in International Competition",
    period: "2018", statusZh: "竞赛方案", statusEn: "Competition Entry",
    themeZh: "文化建筑", themeEn: "Cultural Architecture",
    client: "",
    studio: "idea-studio",
    awardsZh: [],
    awardsEn: [],
    descZh: [
      "本项目与 Zaha Hadid Architects 联合设计。",
      "连绵波浪形玻璃屋顶的博物馆建筑群，内部空间如岩洞般起伏，容纳恐龙骨架与翼龙模型等大型展品。"
    ],
    descEn: [
      "This project was designed in collaboration with Zaha Hadid Architects.",
      "The museum complex features continuous wave-shaped glass roofs, with cave-like interior spaces housing large exhibits such as dinosaur skeletons and pterosaur models."
    ],
    collaborators: ["Zaha Hadid Architects"],
    cover: "assets/img/projects/chengdu-museum-cover.jpg",
    gallery: [
      { src: "assets/img/projects/chengdu-museum-cover.jpg", captionZh: "黄昏鸟瞰：波浪形玻璃屋顶建筑群", captionEn: "Dusk aerial view of the wave-roof complex" },
      { src: "assets/img/projects/chengdu-museum-2.jpg", captionZh: "岩洞般展厅内景", captionEn: "Cave-like exhibition hall interior" },
      { src: "assets/img/projects/chengdu-museum-3.jpg", captionZh: "高挑条形格栅吊顶展厅", captionEn: "Grand hall with linear grille ceiling" }
    ]
  },
  {
    id: "chongqing-hospital",
    num: "03",
    titleZh: "华中科技大学同济医学院附属协和医院 重庆医院",
    titleEn: "Union Hospital Chongqing Branch, Tongji Medical College, HUST",
    categoryZh: "公共医疗", categoryEn: "Public Healthcare",
    area: "360,000 m²",
    scopeZh: "建筑设计、室内设计、景观设计",
    scopeEn: "Architectural Design, Interior Design, Landscape Design",
    period: "", statusZh: "在建", statusEn: "Under Construction",
    themeZh: "医疗建筑", themeEn: "Healthcare Architecture",
    client: "",
    studio: "idea-studio",
    awardsZh: [],
    awardsEn: [],
    descZh: [
      "本项目与中国建筑西南设计研究院、汇城国际建筑设计咨询事务所、重庆三医健康科技有限公司联合设计。",
      "椭圆形主体医疗建筑带圆洞天窗位于园区中心，周围环绕多栋流线形板式楼与绿化；中庭采用三角形网格玻璃天窗穹顶。该项目获2022年省部级重点项目一等奖（与西南建筑设计研究院合作）。"
    ],
    descEn: [
      "Co-designed by China Southwest Architectural Design and Research Institute, Huicheng International Architectural Design & Consulting Firm, and Chongqing Sanyi Health Technology Co., Ltd.",
      "The elliptical main medical building with circular skylights sits at the center of the campus, surrounded by streamlined slab buildings and greenery; the atrium features a triangular grid glass dome."
    ],
    collaborators: ["中国建筑西南设计研究院", "汇城国际建筑设计咨询事务所", "重庆三医健康科技有限公司"],
    cover: "assets/img/projects/chongqing-hospital-cover.jpg",
    gallery: [
      { src: "assets/img/projects/chongqing-hospital-cover.jpg", captionZh: "医院园区鸟瞰效果", captionEn: "Aerial view of the hospital campus" },
      { src: "assets/img/projects/chongqing-hospital-2.jpg", captionZh: "沿城市道路群房街景", captionEn: "Street view along the urban road" },
      { src: "assets/img/projects/chongqing-hospital-3.jpg", captionZh: "中庭三角形网格玻璃天窗穹顶", captionEn: "Atrium with triangular grid glass dome" }
    ]
  },
  {
    id: "kaibo-park",
    num: "04",
    titleZh: "凯博易控高科技产业园",
    titleEn: "Kaibo Easy Control High-Tech Industrial Park",
    categoryZh: "办公产业", categoryEn: "Office & Industrial Park",
    area: "130,000 m²",
    scopeZh: "生产 / 研发 / 办公 / 展示 / 商业",
    scopeEn: "Office / Product / Exhibition / Commercial / Sales",
    period: "2018.06–2022.06", statusZh: "已建成", statusEn: "Completed",
    themeZh: "产业园区", themeEn: "Industrial Park",
    client: "苏州凯博易控有限公司",
    studio: "idea-studio",
    awardsZh: ["2022 A&D亚洲设计大奖办公建筑类别金奖", "江苏省产业类型标杆项目"],
    awardsEn: ["2022 Gold Medal, A&D China Awards, Best Workplace Category", "Benchmark Industrial Project of Jiangsu Province"],
    descZh: [
      "江苏省高新智能制造工厂重点项目。\"深度设计\"关注行为和组织关系的空间策略应用案例，成为江苏省产业类型标杆项目，受到省级领导参观考察。该项目具有工厂类型建筑的原创性，突破了现有工厂的空间类型，对智能制造行业的生产空间产生重要影响。"
    ],
    descEn: [
      "A key high-tech intelligent manufacturing factory project in Jiangsu Province. As an application of \"Deep Design\" spatial strategies focusing on behavior and organizational relationships, it became a benchmark industrial project of Jiangsu Province. The project breaks through existing factory spatial typologies with originality, exerting significant influence on production spaces in the intelligent manufacturing industry."
    ],
    collaborators: [],
    cover: "assets/img/projects/kaibo-park-cover.jpg",
    gallery: [
      { src: "assets/img/projects/kaibo-park-cover.jpg", captionZh: "白色流线型多层厂房与办公楼", captionEn: "White streamlined multi-story factory and office building" },
      { src: "assets/img/projects/kaibo-park-2.jpg", captionZh: "弧形悬挑楼层与玻璃栏板", captionEn: "Curved cantilevered floors with glass balustrades" },
      { src: "assets/img/projects/kaibo-park-3.jpg", captionZh: "园区黄昏航拍全景", captionEn: "Dusk aerial panorama of the park" }
    ]
  },
  {
    id: "heping-school",
    num: "05",
    titleZh: "深圳龙华和平实验中学",
    titleEn: "Shenzhen Longhua Heping Experimental Middle School",
    categoryZh: "学校社区", categoryEn: "Education Community",
    area: "24,000 m²",
    scopeZh: "建筑设计",
    scopeEn: "Architectural Design",
    period: "", statusZh: "落成", statusEn: "Completed",
    themeZh: "教育建筑", themeEn: "Educational Architecture",
    client: "",
    studio: "idea-studio",
    awardsZh: ["竞赛中标", "2025 WAF世界建筑节建筑教育类项目最终入围", "前身项目\"和平小学\"获2023亚洲教育环境设计奖学习空间类金奖"],
    awardsEn: ["Winning the Bid in the Competition", "2025 WAF Completed Buildings – School Finalist", "Predecessor Heping Primary School: 2023 Gold Award for Learning Space Design, Asia Educational Environment Design Awards"],
    descZh: [
      "深圳龙华区重点实验学校实施项目，竞赛中标。高岩教授作为项目主创，从和平小学《多样化学习空间》的国家教育部研究项目开始，与和平学校校长合作探索空间和教学的关系，成果应用到学校空间设计策略。",
      "项目有两个首创：其一，由于用地极限——深圳允许建校的最小场地，首创将学校操场和跑道与教学楼垂直布置；其二，突破了普通教室和操场间距的规范数据，通过声学模拟的科学方法论证其声学性能合规性，对学校建筑规范有重要参考意义。"
    ],
    descEn: [
      "A key experimental school project in Longhua District, Shenzhen, won through competition. As lead designer, Prof. Gao Yan started from the national Ministry of Education research project \"Diversified Learning Spaces\" at Heping Primary School, exploring the relationship between space and teaching.",
      "Two innovations: first, on the smallest site permitted for school construction in Shenzhen, the playground and running track are vertically stacked with the teaching building; second, acoustic simulation was used to demonstrate compliance beyond conventional classroom-playground distance regulations, providing important reference for school building codes."
    ],
    collaborators: [],
    cover: "assets/img/projects/heping-school-cover.jpg",
    gallery: [
      { src: "assets/img/projects/heping-school-cover.jpg", captionZh: "层层退台的白色现代教学楼", captionEn: "White modern teaching building with stepped terraces" },
      { src: "assets/img/projects/heping-school-2.jpg", captionZh: "架空层与跑道层", captionEn: "Stilted floor and running track level" },
      { src: "assets/img/projects/heping-school-3.jpg", captionZh: "环形坡屋面与屋顶活动场地鸟瞰", captionEn: "Aerial view of circular pitched roof and rooftop activity field" }
    ]
  },
  {
    id: "future-park",
    num: "06",
    titleZh: "未来公园企划 · 深圳湾公园BOX",
    titleEn: "Future Park Project · Shenzhen Bay Park BOX",
    categoryZh: "公园城市", categoryEn: "Park City",
    area: "",
    scopeZh: "策展、装配式空间产品、临时建筑",
    scopeEn: "Curation, Prefabricated Spatial Products, Temporary Architecture",
    period: "", statusZh: "进行中", statusEn: "Ongoing",
    themeZh: "未来公园", themeEn: "Future Park",
    client: "深圳市城市管理和综合执法局",
    studio: "future-park",
    awardsZh: [],
    awardsEn: [],
    descZh: [
      "\"深圳湾·公园BOX\"是深圳市城市管理和综合执法局推进全域公园城市建设，持续提升公园绿地开放共享与服务功能的创新实践。项目通过策展思维提升公园艺术气息和文化内涵，为市民提供全新的公园文化与生活体验。",
      "装配式空间产品，可以理解为一套\"像积木一样可组合的建筑系统\"。所有构件先在电脑中完成精确的数字化设计，再在工厂中加工成标准化单元，最终运输至公园内进行快速搭建。在空间组织上，团队采用了通透的玻璃立面和轻盈展开的半室外空间，让建筑与公园的草地、树林和海风自然融合。",
      "CARI产品原型基于系统化的设计管线进行研发，采用 DfMA（Design for Manufacturing and Assembly）设计体系，并引入建筑信息模型（BIM）与智能化技术，构建了覆盖设计、生产、装配与运营等阶段的全周期数智化空间产品方案。在此原型基础上，研发团队进一步发展出的\"CARI+\"技术变体，重点关注低碳材料与数字建造方法在公共空间中的实际应用。"
    ],
    descEn: [
      "\"Shenzhen Bay Park BOX\" is an innovative practice by the Shenzhen Municipal Urban Management and Law Enforcement Bureau to promote the construction of a city-wide park. The project uses curatorial thinking to elevate the park's artistic atmosphere and cultural connotation, providing citizens with a brand-new park culture and lifestyle experience.",
      "Prefabricated spatial products can be understood as a \"building system combinable like building blocks\". All components are digitally designed with precision, manufactured into standardized units in factories, and transported to the park for rapid assembly. The team adopted transparent glass facades and light, open semi-outdoor spaces, allowing the buildings to blend naturally with the park's lawns, trees and sea breeze.",
      "The CARI product prototype was developed based on a systematic design pipeline, employing the DfMA design system and incorporating BIM and intelligent technologies. Building upon this prototype, the R&D team further developed the \"CARI+\" technology variant, focusing on low-carbon materials and digital construction methods in public spaces."
    ],
    collaborators: [],
    cover: "assets/img/projects/future-park-cover.jpg",
    gallery: [
      { src: "assets/img/projects/future-park-map.jpg", captionZh: "PARK LIFE VISION 共栖 · 建筑×品牌 · 十二盒子总平面", captionEn: "PARK LIFE VISION master plan: twelve boxes along the coastline" },
      { src: "assets/img/projects/future-park-cover.jpg", captionZh: "建成小屋街景", captionEn: "Completed cabin street view" },
      { src: "assets/img/projects/future-park-2.jpg", captionZh: "CARI+ 木构框架搭建现场", captionEn: "CARI+ timber frame construction site" },
      { src: "assets/img/projects/future-park-3.jpg", captionZh: "公园中的装配式小屋实景", captionEn: "Prefabricated cabin in the park" }
    ]
  }
];
