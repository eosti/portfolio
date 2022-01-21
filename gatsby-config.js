module.exports = {
    siteMetadata: {
        title: `Reid Sox-Harris`,
        portfolioName: "Reid Sox-Harris",
        titleTemplate: "%s | Reid Sox-Harris",
        description: `Hi! I'm Reid Sox-Harris. I'm a lighting designer and a maker.`,
        siteUrl: "https://reidsoxharris.me",
        image: "/src/images/reid-logo.png",
        twitterUsername: "@SoxReid",
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
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `purple`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                    site {
                        siteMetadata {
                        siteUrl
                        }
                    }
                    allSitePage {
                        nodes {
                        path
                        }
                    }
                    allMarkdownRemark {
                        nodes {
                        frontmatter {
                            date
                        },
                        fields {
                            slug
                            gitAuthorTime
                        }
                        }
                    }
                    }`,
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allMarkdownRemark: { nodes: allPosts },
                }) => {
                    const pathToDateMap = {}

                    // eslint-disable-next-line
                    allPosts.map((post) => {
                        pathToDateMap[post.fields.slug] = {
                            date: post.frontmatter.date,
                            lastModGit: post.fields.gitAuthorTime,
                        }
                    })

                    const pages = allPages.map((page) => {
                        return { ...page, ...pathToDateMap[page.path] }
                    })

                    return pages
                },
                serialize: ({ path, date, lastModGit }) => {
                    const entry = {
                        url: path,
                        changefreq: "daily",
                        priority: 0.5,
                    }

                    if (date) {
                        entry.priority = 0.7
                        entry.lastmod = lastModGit
                    }

                    return entry
                },
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-image`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                },
            },
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
                            wrapperStyle: "margin-bottom:5px;",
                            showCaptions: true,
                            disableBgImageOnAlpha: true
                        },
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: "_blank",
                            rel: "noopener noreferrer",
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
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
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-html-attributes`,
            options: {
                lang: "en",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
