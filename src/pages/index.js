import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
    return (
        <>
            <SEO title="Home" />
            <div className="flex flex-col justify-center items-center min-h-screen mb-4 lg:mb-0">
                <div className="mx-6 lg:mx-0 lg:pl-4 self-start">
                    <h1 className="text-[500%]">
                        <span className="font-light">Hi.</span> I&apos;m{" "}
                        {data.site.siteMetadata.portfolioName}.
                    </h1>
                    <h2 className="text-[200%] font-light text-grey-500">
                        I&apos;m a{" "}
                        <Link
                            className="text-purple-600 hover:text-purple-800"
                            to="/projects/"
                        >
                            maker{" "}
                        </Link>
                        and a{" "}
                        <Link
                            className="text-purple-600 hover:text-purple-800"
                            to="/lighting/"
                        >
                            lighting designer
                        </Link>
                        .
                    </h2>
                </div>

                <div className="w-full px-2">
                    <div className="pt-4 lg:pt-8 grid grid-cols-1 lg:grid-cols-2">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div
                                key={node.id}
                                className="h-[25vh] overflow-hidded m-2"
                            >
                                <Link className="h-full" to={node.fields.slug}>
                                    <div className="h-full object-center">
                                        <GatsbyImage
                                            image={
                                                node.frontmatter.featuredImage
                                                    .childImageSharp
                                                    .gatsbyImageData
                                            }
                                            style={{ height: "100%" }}
                                            imgStyle={{
                                                objectPosition: "center",
                                            }}
                                            alt={node.frontmatter.title}
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="h-full w-full relative bg-white hover:opacity-75 hover-hover:opacity-0 hover-none:bg-opacity-60 duration-300 flex flex-col items-center justify-center top-[-25vh]">
                                        <div className="mb-0 text-center whitespace-normal text-gray-800 text-3xl md:text-4xl font-bold hover-none:opacity-95 w-full">
                                            {node.frontmatter.title}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const query = graphql`
    {
        site {
            siteMetadata {
                portfolioName
            }
        }
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: {
                frontmatter: {
                    featuredImage: { absolutePath: { ne: null } }
                    archive: { ne: true }
                    noFrontPage: { ne: true }
                }
            }
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

IndexPage.propTypes = {
    data: PropTypes.node.isRequired,
}

IndexPage.Layout = Layout
export default IndexPage
