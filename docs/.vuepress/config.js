module.exports = {
  title: 'OMG Network',
  description: 'A scaling solution for finance on Ethereum',
  base: '/guide/',
  themeConfig: {
    sidebar: {
      // '/deep-dive/': [
      //   'dex',
      //   'ewallet',
      //   'plasma',
      //   'cash-in-out',
      //   'proof-of-stake',
      //   'roadmap',
      // ],
      '/resources/': [
        'videos',
        'links',
        'glossary',
        'amas',
      ],
      '/': [
        {
          collapsable: false,
          children: [
            'get-started',
            'history',
            'vision',
            'basics',
          ]
        },
        {
          title: 'OMG Network',
          collapsable: false,
          children: [
            'network/',
            'network/adoption',
          ]
        },
        {
          title: 'OMG Community',
          collapsable: false,
          children: [
            'community/omise',
            'community/business-development',
            'community/social-medias',
          ]
        },
      ],
    },
    nav: [
      { text: 'Guide', link: '/get-started' },
      { text: 'Deep Dive', link: '/deep-dive/' },
      {
        text: 'Resources',
        items: [
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Links', link: '/resources/links' },
          { text: 'Glossary', link: '/resources/glossary' },
          { text: 'AMAs', link: '/resources/amas' },
        ]
      },
      { text: 'Contribute', link: '/contribute' },
    ],
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '.vuepress/assets'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
}
