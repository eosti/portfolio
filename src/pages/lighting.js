import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

function LightingPage({ data }) {
    return (
        <>
            <SEO title="Lighting Design" />
            <div className="text-6xl font-thin pt-4 lg:pt-12 pb-2 pl-6 text-purple-600">
                Lighting Design
            </div>
            <div className="grid grid-cols-1 gap-4 px-4 my-4">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="overflow-hidden h-[35vh]">
                        <Link className="h-full" to={node.fields.slug}>
                            <div className="h-full object-center">
                                <GatsbyImage
                                    image={
                                        node.frontmatter.featuredImage
                                            .childImageSharp.gatsbyImageData
                                    }
                                    style={{ height: "100%" }}
                                    imgStyle={{ objectPosition: "center" }}
                                    alt={node.frontmatter.title}
                                    placeholder="blurred"
                                />
                            </div>
                            <div className="h-full w-full left-0 relative hover:opacity-75 hover-hover:opacity-0 hover-none:bg-opacity-60 duration-300 bg-white top-[-35vh]">
                                <h1 className="!leading-[35vh] text-gray-800 whitespace-normal h-full text-center text-4xl lg:text-5xl font-bold m-auto hover-none:opacity-95 w-full">
                                    {node.frontmatter.title}
                                </h1>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export const query = graphql`
    {
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: {
                fileAbsolutePath: { regex: "/(lighting)/" }
                frontmatter: { archive: { ne: true } }
            }
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
                                gatsbyImageData(
                                    quality: 100
                                    layout: FULL_WIDTH
                                )
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

LightingPage.propTypes = {
    data: PropTypes.node.isRequired,
}

LightingPage.Layout = Layout
export default LightingPage
