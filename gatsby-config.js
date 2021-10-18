module.exports = {
  siteMetadata: {
    siteTitle: 'Security Tyro',
    siteDescription: 'A blog for random security topics',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'http://securitytyro.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Bader Al-Athari', // for example - 'Ivan Ganev'
    authorDescription: 'Enthusiastic learner on security topics', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:sec.tyro@gmail.com`,
      },
      {
        icon: `github`,
        url: `https://github.com/SecurityTyro`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'G-820XSM9YS8',
      },
    },
    {
      // resolve: `gatsby-plugin-disqus`,
      // options: {
        // // replace "chronoblog-profile" with your own disqus shortname
        // shortname: `chronoblog-profile`,
      // },
    },
  ],
};
