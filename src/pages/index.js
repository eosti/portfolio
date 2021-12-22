import React from "react" 
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = ({ data }) => {
    return (
        <>
            <SEO title="Home" />
            <div class="flex flex-col justify-center items-center min-h-screen mb-4 md:mb-0">
                <div class="mx-6 md:mx-0 md:pl-4 self-start">
                    <div class="intro">
                        <h1><span class="font-light">Hi.</span> I'm {data.site.siteMetadata.portfolioName}.</h1>
                    </div>
                    <div class="intro-subtext text-grey-500">
                        <h2>I'm a <Link className="text-purple-600 hover:text-purple-800" to="/projects/">maker </Link>
                            and a <Link className="text-purple-600 hover:text-purple-800" to="/lighting/">lighting designer</Link>.</h2>
                    </div>
                </div>

                <div class="w-full px-2">
                    <div class="pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2">
                        {data.allMarkdownRemark.edges.map(({ node }) => 
                        <div key={node.id} class="recent-box overflow-hidded h-full m-2">
                            <Link className="h-full" to={node.fields.slug}>
                                <div class="h-full object-center">
                                    <GatsbyImage
                                        image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                                        style={{ height:'100%' }}
                                        imgStyle={{ objectPosition: 'center' }} 
                                        alt={node.frontmatter.title} />
                                </div>
                                    <div class="h-full w-full relative bg-white hover:opacity-75 hover-hover:opacity-0 hover-none:bg-opacity-60 duration-300 flex flex-col items-center justify-center recent-name">
                                        <div class="mb-0 text-center whitespace-normal text-gray-800 text-3xl md:text-4xl font-bold hover-none:opacity-95 w-full">{node.frontmatter.title}</div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export const query = graphql`{
  site {
    siteMetadata {
      portfolioName
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 4) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MM YYYY")
          tagline
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


IndexPage.Layout = Layout;
export default IndexPage;
