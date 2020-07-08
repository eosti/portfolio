import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import './lighting.css'

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="Lighting Design" />
            <div class="grid grid-cols-1 gap-4 px-4 my-4">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} class="overflow-hidden h-full show-box">
                        <Link class="h-full" to={node.fields.slug}>
                            <div class="h-full object-center">
                                <Img style={{height:'100%'}} imgStyle={{ objectPosition: 'center' }} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                            </div>
                            <div class="h-full w-full left-0 top-0 relative opacity-0 hover:opacity-75 duration-300 bg-white show-name">
                                <h1 class="show-title text-gray-700 whitespace-normal h-full text-center m-auto">{node.frontmatter.title}</h1>
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
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: {regex: "/(lighting)/"  }}
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        featuredImage {
                            childImageSharp {
                                fluid(quality: 100, maxWidth: 1800) {
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
