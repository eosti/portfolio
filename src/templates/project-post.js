import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./project-post.css"

function ProjectTemplate({ data }) {
    const post = data.markdownRemark
    return (
        <>
            <SEO
                title={post.frontmatter.title}
                image={post.frontmatter.featuredImage}
                description={`${post.frontmatter.tagline} | ${post.frontmatter.secondaryDesc}`}
                article
                lastMod={post.fields.gitAuthorTime}
                publishDate={post.frontmatter.date}
            />
            <div className="text-center mt-0 md:mt-16">
                <h1 className="project-title font-bold mb-1">
                    {post.frontmatter.title}
                </h1>
                <h3 className="mb-2 project-tagline">
                    {post.frontmatter.tagline}
                </h3>
                <div className="flex flex-row items-center justify-center mb-12">
                    {post.frontmatter.github && (
                        <div className="mr-6">
                            <a
                                className="text-gray-900"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={post.frontmatter.github}
                            >
                                <i className="fab fa-github" /> Github Repo
                            </a>
                        </div>
                    )}

                    {post.frontmatter.buildguide && (
                        <div className="">
                            <Link
                                class="text-gray-900"
                                to={post.frontmatter.buildguide}
                            >
                                <i className="fas fa-hammer" /> Build Guide
                            </Link>
                        </div>
                    )}

                    {post.frontmatter.projectsite && (
                        <div className="">
                            <a
                                className="text-gray-900"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={post.frontmatter.projectsite}
                            >
                                <i className="fas fa-link" />{" "}
                                {post.frontmatter.projectsitetype}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-8">
                <div
                    className="text-left flex flex-col justify-center content-center m-auto px-4 max-w-lg lg:max-w-screen-md project-post-contents"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </>
    )
}

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tagline
                secondaryDesc
                github
                buildguide
                projectsite
                projectsitetype
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
            }
            fields {
                gitAuthorTime
            }
        }
    }
`

ProjectTemplate.propTypes = {
    data: PropTypes.node.isRequired,
}

ProjectTemplate.Layout = Layout
export default ProjectTemplate
