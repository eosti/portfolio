import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import "./project-post.css"

const ProjectTemplate = ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} image={post.frontmatter.featuredImage} description={post.frontmatter.tagline} article />
            <div class="text-center mt-0 md:mt-16">
                <h1 class="project-title font-bold mb-1">{post.frontmatter.title}</h1>
                <h3 class="mb-2 project-tagline">{post.frontmatter.tagline}</h3>
                <div class="flex flex-row items-center justify-center mb-12">

                    { post.frontmatter.github &&
                        <div class="mr-6"><a class="text-gray-900" target="_blank" rel="noopener noreferrer" href={post.frontmatter.github}><i class="fab fa-github"></i> Github Repo</a></div>
                    }

                    { post.frontmatter.buildguide &&
                        <div class=""><Link class="text-gray-900" to={post.frontmatter.buildguide}><i class="fas fa-hammer"></i> Build Guide</Link></div>
                    }

                    { post.frontmatter.projectsite &&
                        <div class=""><a class="text-gray-900" target="_blank" rel="noopener noreferrer" href={post.frontmatter.projectsite}><i class="fas fa-link"></i> {post.frontmatter.projectsitetype}</a></div>
                    }

                </div>
            </div>

            <div class="mb-8">
                <div class="text-left flex flex-col justify-center content-center m-auto px-4 max-w-lg lg:max-w-screen-md project-post-contents" dangerouslySetInnerHTML={{ __html: post.html }} />
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
                projectsite
                projectsitetype
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`

export default ProjectTemplate;
