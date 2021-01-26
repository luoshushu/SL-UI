const path = require('path')
module.exports = {
  base: '/SL-UI/',
  title: 'SL-UI',
  description: '苏宋霖的个人造UI组件',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' }
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          // 'install',
          // 'get-started',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/Button.md',
          '/components/Input.md',
          '/components/Row-col.md',
          '/components/Toast.md',
          '/components/Collapse.md',
          '/components/Popover.md',
          '/components/Tabs.md',
        ]
      },

      // '/',
      // '/install/',
      // '/get-started/',
      // '/components/'
    ],
  },
  // 引入css 否则报错
  scss: {
    includePaths: [path.join(__dirname, '../../styles')]
  }
}