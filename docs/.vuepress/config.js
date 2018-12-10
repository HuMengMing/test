module.exports = {
    title: '测试标题', // 设置网站标题
    description: '测试描述', //描述
    dest: './dist', // 设置输出目录
    port: 9090, //端口
    themeConfig: { //主题配置
        // 添加导航栏
        nav: [{
                text: '测试主页',
                link: '/'
            }, // 导航条
            {
                text: '测试文档',
                link: '/testTemp/'
            }
            // {
            //     text: 'github', // 这里是下拉列表展现形式。
            //     items: [{
            //             text: 'focus-outside',
            //             link: 'https://github.com/TaoXuSheng/focus-outside'
            //         },
            //         {
            //             text: 'stylus-converter',
            //             link: 'https://github.com/TaoXuSheng/stylus-converter'
            //         },
            //     ]
            // }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/testTemp/': [
                {
                    title: '测试组件',
                    collapsable: true,
                    children: [
                        'base/test'
                    ]
                }
            ]
        }
    }
}