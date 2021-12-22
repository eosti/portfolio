import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import {slide as Menu} from "react-burger-menu"

import "./hamburger.css"

export default ({ children }) => {
    return (
        <div class="flex-initial h-16">
            <div class="w-screen h-full">
                <Menu customBurgerIcon={ <StaticImage src="../images/menu-outline.svg" alt="Hamburger dropdown" /> } className>
                    <Link className="mb-6" to="/">
                        <StaticImage src="../images/reid-logo.png" alt="Logo" loading="eager" className="block p-0 m-0" />
                    </Link>
                    <Link to="/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                    Home
                    </Link>
                    <Link to="/about/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                    About
                    </Link>
                    <Link to="/lighting/"  className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                    Lighting Design
                    </Link>
                    <Link to="/projects/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                    Projects
                    </Link>
                    <a href="mailto:hello@reidsoxharris.me" className="text-gray-900 hover:text-purple-700 font-light">
                    Contact
                    </a>
                </Menu>
                <div class="absolute top-4 right-4 w-8 h-auto">
                    <Link to="/">
                        <StaticImage className="block p-0 m-0" imgClassName="max-h-24 w-auto" src="../images/reid-logo.png" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
