/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// eslint-disable-next-line
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import Moment from "moment"

function SEO({ title, description, image, article, lastMod }) {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${getSrc(image) || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        lastMod: Moment(lastMod).format(),
    }

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta httpEquiv="content-language" content="en-us" />

            {seo.url && <link rel="canonical" href={seo.url} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}
            {(article ? true : null) && (
                <meta
                    property="og:author"
                    name="author"
                    content="Reid Sox-Harris"
                />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.lastMod && (
                <meta property="og:lastmod" content={seo.lastMod} />
            )}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

SEO.defaultProps = {
    article: false,
    image: null,
    description: null,
    lastMod: null,
}

SEO.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    article: PropTypes.bool,
    lastMod: PropTypes.string,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`

export default SEO
