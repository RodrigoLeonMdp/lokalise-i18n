const { languages, defaultLanguage } = require("./languages");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lokalise-i18n`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl: `https://example.com`,
        i18nextOptions: {
          debug: true,
          fallbackLng: "en",
          supportedLngs: ["en"],
          defaultNS: "common",
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
  ],
};
