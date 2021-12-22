import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

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
        <aside class="flex items-center justify-center max-h-screen w-1/6">
            <nav class="flex flex-col justify-center items-start wrap-normal w-max">
                <Link to="/" className="flex-auto w-max mb-8 mt-4">
                    <StaticImage className="w-28" placeholder="tracedSVG" loading="eager" alt="Logo" src="../images/reid-logo.png" />
                </Link>
                <ul class="flex-auto list-none p-0 m-0 w-max">
                    <li>
                        <Link to="/" className="text-lg text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/" className="text-lg text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/lighting/" className="text-lg text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                            Lighting Design
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/" className="text-lg text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:hello@reidsoxharris.me" class="text-lg text-gray-900 hover:text-purple-700 font-light">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
