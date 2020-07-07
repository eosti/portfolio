import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import "./project-post.css"

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div class="text-center mt-0 md:mt-16">
                <h1 class="project-title font-bold mb-1">{post.frontmatter.title}</h1>
                <h3 class="mb-2 project-tagline">{post.frontmatter.tagline}</h3>
                <div class="flex flex-row items-center justify-center mb-12">

                    { post.frontmatter.github &&
                        <div class="pr-6"><a class="text-gray-900" target="_blank" rel="noopener noreferrer" href={post.frontmatter.github}><i class="fab fa-github"></i> Github Repo</a></div>
                    }

                    { post.frontmatter.buildguide &&
                        <div><Link class="text-gray-900" to={post.frontmatter.buildguide}><i class="fas fa-hammer"></i> Build Guide</Link></div>
                    }

                </div>
            </div>

            <div class="mb-8">
                <div class="text-center flex flex-col justify-center content-center m-auto px-4 max-w-lg lg:max-w-screen-md project-post-contents" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug} }) {
            html
            frontmatter {
                title
                date(formatString: "YYYY")
                tagline
                github
                buildguide
            }
        }
    }
`
