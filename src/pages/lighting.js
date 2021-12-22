import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo"

import './lighting.css'

const LightingPage = ({ data }) => {
    return (
        <>
            <SEO title="Lighting Design" />
            <div class="text-6xl font-thin pt-12 pb-2 pl-6 text-purple-600">Lighting Design</div>
            <div class="grid grid-cols-1 gap-4 px-4 my-4">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} class="overflow-hidden h-full show-box">
                        <Link className="h-full" to={node.fields.slug}>
                            <div class="h-full object-center">
                                <GatsbyImage
                                    image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                                    style={{height:'100%'}}
                                    imgStyle={{ objectPosition: 'center' }}
                                    alt={node.frontmatter.title} />
                            </div>
                            <div class="h-full w-full left-0 top-0 relative hover:opacity-75 hover-hover:opacity-0 hover-none:bg-opacity-60 duration-300 bg-white show-name">
                                <h1 class="show-title text-gray-800 whitespace-normal h-full text-center text-4xl md:text-5xl font-bold m-auto hover-none:opacity-95 w-full">{node.frontmatter.title}</h1>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export const query = graphql`{
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fileAbsolutePath: {regex: "/(lighting)/"}}
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
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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

LightingPage.Layout = Layout;
export default LightingPage;
