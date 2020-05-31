import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div class="min-h-screen md:flex">
                <aside class="flex items-center justify-center max-h-screen w-1/6 md:max-w-xs bg-grey-200 text-grey-900">
                    <Sidebar />
                </aside>
                <section class="flex-1 bg-white pt-4 min-h-full relative">
                    <main class="content-body">{children}</main>
                    <div class="footer-pos text-center"><Footer /></div>
                </section>
            </div>

        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
