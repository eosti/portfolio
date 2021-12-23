import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./lighting-post.css"

function LightingTemplate({ data }) {
    const post = data.markdownRemark
    return (
        <>
            <SEO
                title={post.frontmatter.title}
                image={post.frontmatter.featuredImage}
                description={`${post.frontmatter.title} by ${post.frontmatter.author}, lighting design by Reid Sox-Harris`}
                article
            />
            <div className="mx-4 mt-0 md:mt-4">
                <div className="show-info m-auto mb-6">
                    <p>
                        <span className="show-name">
                            {post.frontmatter.title}
                        </span>
                        , {post.frontmatter.date}
                    </p>
                    <p>By {post.frontmatter.author}</p>
                    <p>Directed by {post.frontmatter.director}</p>
                    <p>
                        {post.frontmatter.company}, {post.frontmatter.location}
                    </p>
                </div>
                <div className="lighting-post-contents">
                    {/* eslint-disable-next-line react/no-danger */}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
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
                date(formatString: "YYYY")
                director
                author
                company
                location
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`

LightingTemplate.propTypes = {
    data: PropTypes.node.isRequired,
}

LightingTemplate.Layout = Layout
export default LightingTemplate
