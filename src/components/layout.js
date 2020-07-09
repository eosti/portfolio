import React from "react"
import PropTypes from "prop-types"
import Media from "react-media"

import Footer from "./footer"
import Hamburger from "./hamburger"
import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div class="min-h-screen flex flex-col md:flex-row">
                <Media queries={{ desktop: { maxWidth: 768 } }}>
                    {matches =>
                            matches.desktop ? (
                                <Hamburger />
                            ) : (
                                <Sidebar />
                            )   
                    }
                </Media>
                <section class="flex-1 bg-white min-h-full relative">
                    <main class="pb-12">{children}</main>
                    <div class="bottom-0 absolute w-full h-1 text-center"><Footer /></div>
                </section>
            </div>

        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
