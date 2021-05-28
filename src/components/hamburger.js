import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import {slide as Menu} from "react-burger-menu"

import "./hamburger.css"
import logo from "../images/reid-logo.png"
import hamburgerIcon from "../images/menu-outline.svg"

export default ({ children }) => {
    return (
        <div class="flex-initial h-16">
            <div class="w-screen h-full">
            <Menu customBurgerIcon={ <img src={hamburgerIcon} /> }>
                <Link className="mb-6" to="/">
                    <img class="block p-0 m-0" src={logo} />
                </Link>
                <Link to="/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                    Home
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                    About
                </Link>
                <Link to="/lighting/"  className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                    Lighting Design
                </Link>
                <Link to="/projects/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                    Projects
                </Link>
                <a href="mailto:hello@reidsoxharris.me" class="text-gray-900 hover:text-purple-700 font-light">
                    Contact
                </a>
            </Menu>
            <div class="absolute logo-image-menubar">
                <Link to="/">
                    <img class="logo-image-menubar p-0 m-0 block" src={logo} />
                </Link>
            </div>
            </div>
        </div>
    )
}
