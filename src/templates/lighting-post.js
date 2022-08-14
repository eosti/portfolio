import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./lighting-post.css"

function LightingTemplate({ data }) {
    const post = data.markdownRemark
    const dateYear = Moment(post.frontmatter.date).year()
    return (
        <>
            <SEO
                title={post.frontmatter.title}
                image={post.frontmatter.featuredImage}
                description={`${post.frontmatter.title} by ${post.frontmatter.author}, lighting design by Reid Sox-Harris`}
                article
                lastMod={post.fields.gitAuthorTime}
                publishDate={post.frontmatter.date}
            />
            <div className="mx-4 mt-0 lg:mt-4">
                <div className="show-info m-auto mb-6">
                    <p>
                        <span className="show-name">
                            {post.frontmatter.title}
                        </span>
                        , {dateYear}
                    </p>
                    {post.frontmatter.codesigner && (
                        <p>
                            Lighting Design by Reid Sox-Harris and{" "}
                            {post.frontmatter.codesigner}
                        </p>
                    )}
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
                date
                director
                codesigner
                author
                company
                location
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

LightingTemplate.propTypes = {
    data: PropTypes.node.isRequired,
}

LightingTemplate.Layout = Layout
export default LightingTemplate
