module.exports = {
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Governor', link: '/governor/' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        repo: 'lavrahq/docs',
        repoLabel: 'Contribute!',
        docsRepo: 'lavrahq/docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-146592251-1'
            }
        ]
    ]
}