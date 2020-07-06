import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {slide as Menu} from "react-burger-menu"

import "./hamburger.css"
import logo from "../images/reid-logo.png"
import hamburgerIcon from "../images/menu-outline.svg"

export default ({ children }) => {
    return (
        <div class="flex-initial h-16">
            <div class="w-screen h-full">
            <Menu customBurgerIcon={ <img src={hamburgerIcon} /> }>
                <img src={logo} />
                <Link to="/" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700">
                    Home
                </Link>
                <Link to="/about" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700">
                    About
                </Link>
                <Link to="/lighting/"  class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700" partiallyActive={true}>
                    Lighting Design
                </Link>
                <Link to="/projects/" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700" partiallyActive={true}>
                    Projects
                </Link>
                <a href="mailto:hello@reidsoxharris.me" class="text-black hover:text-purple-700">
                    Contact
                </a>
            </Menu>
            <div class="fixed logo-image-menubar">
                <Link to="/">
                    <img class="logo-image-menubar m-auto" src={logo} />
                </Link>
            </div>
            </div>
        </div>


    )
}
