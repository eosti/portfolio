import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import './projects.css'

export default ({ data }) => {
    return (
        <Layout>
            <h2>Hey! I haven't actually posted anything here yet. I wanted to get the site out for stage tech portfolios. Check back soon.</h2>
            <SEO title="Projects" />
            <div class="grid grid-cols-2 gap-6 pr-6 mb-6">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} class="project-box">
                        <Link class="no-underline h-full" to={node.fields.slug}>
                            <div class="project-image">
                                <Img class="" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                            </div>
                            <div class="h-full w-full top-0 left-0 relative opacity-0 hover:opacity-75 duration-300 bg-white project-name flex flex-col items-center justify-center">
                                <h1 class="project-title">{node.frontmatter.title}</h1>
                                <h3 class="project-tagline">{node.frontmatter.tagline}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: {regex: "/(projects)/" } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        tagline
                        date(formatString: "YYYY")
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 1800, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
