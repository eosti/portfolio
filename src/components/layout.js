import React from "react"
import PropTypes from "prop-types"
import Media from "react-media"

import Footer from "./footer"
import Hamburger from "./hamburger"
import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col lg:flex-row">
                <Media queries={{ desktop: { maxWidth: 1024 } }}>
                    {(matches) =>
                        matches.desktop ? <Hamburger /> : <Sidebar />
                    }
                </Media>
                <section className="flex-1 bg-white min-h-full relative">
                    <main className="pb-12">{children}</main>
                    <div className="bottom-0 absolute w-full h-1 text-center">
                        <Footer />
                    </div>
                </section>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
