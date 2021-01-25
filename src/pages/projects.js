import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import './projects.css'

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="Projects" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:pr-6 my-4 md:my-6">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} class="project-box h-full overflow-hidden">
                        <Link class="no-underline h-full relative" to={node.fields.slug}>
                            <div class="h-full object-center">
                                <Img style={{ height: '100%' }} imgStyle={{ objectPosition: 'center' }} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                            </div>
                            <div class="relative inset-0 h-full w-full hover-hover:opacity-0 hover:opacity-75 hover-none:bg-opacity-60 duration-300 bg-white project-name flex flex-col items-center justify-center">
                                <h1 class="project-title px-2 text-gray-800 whitespace-normal text-center hover-none:opacity-95 w-full">{node.frontmatter.title}</h1>
                                <h3 class="project-tagline px-4 text-gray-800 whitespace-normal text-center hover-none:opacity-90 w-full">{node.frontmatter.tagline}</h3>
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
