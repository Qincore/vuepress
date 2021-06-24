module.exports = {
  theme: 'antdocs',
  title: 'ZEIR',
  description: '前端笔记',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/styles/prism-dark.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    ['@vuepress/last-updated'],
    ['demo-block', {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'http://xxx', // 在线示例中的vue依赖
        // react: 'http://xxx', // 在线示例中的react依赖
        // reactDOM: 'http://xxx', // 在线示例中的reactDOM依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        items: [
          {text: '第一阶段', link: '/study/whyweb' },
          {text: '第二阶段', link: '/study/WhatIsJavaScript'},
          {text: '第三阶段', link: '/study/mysql' },
        ]
      },
      {
        text: '试题打卡',
        items: [
          {text: '课上试题', link: '/interview/interviewclassvue'},
          {text: '每日打卡', link: '/interview/interviewday1'},
        ]
      },
    ],
    sidebar: {
      '/study/': [
        {
          title: '第一阶段',
          sidebarDepth: 1,
          children: [
            { title: '开篇', path: '/study/whyweb' },
            { title: 'HTML', path: '/study/htmlbj' },
            { title: 'CSS', path: '/study/cssbj' }
          ]
        },
        {
          title: '第二阶段',
          sidebarDepth: 1,
          children: [
            {
              title: 'JavaScript',
              children: [
                { title: '什么是JavaScript', path: '/study/WhatIsJavaScript' },
                { title: '如何使用JavaScript', path: '/study/Howtousejavascript' },
                { title: '语法基础', path: '/study/Basicgrammar' },
              ]
            },
          ]
        },
        {
          title: '第三阶段',
          sidebarDepth: 1,
          children: [
            {
              title: '数据库',
              children: [
                { title: '数据库', path: '/study/mysql' },
                { title: 'MySQL常用命令', path: '/study/mysql1' },
                { title: '基础查询', path: '/study/mysql2' },
                { title: '条件查询', path: '/study/mysql3' },
              ]
            },
            {
              title: 'Node.js',
              children: [
              ]
            },
            {
              title: 'JavaScript高级',
              children: [
              ]
            },
            {
              title: 'ECMAScript 6',
              children: [
              ]
            },
            {
              title: 'Vue.js',
              children: [
                { title: 'Vue.js 是什么', path: '/study/whatisvuejs' },
              ]
            }
          ]
        }
      ],

      '/interview/': [
        {
          title: '课上试题',
          sidebarDepth: 1,
          children: [
            { title: 'VUE 试题', path: '/interview/interviewclassvue' },
          ]
        },
        {
          title: '每日打卡',
          sidebarDepth: 1,
          children: [
            { title: '面试题 DAY1', path: '/interview/interviewday1' },
          ]
        },
      ]
    },
    backToTop: true,
  },
  
}