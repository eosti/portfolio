import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./sidebar.css"
import logo from "../images/reid-logo.png"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
    `
    )

    return (
        <aside class="flex items-center justify-center max-h-screen w-1/6 max-w-xs">
            <nav class="inline-block fixed align-middle">
                <Link to="/">
                    <img class="logo-image" src={logo} />
                </Link>
                <ul class="list-none p-0">
                    <li>
                        <Link to="/" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/lighting/"  class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700" partiallyActive={true}>
                            Lighting Design
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/" class="text-black hover:text-purple-700" activeClassName="font-semibold text-gray-800 hover:text-purple-700" partiallyActive={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:hello@reidsoxharris.me" class="text-black hover:text-purple-700">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
