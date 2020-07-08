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
            <div class="flex flex-col justify-center items-center min-h-screen mb-4 md:mb-0">
                <div class="mx-6 md:mx-0 md:pl-4 self-start">
                    <div class="intro">
                        <h1><span class="font-light">Hi.</span> I'm {data.site.siteMetadata.portfolioName}.</h1>
                    </div>
                    <div class="intro-subtext text-grey-500">
                        <h2>I'm a <Link class="text-purple-600 hover:text-purple-800" to="/lighting/">lighting designer </Link>
                            and a <Link class="text-purple-600 hover:text-purple-800" to="/projects">maker</Link>.</h2>
                    </div>
                </div>

                <div class="w-full px-2">
                    <div class="pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2">
                        {data.allMarkdownRemark.edges.map(({ node }) => 
                        <div key={node.id} class="recent-box overflow-hidded h-full m-2">
                            <Link class="h-full" to={node.fields.slug}>
                                <div class="h-full object-center">
                                    <Img style={{ height:'100%' }} imgStyle={{ objectPosition: 'center' }} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                                </div>
                                <div class="h-full w-full relative opacity-0 hover:opacity-75 duration-300 bg-white flex flex-col items-center justify-center recent-name">
                                    <h1 class="recent-title mb-0 text-center whitespace-normal text-gray-800">{node.frontmatter.title}</h1>
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

