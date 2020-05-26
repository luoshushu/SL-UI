module.exports = {
  base:'/SL-UI/',
  title: 'SL-UI',
  description: '苏宋霖的个人造UI组件',
  themeConfig: {
    nav:[
      {text:'主页',link:'/'}
    ],
    sidebar: [
      {
        title:'入门',
        children:[
          // 'install',
          // 'get-started',
        ]
      },
      {
        title:'组件',
        children:['/components/Button.md']
      },

      // '/',
      // '/install/',
      // '/get-started/',
      // '/components/'
    ]
  }
}