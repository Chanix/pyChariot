import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: 'localhostLinks',
  outDir: './docs',
  base: '/pyChariot/',
  title: "pyChariot",
  description: "pyChariot, 基于 HTML5 的桌面应用开发工具。",
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh'
      },
      // en: {
      //   label: 'English',
      //   lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      //   // link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      //   // 其余 locale 特定属性...
      // },
    },
    themeConfig: {
      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      skipToContentLabel: '跳转到内容',

      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {text: '回首页', link: '/'},
        {text: '讨论组', link: 'https://github.com/Chanix/pyChariot/discussions'},
        // { text: 'Examples', link: '/markdown-examples' },
      ],

      docFooter: {
        prev: '上一页',
        next: '下一页'
      },

      footer: {
        message: '基于 MIT 许可发布',
        copyright: `版权所有 © 2025-${new Date().getFullYear()}, pyChariot, Chanix@GitHub`
      },

      outline: {
        label: '本页导航'
      },

      sidebar: [
        {
          text: 'pyChariot 简介',
          collapsed: false,
          items: [
            {text: 'pyChariot 是什么', link: '/what-is-pychariot'},
            {text: '快速开始', link: '/getting-started'},
              // {text: '应用类型', link: '/project-types'},
            {text: '更新日志', link: '/changelog'},
          ],
        },
        {
          text: '开发者指南',
          collapsed: false,
          items: [
            {text: '文件目录结构', link: '/dirs-and-files'},
//             {text: '项目与项目描述文件', link: '/project_json'},
//             {text: '项目运行模式', link: '/project_types'},
//             {text: '装载和运行项目', link: '/project_load'},
            // {text: '常见问题与解答', link: '/faq'},
            // { text: '高级定制与扩展', link: '/404' },
          ],
        },
        {
          text: 'JS 扩展与 API',
            collapsed: false,
            items: [
              {text: '扩展对象概述', link: '/jsapi'},
              {
                text: 'API',
                items: [
                  {text: '剪贴板　　　clipboard', link: '/jsapi_clipboard'},
                  {text: '基础功能　　core', link: '/jsapi_core'},
                  {text: '环境变量　　env', link: '/jsapi_env'},
//                   {text: '文件系统　　fsys', link: '/jsapi_fsys'},
                  {text: '内存数据库　memdb', link: '/jsapi_memdb'},
                  {text: '进程管理　　process', link: '/jsapi_process'},
//                   {text: '应用项目　　project', link: '/jsapi_project'},
                ]
              },
            ],
        },
      ],

//       socialLinks: [
//         {icon: 'github', link: 'https://github.com/Chanix/pyChariot'}
//       ]
    }
})
