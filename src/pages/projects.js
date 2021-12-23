import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./projects.css"

function ProjectsPage({ data }) {
    return (
        <>
            <SEO title="Projects" />
            <div className="text-6xl font-thin pt-12 pb-2 pl-6 text-purple-600">
                Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:pr-6 my-4 md:my-4">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div
                        key={node.id}
                        className="project-box h-full overflow-hidden"
                    >
                        <Link
                            className="no-underline h-full relative"
                            to={node.fields.slug}
                        >
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
                            <div className="relative inset-0 h-full w-full hover-hover:opacity-0 hover:opacity-75 hover-none:bg-opacity-60 duration-300 bg-white project-name flex flex-col items-center justify-center">
                                <h1 className="project-title px-2 text-gray-800 whitespace-normal text-center hover-none:opacity-95 w-full">
                                    {node.frontmatter.title}
                                </h1>
                                <h3 className="project-tagline px-4 text-gray-800 whitespace-normal text-center hover-none:opacity-90 w-full">
                                    {node.frontmatter.tagline}
                                </h3>
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
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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

ProjectsPage.propTypes = {
    data: PropTypes.node.isRequired,
}

ProjectsPage.Layout = Layout
export default ProjectsPage
