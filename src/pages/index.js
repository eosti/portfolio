import React from "react" 
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <div class="flex flex-col justify-center items-center min-h-screen">

                <div>
                    <div class="intro">
                        <h1><span class="font-light">Hi.</span> I'm {data.site.siteMetadata.portfolioName}.</h1>
                    </div>

                    <div class="intro-subtext text-grey-500">
                        <h2>I'm a <Link class="text-purple-600 hover:text-purple-800" to="/lighting/">lighting designer</Link> and a <Link class="text-purple-600 hover:text-purple-800" to="/projects">maker</Link>.</h2>
                    </div>
                </div>

                <div class="w-full mr-20 ml-20">
                    <div class="recent-list grid grid-cols-2">
                        {data.allMarkdownRemark.edges.map(({ node }) => 
                        <div key={node.id} class="recent-box">
                            <Link class="h-full" to={node.fields.slug}>
                                <div class="recent-image">
                                    <Img class="" imgStyle={{ objectFit: 'none' }} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                                </div>
                                <div class="h-full w-full relative opacity-0 hover:opacity-75 duration-300 bg-white flex flex-col items-center justify-center recent-name">
                                    <h1 class="recent-title">{node.frontmatter.title}</h1>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                portfolioName
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 4
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MM YYYY")
                        tagline
                        featuredImage {
                            childImageSharp {
                                fluid(quality: 100) {
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

