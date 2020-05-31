import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import './lighting.css'

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <ul class="mr-4">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} class="show-box relative overflow-hidden my-0 mx-auto mb-3">
                        <li>
                            <Link to={node.fields.slug}>
                                <div class="show-image">
                                    <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                                </div>
                                <div class="h-full w-full absolute top-0 opacity-0 hover:opacity-75 duration-300 bg-white">
                                    <h1 class="show-title">{node.frontmatter.title}</h1>
                                </div>
                            </Link>
                        </li>
                    </div>
                ))}
                </ul>
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
