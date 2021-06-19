import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

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
            <nav class="inline-block fixed align-middle wrap-normal">
                <Link to="/">
                    <img class="logo-image h-auto justify-center pb-2" alt="Logo" src={logo} />
                </Link>
                <ul class="list-none p-0">
                    <li>
                        <Link to="/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/lighting/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                            Lighting Design
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:hello@reidsoxharris.me" class="text-gray-900 hover:text-purple-700 font-light">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
