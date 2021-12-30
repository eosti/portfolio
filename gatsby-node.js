const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { execSync } = require(`child_process`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }

    // Gets last modified via git, from https://pragmaticpineapple.com/add-updated-at-to-your-gatsby-blog/
    if (node.internal.type === "MarkdownRemark") {
        const gitAuthorTime = execSync(
            `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
        ).toString()
        actions.createNodeField({
            node,
            name: "gitAuthorTime",
            value: gitAuthorTime,
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type MarkdownRemarkFrontmatter implements Node {
        title: String!
        tagline: String
        buildguide: String
    }
  `
    createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const lightingResult = await graphql(`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(lighting)/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const projectsResult = await graphql(`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(projects)/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    lightingResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/lighting-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
    projectsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
}
