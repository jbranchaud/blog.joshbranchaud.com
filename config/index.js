module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Code Words', // Navigation and Site Title
  siteTitleAlt: 'Code Words - Josh Branchaud', // Alternative Site title for SEO
  siteTitleManifest: 'Code Words',
  siteUrl: 'https://blog.joshbranchaud.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Learning in public, writing it down', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription:
    'Learning in public, writing it down. A blog written by Josh Branchaud', // Your site description
  author: 'Josh Branchaud', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jbrancha', // Twitter Username - Optional
  // ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  // TODO add some GA
  // googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
};
