module.exports = {
    siteMetadata: {
        title: `Reid Sox-Harris`,
        portfolioName: "Reid Sox-Harris",
        titleTemplate: "%s | Reid Sox-Harris",
        description: `Hi! I'm Reid Sox-Harris. I'm a lighting designer and a maker.`,
        url: "https://reidsoxharris.me",
        image: "/src/images/reid-logo.png",
        twitterUsername: "@ReidSox",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require('postcss-import'), require("tailwindcss"), require("autoprefixer")],
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `purple`,
                showSpinner: false,
            },
        },
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-image`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `reid-portfolio`,
                short_name: `reid`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1800,
                            quality: 80,
                            linkImagesToOriginal: false,
                            wrapperStyle: 'margin-bottom:5px;',
                            showCaptions: true,
                        },
                    },
                    {
                        resolve:`gatsby-remark-external-links`,
                        options: {
                            target: "_blank",
                            rel: "noopener noreferrer",
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options:{
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        }
                    }
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
