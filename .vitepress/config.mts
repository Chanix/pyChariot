import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
    ignoreDeadLinks: 'localhostLinks',
    outDir: './docs',
    base: '/pyChariot/',
    title: "pyChariot",
    description: "pyChariot, 跨平台桌面应用开发工具。",
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

      nav: [
        {text: '回首页', link: '/'},
        {text: '更新日志', link: '/changelog'},
        {text: '立即下载', link: 'https://github.com/Chanix/pyChariot/releases'},
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

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },

      sidebar: [
        {
          text: 'pyChariot 简介',
          collapsed: false,
          items: [
            {text: 'pyChariot 是什么', link: '/what-is-pychariot'},
            {text: '快速开始', link: '/getting-started'},
//            {text: '代码调试', link: '/debugging'},
          ],
        },
        {
          text: '开发示例',
          collapsed: false,
          items: [
            {text: '示例：DeepSeek', link: '/examples-deepseek'},
          ],
        },
        {
          text: '开发者指南',
          collapsed: false,
          items: [
            {text: '命令行参数', link: '/args'},
            {text: '文件与目录结构', link: '/dirs-and-files'},
            {
                items: [
                    {text: 'appchips', link: '/dir-appchips'},
                    {text: 'data', link: '/dir-data'},
                    {text: 'temp', link: '/dir-temp'},
                    {text: 'wvdata', link: '/dir-wvdata'},
                ]
            },


//             {text: '热键 / 快捷键', link: '/hotkey'},
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
                items: [
                  {text: '小应用　　　appchip', link: '/jsapi_appchip'},
                  {text: '剪贴板　　　clipboard', link: '/jsapi_clipboard'},
                  {text: '基础功能　　core', link: '/jsapi_core'},
                  {text: '设备信息　　device', link: '/jsapi_device'},
                  {text: '对话框　　　dialog', link: '/jsapi_dialog'},
                  {text: '环境变量　　env', link: '/jsapi_env'},
                  {text: '文件系统　　fsys', link: '/jsapi_fsys'},
                  {text: '全局热键　　hotkey', link: '/jsapi_hotkey'},
                  {text: '主窗口　　　mainwin', link: '/jsapi_mainwin'},
                  {text: '内存数据库　memdb', link: '/jsapi_memdb'},
                  {text: '进程管理　　process', link: '/jsapi_process'},
                  {text: 'python&nbsp;&nbsp;　　python', link: '/jsapi_python'},
                ]
              },
            ],
        },
      ],

      socialLinks: [
        {icon: 'github', link: 'https://Chanix.github.io/'}
      ]
    },

    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },

    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container
    },
});