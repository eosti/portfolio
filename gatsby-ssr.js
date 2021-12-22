import React from "react"

function wrapPageElement({ element, props }) {
    const Layout = element.type.Layout ?? React.Fragment
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement
