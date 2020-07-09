import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import "./lighting-post.css"

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div class="mx-4 mt-0 md:mt-4">
                <div class="show-info m-0 mb-6">
                    <p><span class="show-name">{post.frontmatter.title}</span>, {post.frontmatter.date}</p>
                    <p>By {post.frontmatter.author}</p>
                    <p>Directed by {post.frontmatter.director}</p>
                    <p>{post.frontmatter.company}, {post.frontmatter.location}</p>
                </div>
                <div class="lighting-post-contents">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
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
                      fluid(quality: 100) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  }
`
