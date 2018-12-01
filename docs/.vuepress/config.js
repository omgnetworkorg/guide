module.exports = {
  title: 'OMG Network',
  description: 'A scaling solution for finance on Ethereum',
  base: '/guide/',
  themeConfig: {
    sidebar: {

      
      '/guide/': [
        {
          collapsable: false,
          children: [
            '',
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
            'network/benefits',
          ]
        },
        {
          title: 'OMG Community',
          collapsable: false,
          children: [
            'omise',
            'business-development',
            'community',
          ]
        },
      ],
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
        'faq',
        'ama',
      ],
      '/contribute/': [
        '',
        'code-of-conduct',
        'contributors',
      ],
      '/': false,
      
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Deep Dive', link: '/deep-dive/' },
      {
        text: 'Resources',
        items: [
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Links', link: '/resources/links' },
          { text: 'Glossary', link: '/resources/glossary' },
          { text: 'FAQ', link: '/resources/faq' },
          { text: 'AMAs', link: '/resources/ama' },
        ]
      },
      { text: 'Contribute', link: '/contribute/' },
    ],
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'assets'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
}
