const React = require("react")

exports.wrapPageElement = ({ element, props }) => {
    const Layout = element.type.Layout ?? React.Fragment
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Layout {...props}>{element}</Layout>
}
