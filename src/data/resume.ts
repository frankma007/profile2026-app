export interface BasicInfo {
  name: string
  title: string
  photo: string
  meta: string
  phone: string
  email: string
}

export interface SkillArea {
  name: string
  description: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  duties: string[]
}

export interface Project {
  name: string
  company?: string
  period?: string
  stack: string[]
  description: string
  highlights: string[]
}

export const profile: BasicInfo = {
  name: '马壮',
  title: '前端开发工程师',
  photo: '/avatar.svg',
  meta: '男 · 本科 · 上海师范大学 · 12 年前端开发经验',
  phone: '130****3315',
  email: '1015630728@qq.com',
}

export const skillAreas: SkillArea[] = [
  {
    name: 'AI 辅助研发（Vibe Coding）',
    description:
      '熟练使用 Codex、Claude Code、Trae 完成代码库检索、需求拆解、组件生成、接口联调、问题定位、测试补齐和重构评审；熟悉 Prompt 提示词优化、RAG 方案、Token 省流方案及 Agent 应用开发流程，能够使用 Node.js + Express 调用 DeepSeek Flash4 API，并配合 Vue3 + LangChain 开发智能客服助手系统；熟悉 MCP（Model Context Protocol）工具集成与上下文管理；通过项目级 Skills 固化业务约束与开发规范，并结合人工 Review、构建验证和最小改动原则控制 AI 生成代码质量。',
  },
  {
    name: 'Vue 技术栈',
    description:
      '熟练使用 Vue3 + TypeScript + Vite + Pinia，结合 Element Plus、Vant UI、Ant Design Vue、Tailwind CSS 开发中后台、政务及数据可视化项目；熟练使用 Vue2 + Vuex + Vue Router，具备公共组件封装、动态表单、权限与流程页面开发经验。',
  },
  {
    name: 'React 技术栈',
    description:
      '熟悉 React18 + TypeScript + Vite + Zustand + React Router + Ant Design + Sass，能够封装自定义 Hook、类型安全请求层与业务组件；了解 MSW 模拟接口。',
  },
  {
    name: '可视化与 GIS',
    description:
      '熟练使用 ECharts、echarts-gl、echarts-liquidfill、Cesium、Leaflet、Mapbox、GISViewer，具备大屏可视化、三维图表、地图组件封装及多地图平台切换经验；熟悉 AntV/X6 自定义节点与流程可视化。',
  },
  {
    name: '多端与工程化',
    description:
      '具备 Uniapp、Taro、H5、小程序及响应式项目开发经验；熟练使用 Chrome DevTools、Git、SVN、WebSocket、Axios、Sass，能够进行网络调试、性能分析与问题定位，并配置 Nginx 代理处理接口跨域、浏览器兼容及前端性能问题。',
  },
  {
    name: '后端与数据',
    description:
      '熟悉 Python + FastAPI + PostgreSQL、Node.js + Express + MySQL；熟练使用 DBeaver 操作 MySQL、PostgreSQL，能够进行数据查询、表结构维护、索引分析与导入导出，并参与接口开发、数据建模及前后端联调。',
  },
]

export const workExperience: WorkExperience[] = [
  {
    company: '上海闰云信息技术有限公司',
    role: 'Web 前端开发',
    period: '2026.4–2026.9',
    duties: [
      '负责社区治理指挥中心大屏可视化系统，以及上海市交通委员会一网通办企业法人网申端、窗口端的前端开发与迭代。',
    ],
  },
  {
    company: '神州数码信息科技服务有限公司',
    role: '前端开发',
    period: '2025.5–2026.3',
    duties: ['驻场长电科技（上海），负责 JCET QMS 质量管理系统的功能开发、历史问题修复及交付支持。'],
  },
  {
    company: '大连铂镭信息科技有限公司',
    role: 'Web 前端开发',
    period: '2024.3–2025.5',
    duties: [
      '驻场中航空管公司 615 所，负责警航、无人机反制及非合作无人机一体化系统的地图大屏与数据可视化开发。',
    ],
  },
  {
    company: '上海海穗信息科技有限公司',
    role: 'Web 前端开发',
    period: '2023.3–2024.2',
    duties: ['驻场江南银行，独立负责外部数据接口管理系统 2.0 的前端重构与核心功能开发。'],
  },
  {
    company: '北京开科唯识技术股份有限公司',
    role: 'Web / H5 前端开发',
    period: '2020.3–2022.11',
    duties: ['驻场广发银行理财子公司，负责决策分析系统、驾驶舱系统及报表可视化开发。'],
  },
  {
    company: '上海维信智荟互联网金融有限公司',
    role: 'Web 前端开发',
    period: '2014.4–2019.11',
    duties: ['负责维金荟官网、App / 微信公众号 H5 页面、推广活动页及企业运维后台的开发与维护。'],
  },
]

export const projects: Project[] = [
  {
    name: '上海市交通委员会一网通办项目（企业法人网申端 / 窗口端）',
    company: '上海闰云信息技术有限公司',
    period: '2026.6–2026.9',
    description:
      '面向企业法人办理公共汽车和电车客运线路经营权许可、线路或站点变更、暂停或终止营运等事项，分别建设网申端和政务服务窗口端。',
    highlights: [
      '网申端：实现申请信息、业务信息、申请材料三类 Tab 流程；开发动态业务表单，车辆 / 驾驶员 / 线路 / 站点 / 票价等数据维护功能，并完成申请材料上传、电子签章及接口联调。',
      '窗口端：实现申请信息、业务信息、法律文书、流程图、申请材料五类 Tab 流程；支持受理、不予受理、补正处理、审批记录查询、文件预览及打印。',
      'AI 辅助研发：在网申端与窗口端开发中落地 AI 辅助研发流程，使用 Codex、Claude Code、Trae 协助复用 Vue2 业务组件、定位两端实现差异、补齐表单校验与联调问题；结合项目规则及构建验证保证 AI 产出可控、可维护。',
    ],
    stack: ['Vue 2.6', 'Vuex', 'Vue Router', 'Element UI 2.15', 'Axios', 'Sass'],
  },
  {
    name: '公交政务应用现代化重构与工程化实践',
    company: '上海闰云信息技术有限公司',
    period: '2026.6–2026.9',
    description:
      '以公交一网通办业务为蓝本，结合 Vue2 存量系统的业务模型，完成 React 技术栈重构，验证类型安全、状态管理与前端工程化开发流程。',
    highlights: [
      '使用 React18 + TypeScript + Vite + Zustand + React Router + Ant Design + Sass 重构前端；建立路由配置表、类型安全 Axios 请求层、Zustand 状态模块与自定义 Hook，复用申请详情、业务字典、首末站点及票价等业务模型。',
      '使用 MSW 模拟认证、事项信息、申请详情、字典及保存接口，实现列表分页、条件搜索、增删改与详情弹窗等功能，并通过请求计数器处理并发 Loading 状态。',
    ],
    stack: ['React18', 'TypeScript', 'Vite', 'Zustand', 'React Router', 'Axios', 'Ant Design', 'Sass', 'MSW'],
  },
  {
    name: '斜土路社区治理指挥中心大屏可视化系统',
    company: '上海闰云信息技术有限公司',
    period: '2026.4–2026.6',
    description: '面向社区治理场景建设 1920×1080 指挥中心可视化大屏，集中展示地图态势、业务指标与专题分析数据。',
    highlights: [
      '搭建 1920×1080 大屏项目，实现基于 VScaleScreen 的等比缩放方案，适配不同分辨率显示终端。',
      '基于 gisviewer-vue 封装 GIS 地图组件，支持 ArcGIS、高德、百度、PGIS 多平台切换及地图标记点交互。',
      '使用 ECharts 5 + echarts-gl + echarts-liquidfill 开发 3D 饼图、雷达图、水球图等 10+ 类可视化图表，搭建 16 个业务子页面。',
      '实现黑、白两套皮肤的动态切换机制，统一主题变量和组件展示效果。',
    ],
    stack: [
      'Vue2',
      'Vuex',
      'Vue Router',
      'Element UI',
      'ECharts 5',
      'echarts-gl',
      'echarts-liquidfill',
      'gisviewer-vue',
      'esri-loader',
      'v-scale-screen',
    ],
  },
  {
    name: 'JCET QMS 质量管理系统',
    company: '神州数码信息科技服务有限公司',
    period: '2025.11–2026.3',
    description: '长电科技质量管理系统，负责功能开发、历史问题修复、数据同步及项目交付支持。',
    highlights: [],
    stack: ['Vue3', 'TypeScript', 'Pinia', 'Vite', 'Element Plus', 'VXE UI'],
  },
  {
    name: '北京警航、无人机反制机群客户端及横琴非合作无人一体化系统',
    company: '大连铂镭信息科技有限公司',
    period: '2024.3–2025.5',
    description: '面向指挥调度和低空防控场景，实现地图大屏、数据分析、路由与菜单配置、防控任务、白名单、告警配置及航迹回放等功能。',
    highlights: [],
    stack: ['Vue2', 'Vue3', 'Vuex', 'Element UI', 'Avue', 'AntV/X6', 'SuperMap', 'Cesium', 'Leaflet', 'WebSocket'],
  },
  {
    name: '江南银行外部数据采集管理系统 2.0',
    company: '上海海穗信息科技有限公司',
    period: '2023.3–2024.2',
    description:
      '独立负责系统前端重构，实现接口可视化配置及 AntV/X6 自定义节点拖拽、行内外数据源插件设置、调用次数与计费管理、首页仪表盘、外部数据集市和定时任务等功能；配合接口文档、使用手册、测试及上线验证。',
    highlights: [],
    stack: ['Vue', 'Element UI', 'Avue', 'AntV/X6'],
  },
  {
    name: '广发银行理财子公司决策分析系统与驾驶舱',
    company: '北京开科唯识技术股份有限公司',
    period: '2020.3–2022.11',
    description:
      '面向公司管理层及委员会成员，建设报表平台、灵活数据查询、智能分析、委员会议事及产品总览驾驶舱，完成响应式数据可视化开发。',
    highlights: [],
    stack: ['Vue', 'Element UI', 'ES6', 'ECharts'],
  },
  {
    name: '维金荟互联网平台、H5 与运维管理系统',
    company: '上海维信智荟互联网金融有限公司',
    period: '2014.4–2019.11',
    description:
      '负责官网、App / 微信 H5、推广活动页及企业运维后台的开发与维护，涵盖用户账户、产品、渠道、红包、活动、资金记录、权限和报表等业务。',
    highlights: [],
    stack: ['AngularJS', 'Vue', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    name: '智能客服助手系统',
    description:
      '基于 Node.js + Express、Vue3 和 LangChain 构建智能客服助手，后端接入 DeepSeek Flash4 API，前端提供对话交互、上下文展示与服务响应能力。',
    highlights: [
      '设计 Prompt 提示词模板、RAG 检索增强、上下文压缩与 Token 省流方案，提高上下文利用率和回答稳定性。',
      '使用 Node.js + Express 封装大模型调用、会话处理与服务接口，接入 DeepSeek Flash4 API；结合 LangChain 实践 Agent 工具调用与工作流编排。',
      '使用 Vue3 构建聊天交互界面，完成消息展示、会话管理及前后端联调。',
    ],
    stack: [
      'Vue3',
      'LangChain',
      'Node.js',
      'Express',
      'DeepSeek Flash4 API',
      'RAG',
      'Prompt Engineering',
      'Agent',
      'MCP',
      'Token Optimization',
    ],
  },
]
